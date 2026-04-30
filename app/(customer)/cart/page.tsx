export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">Your cart is empty.</p>
            <a
              href="/shop"
              className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </a>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
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
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>$0.00</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
