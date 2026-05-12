import AdminGuard from '@/app/components/admin-guard';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* Admin Header */}
        <header className="bg-white dark:bg-slate-800 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Admin Dashboard
            </h1>
          </div>
        </header>

        {/* Admin Content */}
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-6">
              <Link href="/admin" className="text-2xl font-bold mb-8 block">
                Admin
              </Link>
              <nav className="space-y-4">
                <Link href="/admin" className="block hover:bg-gray-800 p-2 rounded">
                  Dashboard
                </Link>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">
                    Products
                  </p>
                  <Link
                    href="/admin/products"
                    className="block hover:bg-gray-800 p-2 rounded ml-4"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/admin/products/new"
                    className="block hover:bg-gray-800 p-2 rounded ml-4"
                  >
                    Add Product
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">
                    Inventory
                  </p>
                  <Link
                    href="/admin/inventory"
                    className="block hover:bg-gray-800 p-2 rounded ml-4"
                  >
                    Stock Levels
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">
                    Orders
                  </p>
                  <Link
                    href="/admin/orders"
                    className="block hover:bg-gray-800 p-2 rounded ml-4"
                  >
                    All Orders
                  </Link>
                </div>
                <Link
                  href="/admin/analytics"
                  className="block hover:bg-gray-800 p-2 rounded"
                >
                  Analytics
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="bg-white border-b border-gray-200 px-8 py-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              </header>

              {/* Content */}
              <main className="flex-1 p-8 bg-gray-50">
                {children}
              </main>
            </div>
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
