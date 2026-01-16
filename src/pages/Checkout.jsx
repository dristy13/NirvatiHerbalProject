import React, { useState } from "react";
import { ChevronLeft, AlertCircle, Check } from "lucide-react";

export default function Checkout({ cartItems, onPlaceOrder, onBackClick }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal > 499 ? 0 : 99;
  const total = subtotal + shippingCost;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onPlaceOrder(formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium transition"
      >
        <ChevronLeft size={20} /> Back to Cart
      </button>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Personal Information
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-700"
                        : "border-green-200 focus:border-green-700"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                      errors.email
                        ? "border-red-500 focus:border-red-700"
                        : "border-green-200 focus:border-green-700"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                      errors.phone
                        ? "border-red-500 focus:border-red-700"
                        : "border-green-200 focus:border-green-700"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Delivery Address
              </h2>

              <div className="space-y-4">
                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apartment 4B"
                    rows="3"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                      errors.address
                        ? "border-red-500 focus:border-red-700"
                        : "border-green-200 focus:border-green-700"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.address}
                    </p>
                  )}
                </div>

                {/* City & State */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                        errors.city
                          ? "border-red-500 focus:border-red-700"
                          : "border-green-200 focus:border-green-700"
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="NY"
                      className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                        errors.state
                          ? "border-red-500 focus:border-red-700"
                          : "border-green-200 focus:border-green-700"
                      }`}
                    />
                    {errors.state && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.state}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="123456"
                    className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                      errors.pincode
                        ? "border-red-500 focus:border-red-700"
                        : "border-green-200 focus:border-green-700"
                    }`}
                  />
                  {errors.pincode && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.pincode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold transition text-lg"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-green-50 border border-green-100 rounded-lg p-6 sticky top-24">
            <h3 className="font-bold text-gray-800 mb-6 text-lg">
              Order Summary
            </h3>

            {/* Items */}
            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-600"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-green-200 pt-3 mb-6 space-y-3">
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
            </div>

            {/* Total */}
            <div className="border-t border-green-200 pt-3">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800 text-lg">Total</span>
                <span className="font-bold text-green-700 text-lg">
                  ₹{total}
                </span>
              </div>
            </div>

            {/* Security Info */}
            <div className="mt-6 p-3 bg-white rounded border border-green-100 text-xs text-gray-600">
              <p className="font-semibold text-gray-700 mb-1 flex items-center gap-1">
                <Check size={14} className="text-green-700" /> Secure Checkout
              </p>
              <p>Your payment and information are 100% secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
