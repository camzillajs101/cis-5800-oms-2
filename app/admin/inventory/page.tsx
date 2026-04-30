export default function InventoryPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Inventory Management</h2>

      <div className="mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <input
            type="search"
            placeholder="Search by product name or SKU..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Size/Color
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  In Stock
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
                  No inventory data available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
