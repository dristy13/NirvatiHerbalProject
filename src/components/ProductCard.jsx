import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <div className="bg-white rounded-lg border border-green-100 overflow-hidden hover:shadow-lg transition hover:border-green-300">
      {/* Product Image */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 h-48 flex items-center justify-center text-6xl">
        {product.image}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Add to Cart */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-green-700">
            ₹{product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded text-sm transition"
          >
            Add to Cart
          </button>
        </div>

        {/* View Details */}
        <button
          onClick={() => onViewDetails(product)}
          className="w-full text-green-700 hover:text-green-800 text-sm font-medium flex items-center justify-center gap-1 mt-2"
        >
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
