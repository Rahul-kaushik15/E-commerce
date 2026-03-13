import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const {setShowSearch, getCartCount, navigate} = useContext(ShopContext)
  return (
    <div className="flex items-center justify-between gap-6 font-medium">
      <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="bg-gray-700 w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="bg-gray-700 w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="bg-gray-700 w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="bg-gray-700 w-2/4 border-none h-[1.5px] hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 shrink-0">
        <img
        onClick={() => {
          setShowSearch(true);
          navigate('/collection');
        }}
          src={assets.search_icon}
          alt="Search Icon"
          
          className="w-5 cursor-pointer"
        />
        

        <div className="group relative">
          <Link to='/login'>
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          /></Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col bg-slate-100 px-5 py-3 w-30 rounded-md text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">My Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 cursor-pointer"
            alt="Cart Icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setMobileMenu(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      {/* Sidebar Menu for Mobile */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-200 sm:hidden ${mobileMenu ? "w-full" : "w-0"} `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-2 p-4 cursor-pointer"
            onClick={() => setMobileMenu(false)}
          >
            <img src={assets.dropdown_icon} alt="Close Icon" className="w-4" />
            <p>Back</p>
          </div>
          <div
            className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4 ${mobileMenu ? "block" : "hidden"}`}
          >
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>HOME</p>
              <hr className="bg-gray-700 w-2/4 border-none h-[1.6px] hidden" />
            </NavLink>

            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>COLLECTION</p>
              <hr className="bg-gray-700 w-2/4 border-none h-[1.6px] hidden" />
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
              <hr className="bg-gray-700 w-2/4 border-none h-[1.6px] hidden" />
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
              <hr className="bg-gray-700 w-2/4 border-none h-[1.6px] hidden" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
