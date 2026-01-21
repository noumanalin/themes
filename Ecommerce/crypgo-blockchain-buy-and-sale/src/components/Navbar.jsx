import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../utils/appData";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = 100;
      setSticky(window.scrollY > target);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);
  const handleLinkClick = () => setShowMenu(false);

  return (
    <>
      <header
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky
            ? "bg-gray-900/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
          }`}
      >
        <div className="wrapper flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            {navLinks &&
              navLinks.map((item, index) =>
                item.href === "/docs" ? (
                  <NavLink
                    key={index}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-md transition-colors duration-300 ${isActive ? "text-tertiary" : "text-white"
                      } hover:text-[var(--tertiary-color)]`
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <HashLink
                    key={index}
                    smooth
                    to={item.href}
                    className="text-md transition-colors duration-300 text-white hover:text-[var(--tertiary-color)]"
                  >
                    {item.name}
                  </HashLink>
                )
              )}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 bg-transparent rounded-md border border-[var(--tertiary-color)] text-white hover:bg-[var(--tertiary-color)] hover:text-gray-900 transition-colors duration-300">
              Login
            </button>
            <button className="px-4 py-2 bg-[var(--tertiary-color)] text-gray-900 rounded-md hover:bg-transparent hover:text-white border border-[var(--tertiary-color)] transition-colors duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col w-6 h-5 justify-between items-center relative z-60 overflow-hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-0.5 bg-white rounded transform transition-all duration-300 ${showMenu ? "rotate-[45deg] translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${showMenu ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transform transition-all duration-300 ${showMenu ? "-rotate-[45deg] -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-screen bg-gray-900 z-40 transform transition-transform duration-300 md:hidden ${showMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <nav className="flex flex-col items-start p-8 gap-6 text-lg">
            {navLinks &&
              navLinks.map((item, index) =>
                item.href === "/docs" ? (
                  <NavLink
                    key={index}
                    to={item.href}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${isActive ? "text-tertiary" : "text-white"
                      } hover:text-tertiary`
                    }
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <HashLink
                    key={index}
                    smooth
                    to={item.href}
                    className="transition-colors duration-300 text-white hover:text-tertiary"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </HashLink>
                )
              )}

            <div className="flex flex-col gap-4 mt-6 w-full">
              <button
                className="w-full px-6 py-3 border border-[var(--tertiary-color)] text-white rounded-md hover:bg-[var(--tertiary-color)] hover:text-gray-900 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Sign In
              </button>
              <button
                className="w-full px-6 py-3 bg-[var(--tertiary-color)] text-gray-900 rounded-md hover:bg-transparent hover:text-white border border-[var(--tertiary-color)] transition-colors duration-300 font-medium"
                onClick={handleLinkClick}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
