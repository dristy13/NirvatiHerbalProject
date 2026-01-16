import React from "react";
import {
  ChevronRight,
  Award,
  Users,
  Globe,
  TrendingUp,
  Leaf,
} from "lucide-react";

export default function About({
  onNavClick = (section) => console.log(section),
}) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="https://www.ayushmanayurvedic.in/blog/wp-content/uploads/2025/02/Benefits-of-Ayurveda.jpg"
          alt="Ayurveda Benefits"
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute z-10 flex items-center justify-center w-full h-full px-4">
          <div className="max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-widest text-green-300 uppercase md:text-base drop-shadow-lg">
              Welcome to Wellness
            </p>
            <h1 className="mb-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
              About <span className="text-green-300">Nirvati</span>
            </h1>
            <p className="mb-6 text-2xl font-semibold leading-relaxed md:text-3xl text-white/95 drop-shadow-lg">
              Transforming lives through the power of pure, natural Ayurvedic
              wellness.
            </p>
            <p className="text-sm font-light leading-relaxed md:text-base text-white/80 drop-shadow-lg">
              For over a decade, we've been committed to bridging ancient wisdom
              with modern science, creating herbal solutions trusted by 50,000+
              customers worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-white border-t border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Nirvati was founded on a simple yet powerful belief: nature
                holds the answers to our wellness challenges. What started as a
                vision to revive ancient Ayurvedic knowledge has evolved into a
                mission to make premium herbal wellness accessible to everyone.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Today, we've earned the trust of over 50,000 customers worldwide
                who rely on our products for their daily wellness needs. Every
                product we create undergoes rigorous lab testing and is
                formulated by Ayurvedic experts to ensure maximum efficacy.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We're not just selling products—we're building a community of
                wellness enthusiasts who believe in the power of nature.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 border border-green-200 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="mb-6 text-5xl">🌿</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Founded on Purpose
                </h3>
                <p className="mb-6 text-gray-700">
                  Every product, every decision, every commitment we make is
                  driven by our dedication to your wellness.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">✓</span>
                    <span className="text-gray-700">
                      Pure, lab-tested ingredients
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">✓</span>
                    <span className="text-gray-700">
                      Formulated by Ayurvedic experts
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">✓</span>
                    <span className="text-gray-700">
                      Sustainable sourcing practices
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 mb-16 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                To empower individuals with pure, effective herbal solutions
                that enhance their wellness journey and improve their quality of
                life through nature's wisdom.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                To become the world's most trusted herbal wellness brand,
                recognized for our commitment to quality, purity, and
                transformative results.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Values
              </h3>
              <p className="leading-relaxed text-gray-700">
                Purity, integrity, sustainability, and genuine care for our
                customers' wellness journey guide everything we do.
              </p>
            </div>
          </div>

          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Why Choose Nirvati
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                icon: <Award className="w-10 h-10 text-green-600" />,
                title: "Lab Certified",
                desc: "Rigorous testing for purity and potency",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "50K+ Customers",
                desc: "Trusted by wellness seekers worldwide",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-green-600" />,
                title: "Proven Results",
                desc: "4.8★ average rating from verified buyers",
              },
              {
                icon: <Leaf className="w-10 h-10 text-green-600" />,
                title: "100% Natural",
                desc: "Zero additives, zero compromise",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 text-center transition border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* By The Numbers */}
      <div className="py-20 bg-white border-t border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            By The Numbers
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "50K+", label: "Happy Customers", icon: "👥" },
              { number: "4.8★", label: "Customer Rating", icon: "⭐" },
              { number: "100%", label: "Organic Ingredients", icon: "🌿" },
              { number: "6+", label: "Premium Products", icon: "🏆" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 text-center border border-green-200 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <p className="mb-2 text-4xl">{item.icon}</p>
                <p className="mb-2 text-4xl font-bold text-green-600">
                  {item.number}
                </p>
                <p className="font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
            Our Commitment
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Quality Assurance",
                desc: "Every batch undergoes comprehensive testing for purity, potency, and safety. We maintain the highest standards of manufacturing excellence.",
              },
              {
                title: "Sustainability",
                desc: "We partner with sustainable farms and eco-friendly suppliers. Our commitment extends beyond products to protecting the planet.",
              },
              {
                title: "Customer Care",
                desc: "Your satisfaction is our priority. We offer a 30-day money-back guarantee and 24/7 customer support because we stand behind every product.",
              },
              {
                title: "Scientific Approach",
                desc: "We blend traditional Ayurvedic wisdom with modern scientific research to create products that are both ancient and effective.",
              },
            ].map((item, idx) => (
              <div key={idx} className="py-4 pl-6 border-l-4 border-green-600">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="mb-10 text-lg text-white opacity-90">
            Join thousands of customers who've transformed their wellness with
            Nirvati
          </p>
          <button
            onClick={() => onNavClick("products")}
            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-green-700 transition transform bg-white rounded-lg hover:bg-gray-100 hover:scale-105"
          >
            Shop Now <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
