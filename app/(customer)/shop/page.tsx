export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <aside className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  Electronics
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  Clothing
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  Books
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full"
              />
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">No products available yet.</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}
