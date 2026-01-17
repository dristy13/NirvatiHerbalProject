import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, LogOut, Edit2, Save, X, User } from "lucide-react";

export default function Profile({ onNavigate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  // 🔐 Get token
  const token = localStorage.getItem("token");

  // 🚀 FETCH LOGGED IN USER
  useEffect(() => {
    if (!token) {
      onNavigate("login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFormData({
          fullName: res.data.fullName,
          email: res.data.email,
          phone: res.data.phone,
          address: res.data.address || "",
        });
      } catch (err) {
        console.error(err);
        localStorage.clear();
        onNavigate("login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, onNavigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🧠 UPDATE PROFILE (ready for backend later)
  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      await axios.put("http://localhost:5000/api/users/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsEditing(false);
    } catch (err) {
      alert("Update failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    onNavigate("login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-12 text-4xl font-bold text-gray-800">My Profile</h1>

      <div className="grid gap-8 md:grid-cols-3">
        {/* SIDEBAR */}
        <div>
          <div className="p-8 mb-6 text-center bg-green-100 rounded-lg">
            <div className="mb-4 text-6xl">👤</div>
            <h2 className="text-xl font-bold">{formData.fullName}</h2>
            <p className="text-sm text-gray-600">{formData.email}</p>
          </div>

          <button
            onClick={() => onNavigate("orders")}
            className="flex justify-center w-full gap-2 py-2 mb-3 text-white bg-green-700 rounded-lg"
          >
            <Package size={18} /> My Orders
          </button>

          <button
            onClick={handleLogout}
            className="flex justify-center w-full gap-2 py-2 mb-3 bg-gray-200 rounded-lg"
          >
            <LogOut size={18} /> Logout
          </button>

          <button
            onClick={() => setIsEditing(true)}
            className="flex justify-center w-full gap-2 py-2 text-green-700 border border-green-700 rounded-lg"
          >
            <Edit2 size={18} /> Edit Profile
          </button>
        </div>

        {/* MAIN */}
        <div className="md:col-span-2">
          {!isEditing ? (
            <>
              <div className="p-6 mb-6 bg-white border rounded-lg">
                <h3 className="flex gap-2 mb-4 font-bold">
                  <User /> Personal Info
                </h3>

                <p>
                  <b>Name:</b> {formData.fullName}
                </p>
                <p>
                  <b>Email:</b> {formData.email}
                </p>
                <p>
                  <b>Phone:</b> {formData.phone}
                </p>
              </div>

              <div className="p-6 bg-white border rounded-lg">
                <h3 className="mb-2 font-bold">Address</h3>
                <p>{formData.address || "No address added"}</p>
              </div>
            </>
          ) : (
            <div className="p-6 bg-white border rounded-lg">
              <h3 className="mb-4 font-bold">Edit Profile</h3>

              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 mb-3 border"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 mb-3 border"
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 mb-3 border"
              />

              <div className="flex gap-3">
                <button
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                  className="flex-1 py-2 text-white bg-green-700 rounded"
                >
                  <Save size={16} /> {isSaving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 border rounded"
                >
                  <X size={16} /> Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
