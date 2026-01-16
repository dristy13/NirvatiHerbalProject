import React, { useState } from "react";
import {
  ChevronRight,
  Leaf,
  Award,
  Truck,
  Shield,
  Sparkles,
  Heart,
} from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    name: "Ashwagandha Plus",
    description: "Stress relief & energy boost",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5f400f627?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Turmeric Gold",
    description: "Anti-inflammatory superfood",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1599810694-b5ac4dd64b11?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Brahmi Extract",
    description: "Memory & focus enhancement",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Neem Capsules",
    description: "Natural immunity booster",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Triphala Powder",
    description: "Digestive wellness blend",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1599810775-8eef0e6b35cc?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Tulsi Tea",
    description: "Immunity & respiratory health",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1577318810033-e365fa266e39?w=300&h=300&fit=crop",
  },
];

const beforeAfterData = [
  {
    title: "Hair Growth & Thickness",
    beforeImg:
      "https://t3.ftcdn.net/jpg/09/54/38/26/360_F_954382619_F0Tvcn5J5ytcQlRA7vPNnXmzUO1dql9B.jpg",
    afterImg:
      "https://t3.ftcdn.net/jpg/04/69/10/72/360_F_469107228_ygt2CoLV51qmPwa05UAHgAkpZvWGzpNV.jpg",
  },
  {
    title: "Skin Clarity & Glow",
    beforeImg:
      "https://images.squarespace-cdn.com/content/v1/665faab147609a427c4e6e38/e54815bd-67e5-4c92-994f-6ea5a18371c5/Glow+Up+Studio+Anti+Aging+Facial.jpg",
    afterImg:
      "https://images.squarespace-cdn.com/content/v1/665faab147609a427c4e6e38/e54815bd-67e5-4c92-994f-6ea5a18371c5/Glow+Up+Studio+Anti+Aging+Facial.jpg",
  },
  {
    title: "Energy & Wellness",
    beforeImg:
      "https://cdn.shopify.com/s/files/1/0764/9299/t/47/assets/IMG_5321.jpeg?v=1599173944",
    afterImg:
      "https://cdn.shopify.com/s/files/1/0764/9299/t/47/assets/IMG_5321.jpeg?v=1599173944",
  },
];

export default function Home({
  onNavClick = (section) => console.log(section),
}) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/h9xbdf0le/wp-content/uploads/2024/08/web-page-Blank.jpg"
            alt="Herbal Products"
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/40 via-transparent to-green-50/40"></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute bg-green-400 rounded-full top-10 right-20 w-96 h-96 mix-blend-multiply blur-3xl animate-pulse"></div>
          <div
            className="absolute bg-teal-400 rounded-full bottom-10 left-20 w-96 h-96 mix-blend-multiply blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 w-full px-4 py-24 mx-auto text-center max-w-7xl md:py-32">
          <div className="mb-8 animate-fade-in">
            <p className="flex items-center justify-center gap-2 mb-4 text-sm font-bold tracking-widest text-green-700 uppercase animate-bounce">
              <Leaf size={16} /> Ancient Wisdom, Modern Wellness
            </p>
            <h1 className="mb-6 text-6xl font-black leading-tight text-gray-900 md:text-7xl lg:text-8xl drop-shadow-lg">
              Pure Herbal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 animate-pulse">
                Nature's Gift
              </span>
            </h1>
            <p className="max-w-4xl mx-auto mb-8 text-lg font-light leading-relaxed text-gray-700 md:text-2xl">
              Unlock the power of 5000+ years of Ayurvedic wisdom.
              <br />
              <span className="font-semibold text-green-700">
                Premium herbal products, lab-tested & globally trusted.
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavClick("products")}
              className="inline-flex items-center justify-center gap-2 px-12 py-4 text-lg font-bold text-white transition transform rounded-full shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-110 hover:shadow-green-500/50"
            >
              Shop Collection <ChevronRight size={20} />
            </button>
            <button className="px-12 py-4 text-lg font-bold text-green-700 transition border-2 border-green-600 rounded-full hover:bg-green-50 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="sticky z-40 py-4 text-white shadow-lg bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 top-16">
        <div className="flex flex-wrap items-center justify-around gap-6 px-4 mx-auto text-sm font-semibold max-w-7xl md:text-base">
          <div className="flex items-center gap-2 transition hover:scale-105">
            <Truck size={18} /> Free Shipping Over ₹500
          </div>
          <div className="flex items-center gap-2 transition hover:scale-105">
            <Award size={18} /> 100% Natural & Organic
          </div>
          <div className="flex items-center gap-2 transition hover:scale-105">
            <Shield size={18} /> 30-Day Money Back
          </div>
        </div>
      </div>

      {/* Why Nirvati */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl transition duration-300 transform group-hover:scale-125">
              🌿
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Certified Organic
            </h3>
            <p className="leading-relaxed text-gray-700">
              Sourced from sustainable farms worldwide. Every ingredient
              verified for purity and potency without harmful chemicals.
            </p>
          </div>

          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl transition duration-300 transform group-hover:scale-125">
              💚
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ayurveda-Powered
            </h3>
            <p className="leading-relaxed text-gray-700">
              Formulated by Ayurvedic experts using ancient recipes. Clinically
              tested and proven for real results.
            </p>
          </div>

          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl transition duration-300 transform group-hover:scale-125">
              🌍
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Global Excellence
            </h3>
            <p className="leading-relaxed text-gray-700">
              Trusted by 50K+ customers worldwide. Award-winning quality with
              exceptional customer support 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 py-20 bg-gradient-to-b from-white to-green-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-2 text-5xl font-bold text-gray-900">
              Seen On Shark Tank
            </h2>
            <p className="flex items-center gap-2 text-lg text-gray-600">
              <Sparkles size={20} className="text-yellow-500" />
              Our most-loved herbal solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {dummyProducts.slice(0, 4).map((product, idx) => {
              const discount = idx % 2 === 0;
              return (
                <div
                  key={product.id}
                  onClick={() => onNavClick("products")}
                  className="overflow-hidden transition transform bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-2xl hover:scale-105 group"
                >
                  <div className="relative flex items-center justify-center h-56 overflow-hidden bg-white">
                    {discount && (
                      <>
                        <div className="absolute z-10 px-3 py-1 text-xs font-bold text-white bg-red-600 rounded-lg top-3 left-3 animate-pulse">
                          SALE
                        </div>
                        <div className="absolute z-10 px-3 py-1 text-xs font-bold font-black text-white bg-red-500 rounded-lg top-3 right-3">
                          -15%
                        </div>
                      </>
                    )}
                    <div className="absolute z-10 top-3 right-3">
                      <div className="px-3 py-2 text-xs font-bold text-white bg-blue-700 rounded-full">
                        ❤️ BEST
                      </div>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-48 h-48 transition rounded-lg group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-base font-bold text-gray-900 transition group-hover:text-green-700">
                      {product.name}
                    </h3>
                    <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {discount && (
                          <p className="text-sm text-gray-500 line-through">
                            ₹{Math.round(product.price * 1.18)}
                          </p>
                        )}
                        <p className="text-xl font-bold text-green-700">
                          ₹{product.price}
                        </p>
                      </div>
                      <button className="p-2 text-white transition bg-green-700 rounded-full hover:bg-green-800 hover:scale-110">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <h2 className="mb-16 text-5xl font-bold text-center text-gray-900">
          Real Results, Real People
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {beforeAfterData.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition transform shadow-2xl rounded-2xl hover:shadow-3xl hover:scale-105"
            >
              <div className="relative flex items-center justify-center bg-gray-200 h-96">
                <img
                  src={item.beforeImg}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 text-white bg-gradient-to-r from-green-600 to-emerald-600">
                <p className="text-xl font-bold text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div className="px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-2 text-5xl font-bold text-gray-900">
              All Products
            </h2>
            <p className="text-lg text-gray-600">
              Explore our complete herbal collection
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {dummyProducts.map((product, idx) => {
              const discount = idx % 3 === 0;
              return (
                <div
                  key={product.id}
                  onClick={() => onNavClick("products")}
                  className="overflow-hidden transition transform bg-white border border-gray-100 shadow-sm cursor-pointer rounded-xl hover:shadow-lg hover:scale-105 group"
                >
                  <div className="relative flex items-center justify-center h-40 overflow-hidden bg-white">
                    {discount && (
                      <div className="absolute z-10 top-2 left-2">
                        <span className="px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-lg">
                          -15%
                        </span>
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-32 h-32 transition rounded-lg group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-sm font-bold text-gray-900 transition group-hover:text-green-700 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="mb-2 text-xs text-gray-600 line-clamp-1">
                      {product.description}
                    </p>
                    <p className="text-sm font-bold text-green-700">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavClick("products")}
              className="px-10 py-4 text-lg font-bold text-green-700 transition border-2 border-green-700 rounded-full hover:bg-green-50 hover:shadow-lg"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Nirvati */}
      <div className="px-4 py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-bold text-center text-gray-900">
            Why Choose Nirvati Herbal
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: "✓",
                title: "100% Natural",
                desc: "No chemicals, no additives, pure nature",
              },
              {
                icon: "🏆",
                title: "Lab Tested",
                desc: "Certified organic & clinically proven",
              },
              {
                icon: "🚚",
                title: "Fast Shipping",
                desc: "Free delivery on orders over ₹500",
              },
              {
                icon: "💚",
                title: "Money Back",
                desc: "30-day guarantee, no questions asked",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 text-center transition transform bg-white border-2 border-green-200 rounded-2xl hover:border-green-400 hover:shadow-xl hover:scale-105"
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="flex items-center justify-center gap-2 mb-2 font-bold tracking-wider text-green-700 uppercase">
            <Heart size={20} /> Reviews
          </p>
          <h2 className="mb-4 text-5xl font-bold text-gray-900">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 transition transform bg-white border-2 border-green-200 rounded-2xl hover:shadow-xl hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-700">
                "Nirvati products are a game-changer! Pure, natural, and they
                actually work. I've recommended them to everyone I know."
              </p>
              <div className="pt-4 border-t border-green-200">
                <p className="font-bold text-gray-900">Satisfied Customer</p>
                <p className="text-sm text-gray-600">✓ Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative px-4 py-20 overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bg-white rounded-full top-10 right-20 w-72 h-72 mix-blend-multiply blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl">
            Begin Your Wellness Journey
          </h2>
          <p className="mb-10 text-xl font-light opacity-90">
            Join 50,000+ customers who've discovered the Nirvati difference
          </p>
          <button
            onClick={() => onNavClick("products")}
            className="inline-flex items-center gap-2 px-12 py-4 text-lg font-bold text-green-700 transition transform bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:scale-110"
          >
            Explore Now <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
