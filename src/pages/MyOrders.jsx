import React, { useState } from "react";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Download,
  MessageCircle,
} from "lucide-react";
import { dummyOrders, dummyProducts } from "../data/dummyData";

export default function MyOrders() {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-700 bg-green-50";
      case "In Transit":
        return "text-blue-700 bg-blue-50";
      case "Processing":
        return "text-yellow-700 bg-yellow-50";
      case "Cancelled":
        return "text-red-700 bg-red-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return "✓";
      case "In Transit":
        return "📦";
      case "Processing":
        return "⏳";
      case "Cancelled":
        return "✕";
      default:
        return "•";
    }
  };

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Orders</h1>

      {dummyOrders.length === 0 ? (
        // Empty Orders
        <div className="text-center py-16">
          <Package size={64} className="text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-xl mb-8">
            You haven't placed any orders yet
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Start Shopping
          </button>
        </div>
      ) : (
        // Orders List
        <div className="space-y-4">
          {dummyOrders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              {/* Order Header */}
              <div
                onClick={() => toggleExpand(order.id)}
                className="bg-white p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="grid md:grid-cols-4 gap-4">
                    {/* Order ID */}
                    <div>
                      <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                        Order ID
                      </p>
                      <p className="font-bold text-gray-800 text-lg">
                        {order.id}
                      </p>
                    </div>

                    {/* Order Date */}
                    <div>
                      <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                        Order Date
                      </p>
                      <p className="font-semibold text-gray-800">
                        {order.date}
                      </p>
                    </div>

                    {/* Status */}
                    <div>
                      <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                        Status
                      </p>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        <span>{getStatusIcon(order.status)}</span>
                        {order.status}
                      </span>
                    </div>

                    {/* Total */}
                    <div>
                      <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                        Total Amount
                      </p>
                      <p className="font-bold text-green-700 text-lg">
                        ₹{order.total}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="ml-4">
                  {expandedOrder === order.id ? (
                    <ChevronUp size={24} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </div>

              {/* Order Details - Expandable */}
              {expandedOrder === order.id && (
                <div className="bg-gray-50 border-t border-gray-200 p-4 md:p-6 space-y-6">
                  {/* Order Items */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">
                      Order Items
                    </h3>
                    <div className="space-y-3">
                      {[1, 2].map((item) => {
                        const product = dummyProducts[item - 1];
                        return (
                          <div
                            key={item}
                            className="bg-white border border-gray-200 rounded p-4 flex gap-4"
                          >
                            <div className="text-4xl">{product.image}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 mb-1">
                                {product.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                {product.description}
                              </p>
                              <p className="text-green-700 font-bold">
                                ₹{product.price}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Qty: 1</p>
                              <p className="font-bold text-gray-800">
                                ₹{product.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Order Timeline */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-4">
                      Order Timeline
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                          <div className="w-0.5 h-12 bg-green-200"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Order Confirmed
                          </p>
                          <p className="text-sm text-gray-600">
                            Jan 10, 2024 at 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                          <div className="w-0.5 h-12 bg-green-200"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            Processing
                          </p>
                          <p className="text-sm text-gray-600">
                            Jan 10, 2024 at 3:15 PM
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                          <div className="w-0.5 h-12 bg-green-200"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Shipped</p>
                          <p className="text-sm text-gray-600">
                            Jan 11, 2024 at 10:00 AM
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-700"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <div>
                          <p
                            className={`font-semibold ${
                              order.status === "Delivered"
                                ? "text-green-700"
                                : "text-gray-600"
                            }`}
                          >
                            {order.status === "Delivered"
                              ? "Delivered"
                              : "In Transit"}
                          </p>
                          <p className="text-sm text-gray-600">
                            {order.status === "Delivered"
                              ? "Jan 12, 2024 at 5:45 PM"
                              : "Expected Jan 12, 2024"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Delivery Address
                    </h3>
                    <div className="bg-white border border-gray-200 rounded p-4">
                      <p className="text-gray-800 font-semibold">John Doe</p>
                      <p className="text-gray-600 text-sm">
                        123 Main Street, City, State 123456
                      </p>
                      <p className="text-gray-600 text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Order Summary
                    </h3>
                    <div className="bg-white border border-gray-200 rounded p-4 space-y-2">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{order.total - 99}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>₹99</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-green-700">₹{order.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                      <Download size={18} /> Download Invoice
                    </button>
                    <button className="flex-1 border border-green-700 text-green-700 hover:bg-green-50 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                      <MessageCircle size={18} /> Contact Support
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Info Box */}
      {dummyOrders.length > 0 && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Need Help?</span> Contact our
            support team for any questions about your orders. We're here to
            assist you!
          </p>
        </div>
      )}
    </div>
  );
}
