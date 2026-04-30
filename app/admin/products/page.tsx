export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <a
          href="/admin/products/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add New Product
        </a>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td colSpan={5} className="px-6 py-4 text-center text-gray-600">
                  No products yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
