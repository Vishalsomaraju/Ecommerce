import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted delivery info");
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0 text-[#C5C6C7] bg-[#101829]">
      {cartItem.length > 0 ? (
        <>
          <h1 className="font-bold text-2xl text-[#00FFFF]">
            My Cart ({cartItem.length})
          </h1>

          <div className="mt-10 ">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="bg-[#1F2833] p-5 rounded-md flex items-center justify-between mt-3 w-full"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-md"
                  />

                  <div>
                    <h1 className="md:w-[300px] line-clamp-2">{item.title}</h1>

                    <p className="text-[#00FFFF] font-semibold text-lg">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white flex gap-4 p-2 rounded-md font-semibold text-xl">
                  <button
                    onClick={() =>
                      updateQuantity(cartItem, item.id, "decrease")
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(cartItem, item.id, "increase")
                    }
                  >
                    +
                  </button>
                </div>

                <span
                  onClick={() => deleteItem(item.id)}
                  className="hover:bg-white/20 p-3 rounded-full"
                >
                  <FaRegTrashAlt className="text-[#00FFFF] text-2xl cursor-pointer" />
                </span>
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              {/* Delivery Info */}
              <form
                onSubmit={handleSubmit}
                className="bg-[#1F2833] rounded-md p-7 mt-4 space-y-4"
              >
                <h1 className="text-[#00FFFF] font-bold text-xl">
                  Delivery Info
                </h1>

                <input
                  type="text"
                  defaultValue={user?.fullName || ""}
                  placeholder="Full Name"
                  className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                />

                <input
                  type="text"
                  defaultValue={location?.county || ""}
                  placeholder="Address"
                  className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                />

                <div className="flex gap-4">
                  <input
                    type="text"
                    defaultValue={location?.state || ""}
                    placeholder="State"
                    className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                  />

                  <input
                    type="text"
                    defaultValue={location?.postcode || ""}
                    placeholder="PostCode"
                    className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                  />
                </div>

                <div className="flex gap-4">
                  <input
                    type="text"
                    defaultValue={location?.country || ""}
                    placeholder="Country"
                    className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                  />

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone No"
                    className="p-2 rounded-md w-full bg-[#0B0C10] text-[#C5C6C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-md w-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Submit
                </button>

                <div className="text-center text-sm text-gray-400 mt-2">
                  — OR —
                </div>

                <button
                  type="button"
                  onClick={getLocation}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-md w-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Detect Location
                </button>
              </form>
              {/* Billing Section */}
              <div className="bg-[#0B0C10]  rounded-md p-7 mt-4 space-y-3">
                <h1 className="text-[#00FFFF] font-bold text-xl">
                  Bill Details
                </h1>

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <LuNotebookText /> Items total
                  </span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <MdDeliveryDining /> Delivery
                  </span>

                  <span className="line-through text-gray-400">$25</span>
                  <span className="text-[#00FFFF] ml-1">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <GiShoppingBag /> Handling
                  </span>
                  <span className="text-[#00FFFF]">$5</span>
                </div>
                <hr className="border-gray-700" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Grand Total</span>
                  <span>${(totalPrice + 5).toFixed(2)}</span>
                </div>

                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="p-2 rounded-md w-full bg-[#1F2833] text-[#C5C6C7]"
                />

                <button className="border border-cyan-400 text-[#00FFFF] px-4 py-2 rounded-md w-full hover:bg-[#1F2833] transition">
                  Apply
                </button>

                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-md w-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center h-[600px]">
          <h1 className="text-white font-bold text-4xl text-center">
            Oh no! Your cart is empty
          </h1>

          <img src={emptyCart} alt="Empty cart" className="w-[300px]" />

          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-center rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-6 py-3 font-semibold flex items-center gap-2"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
