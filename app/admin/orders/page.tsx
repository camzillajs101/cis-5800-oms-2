export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>

      <div className="mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
          <input
            type="search"
            placeholder="Search by order ID or customer name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan={6} className="px-6 py-4 text-center text-gray-600">
                  No orders available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
