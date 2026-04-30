export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Review Items */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Order Items</h2>
            <p className="text-gray-600">No items to review.</p>
          </section>

          {/* Shipping Address */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </form>
          </section>

          {/* Shipping Method */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Shipping Method</h2>
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  defaultChecked
                  className="mr-3"
                />
                <div>
                  <p className="font-medium">Standard Shipping</p>
                  <p className="text-sm text-gray-600">5-7 business days</p>
                </div>
                <span className="ml-auto font-medium">$5.00</span>
              </label>
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  className="mr-3"
                />
                <div>
                  <p className="font-medium">Express Shipping</p>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
                <span className="ml-auto font-medium">$15.00</span>
              </label>
            </div>
          </section>

          {/* Payment */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </form>
          </section>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-4">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 border-t border-b py-4 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>$5.00</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
