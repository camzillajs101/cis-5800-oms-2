export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order #{params.id}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Order Items */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Order Items</h3>
            <div className="space-y-3">
              <p className="text-gray-600">No items in this order.</p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Customer Information</h3>
            <div className="space-y-2 text-gray-700">
              <p>Name: <span className="font-medium">N/A</span></p>
              <p>Email: <span className="font-medium">N/A</span></p>
              <p>Phone: <span className="font-medium">N/A</span></p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Shipping Address</h3>
            <div className="text-gray-700">
              <p>N/A</p>
            </div>
          </div>

          {/* Order Status */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Update Status</h3>
            <div className="space-y-3">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Update Status
              </button>
            </div>
          </div>

          {/* Shipment Tracking */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Shipment Information</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tracking Number
                </label>
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Carrier</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Select carrier</option>
                  <option>FedEx</option>
                  <option>UPS</option>
                  <option>USPS</option>
                  <option>DHL</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Shipment Info
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
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

          {/* Actions */}
          <div className="bg-white p-6 rounded-lg shadow space-y-3">
            <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Print Label
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Print Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
