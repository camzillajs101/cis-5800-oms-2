// app/api/auth/logout/route.ts
// POST /api/auth/logout
// Clears the session cookie.

import { NextResponse } from 'next/server';

const COOKIE_NAME = 'oms_session';

export async function POST() {
  const response = NextResponse.json(
    { success: true, data: null, error: null },
    { status: 200 }
  );

  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0, // immediately expire
    path: '/',
  });

  return response;
}