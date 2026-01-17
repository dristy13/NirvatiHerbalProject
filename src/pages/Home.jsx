import React, { useState } from "react";
import {
  ChevronRight,
  Leaf,
  Award,
  Truck,
  Shield,
  Sparkles,
  Heart,
  Video,
  Phone,
  Clock,
  CheckCircle,
  X,
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
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
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

        <div className="relative z-10 w-full px-4 py-16 mx-auto text-center max-w-7xl md:py-24">
          <div className="mb-8">
            <p className="flex items-center justify-center gap-2 mb-4 text-sm font-bold tracking-widest text-green-700 uppercase animate-bounce">
              <Leaf size={16} /> Ancient Wisdom, Modern Wellness
            </p>
            <h1 className="mb-6 text-6xl font-black leading-tight text-gray-900 md:text-7xl lg:text-8xl drop-shadow-lg">
              Pure Herbal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
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
              className="inline-flex items-center justify-center gap-2 px-12 py-4 text-lg font-bold text-white transition transform rounded-full shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-110"
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
      <div className="py-6 text-white shadow-md bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700">
        <div className="flex flex-col gap-4 px-4 mx-auto max-w-7xl md:flex-row md:justify-around md:gap-6">
          <div className="flex items-center gap-3 text-sm font-semibold md:text-base">
            <div className="p-2 bg-white rounded-full bg-opacity-20">
              <Truck size={20} />
            </div>
            <span>Free Shipping Over ₹500</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold md:text-base">
            <div className="p-2 bg-white rounded-full bg-opacity-20">
              <Award size={20} />
            </div>
            <span>100% Natural & Organic</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold md:text-base">
            <div className="p-2 bg-white rounded-full bg-opacity-20">
              <Shield size={20} />
            </div>
            <span>30-Day Money Back</span>
          </div>
        </div>
      </div>

      {/* Expert Consultation Section */}
      <div className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Right Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop"
                  alt="Expert Consultation"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">
                      Expert Available Now
                    </span>
                  </div>
                  <p className="mb-1 text-3xl font-bold text-white">₹299</p>
                  <p className="text-xs text-gray-300">
                    30-min consultation | Money-back guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-1 space-y-8 md:order-2">
              <div>
                <p className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest text-green-700 uppercase">
                  <CheckCircle size={18} /> Expert Guidance
                </p>
                <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                  Consult with Certified Experts
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Get personalized wellness guidance from certified Ayurvedic
                  experts and health coaches. Understand your unique health
                  profile and receive customized recommendations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <Video size={24} className="text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">
                      Video Consultation
                    </h3>
                    <p className="text-sm text-gray-600">
                      One-on-one video sessions with health experts
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <Phone size={24} className="text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">
                      Phone Consultation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quick calls with our wellness specialists
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <Clock size={24} className="text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">
                      24/7 Available
                    </h3>
                    <p className="text-sm text-gray-600">
                      Book consultations at your convenience
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowConsultationModal(true)}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition transform rounded-xl bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 hover:shadow-lg hover:scale-105"
              >
                Book Now <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Nirvati */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl">🌿</div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Certified Organic
            </h3>
            <p className="leading-relaxed text-gray-700">
              Sourced from sustainable farms worldwide. Every ingredient
              verified for purity and potency without harmful chemicals.
            </p>
          </div>

          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl">💚</div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ayurveda-Powered
            </h3>
            <p className="leading-relaxed text-gray-700">
              Formulated by Ayurvedic experts using ancient recipes. Clinically
              tested and proven for real results.
            </p>
          </div>

          <div className="p-8 text-center transition transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl group hover:shadow-2xl hover:scale-105">
            <div className="mb-6 text-6xl">🌍</div>
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
              Our Best Sellers
            </h2>
            <p className="flex items-center gap-2 text-lg text-gray-600">
              <Sparkles size={20} className="text-yellow-500" />
              Trusted by thousands, loved by all
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {dummyProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onNavClick("products")}
                className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 shadow-md cursor-pointer rounded-2xl hover:shadow-xl"
              >
                <div className="relative flex items-center justify-center h-56 overflow-hidden bg-white group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-green-700">
                      ₹{product.price}
                    </p>
                    <button className="p-3 text-white transition bg-green-700 rounded-full hover:bg-green-800 hover:scale-110">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-green-600 uppercase md:text-base">
            Transformations
          </p>
          <h2 className="text-5xl font-bold text-gray-900 md:text-6xl">
            Real Results, Real People
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            See how our herbal products have transformed lives across the globe
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {beforeAfterData.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition-shadow duration-300 shadow-lg rounded-3xl hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-gray-200 h-96 group">
                <img
                  src={item.beforeImg}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="w-full p-6 text-white">
                    <p className="text-sm font-semibold">Real Results</p>
                    <p className="text-2xl font-bold">{item.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center text-white bg-gradient-to-r from-green-600 to-emerald-600">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="mt-2 text-sm text-green-100">
                  Transform naturally with Nirvati
                </p>
              </div>
            </div>
          ))}
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

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-3xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-2 text-3xl font-bold text-gray-900">
                  Book Your Consultation
                </h3>
                <p className="text-gray-600">
                  Choose your preferred consultation method
                </p>
              </div>
              <button
                onClick={() => setShowConsultationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3">
              <button className="flex items-center w-full gap-4 p-5 transition border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 group">
                <div className="flex items-center justify-center bg-green-100 rounded-lg w-14 h-14 group-hover:bg-green-200">
                  <Video size={28} className="text-green-700" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-gray-900">Video Consultation</p>
                  <p className="text-sm text-gray-600">
                    Face-to-face session via video
                  </p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>

              <button className="flex items-center w-full gap-4 p-5 transition border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 group">
                <div className="flex items-center justify-center bg-green-100 rounded-lg w-14 h-14 group-hover:bg-green-200">
                  <Phone size={28} className="text-green-700" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-gray-900">Phone Consultation</p>
                  <p className="text-sm text-gray-600">
                    Quick call with expert
                  </p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="p-5 border border-green-200 bg-green-50 rounded-xl">
              <p className="mb-2 text-sm font-semibold text-green-900">
                ✓ Only ₹299 per session
              </p>
              <p className="text-sm text-green-800">
                30-minute consultation • 100% money-back guarantee • Expert
                verified
              </p>
            </div>

            <button className="w-full py-4 text-lg font-bold text-white transition bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl hover:from-green-800 hover:to-emerald-800">
              Proceed to Booking
            </button>

            <button
              onClick={() => setShowConsultationModal(false)}
              className="w-full py-4 font-bold text-gray-700 transition border-2 border-gray-200 rounded-xl hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
