import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoShirt } from "react-icons/io5";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between py-5 font-medium px-4">
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="Logo" />
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink className="flex items-center gap-2" to="/">      
            <p>Home</p>
          </NavLink>
          <NavLink className="flex items-center gap-2" to="/collection">          
            <p>Collection</p>
          </NavLink>
          <NavLink className="flex items-center gap-2" to="/about">          
            <p>About</p>
          </NavLink>
          <NavLink className="flex items-center gap-2" to="/contact">
            <p>Contact</p>
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
          <div className="group relative">
            <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
            <div className="group-hover:block hidden absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-6px] w-5 text-center leading-4 bg-yellow-500 text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
        </div>
      </div>

      {/* Bottom Navbar for small screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 flex justify-around items-center py-2 sm:hidden z-50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? 'text-black' : 'text-gray-500'}`
          }
        >
          <FaHome className="text-2xl" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? 'text-black' : 'text-gray-500'}`
          }
        >
          <IoShirt className="text-2xl" />
          <span>Collection</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? 'text-black' : 'text-gray-500'}`
          }
        >
          <FaAddressCard className="text-2xl" />
          <span>About</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? 'text-black' : 'text-gray-500'}`
          }
        >
          <FaPhoneAlt className="text-2xl" />
          <span>Contact</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
