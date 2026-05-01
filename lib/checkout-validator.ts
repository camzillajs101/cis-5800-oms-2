import type { CheckoutAddressInput, CheckoutRequestBody } from "./checkout-types";

const TOTAL_TOLERANCE = 0.02;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function normalizeOptionalStreet2(v: unknown): string | null {
  if (v == null) return null;
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length === 0 ? null : t;
}

function parseAddress(
  raw: unknown,
  label: string,
): CheckoutAddressInput | { error: string } {
  if (raw === null || typeof raw !== "object") {
    return { error: `${label} must be an object` };
  }
  const o = raw as Record<string, unknown>;
  if (!isNonEmptyString(o.street1)) {
    return { error: `${label}.street1 is required` };
  }
  if (!isNonEmptyString(o.city)) {
    return { error: `${label}.city is required` };
  }
  if (!isNonEmptyString(o.state)) {
    return { error: `${label}.state is required` };
  }
  if (!isNonEmptyString(o.zipCode) && !isNonEmptyString(o.zip_code)) {
    return { error: `${label}.zipCode is required` };
  }
  const zip = (isNonEmptyString(o.zipCode) ? o.zipCode : o.zip_code) as string;
  if (zip.trim().length > 32) {
    return { error: `${label}.zipCode is too long` };
  }
  return {
    street1: o.street1.trim(),
    street2: normalizeOptionalStreet2(o.street2),
    city: o.city.trim(),
    state: o.state.trim(),
    zipCode: zip.trim(),
  };
}

/** Merge duplicate cart lines by variant (same variant_id → summed quantity). */
export function mergeCartItems(
  items: { variantId: number; quantity: number }[],
): { variantId: number; quantity: number }[] {
  const map = new Map<number, number>();
  for (const line of items) {
    map.set(line.variantId, (map.get(line.variantId) ?? 0) + line.quantity);
  }
  return [...map.entries()].map(([variantId, quantity]) => ({
    variantId,
    quantity,
  }));
}

/**
 * Parses and validates the checkout JSON body.
 * Returns a structured error message for 400 responses.
 */
export function validateCheckoutRequest(
  body: unknown,
): { ok: true; data: CheckoutRequestBody } | { ok: false; error: string } {
  if (body === null || typeof body !== "object") {
    return { ok: false, error: "Request body must be a JSON object" };
  }
  const b = body as Record<string, unknown>;

  const customerRaw = b.customerId ?? b.customer_id;
  const customerId = typeof customerRaw === "number" ? customerRaw : Number(customerRaw);
  if (!Number.isInteger(customerId) || customerId < 1) {
    return { ok: false, error: "customerId must be a positive integer" };
  }

  const ship = parseAddress(b.shippingAddress ?? b.shipping_address, "shippingAddress");
  if ("error" in ship) return { ok: false, error: ship.error };

  const bill = parseAddress(b.billingAddress ?? b.billing_address, "billingAddress");
  if ("error" in bill) return { ok: false, error: bill.error };

  const itemsRaw = b.items;
  if (!Array.isArray(itemsRaw) || itemsRaw.length === 0) {
    return { ok: false, error: "items must be a non-empty array" };
  }

  const parsedItems: { variantId: number; quantity: number }[] = [];
  for (let i = 0; i < itemsRaw.length; i++) {
    const row = itemsRaw[i];
    if (row === null || typeof row !== "object") {
      return { ok: false, error: `items[${i}] must be an object` };
    }
    const r = row as Record<string, unknown>;
    const vidRaw = r.variantId ?? r.variant_id;
    const variantId = typeof vidRaw === "number" ? vidRaw : Number(vidRaw);
    if (!Number.isInteger(variantId) || variantId < 1) {
      return { ok: false, error: `items[${i}].variantId must be a positive integer` };
    }
    const qtyRaw = r.quantity;
    const quantity = typeof qtyRaw === "number" ? qtyRaw : Number(qtyRaw);
    if (!Number.isInteger(quantity) || quantity < 1) {
      return { ok: false, error: `items[${i}].quantity must be a positive integer` };
    }
    parsedItems.push({ variantId, quantity });
  }

  const totalRaw = b.totalAmount ?? b.total_amount;
  const totalAmount = typeof totalRaw === "number" ? totalRaw : Number(totalRaw);
  if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
    return { ok: false, error: "totalAmount must be a positive number" };
  }

  const merged = mergeCartItems(parsedItems);
  if (merged.length === 0) {
    return { ok: false, error: "No valid cart lines after merging" };
  }

  const data: CheckoutRequestBody = {
    customerId,
    shippingAddress: ship,
    billingAddress: bill,
    items: merged,
    totalAmount,
  };

  return { ok: true, data };
}

/** Compare submitted total with server-computed subtotal using DB prices (called after locking rows). */
export function totalsMatch(submittedTotal: number, computedSubtotal: number): boolean {
  return Math.abs(submittedTotal - computedSubtotal) <= TOTAL_TOLERANCE;
}
