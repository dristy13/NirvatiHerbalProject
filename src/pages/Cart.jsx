import React from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

export default function Cart({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal > 499 ? 0 : 99;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        // Empty Cart
        <div className="text-center py-16">
          <ShoppingCart size={64} className="text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-xl mb-8">Your cart is empty</p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Start Shopping
          </button>
        </div>
      ) : (
        // Cart with Items
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-green-100 rounded-lg p-4 flex gap-4 hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <div className="text-5xl bg-green-50 rounded p-3 flex-shrink-0">
                    {item.image}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <p className="text-green-700 font-bold">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-gray-100 hover:bg-gray-200 p-2 transition"
                    >
                      <Minus size={16} className="text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-gray-100 hover:bg-gray-200 p-2 transition"
                    >
                      <Plus size={16} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">Subtotal</p>
                    <p className="text-lg font-bold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition flex-shrink-0"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <button className="mt-8 text-green-700 hover:text-green-800 font-semibold flex items-center gap-2">
              ← Continue Shopping
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-gray-800 mb-6 text-lg">
                Order Summary
              </h3>

              {/* Summary Items */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shippingCost === 0 ? (
                    <span className="font-semibold text-green-700">Free</span>
                  ) : (
                    <span className="font-semibold">₹{shippingCost}</span>
                  )}
                </div>
                {shippingCost > 0 && (
                  <p className="text-xs text-gray-500 bg-white p-2 rounded">
                    Free shipping on orders above ₹499
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-green-200 py-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800 text-lg">Total</span>
                  <span className="font-bold text-green-700 text-lg">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-bold transition text-lg mb-3"
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button className="w-full border border-green-700 text-green-700 hover:bg-green-50 py-2 rounded-lg font-semibold transition">
                Continue Shopping
              </button>

              {/* Info */}
              <div className="mt-6 p-3 bg-white rounded border border-green-100 text-xs text-gray-600">
                <p className="font-semibold text-gray-700 mb-1">
                  ✓ Secure Checkout
                </p>
                <p>Your information is safe and secure</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
