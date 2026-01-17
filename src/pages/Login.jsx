import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // 🔥 REAL BACKEND LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // ✅ Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // (optional) remember me
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      // ✅ Redirect
      onNavigate("profile");
    } catch (err) {
      setErrors({
        general: err.response?.data?.message || "Login failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-600">Login to your Nirvati Account</p>
        </div>

        {/* Login Card */}
        <div className="p-8 bg-white border border-green-100 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error */}
            {errors.general && (
              <p className="flex items-center gap-1 text-sm text-red-600">
                <AlertCircle size={14} /> {errors.general}
              </p>
            )}

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:border-red-700"
                    : "border-green-200 focus:border-green-700"
                }`}
              />
              {errors.email && (
                <p className="flex items-center gap-1 mt-1 text-sm text-red-600">
                  <AlertCircle size={14} /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none transition pr-10 ${
                    errors.password
                      ? "border-red-500 focus:border-red-700"
                      : "border-green-200 focus:border-green-700"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="flex items-center gap-1 mt-1 text-sm text-red-600">
                  <AlertCircle size={14} /> {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-700 border-green-300 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 mt-6 font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800 disabled:bg-gray-400"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">Or</span>
            </div>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => onNavigate("register")}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
