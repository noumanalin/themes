import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import AppLink from "./AppLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "DEMO", to: "#demo" },
    { name: "INNER PAGES", to: "#inner-pages" },
    { name: "FEATURES", to: "#features" },
    { name: "USED TECHNOLOGIES", to: "#technologies" },
  ];

  return (
    <nav  className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="wrapper px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <HashLink  to={'#heroBanner'} smooth className="text-xl font-semibold tracking-widest">COSMECOS.</HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <HashLink
                smooth
                to={link.to}
                className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <User className="w-5 h-5" />
          <AppLink>PURCHASE</AppLink> 
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  smooth
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-800 hover:text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
