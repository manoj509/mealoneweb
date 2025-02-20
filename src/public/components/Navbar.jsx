

import React, { useState } from "react";
import { FiMenu, FiX , FiChevronDown } from "react-icons/fi"; // Icons for mobile menu
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import "../components/css/navbar.css"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <nav   className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-20 bg-green-800 shadow-md">
      {/* Logo and Branding */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="MealOne Logo" className="h-12 md:h-16 w-auto" />
        <div className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-4xl md:text-5xl">M</span>eal
          <span className="text-4xl md:text-5xl">O</span>ne
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-white font-bold">
        {["about", "tiffin"].map((menu) => (
          <li
            key={menu}
            className="cursor-pointer hover:text-green-400 relative flex items-center gap-1"
            onMouseEnter={() => setDropdown(menu)}
          // onMouseLeave={() => setDropdown(null)}
          >
            {menu === "about" ? "About Us" : "Tiffin Service"}
            <FiChevronDown className="text-lg transition-transform duration-300" />
            {dropdown === menu && (
              <div
                onMouseLeave={() => setDropdown(null)}
                className="absolute left-0 top-full mt-2 z-10 w-48 mt-4 mx-30 bg-white text-gray-700 shadow-lg rounded-lg m-3 my-5 space-y-2 text-sm transition-all duration-300"
              >
                {menu === "about" ? (
                  <>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                      Our Story
                    </p>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                      Our Mission
                    </p>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                      Meet the Team
                    </p>
                  </>
                ) : (
                  <>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                     Chhatrapati Sambhajinagar
                    </p>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                      Subscription Plans
                    </p>
                    <p className="px-4 py-2 rounded-lg cursor-pointer font-medium text-gray-800 hover:bg-green-100 hover:text-green-700 transition-all duration-300">
                      Corporate Offers
                    </p>
                  </>
                )}
              </div>

            )}
          </li>
        ))}
        <li className="cursor-pointer hover:text-green-400">Subscriptions Plans</li>
        <li className="cursor-pointer hover:text-green-400">Join Us</li>
      </ul>

      {/* Order Now Button (Always Visible) */}
      <a
      href="https://wa.me/yourwhatsappphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center whatsapp-icon"
    >
      <FaWhatsapp size={30} />
    </a>
     
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="z-30  absolute top-16 left-0 w-full bg-green-900 text-white shadow-md flex flex-col space-y-4 py-4 px-6 md:hidden">
          <p className="cursor-pointer hover:text-green-400">About Us</p>
          <p className="cursor-pointer hover:text-green-400">Tiffin Service</p>
          <p className="cursor-pointer hover:text-green-400">For Corporates</p>
          <p className="cursor-pointer hover:text-green-400">Join Us</p>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-green-600">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

