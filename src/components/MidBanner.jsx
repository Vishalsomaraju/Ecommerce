import React from "react";
import banner from "../assets/banner1.jpg";
import { useNavigate } from "react-router-dom";

export default function MidBanner() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#101829] md:py-24 -mt-1">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Electronics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-7 py-2 font-semibold"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
