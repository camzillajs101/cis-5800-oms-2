import type { Pool } from "@neondatabase/serverless";
import type { CheckoutRequestBody, CheckoutSuccessData } from "./checkout-types";
import { totalsMatch } from "./checkout-validator";

type VariantLockRow = {
  variant_id: number;
  quantity_available: number;
  base_price: string;
};

/**
 * Runs checkout inside a single DB transaction:
 * validate customer → addresses → lock variants → stock + total → order + lines → inventory → shipment.
 *
 * Throws on logical errors (`StockError`, `CheckoutError`) so the route handler can translate to HTTP.
 */
export class CheckoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CheckoutError";
  }
}

export class StockError extends Error {
  constructor(
    message: string,
    public variantId: number,
  ) {
    super(message);
    this.name = "StockError";
  }
}

export async function processCheckout(
  pool: Pool,
  payload: CheckoutRequestBody,
): Promise<CheckoutSuccessData> {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1) Customer must exist (orders.customer_id FK).
    const cust = await client.query<{ ok: number }>(
      `SELECT 1 AS ok FROM customers WHERE customer_id = $1`,
      [payload.customerId],
    );
    if (cust.rows.length === 0) {
      throw new CheckoutError("Customer not found");
    }

    // 2) Persist shipping / billing addresses (new row per checkout, per schema).
    const shipIns = await client.query<{ address_id: number }>(
      `INSERT INTO addresses (customer_id, street1, street2, city, state, zip_code)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING address_id`,
      [
        payload.customerId,
        payload.shippingAddress.street1,
        payload.shippingAddress.street2,
        payload.shippingAddress.city,
        payload.shippingAddress.state,
        payload.shippingAddress.zipCode,
      ],
    );
    const billIns = await client.query<{ address_id: number }>(
      `INSERT INTO addresses (customer_id, street1, street2, city, state, zip_code)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING address_id`,
      [
        payload.customerId,
        payload.billingAddress.street1,
        payload.billingAddress.street2,
        payload.billingAddress.city,
        payload.billingAddress.state,
        payload.billingAddress.zipCode,
      ],
    );

    const shippingAddressId = shipIns.rows[0].address_id;
    const billingAddressId = billIns.rows[0].address_id;

    const variantIds = payload.items.map((i) => i.variantId);

    // 3) Lock variant rows FOR UPDATE so stock cannot dip below zero concurrently.
    const locked = await client.query<VariantLockRow>(
      `SELECT pv.variant_id,
              pv.quantity_available,
              p.base_price::text AS base_price
       FROM product_variants pv
       INNER JOIN products p ON p.product_id = pv.product_id
       WHERE pv.variant_id = ANY($1::int[])
       FOR UPDATE OF pv`,
      [variantIds],
    );

    if (locked.rows.length !== payload.items.length) {
      throw new CheckoutError("One or more variants were not found");
    }

    const byVariant = new Map<number, VariantLockRow>();
    for (const row of locked.rows) {
      byVariant.set(Number(row.variant_id), row);
    }

    let computedSubtotal = 0;
    for (const line of payload.items) {
      const row = byVariant.get(line.variantId);
      if (!row) {
        throw new CheckoutError("One or more variants were not found");
      }
      const available = Number(row.quantity_available);
      if (available < line.quantity) {
        throw new StockError(
          `Insufficient stock for variant ${line.variantId}. Requested ${line.quantity}, available ${available}.`,
          line.variantId,
        );
      }
      const unit = parseFloat(row.base_price);
      if (!Number.isFinite(unit) || unit < 0) {
        throw new CheckoutError("Invalid product price in catalog");
      }
      computedSubtotal += unit * line.quantity;
    }

    // 4) Total check (prevent tampered client totals — uses authoritative DB prices).
    if (!totalsMatch(payload.totalAmount, computedSubtotal)) {
      throw new CheckoutError(
        `Submitted total ${payload.totalAmount.toFixed(2)} does not match computed subtotal ${computedSubtotal.toFixed(2)}`,
      );
    }

    // 5) Insert order row (starts as pending fulfillment).
    const orderIns = await client.query<{ order_id: number; created_at: Date }>(
      `INSERT INTO orders (
        customer_id, status, total_amount, shipping_address_id, billing_address_id
      )
      VALUES ($1, 'pending', $2, $3, $4)
      RETURNING order_id, created_at`,
      [payload.customerId, payload.totalAmount, shippingAddressId, billingAddressId],
    );

    const orderId = orderIns.rows[0].order_id;
    const createdAt = orderIns.rows[0].created_at;

    // 6) Order lines: snapshot catalog price into unit_price; quantity_confirmed matches ordered at checkout.
    for (const line of payload.items) {
      const row = byVariant.get(line.variantId)!;
      await client.query(
        `INSERT INTO order_items (
          order_id, variant_id, quantity_ordered, quantity_confirmed, unit_price
        )
        VALUES ($1, $2, $3, $3, $4::decimal)`,
        [orderId, line.variantId, line.quantity, row.base_price],
      );
    }

    // 7) Decrement inventory — never below zero (`WHERE quantity_available >= $qty`).
    for (const line of payload.items) {
      const dec = await client.query(
        `UPDATE product_variants
         SET quantity_available = quantity_available - $1,
             updated_at = NOW()
         WHERE variant_id = $2
           AND quantity_available >= $1`,
        [line.quantity, line.variantId],
      );
      if (dec.rowCount !== 1) {
        throw new StockError(
          `Could not decrement inventory for variant ${line.variantId} (possibly concurrent sale).`,
          line.variantId,
        );
      }
    }

    // 8) Shipment stub (fulfillment fills carrier / tracking later).
    const shipmentIns = await client.query<{ shipment_id: number }>(
      `INSERT INTO shipments (order_id, status)
       VALUES ($1, 'pending')
       RETURNING shipment_id`,
      [orderId],
    );

    await client.query("COMMIT");

    return {
      orderId,
      shippingAddressId,
      billingAddressId,
      shipmentId: shipmentIns.rows[0].shipment_id,
      createdAt: typeof createdAt === "string" ? createdAt : createdAt.toISOString(),
    };
  } catch (err) {
    await client.query("ROLLBACK").catch(() => {
      /* ignore rollback errors nested under original failure */
    });
    throw err;
  } finally {
    client.release();
  }
}
