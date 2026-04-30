export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm font-medium">Recent Orders</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm font-medium">Total Spent</h2>
          <p className="text-3xl font-bold mt-2">$0.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-600 text-sm font-medium">Items in Cart</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/shop"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </a>
          <a
            href="/orders"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            View Orders
          </a>
          <a
            href="/account/profile"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Edit Profile
          </a>
          <a
            href="/cart"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
}
