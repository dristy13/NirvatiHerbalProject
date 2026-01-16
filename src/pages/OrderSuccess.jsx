import React, { useEffect, useState } from "react";
import { Check, Package, Truck, Mail, Home } from "lucide-react";

export default function OrderSuccess({ onNavigate }) {
  const [orderNumber] = useState(() => {
    return `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  });

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);
  const deliveryDate = estimatedDelivery.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    // Auto-redirect after 10 seconds (optional)
    // const timer = setTimeout(() => onNavigate('products'), 10000);
    // return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Success Animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-700 rounded-full mb-6 mx-auto">
            <Check size={56} className="text-white" />
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order. Your wellness journey starts now!
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-lg border border-green-100 p-8 mb-8">
          {/* Order Number */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">
              Your Order Number
            </p>
            <p className="text-4xl font-bold text-green-700 font-mono">
              {orderNumber}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Save this number for reference
            </p>
          </div>

          {/* Order Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Estimated Delivery */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100">
                  <Truck size={24} className="text-green-700" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Estimated Delivery
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  {deliveryDate}
                </p>
                <p className="text-xs text-gray-500 mt-1">3-5 business days</p>
              </div>
            </div>

            {/* Confirmation Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100">
                  <Mail size={24} className="text-blue-700" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Confirmation Email
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  john@example.com
                </p>
                <p className="text-xs text-gray-500 mt-1">Check your inbox</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Package size={20} className="text-green-700" /> What's Next?
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-green-700 flex-shrink-0">
                  1.
                </span>
                <span>
                  You'll receive a confirmation email with your order details
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-700 flex-shrink-0">
                  2.
                </span>
                <span>
                  We'll prepare your order for shipment (1-2 business days)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-700 flex-shrink-0">
                  3.
                </span>
                <span>You'll receive shipping updates via email and SMS</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-700 flex-shrink-0">
                  4.
                </span>
                <span>Your package arrives within 3-5 business days</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-lg shadow-lg border border-green-100 p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 flex-shrink-0">
              <Home size={24} className="text-green-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-2">Delivery Address</h3>
              <p className="text-gray-700 font-semibold">John Doe</p>
              <p className="text-gray-600 text-sm">
                123 Main Street, City, State 123456
              </p>
              <p className="text-gray-600 text-sm">Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-lg border border-green-100 p-8 mb-8">
          <h3 className="font-bold text-gray-800 mb-4">Order Summary</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-gray-700">
              <span>Turmeric Gold x 1</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Ashwagandha Power x 1</span>
              <span>₹599</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>₹1,098</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Shipping</span>
                <span className="text-green-700 font-semibold">Free</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
              <span className="text-gray-800">Total</span>
              <span className="text-green-700">₹1,098</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate("orders")}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition text-lg"
          >
            Track Your Order
          </button>
          <button
            onClick={() => onNavigate("products")}
            className="w-full border border-green-700 text-green-700 hover:bg-green-50 py-3 rounded-lg font-semibold transition text-lg"
          >
            Continue Shopping
          </button>
        </div>

        {/* Support Info */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Need Help?</span> Contact our
            support team at{" "}
            <span className="font-semibold">support@havintha.com</span> or call{" "}
            <span className="font-semibold">+91 1234567890</span>
          </p>
        </div>
      </div>
    </div>
  );
}
