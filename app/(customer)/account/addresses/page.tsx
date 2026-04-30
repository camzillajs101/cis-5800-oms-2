export default function AddressesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Saved Addresses</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-2 border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-bold">Home</p>
              <p className="text-sm text-gray-600">Default Shipping</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
              Default
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            123 Main Street<br />
            Springfield, IL 62701<br />
            USA
          </p>
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Edit
            </button>
            <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white p-8 rounded-lg shadow text-center mt-6">
        <p className="text-gray-600 mb-4">No saved addresses yet.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Your First Address
        </button>
      </div>
    </div>
  );
}
