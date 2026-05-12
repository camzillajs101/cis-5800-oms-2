import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shop',
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              OMS Store
            </Link>
            <div className="flex gap-6">
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
              <Link href="/cart" className="hover:text-gray-600">
                Cart
              </Link>
              <Link href="/orders" className="hover:text-gray-600">
                Orders
              </Link>
              <Link href="/dashboard" className="hover:text-gray-600">
                Dashboard
              </Link>
              <Link href="/account/profile" className="hover:text-gray-600">
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm">
            © 2026 OMS Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
