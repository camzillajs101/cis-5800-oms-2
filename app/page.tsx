export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900 dark:text-white">OMS</div>
          <div className="flex gap-4 items-center">
            <a
              href="/auth/login"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="/auth/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Account
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Your One-Stop Online Store
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Discover our curated collection of quality products. Shop with confidence, fast shipping, and exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/products"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg text-center"
            >
              Browse Products
            </a>
            <a
              href="/auth/register"
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-semibold text-lg text-center"
            >
              Sign Up for Exclusive Deals
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-12">
            Check out some of our most popular items
          </p>

          {/* Placeholder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Product Name
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Product description goes here
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">$0.00</span>
                    <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-block px-8 py-3 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              View All Products →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>&copy; 2026 Online Order Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
