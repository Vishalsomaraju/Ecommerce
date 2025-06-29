import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "../context/CartContext";

export default function Navbar({
  location = null,
  getLocation = () => {},
  openDropdown = false,
  setOpenDropdown = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const { cartItem } = useCart();
  const cartCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true);
      const timeout = setTimeout(() => setAnimateCart(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [cartCount]);
  useEffect(() => {
    const shouldLockScroll = openDropdown || menuOpen;

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDropdown, menuOpen]);

  return (
    <header className="bg-[#101820] shadow-lg text-[#C5C6C7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo & Location */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-[#00FFFF] font-serif">E</span>com
            </h1>
          </Link>

          <div className="hidden sm:flex gap-1 items-center text-sm">
            <LuMapPin className="text-[#00FFFF] h-6 w-6" />
            <span>
              {location ? (
                <div className="-space-y-1 leading-tight">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown
              onClick={toggleDropdown}
              className="text-[#00FFFF] cursor-pointer"
            />
          </div>

          {openDropdown && (
            <div className="w-[250px] bg-[#1c2a35] text-[#C5C6C7] fixed top-16 left-60 z-50 shadow-2xl border border-[#00FFFF] rounded-md p-5">
              <h1 className="text-lg font-semibold flex justify-between items-center mb-3">
                Change Location
                <CgClose
                  onClick={toggleDropdown}
                  color="white"
                  className="cursor-pointer"
                />
              </h1>
              <button
                onClick={getLocation}
                className="text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-4 py-2 font-semibold bg-gradient-to-r from-cyan-500 to-purple-500"
              >
                Detect Location
              </button>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7 text-lg font-medium">
            {["/", "/products", "/contact"].map((path, i) => {
              const labels = ["Home", "Products", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-[3px] border-[#00FFFF]"
                          : "hover:text-[#00FFFF]"
                      } transition-all`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="h-7 w-7 hover:text-[#00FFFF]" />
            <span
              className={`bg-[#00FFFF] text-black font-bold text-[10px] min-w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full absolute -top-2 -right-2 transition-transform duration-300 ${
                animateCart ? "scale-125" : "scale-100"
              }`}
            >
              {cartCount}
            </span>
          </Link>

          {/* Auth */}
          <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-7 py-2 font-semibold">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="h-7 w-7 hover:text-[#00FFFF]" />
            {cartCount > 0 && (
              <span
                className={`bg-[#00FFFF] text-black font-bold text-[10px] min-w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full absolute -top-2 -right-2 transition-transform duration-300 ${
                  animateCart ? "scale-125" : "scale-100"
                }`}
              >
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#1c2a35] border-t border-[#00FFFF]`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-base">
          {["/", "/products", "/contact"].map((path, i) => {
            const labels = ["Home", "Products", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#00FFFF]" : ""
                  } hover:text-[#00FFFF] transition-all`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
          <div className="pt-2">
            <SignedOut>
              <SignInButton>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-6 py-2 font-semibold">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </ul>
      </div>
    </header>
  );
}
