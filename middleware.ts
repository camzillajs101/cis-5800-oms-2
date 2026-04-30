// Middleware for route protection and authentication
import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if user is authenticated (you can implement actual auth checking here)
  const isAuthenticated = request.cookies.get('auth-token')?.value === 'true';
  const isAdmin = request.cookies.get('is-admin')?.value === 'true';

  // Protect customer routes
  if (pathname.startsWith('/(customer)') || pathname.startsWith('/dashboard') || pathname.startsWith('/shop') || pathname.startsWith('/cart') || pathname.startsWith('/checkout') || pathname.startsWith('/orders') || pathname.startsWith('/account')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // Redirect authenticated users away from auth pages
  if ((pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/(auth)')) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
