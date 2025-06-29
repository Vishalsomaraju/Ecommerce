import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <nav className="text-base font-medium text-[#C5C6C7] flex flex-wrap items-center gap-1">
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-[#00FFFF] transition"
        >
          Home
        </span>
        <span className="text-[#555]">/</span>
        <span
          onClick={() => navigate("/products")}
          className="cursor-pointer hover:text-[#00FFFF] transition"
        >
          Products
        </span>
        <span className="text-[#FFFFFF]">/ {title}</span>
      </nav>
    </div>
  );
};

export default Breadcrums;
