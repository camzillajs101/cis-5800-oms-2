export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600">No orders yet.</p>
          <a
            href="/shop"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
