import React from "react";
import { FaFilter } from "react-icons/fa6";
import { getData } from "../context/DataContext";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
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

  const toggleFilter = () => setOpenFilter(!openFilter);

  return (
    <>
      {/* Filter Header */}
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 py-2 mt-5 rounded-md shadow">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter
          onClick={toggleFilter}
          className="text-gray-800 cursor-pointer hover:text-cyan-500 transition"
        />
      </div>

      {/* Filter Panel */}
      <div
        className={`bg-gray-100 px-4 py-4 rounded-md shadow-md transition-all duration-300 md:hidden ${
          openFilter
            ? "max-h-[1000px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white p-2 rounded-md border border-gray-300 w-full mb-4"
        />

        {/* Category */}
        <h2 className="text-lg font-semibold">Category</h2>
        <div className="flex flex-col gap-2 mt-2">
          {categoryOnlyData?.map((item, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <span className="uppercase">{item}</span>
            </label>
          ))}
        </div>

        {/* Brand */}
        <h2 className="text-lg font-semibold mt-5">Brand</h2>
        <select
          value={brand}
          onChange={handleBrandChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md bg-white"
        >
          {brandOnlyData?.map((item, index) => (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <h2 className="text-lg font-semibold mt-5">Price Range</h2>
        <div className="mt-2">
          <p className="text-sm mb-1">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
        </div>

        {/* Reset */}
        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setBrand("All");
            setPriceRange([0, 5000]);
            setOpenFilter(false);
          }}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md mt-6 transition"
        >
          Reset Filters
        </button>
      </div>
    </>
  );
};

export default MobileFilter;
