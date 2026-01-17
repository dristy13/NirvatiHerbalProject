import React, { useState } from "react";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ onNavClick, cartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavClick(page);
    setMobileMenuOpen(false);
  };

  const handleHairTest = () => {
    handleNavClick("hair-test");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Nirvati Logo"
            className="w-auto origin-left scale-150 h-14"
          />
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-8 text-sm font-semibold text-gray-700 md:flex">
          <button
            onClick={() => handleNavClick("home")}
            className="transition hover:text-green-700"
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick("products")}
            className="transition hover:text-green-700"
          >
            PRODUCTS
          </button>
          <button className="transition hover:text-green-700">
            CONTACT US
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="transition hover:text-green-700"
          >
            ABOUT
          </button>
          <button className="transition hover:text-green-700">BLOGS</button>
        </div>

        {/* Desktop Icons and Button */}
        <div className="items-center hidden gap-4 md:flex">
          <button
            onClick={handleHairTest}
            className="px-5 py-2 text-sm font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-900"
          >
            TAKE THE HAIR TEST ™
          </button>
          <button onClick={() => handleNavClick("login")}>
            <User
              size={20}
              className="text-gray-700 transition cursor-pointer hover:text-green-700"
            />
          </button>
          <button
            onClick={() => handleNavClick("cart")}
            className="relative transition hover:text-green-700"
          >
            <ShoppingCart size={20} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-700 rounded-full -top-2 -right-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="p-4 space-y-3 border-t border-green-100 md:hidden bg-green-50">
          <button
            onClick={() => handleNavClick("home")}
            className="block w-full py-2 text-sm font-semibold text-left text-gray-700 uppercase hover:text-green-700"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("products")}
            className="block w-full py-2 text-sm font-semibold text-left text-gray-700 uppercase hover:text-green-700"
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="block w-full py-2 text-sm font-semibold text-left text-gray-700 uppercase hover:text-green-700"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("login")}
            className="block w-full py-2 text-sm font-semibold text-left text-gray-700 uppercase hover:text-green-700"
          >
            Login
          </button>
          <button
            onClick={() => handleNavClick("cart")}
            className="block w-full py-2 text-sm font-semibold text-left text-gray-700 uppercase hover:text-green-700"
          >
            Cart ({cartCount})
          </button>
          <button
            onClick={handleHairTest}
            className="w-full px-5 py-2 text-sm font-semibold text-white uppercase transition bg-gray-800 rounded-lg hover:bg-gray-900"
          >
            Take the Hair Test ™
          </button>
        </div>
      )}
    </nav>
  );
}
