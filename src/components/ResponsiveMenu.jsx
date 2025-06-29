import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <div
      className={`${
        openNav ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-[#0B0C10] px-8 pb-6 pt-16 text-[#C5C6C7] md:hidden rounded-r-xl shadow-md transition-all`}
    >
           {" "}
      <div>
                {/* User Info */}       {" "}
        <div className="flex items-center gap-3 mb-6">
                   {" "}
          {user ? (
            <UserButton size={50} />
          ) : (
            <FaUserCircle size={50} className="text-[#00FFFF]" />
          )}
                   {" "}
          <div>
                       {" "}
            <h1 className="text-lg font-semibold">
                            Hello, {user?.firstName || "Guest"}           {" "}
            </h1>
                       {" "}
            <h1 className="text-sm text-gray-400">
                            {user ? "Premium User" : "Welcome to Zaptro"}       
                 {" "}
            </h1>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Navigation */}       {" "}
        <nav className="mt-8">
                   {" "}
          <ul className="flex flex-col gap-6 text-xl font-semibold">
                       {" "}
            <Link
              to="/"
              onClick={() => setOpenNav(false)}
              className="hover:text-[#00FFFF] transition"
            >
                            <li>Home</li>           {" "}
            </Link>
                       {" "}
            <Link
              to="/products"
              onClick={() => setOpenNav(false)}
              className="hover:text-[#00FFFF] transition"
            >
                            <li>Products</li>           {" "}
            </Link>
                       {" "}
            <Link
              to="/about"
              onClick={() => setOpenNav(false)}
              className="hover:text-[#00FFFF] transition"
            >
                            <li>About</li>           {" "}
            </Link>
                       {" "}
            <Link
              to="/contact"
              onClick={() => setOpenNav(false)}
              className="hover:text-[#00FFFF] transition"
            >
                            <li>Contact</li>           {" "}
            </Link>
                     {" "}
          </ul>
                 {" "}
        </nav>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default ResponsiveMenu;
