import React, { useState, useEffect } from "react";
import logoBlack from "../../assets/logoo.png";
import logoWhite from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useShop } from "../../Context/ShopContext.jsx"; // ✅ Import useShop

const Navbar = ({ onLoginClick }) => {
  const [toggle, setToggle] = useState(true);
  const [shadow, setShadow] = useState(false);

  const { cartItemsCount } = useShop(); // ✅ Get cart count

  const menu = () => setToggle(!toggle);

  const handleScroll = () => {
    setShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "blog" },
    { path: "/shop", label: "shop" },
    { path: "/feature", label: "features" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <>
      {/* === NAVBAR === */}
      <div
        className={`top-0 z-50 w-full fixed transition-shadow duration-300 bg-white ${shadow ? "shadow-lg" : ""
          } ${!toggle ? "hidden" : "block"}`}
      >
        <nav className="h-20 py-2 px-3 md:px-20  flex items-center justify-between text-gray-800 relative">

          {/* Navbar list items */}
          <ul className="hidden md:flex gap-3 order-2 lg:order-1">
            {links.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block cursor-pointer py-1 duration-300 hover:text-primary uppercase tracking-widest font-semibold ${isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="order-1 lg:order-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img src={logoBlack} alt="logo" className="w-22 h-14 " />
          </div>

          {/* Right-side icons */}
          <div className="flex gap-5 items-center order-3">
            {/* Hamburger */}
            <div className="md:hidden text-3xl">
              <IoMenu onClick={menu} />
            </div>

            {/* Icons */}
            <div className="flex md:gap-8 gap-2">
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();     // Prevent default anchor nav
                  onLoginClick();         // Show LoginForm
                }}
                className="flex items-center justify-center gap-2 hover:text-primary"
              >
                <FaRegUser className="cursor-pointer text-xl" />
                <p className="hidden lg:block font-semibold tracking-widest uppercase">
                  login
                </p>
              </NavLink>

              {/* ✅ Dynamic cart count */}
              <NavLink to="/cart" className="lg:flex hidden items-center justify-center gap-2 hover:text-primary">
                <BsCart4 className="cursor-pointer text-xl" />
                <p className="font-semibold tracking-widest uppercase">
                  cart <span>({cartItemsCount})</span>
                </p>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>

      {/* === SIDEBAR === */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-sectionbg z-50 transform transition-transform duration-500 ${toggle ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        {/* Close icon */}
        <div className="flex justify-end px-5 py-4 text-5xl">
          <IoClose
            onClick={menu}
            className="cursor-pointer text-gray-50 hover:rotate-[360deg] transition-transform duration-700 ease-in-out hover:text-primary"
          />
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col items-center justify-center space-y-6 mt-10">
          {/* Logo */}
          <img src={logoWhite} alt="logo" className="w-24 mb-6" />

          {/* Links */}
          <ul className="space-y-5 text-center">
            {links.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={menu}
                  className={({ isActive }) =>
                    `block cursor-pointer duration-300 hover:text-primary uppercase tracking-widest font-semibold  text-white ${isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>

              {/* ✅ Dynamic cart count */}
              <NavLink to="/cart" className="md:hidden flex text-white  items-center justify-center gap-2 hover:text-primary">
                <BsCart4 className="cursor-pointer text-xl" />
                <p className="font-semibold tracking-widest uppercase">
                  cart <span>({cartItemsCount})</span>
                </p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
