import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.in/api/products/${id}`
        );
        setProduct(res.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getSingleProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const originalPrice = product
    ? Math.round(product.price + (product.price * product.discount) / 100)
    : 0;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass quantity to context
    setQuantity(1); // Reset to 1 after adding
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0B0C10]">
        <video muted autoPlay loop className="w-[250px] md:w-[350px]">
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0C10] text-white min-h-screen px-4 py-8">
      <Breadcrums title={product.title} />
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[500px] object-contain rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl font-bold text-cyan-400">
            {product.title}
          </h1>

          <div className="text-gray-400 text-sm uppercase space-x-4">
            <span>{product.brand}</span>
            <span>{product.category}</span>
            <span>{product.model}</span>
          </div>

          <div className="text-2xl font-bold text-cyan-300">
            ${product.price.toFixed(2)}
            <span className="line-through text-red-200 text-lg ml-3">
              ${originalPrice}
            </span>
            <span className="ml-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-black px-3 py-1 rounded-full text-sm">
              {product.discount}% OFF
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">{product.description}</p>
          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <label className="text-md font-medium text-gray-400">
              Quantity:
            </label>

            <div className="flex items-center gap-2">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-lg"
              >
                –
              </button>

              <span className="min-w-[40px] text-center text-lg bg-[#1F2833] border border-cyan-500 rounded-md px-3 py-1">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-black rounded-md text-lg"
              >
                +
              </button>
            </div>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 w-fit bg-gradient-to-r from-cyan-500 to-purple-500 text-white
      text-lg rounded-md shadow-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 px-7 py-2"
          >
            Add {quantity} to Cart <MdOutlineShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
