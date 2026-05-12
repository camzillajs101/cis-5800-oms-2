import { NextRequest, NextResponse } from 'next/server';

interface PasswordResetRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PasswordResetRequest;
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, data: null, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Mock: In production, use SendGrid/Resend to send password reset email
    // For development, log to console
    const resetToken = Buffer.from(`${email}:${Date.now()}`).toString('base64');
    const resetLink = `${process.env.NEON_AUTH_BASE_URL}/password-reset?token=${resetToken}`;

    console.log(`[MOCK EMAIL] Password reset link for ${email}:`);
    console.log(resetLink);

    return NextResponse.json({
      success: true,
      data: { message: 'Password reset email sent' },
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
