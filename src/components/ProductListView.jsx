import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="space-y-4 mt-4 rounded-xl bg-[#0B0C10] text-[#C5C6C7] shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 items-center p-4 rounded-xl border border-[#1F2833]">
        <img
          src={product.image}
          alt={product.title}
          className="md:h-60 md:w-60 h-40 w-40 rounded-lg object-contain cursor-pointer bg-[#1F2833]"
          onClick={() => navigate(`/products/${product.id}`)}
        />

        <div className="space-y-3 md:w-full">
          <h1 className="font-semibold md:text-2xl text-lg line-clamp-3 hover:text-[#00FFFF] transition-all">
            {product.title}
          </h1>

          <p className="font-semibold text-lg">
            <span className="text-[#00FFFF] text-3xl">${product.price}</span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 ml-3">
                {product.discount}% OFF
              </span>
            )}
          </p>

          <p className="text-sm text-gray-400">
            FREE delivery
            <span className="text-[#00FFFF] font-semibold">Fri, 18 Apr</span>
            <br /> Or fastest delivery
            <span className="text-[#00FFFF] font-semibold">
              Tomorrow, 17 Apr
            </span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-[#00FFFF] text-[#0B0C10] font-semibold px-4 py-2 rounded-md hover:brightness-110 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
