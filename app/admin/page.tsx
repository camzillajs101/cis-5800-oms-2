'use client';

import { useEffect, useState } from 'react';
import { DashboardMetrics } from '@/lib/types/dashboard';

export default function Dashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('/api/admin/dashboard');
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch dashboard data');
        }

        setMetrics(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-600 dark:text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-600 dark:text-red-400">{error || 'Failed to load dashboard'}</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>

      {/* Revenue Card */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {formatCurrency(metrics.revenue.total)}
          </p>
        </div>

        {/* Order Status Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Orders</p>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
            {metrics.orderStatus.pending}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">In Transit</p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
            {metrics.orderStatus.shipped}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Delivered</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
            {metrics.orderStatus.delivered}
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Top Products</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {metrics.topProducts.map((product, idx) => (
              <div key={product.productId} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{idx + 1}. {product.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {product.unitsSold} units sold
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(product.revenue)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Orders</h2>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {metrics.recentOrders.map((order) => (
              <div key={order.orderId} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{order.orderId}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.customerName}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(order.createdAt)}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(order.totalAmount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}