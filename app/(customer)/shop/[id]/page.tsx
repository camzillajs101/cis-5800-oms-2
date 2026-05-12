export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Product Name</h1>
            <p className="text-gray-600">Product ID: {params.id}</p>
          </div>

          <div>
            <p className="text-2xl font-bold">$99.99</p>
          </div>

          <div>
            <p className="text-gray-700">Product description goes here.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Select size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Select color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Black</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
