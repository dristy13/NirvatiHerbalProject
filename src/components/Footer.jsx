import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-green-100 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Footer Content */}
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-green-700">
              Nirvati Herbal
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Premium herbal wellness products for modern living. Trusted by
              thousands for natural health.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-700">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="transition cursor-pointer hover:text-green-700">
                About Us
              </li>
              <li className="transition cursor-pointer hover:text-green-700">
                Shipping Info
              </li>
              <li className="transition cursor-pointer hover:text-green-700">
                Returns & Exchanges
              </li>
              <li className="transition cursor-pointer hover:text-green-700">
                FAQ
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 font-semibold text-gray-700">Support</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                support@Nirvati.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                +91 9266982764
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-4 border-t border-green-100">
          {/* Copyright */}
          <div className="text-sm text-center text-gray-600">
            © 2024 Nirvati Herbal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
