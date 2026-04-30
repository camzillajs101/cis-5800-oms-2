export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Total Orders</p>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Revenue</p>
          <p className="text-3xl font-bold mt-2">$0.00</p>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Pending Orders</p>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500 mt-1">Awaiting confirmation</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 text-sm font-medium">Low Stock Items</p>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500 mt-1">Need attention</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
          <p className="text-gray-600">No recent orders.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Top Products</h2>
          <p className="text-gray-600">No product data available.</p>
        </div>
      </div>
    </div>
  );
}
