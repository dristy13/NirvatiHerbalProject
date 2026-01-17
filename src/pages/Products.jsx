import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { dummyProducts } from "../data/dummyData";

export default function Products({ onAddToCart, onViewDetails }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "healthcare", label: "Healthcare" },
    { id: "skincare", label: "Skincare" },
    { id: "haircare", label: "Haircare" },
  ];

  const healthcareSubcategories = [
    { id: "all", label: "All" },
    { id: "pain", label: "Pain" },
    { id: "asthma", label: "Asthma" },
    { id: "piles", label: "Piles" },
    { id: "diabetes", label: "Diabetes" },
    { id: "stone", label: "Stone" },
  ];

  const getSortedProducts = () => {
    let filtered = [...dummyProducts];

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activeCategory === "healthcare" && activeSubcategory !== "all") {
      filtered = filtered.filter((p) => p.subcategory === activeSubcategory);
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg text-gray-600">
          Explore our collection of premium herbal wellness products crafted for
          optimal health
        </p>
      </div>

      {/* Category Filter */}
      <div className="pb-6 mb-8 border-b border-gray-200">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveSubcategory("all");
              }}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Healthcare Subcategories */}
      {activeCategory === "healthcare" && (
        <div className="pb-6 mb-8 border-b border-gray-200">
          <h3 className="mb-3 text-sm font-medium text-gray-700">Conditions</h3>
          <div className="flex flex-wrap gap-2">
            {healthcareSubcategories.map((subcat) => (
              <button
                key={subcat.id}
                onClick={() => setActiveSubcategory(subcat.id)}
                className={`px-4 py-1.5 rounded text-sm transition-all ${
                  activeSubcategory === subcat.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {subcat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sort Options */}
      <div className="flex items-center justify-between mb-8">
        <div className="font-medium text-gray-700">
          Showing {sortedProducts.length} products
        </div>
        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-green-200 rounded-lg focus:outline-none focus:border-green-700"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 mb-12 md:grid-cols-3">
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
      <div className="p-8 text-center border border-green-100 rounded-lg bg-green-50">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">
          Not Sure Which Product to Choose?
        </h3>
        <p className="mb-6 text-gray-600">
          Our wellness experts are here to help. Contact us for personalized
          recommendations.
        </p>
        <button className="px-6 py-2 font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800">
          Get Expert Recommendation
        </button>
      </div>
    </div>
  );
}
