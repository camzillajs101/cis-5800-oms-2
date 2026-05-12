// lib/types/auth.ts
// Shared types for authentication across the OMS.

export interface Customer {
  customer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

/** Shape stored in the session cookie (no sensitive fields) */
export interface SessionUser {
  customer_id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
}