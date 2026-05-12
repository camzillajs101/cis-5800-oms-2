import { getPool } from "@/lib/db";
import { jsonError, jsonSuccess } from "@/lib/api-response";
import { processCheckout, CheckoutError, StockError } from "@/lib/checkout-service";
import { validateCheckoutRequest } from "@/lib/checkout-validator";

/**
 * Neon `Pool` uses WebSockets — keep checkout on Node, not Edge.
 * @see CLAUDE.md — API routes under app/api/[resource]/route.ts
 */
export const runtime = "nodejs";

/** POST /api/checkout — validates input, transactional order creation, inventory decrement, shipment row. */
export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return jsonError("Invalid JSON body", 400);
    }

    const validation = validateCheckoutRequest(body);
    if (!validation.ok) {
      return jsonError(validation.error, 400);
    }

    const pool = getPool();
    const data = await processCheckout(pool, validation.data);

    return jsonSuccess(data, 201);
  } catch (err) {
    if (err instanceof StockError) {
      return jsonError(err.message, 409);
    }
    if (err instanceof CheckoutError) {
      return jsonError(err.message, 400);
    }
    if (err instanceof Error && err.message === "DATABASE_URL is not set") {
      return jsonError("Server misconfiguration", 500);
    }
    console.error("[checkout]", err);
    return jsonError("Checkout failed unexpectedly", 500);
  }
}
