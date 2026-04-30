export default function AnalyticsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics & Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
          <p className="text-3xl font-bold mt-2">$0.00</p>
          <p className="text-xs text-gray-500 mt-1">All time</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Total Orders</p>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500 mt-1">All time</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Avg Order Value</p>
          <p className="text-3xl font-bold mt-2">$0.00</p>
          <p className="text-xs text-gray-500 mt-1">All time</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Customers</p>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500 mt-1">Total</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow flex gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">From Date</label>
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">To Date</label>
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="flex items-end gap-2">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Filters
            </button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Export Report
            </button>
          </div>
        </div>

        {/* Charts Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Revenue Over Time</h3>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Top Products</h3>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder</p>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">Order Volume</h3>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
