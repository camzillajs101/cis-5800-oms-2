// Shared types for the OMS application

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  brand?: string;
  basePrice: number;
  createdAt: Date;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size?: string;
  color?: string;
  sku: string;
  quantityAvailable: number;
  updatedAt: Date;
}

export interface Address {
  id: string;
  customerId: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface CartItem {
  variantId: string;
  quantity: number;
  productId: string;
}

export interface Order {
  id: string;
  customerId: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  shippingAddressId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  variantId: string;
  quantityOrdered: number;
  quantityConfirmed: number;
  unitPrice: number;
}

export interface Shipment {
  id: string;
  orderId: string;
  shipmentDate: Date;
  carrier: string;
  trackingNumber: string;
  status: 'pending' | 'in_transit' | 'delivered';
  estimatedDelivery?: Date;
}

export interface Category {
  id: string;
  name: string;
  parentCategoryId?: string;
}
