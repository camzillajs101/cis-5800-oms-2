import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">OMS Store</div>
            <div className="flex gap-6">
              <Link href="/login" className="hover:text-gray-600">
                Sign In
              </Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
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
