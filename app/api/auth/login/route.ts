// Authenticates a customer or admin, sets an httpOnly session cookie.

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { getPool } from '@/lib/db';
import { LoginRequest, SessionUser, Customer } from '@/lib/types/auth';

const COOKIE_NAME = 'oms_session';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

export async function POST(req: NextRequest) {
  try {
    const pool = getPool();

    // ── 1. Parse & validate body ──────────────────────────────────────────
    let body: LoginRequest;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, data: null, error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, data: null, error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, data: null, error: 'Password is required' },
        { status: 400 }
      );
    }

    // ── 2. Look up customer by email ──────────────────────────────────────
    const { rows } = await pool.query<Customer & { password_hash: string }>(
      `SELECT customer_id, first_name, last_name, email, password_hash,
              phone, is_admin, created_at, updated_at
       FROM customers
       WHERE email = $1
       LIMIT 1`,
      [email.toLowerCase().trim()]
    );

    const customer = rows[0];

    const invalidCredentialsResponse = NextResponse.json(
      { success: false, data: null, error: 'Invalid email or password' },
      { status: 401 }
    );

    if (!customer) {
      return invalidCredentialsResponse;
    }

    // ── 3. Compare password ───────────────────────────────────────────────
    const passwordMatch = await bcrypt.compare(password, customer.password_hash);

    if (!passwordMatch) {
      return invalidCredentialsResponse;
    }

    // ── 4. Sign JWT session token ─────────────────────────────────────────
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('Missing environment variable: JWT_SECRET');
    }

    const encodedSecret = new TextEncoder().encode(jwtSecret);

    const sessionUser: SessionUser = {
      customer_id: customer.customer_id,
      email: customer.email,
      first_name: customer.first_name,
      last_name: customer.last_name,
      is_admin: customer.is_admin,
    };

    const token = await new SignJWT({ user: sessionUser })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(encodedSecret);

    // ── 5. Set httpOnly cookie & return ───────────────────────────────────
    const response = NextResponse.json(
      {
        success: true,
        data: { user: sessionUser },
        error: null,
      },
      { status: 200 }
    );

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('[POST /api/auth/login]', err);

    return NextResponse.json(
      { success: false, data: null, error: 'Internal server error' },
      { status: 500 }
    );
  }
}