import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cartItem, updateQuantity } = useCart();

  const itemInCart = cartItem.find((item) => item.id === product.id);

  return (
    <div className="border border-[#1F2833] bg-[#0B0C10] text-[#C5C6C7] rounded-2xl p-4 hover:scale-105 hover:shadow-lg transition-all flex flex-col">
      {/* Image */}
      <div
        className="bg-[#1F2833] aspect-square rounded-md overflow-hidden mb-3 cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full p-4"
        />
      </div>
      {/* Title */}
      <h1 className="line-clamp-2 font-semibold mb-1">{product.title}</h1>
      {/* Price */}
      <p className="text-lg font-bold text-[#00FFFF] mb-3">${product.price}</p>
      {/* Cart Controls */}
      {itemInCart ? (
        <div className="flex items-center justify-between bg-[#1F2833] rounded-lg px-3 py-2">
          <button
            onClick={() => updateQuantity(cartItem, product.id, "decrease")}
            className="text-white  bg-gradient-to-r from-cyan-500 to-purple-500 text-sm p-1 rounded-full"
          >
            <FaMinus />
          </button>

          <span className="font-semibold text-white">
            {itemInCart.quantity}
          </span>

          <button
            onClick={() => updateQuantity(cartItem, product.id, "increase")}
            className="text-white  bg-gradient-to-r from-cyan-500 to-purple-500 text-sm p-1 rounded-full"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md font-semibold  bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:brightness-110 transition-all"
        >
          <IoCartOutline className="w-5 h-5" /> Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
