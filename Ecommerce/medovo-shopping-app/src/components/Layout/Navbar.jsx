import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
    { name: "P.Details", link: "/details" },
    { name: "B.Details", link: "/bdetails" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        className="md:px-20 px-3 py-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-40" />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex text-lg items-center space-x-10 font-semibold">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-200 
                  ${isActive
                    ? "text-primary border-b-2 border-secondary"
                    : "text-primary/80 group"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {!isActive && (
                      <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center justify-end space-x-8">
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <FiSearch className="w-5 h-5" />
          </button>

          <button
            aria-label="Wishlist"
            className="text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <FaRegHeart className="w-5 h-5" />
          </button>

          <Link to="/cart" className="flex items-center gap-2">
            <button
              aria-label="Shopping Cart"
              className="text-gray-700 hover:text-primary transition-colors duration-200 relative cursor-pointer"
            >
              <HiOutlineShoppingBag className="w-6 h-7" />
              <span className="absolute top-3 right-2 text-[10px] rounded-full w-2 h-2 flex items-center justify-center">
                0
              </span>
            </button>
            <p className="font-semibold text-primary">$0.00</p>
          </Link>
        </div>

        {/* Hamburger - only small screens */}
        <button
          aria-label="Menu"
          className="md:hidden text-gray-700 hover:text-primary transition-colors duration-200"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="w-7 h-7 cursor-pointer" />
        </button>
      </nav>

      {/* Sidebar (from left) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close + Logo */}
        <div className="flex items-center justify-end p-5 ">
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            <FiX className="w-7 h-7 cursor-pointer" />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <ul className="flex flex-col p-6 space-y-6 text-lg font-semibold">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block transition-colors duration-200 ${isActive
                    ? "text-primary"
                    : "text-primary/80 hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sidebar Icons (small screens) */}
        <div className="flex items-center gap-6 px-6 mt-6">
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <FiSearch className="w-5 h-5" />
          </button>

          <button
            aria-label="Wishlist"
            className="text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <FaRegHeart className="w-5 h-5" />
          </button>

          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <button
              aria-label="Shopping Cart"
              className="text-gray-700 hover:text-primary transition-colors duration-200 relative cursor-pointer"
            >
              <HiOutlineShoppingBag className="w-6 h-7" />
              <span className="absolute top-3 right-2 text-[10px] rounded-full w-2 h-2 flex items-center justify-center">
                0
              </span>
            </button>
            <p className="font-semibold text-primary">$0.00</p>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}
    </header>
  );
};

export default Navbar;
