import React, { useState } from "react";
import { Package, LogOut, Edit2, Save, X, User } from "lucide-react";
import { dummyUser } from "../data/dummyData";

export default function Profile({ onNavigate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: dummyUser.name,
    email: dummyUser.email,
    phone: dummyUser.phone,
    address: dummyUser.address,
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
    }, 1000);
  };

  const handleCancel = () => {
    setFormData({
      name: dummyUser.name,
      email: dummyUser.email,
      phone: dummyUser.phone,
      address: dummyUser.address,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">My Profile</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          {/* Profile Avatar */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 text-center mb-6 border border-green-200">
            <div className="text-6xl mb-4">👤</div>
            <h2 className="font-bold text-gray-800 text-xl mb-1">
              {formData.name}
            </h2>
            <p className="text-sm text-gray-600">{formData.email}</p>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-3">
            <button
              onClick={() => onNavigate("orders")}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Package size={18} /> My Orders
            </button>

            <button
              onClick={() =>
                alert("Logout functionality - not implemented in UI demo")
              }
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <LogOut size={18} /> Logout
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full border border-green-700 text-green-700 hover:bg-green-50 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Edit2 size={18} /> Edit Profile
            </button>
          </div>

          {/* Account Stats */}
          <div className="mt-6 bg-green-50 border border-green-100 rounded-lg p-4 space-y-3">
            <h3 className="font-bold text-gray-800 text-sm">Account Stats</h3>
            <div className="text-center py-2 border-b border-green-200">
              <p className="text-xs text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-green-700">2</p>
            </div>
            <div className="text-center py-2 border-b border-green-200">
              <p className="text-xs text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-green-700">₹1,697</p>
            </div>
            <div className="text-center py-2">
              <p className="text-xs text-gray-600">Member Since</p>
              <p className="text-sm font-bold text-gray-800">Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          {!isEditing ? (
            // View Mode
            <>
              {/* Personal Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center gap-2">
                  <User size={20} /> Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="font-semibold text-gray-800 text-lg">
                      {formData.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email Address</p>
                    <p className="font-semibold text-gray-800 text-lg">
                      {formData.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                    <p className="font-semibold text-gray-800 text-lg">
                      {formData.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">
                  Delivery Address
                </h3>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Primary Address</p>
                  <p className="font-semibold text-gray-800">
                    {formData.address}
                  </p>
                </div>
                <button className="mt-4 border border-green-700 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition text-sm">
                  Add Another Address
                </button>
              </div>

              {/* Account Preferences */}
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 mt-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  Account Preferences
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Receive order updates via email
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Receive promotional offers
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-gray-700">
                      Receive product recommendations
                    </span>
                  </label>
                </div>
              </div>
            </>
          ) : (
            // Edit Mode
            <>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">
                  Edit Profile
                </h3>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSaveChanges}
                      disabled={isSaving}
                      className="flex-1 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    >
                      <Save size={18} />{" "}
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                    >
                      <X size={18} /> Cancel
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
