import { NextRequest, NextResponse } from 'next/server';

interface VerifyEmailRequest {
  token: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as VerifyEmailRequest;
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, data: null, error: 'Token is required' },
        { status: 400 }
      );
    }

    // Mock: In production, verify token against database and update email_verified flag
    // For development, just log and return success
    console.log(`[MOCK] Email verified with token: ${token}`);

    return NextResponse.json({
      success: true,
      data: { message: 'Email verified successfully' },
      error: null,
    });
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
