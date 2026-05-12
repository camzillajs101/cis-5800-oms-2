import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Products
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Manage your product catalog
        </p>
        <Link
          href="/admin/products"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Products →
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Orders
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          View and manage customer orders
        </p>
        <Link
          href="/admin/orders"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Orders →
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Users
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Manage users and permissions
        </p>
        <Link
          href="/admin/users"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Users →
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Settings
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Configure system settings
        </p>
        <Link
          href="/admin/settings"
          className="text-blue-600 hover:underline font-medium"
        >
          Go to Settings →
        </Link>
      </div>
    </div>
  );
}
