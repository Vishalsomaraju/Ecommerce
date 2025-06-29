import React from "react";

const getPages = (current, total) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 flex items-center justify-center gap-2 flex-wrap text-sm font-medium text-white">
      {/* Prev Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1.5 rounded-md transition-all shadow-sm min-w-[60px]
   ${
     page === 1
       ? "bg-red-300 text-white cursor-not-allowed"
       : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110 cursor-pointer"
   }`}
      >
        Prev
      </button>
      {/* Page Numbers */}
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          disabled={typeof item !== "number"}
          className={`px-3 py-1.5 rounded-md min-w-[40px] transition-all
   ${
     item === page
       ? "bg-[#00FFFF] text-[#0B0C10] font-bold -px-4"
       : typeof item === "number"
       ? "hover:bg-gray-200 text-white hover:text-black cursor-pointer"
       : "text-gray-500 cursor-default"
   }`}
        >
          {item}
        </button>
      ))}
      {/* Next Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1.5 rounded-md transition-all shadow-sm min-w-[60px]
   ${
     page === dynamicPage
       ? "bg-red-300 text-white cursor-not-allowed"
       : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110 cursor-pointer"
   }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
