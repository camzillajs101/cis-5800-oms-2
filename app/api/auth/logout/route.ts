import { auth } from '@/lib/auth/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await auth.signOut();
    return NextResponse.json(
      { success: true, data: null, error: null },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
