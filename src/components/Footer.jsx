import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#101820] shadow-lg text-[#C5C6C7] ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
        {/* Info */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold" style={{ color: "#00FFFF" }}>
              Ecom
            </h1>
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-2 text-sm">hyderabad, telangana, India</p>
          <p className="text-sm">Email: support@Ecom.com</p>
          <p className="text-sm">Phone: +91 8985046331</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/contact" className="hover:text-[#00FFFF] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-returns"
                className="hover:text-[#00FFFF] transition"
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-[#00FFFF] transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/order-tracking"
                className="hover:text-[#00FFFF] transition"
              >
                Order Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/size-guide"
                className="hover:text-[#00FFFF] transition"
              >
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#00FFFF] hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#00FFFF] hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#00FFFF] hover:scale-110 transition"
            >
              <FaTwitterSquare />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="hover:text-[#00FFFF] hover:scale-110 transition"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay in the Loop</h3>
          <p className="text-sm">
            Subscribe to get special offers, free giveaways, and more.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-md mb-2 sm:mb-0 sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#00FFFF] bg-[#1F2833] text-[#C5C6C7] border border-[#00FFFF]"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md lg:rounded-l-none xl:rounded-l-none shadow-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 px-4 py-2 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-8 border-t pt-6 text-center text-sm"
        style={{ borderColor: "#1F2833" }}
      >
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "#00FFFF" }}>Ecom</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
