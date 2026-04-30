export default function UpdateInventoryPage({
  params,
}: {
  params: { variantId: string };
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Update Inventory</h2>

      <div className="bg-white p-6 rounded-lg shadow max-w-md">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Variant ID
            </label>
            <input
              type="text"
              value={params.variantId}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Current Stock
            </label>
            <input
              type="number"
              defaultValue="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Adjust Quantity
            </label>
            <input
              type="number"
              placeholder="e.g., +10 or -5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Low Stock Threshold
            </label>
            <input
              type="number"
              defaultValue="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              placeholder="Add notes about this inventory update"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update Stock
            </button>
            <a
              href="/admin/inventory"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
