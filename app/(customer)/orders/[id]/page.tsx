export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order #{params.id}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Order Status */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Order Status</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                  ✓
                </div>
                <span className="ml-4">Order Confirmed</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  →
                </div>
                <span className="ml-4">Shipped</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  ✓
                </div>
                <span className="ml-4">Delivered</span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Order Items</h2>
            <p className="text-gray-600">No items in this order.</p>
          </div>

          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>Tracking Number: <span className="font-medium">N/A</span></p>
              <p>Carrier: <span className="font-medium">N/A</span></p>
              <p>Estimated Delivery: <span className="font-medium">N/A</span></p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 border-t border-b py-4 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
