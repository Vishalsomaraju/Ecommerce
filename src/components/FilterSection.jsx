import React, { useState } from "react";
import { getData } from "../context/DataContext";
import { BsFilterLeft } from "react-icons/bs";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  const [showFilters, setShowFilters] = useState(false);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPriceRange([0, 5000]);
  };

  const FilterContent = () => (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#0B0C10] border border-[#00BFFF] text-[#C5C6C7] px-3 py-2 rounded-md w-full"
      />

      {/* Category */}
      <h1 className="mt-5 font-semibold text-xl text-white">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer text-[#C5C6C7]"
          >
            <input
              type="checkbox"
              name={item}
              checked={category === item}
              value={item}
              onChange={handleCategoryChange}
              className="accent-[#00FFFF]"
            />
            {item.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Brand */}
      <h1 className="mt-5 font-semibold text-xl text-white">Brand</h1>
      <select
        value={brand}
        onChange={handleBrandChange}
        className="bg-[#0B0C10] border border-[#00BFFF] text-[#C5C6C7] px-3 py-2 rounded-md w-full mt-2"
      >
        {brandOnlyData?.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Price Range */}
      <h1 className="mt-5 font-semibold text-xl text-white">Price Range</h1>
      <label className="text-[#C5C6C7]">
        ${priceRange[0]} - ${priceRange[1]}
      </label>
      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-full mt-1 accent-[#00FFFF]"
      />

      <button
        onClick={resetFilters}
        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 px-7 py-2 font-semibold w-full"
      >
        Reset Filters
      </button>
    </>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="bg-[#1F2833] p-4 rounded-md h-max hidden md:block w-full">
        {FilterContent()}
      </div>

      {/* Mobile & Tablet Filters */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white
          text-lg rounded-md shadow-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 px-7 py-2 font-semibold w-full"
        >
          <BsFilterLeft size={30} />{" "}
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {showFilters && (
          <div className="bg-[#1F2833] p-4 mt-4 rounded-md">
            {FilterContent()}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterSection;
