import React, { useState, useEffect } from "react";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import LoginSignup from "../Pages/LoginSignup";
import Search from "../Pages/Search";

const Navbar = () => {
    const [cartCount] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "H.", link: "/" },
        { name: "SHOP", link: "/shop" },
        { name: "COLLECTIONS", link: "/collection" },
        { name: "ABOUT", link: "/about" },
    ];

    // Determine navbar background: transparent on home and top, else white
    const navbarBg =
        location.pathname === "/" && !scrolled ? "bg-transparent border-gray-400" : "bg-white border-gray-200";

    return (
        <>
            <header
                className={`fixed w-full top-0 z-30 transition-colors border-b border-gray-3 hover:bg-white duration-300 ${navbarBg}`}
            >
                <nav className="flex items-center justify-between md:px-10 px-3 py-5">
                    
                    {/* Left Nav (hidden on small screens) */}
                    <ul className="hidden md:flex items-center gap-6 text-sm font-semibold   w-[33%]">
                        {navLinks.map((link, index) =>
                            <li key={index}>
                                <NavLink
                                    to={link.link}
                                    className={({ isActive }) =>
                                        `hover:text-primary transition cursor-pointer ${isActive ? "text-primary" : ""
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>

                        )}
                    </ul>

                    {/* Logo */}
                    <Link to="/" className=" w-[33%]">
                        <img src={logo} alt="Logo" className="cursor-pointer w-40" />
                    </Link>

                    {/* Right Icons */}
                    <div className="flex items-center gap-5 text-lg cursor-pointer">
                        {/* Search */}
                        <button
                            onClick={() => setShowSearch(true)} // show overlay when icon clicked
                            className="relative hover:text-gray-600"
                        >
                            <FiSearch className="text-xl cursor-pointer" />

                        </button>

                        {/* Conditionally render Search overlay */}
                        {showSearch && (
                            <Search onClose={() => setShowSearch(false)} />
                        )}

                        {/* User Icon (large screen) */}
                        <button
                            onClick={() => setShowAuth(true)}
                            className="relative hover:text-gray-600 cursor-pointer hidden md:block"
                        >
                            <FiUser className="text-xl" />
                        </button>



                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative hover:text-gray-600"
                        >
                            <FiShoppingBag className="text-xl" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Hamburger (small screen) */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden block"
                        >
                            <FiMenu className="text-2xl" />
                        </button>
                    </div>
                    
                </nav>
            </header>

            {/* Sidebar Drawer for small screens */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 px-3 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    } flex flex-col justify-star items-center`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between py-5 w-full pb-10">
                    <img src={logo} alt="Logo" className="cursor-pointer" />

                    <button onClick={() => setSidebarOpen(false)}>
                        <FiX className="text-2xl" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-8 text-lg font-semibold items-center">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.link}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `hover:primary transition ${isActive ? "text-primary" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Sidebar Icons (optional) */}
                <div className="flex items-center gap-6 mt-6 text-xl">
                    <button
                        onClick={() => {
                            setShowAuth(true);
                            setSidebarOpen(false);
                        }}
                    >
                        <FiUser />
                    </button>
                </div>
            </div>

            {/* Overlay for Sidebar */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Login / Signup Drawer */}
            <LoginSignup open={showAuth} onClose={() => setShowAuth(false)} />
        </>
    );
};

export default Navbar;
