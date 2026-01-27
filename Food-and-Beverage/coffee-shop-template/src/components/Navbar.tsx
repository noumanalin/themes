
import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navbarLinks } from "../utils/appData"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-[#0F172A] md:bg-black/20 text-white py-4 px-6 md:px-10  fixed w-screen z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold">
          <Link to="/">KOPPEE</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 capitalize">
          {navbarLinks.map((item, index) => (
            <div
              key={index}
              className="relative group"
              ref={item.dropDown ? dropdownRef : null}
            >
              {item.dropDown ? (
                <>
                  <button
                    className="flex items-center font-medium hover:text-[#C9AB81] transition-colors"
                    onMouseEnter={() => setActiveDropdown(index)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" /> {/* ✅ Lucide */}
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-10 ${
                      activeDropdown === index ? "block" : "hidden group-hover:block"
                    }`}
                  >
                    {item.dropDown.map((dropItem, dropIndex) => (
                      <div key={dropIndex} className="hover:bg-gray-100">
                        {dropItem.href.includes("#") ? (
                          <HashLink
                            smooth
                            to={dropItem.href}
                            className="block px-4 py-2"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropItem.name}
                          </HashLink>
                        ) : (
                          <Link
                            to={dropItem.href}
                            className="block px-4 py-2"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : item.href.includes("#") ? (
                <HashLink
                  smooth
                  to={item.href}
                  className="font-medium hover:text-[#C9AB81] transition-colors"
                >
                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#C9AB81] transition-colors ${
                      isActive ? "text-[#C9AB81]" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} {/* ✅ Lucide */}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden bg-[#0F172A] mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto py-4 space-y-4">
          {navbarLinks.map((item, index) => (
            <div key={index}>
              {item.dropDown ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left font-medium py-2"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    /> {/* ✅ Lucide */}
                  </button>
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === index ? "max-h-32" : "max-h-0"
                    }`}
                  >
                    {item.dropDown.map((dropItem, dropIndex) => (
                      <div key={dropIndex} className="py-2">
                        {dropItem.href.includes("#") ? (
                          <HashLink
                            smooth
                            to={dropItem.href}
                            className="block text-gray-300 hover:text-[#C9AB81]"
                            onClick={() => setShowMenu(false)}
                          >
                            {dropItem.name}
                          </HashLink>
                        ) : (
                          <Link
                            to={dropItem.href}
                            className="block text-gray-300 hover:text-[#C9AB81]"
                            onClick={() => setShowMenu(false)}
                          >
                            {dropItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : item.href.includes("#") ? (
                <HashLink
                  smooth
                  to={item.href}
                  className="block font-medium py-2 hover:text-[#C9AB81]"
                  onClick={() => setShowMenu(false)}
                >
                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block font-medium py-2 hover:text-[#C9AB81] transition-colors ${
                      isActive ? "text-[#C9AB81]" : ""
                    }`
                  }
                  onClick={() => setShowMenu(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;