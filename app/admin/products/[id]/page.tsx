export default function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

      <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="Enter product description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select category</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <input
                type="text"
                placeholder="Enter brand"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Base Price</label>
            <input
              type="number"
              placeholder="0.00"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Product Images
            </label>
            <input
              type="file"
              multiple
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Product Variants</h3>
            <p className="text-sm text-gray-600 mb-4">
              Manage product variants (sizes, colors, etc.)
            </p>
            <button
              type="button"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Add Variant
            </button>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
            <a
              href="/admin/products"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </a>
            <button
              type="button"
              className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50"
            >
              Delete Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
