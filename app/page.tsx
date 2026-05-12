import Link from 'next/link';
import { auth } from '@/lib/auth/server';

// Server components using auth methods must be rendered dynamically
export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: session } = await auth.getSession();
  const user = session?.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            OMS Store
          </h1>
          <div className="flex gap-4">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Profile
                </Link>
                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <form action="/api/auth/logout" method="POST">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to OMS Store</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing products at great prices. Shop now and enjoy fast
            shipping and excellent customer service.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">$99.99</p>
              <Link
                href="/shop"
                className="text-blue-600 hover:underline font-medium"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Product 2</h3>
              <p className="text-gray-600 mb-4">$149.99</p>
              <Link
                href="/shop"
                className="text-blue-600 hover:underline font-medium"
              >
                View Details
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Product 3</h3>
              <p className="text-gray-600 mb-4">$79.99</p>
              <Link
                href="/shop"
                className="text-blue-600 hover:underline font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start shopping?
          </h2>
          <Link
            href="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Browse All Products
          </Link>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400">
            © 2026 OMS Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
