import React, { useState } from "react";
import { ChevronLeft, ShoppingCart, Check } from "lucide-react";

export default function ProductDetails({ product, onAddToCart, onBackClick }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 text-lg">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        className="flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium transition"
      >
        <ChevronLeft size={20} /> Back to Products
      </button>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg h-96 flex items-center justify-center text-9xl sticky top-20">
          {product.image}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-1">Price</p>
            <p className="text-4xl font-bold text-green-700">
              ₹{product.price}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.fullDescription || product.description}
          </p>

          {/* Benefits */}
          <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-100">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              Key Benefits
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-700" />
                Supports natural wellness
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-700" />
                100% organic ingredients
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-700" />
                No artificial additives
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-700" />
                Traditional formulation
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-700" />
                Lab verified quality
              </li>
            </ul>
          </div>

          {/* Product Details */}
          <div className="mb-8 space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Packaging</span>
              <span className="font-semibold text-gray-800">500g</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Shelf Life</span>
              <span className="font-semibold text-gray-800">24 months</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Storage</span>
              <span className="font-semibold text-gray-800">
                Cool & Dry Place
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Certification</span>
              <span className="font-semibold text-gray-800">
                Organic Certified
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Quantity
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-12 text-center font-semibold border-l border-r border-gray-300 focus:outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-lg ${
              addedToCart
                ? "bg-green-700 text-white"
                : "bg-green-700 hover:bg-green-800 text-white"
            }`}
          >
            {addedToCart ? (
              <>
                <Check size={20} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={20} /> Add to Cart
              </>
            )}
          </button>

          {/* Free Shipping */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
            <p className="text-sm text-blue-800 font-medium">
              ✓ Free shipping on orders above ₹499
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Customer Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Great Product
              </h4>
              <p className="text-sm text-gray-600">
                Very satisfied with the quality. Noticed improvements in my
                wellness routine.
              </p>
              <p className="text-xs text-gray-500 mt-3">- Customer {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
