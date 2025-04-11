import React from "react";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#291022] text-white">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between px-6 sm:px-10 lg:px-20 py-8 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">About Us</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-6">
            At CouponSphere, we are dedicated to providing the best e-commerce
            solutions with a focus on quality, reliability, and innovation. Shop
            with confidence and discover amazing deals!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/shop" className="hover:text-pink-500 transition">
                  Shop
                </a>
              </li>
              <li onClick={() => navigate("/about")}>
                <a className="hover:text-pink-500 transition cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-pink-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pink-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">Support</h2>
            <ul className="mt-4 space-y-2">
              <li className="hidden">
                <a href="/shipping" className="hover:text-pink-500 transition">
                  Shipping & Delivery
                </a>
              </li>
              <li className="hidden">
                <a href="/returns" className="hover:text-pink-500 transition">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-pink-500 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Get the latest updates, offers, and discounts delivered directly to
            your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black w-full sm:w-auto"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white rounded-r-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-pink-300"></div>

      {/* Social Media Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white rounded-full flex items-center justify-center transition"
        >
          <i className="fa-brands fa-facebook text-lg sm:text-xl"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white rounded-full flex items-center justify-center transition"
        >
          <i className="fa-brands fa-linkedin-in text-lg sm:text-xl"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white rounded-full flex items-center justify-center transition"
        >
          <i className="fa-brands fa-instagram text-lg sm:text-xl"></i>
        </a>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-[1px] bg-pink-300"></div>
      <div className="w-full flex sm:flex-row flex-col items-center justify-around py-6 text-sm sm:text-base text-gray-400">
        <p className="sm:text-sm text-base font-semibold">
          © Copyright 2025 by CouponSphere.
        </p>
        <div className="flex sm:flex-row flex-col items-center sm:text-sm text-base font-semibold">
          <p>Passionately created and designed by ~</p>
          <a
            href="https://www.linkedin.com/in/aditya-gupta-iuj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all duration-300"
          >
            Aditya Gupta
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
