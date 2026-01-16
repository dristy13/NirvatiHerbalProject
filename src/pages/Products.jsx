import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { dummyProducts } from "../data/dummyData";

export default function Products({ onAddToCart, onViewDetails }) {
  const [sortBy, setSortBy] = useState("default");

  const getSortedProducts = () => {
    let sorted = [...dummyProducts];

    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return sorted;
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg">
          Explore our collection of premium herbal wellness products crafted for
          optimal health
        </p>
      </div>

      {/* Sort Options */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-gray-700 font-medium">
          Showing {sortedProducts.length} products
        </div>
        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700 bg-white"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Not Sure Which Product to Choose?
        </h3>
        <p className="text-gray-600 mb-6">
          Our wellness experts are here to help. Contact us for personalized
          recommendations.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold transition">
          Get Expert Recommendation
        </button>
      </div>
    </div>
  );
}
