import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { getPool } from '@/lib/db';
import { RegisterRequest, SessionUser } from '@/lib/types/auth';

const BCRYPT_ROUNDS = 12;

export async function POST(req: NextRequest) {
  try {
    const pool = getPool();

    // ── 1. Parse & validate body ──────────────────────────────────────────
    let body: RegisterRequest;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, data: null, error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { first_name, last_name, email, password, phone } = body;

    if (!first_name || !last_name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: 'first_name, last_name, email, and password are required',
        },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: 'Password must be at least 8 characters',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, data: null, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // ── 2. Check for existing account ─────────────────────────────────────
    const { rows: existing } = await pool.query(
      'SELECT customer_id FROM customers WHERE email = $1 LIMIT 1',
      [normalizedEmail]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: 'An account with this email already exists',
        },
        { status: 409 }
      );
    }

    // ── 3. Hash password & insert ──────────────────────────────────────────
    const password_hash = await bcrypt.hash(password, BCRYPT_ROUNDS);

    const { rows } = await pool.query<{
      customer_id: number;
      first_name: string;
      last_name: string;
      email: string;
      is_admin: boolean;
    }>(
      `INSERT INTO customers (first_name, last_name, email, password_hash, phone, is_admin)
       VALUES ($1, $2, $3, $4, $5, FALSE)
       RETURNING customer_id, first_name, last_name, email, is_admin`,
      [
        first_name.trim(),
        last_name.trim(),
        normalizedEmail,
        password_hash,
        phone?.trim() ?? null,
      ]
    );

    const newCustomer = rows[0];

    const sessionUser: SessionUser = {
      customer_id: newCustomer.customer_id,
      email: newCustomer.email,
      first_name: newCustomer.first_name,
      last_name: newCustomer.last_name,
      is_admin: newCustomer.is_admin,
    };

    return NextResponse.json(
      { success: true, data: { user: sessionUser }, error: null },
      { status: 201 }
    );
  } catch (err) {
    console.error('[POST /api/auth/register]', err);

    return NextResponse.json(
      { success: false, data: null, error: 'Internal server error' },
      { status: 500 }
    );
  }
}