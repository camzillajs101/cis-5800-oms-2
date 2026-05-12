// Configuration file for API endpoints and constants

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const CONSTANTS = {
  // Pagination
  ITEMS_PER_PAGE: 20,
  MAX_ITEMS_PER_PAGE: 100,

  // Product
  MIN_PRODUCT_NAME_LENGTH: 3,
  MAX_PRODUCT_NAME_LENGTH: 255,
  MIN_PRODUCT_DESCRIPTION_LENGTH: 10,

  // User
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,

  // Cart
  MAX_QUANTITY_PER_ITEM: 999,
  MAX_ITEMS_IN_CART: 100,

  // Order
  ORDER_STATUSES: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'] as const,
  SHIPMENT_STATUSES: ['pending', 'in_transit', 'delivered'] as const,

  // Shipping
  STANDARD_SHIPPING_DAYS: '5-7',
  EXPRESS_SHIPPING_DAYS: '2-3',
  STANDARD_SHIPPING_COST: 5.0,
  EXPRESS_SHIPPING_COST: 15.0,

  // Authentication
  SESSION_DURATION_HOURS: 24,
  PASSWORD_RESET_TOKEN_DURATION_HOURS: 1,
  EMAIL_VERIFICATION_TOKEN_DURATION_HOURS: 24,
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  SIGNUP: '/api/auth/signup',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  VERIFY_EMAIL: '/api/auth/verify-email',

  // Products
  PRODUCTS: '/api/products',
  PRODUCT_DETAIL: (id: string) => `/api/products/${id}`,
  PRODUCTS_SEARCH: '/api/products/search',
  PRODUCT_CATEGORIES: '/api/products/categories',

  // Cart
  CART: '/api/cart',
  CART_ITEMS: '/api/cart/items',

  // Orders
  ORDERS: '/api/orders',
  ORDER_DETAIL: (id: string) => `/api/orders/${id}`,
  ORDER_CANCEL: (id: string) => `/api/orders/${id}/cancel`,

  // User
  USER_PROFILE: '/api/user/profile',
  USER_ADDRESSES: '/api/user/addresses',
  USER_SETTINGS: '/api/user/settings',

  // Admin
  ADMIN_PRODUCTS: '/api/admin/products',
  ADMIN_ORDERS: '/api/admin/orders',
  ADMIN_INVENTORY: '/api/admin/inventory',
  ADMIN_ANALYTICS: '/api/admin/analytics',
};
