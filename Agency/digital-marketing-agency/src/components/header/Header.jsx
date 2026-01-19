import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/axtra-logo-light.webp";
import Demos from "./Demos";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Others from "./Others";
import Blog from "./Blog";

const links = [
  { name: "demos", component: <Demos />, isFullWidth: true },
  { name: "portfolio", component: <Portfolio />, isFullWidth: false },
  { name: "service", component: <Service />, isFullWidth: false },
  { name: "others", component: <Others />, isFullWidth: false },
  { name: "blog", component: <Blog />, isFullWidth: false },
  { name: "shop", component: null, isFullWidth: false },
];

const dropdownAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-accent text-light relative z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Axtra logo" className="w-[120px] h-auto" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 relative z-50">
            {links.map((link, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={`/${link.name}`}
                  className="uppercase font-semibold text-sm py-2 px-2 flex items-center gap-1"
                >
                  {link.name}
                  {/* {link.component && <ChevronDown size={14} />} */}
                </NavLink>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.component && activeDropdown === index && (
                    <motion.div
                      variants={dropdownAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`absolute top-full mt-2  -translate-x-1/2  ${link.isFullWidth ? "w-[100vw] left-[300px]" : "left-1/2 bg-white "
                        }`}
                      style={{ transformOrigin: "top center" }}
                    >
                      {link.component}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Icons + Mobile Toggle */}
          <div className="flex items-center gap-4 text-lg">
            <button>
              <Search />
            </button>
            <button
              className="flex flex-col items-end gap-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="w-4 h-0.5 bg-white" />
              <span className="w-5 h-0.5 bg-white" />
              <span className="w-3 h-0.5 bg-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={dropdownAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-[#1c1c1c] p-6 z-40 shadow-lg"
          >
            <ul className="flex flex-col">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-gray-700 last:border-0"
                >
                  <NavLink
                    to={`/${link.name}`}
                    className="block uppercase font-semibold text-sm py-4 hover:text-orange-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
