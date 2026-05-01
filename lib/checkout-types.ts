/** Request body for POST /api/checkout (matches CLAUDE.md entities). */

export type CheckoutAddressInput = {
  street1: string;
  street2?: string | null;
  city: string;
  state: string;
  zipCode: string;
};

export type CheckoutCartItemInput = {
  variantId: number;
  quantity: number;
};

export type CheckoutRequestBody = {
  customerId: number;
  shippingAddress: CheckoutAddressInput;
  billingAddress: CheckoutAddressInput;
  items: CheckoutCartItemInput[];
  /** Total charged to the customer (validated against DB line totals). */
  totalAmount: number;
};

export type CheckoutSuccessData = {
  orderId: number;
  shippingAddressId: number;
  billingAddressId: number;
  shipmentId: number;
  createdAt: string;
};
