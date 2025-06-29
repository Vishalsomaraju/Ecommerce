import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";

export default function Category() {
  const { data, fetchAllProducts } = getData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const categoryOnlyData = useMemo(() => {
    const categories = data?.map((item) => item.category);
    return [...new Set(categories)];
  }, [data]);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="bg-[#101820]  w-full ">
      <div className="max-w-7xl mx-auto flex gap-3 md:gap-5 sm:gap-6 pt-4 items-center justify-around h-[60px] py-3 px-4 overflow-x-auto snap-x snap-mandatory whitespace-nowrap scrollbar-hide scrollbar-stable -mb-9">
        {categoryOnlyData?.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-7 py-2 font-semibold"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
