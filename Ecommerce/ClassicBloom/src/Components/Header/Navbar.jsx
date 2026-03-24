import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline, IoMenu, IoClose } from "react-icons/io5";
import { PiDotsNine } from "react-icons/pi";
import Search from "../Search"

const Navbar = ({ onMenuClick }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const leftLinks = [
        { name: "HOME", path: "/" },       
        { name: "ABOUT", path: "/about" },
        { name: "SHOP", path: "/shop" },
    ];

    const rightLinks = [
        { name: "BLOG", path: "/blog" },
        { name: "CONTACT", path: "/contact" },
        { name: "DELIVERY", path: "/delivery" },
    ];

    const combinedLinks = [...leftLinks, ...rightLinks];

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // 🔹 Scroll Detection with Threshold (equal to topbar height)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) { // 👈 adjust this height to your topbar height
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full z-50">

            {/* 🔹 Navbar */}
            <nav
                className={`flex items-center justify-between sectionlayout py-4 bg-white w-full transition-all duration-500 z-50 text-gray-900 ${isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
                    }`}
                aria-label="Main navigation"
            >
                {/* Left Menu Icon */}
                <button
                    onClick={onMenuClick}
                    className="lg:block hidden p-5 border border-gray-200 transition cursor-pointer group"
                    aria-label="Open sidebar menu"
                >
                    <PiDotsNine className=" text-4xl group-hover:text-[var(--primary)]" />
                </button>

                {/* Left Links */}
                <ul className="lg:flex hidden items-center gap-8 text-sm font-medium">
                    {leftLinks.map((link, index) => (
                        <li key={index} className="cursor-pointer relative group">
                            <Link to={link.path} className="tracking-wide">
                                {link.name}
                            </Link>
                            <span className="absolute left-0 -bottom-7 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </li>
                    ))}
                </ul>

                {/* Logo */}
                <Link to="/" className="text-xl font-semibold tracking-widest text-center">
                    <img src="/logo.png" alt="Classic Bloom" className="w-20" />
                </Link>

                {/* Right Links */}
                <ul className="lg:flex hidden items-center gap-8 text-sm font-medium">
                    {rightLinks.map((link, index) => (
                        <li key={index} className="cursor-pointer relative group">
                            <Link to={link.path} className="tracking-wide">
                                {link.name}
                            </Link>
                            <span className="absolute left-0 -bottom-7 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex items-center gap-6 text-xl">
                    <Link to="/login">
                        <FaRegUser className="cursor-pointer hover:text-[var(--primary)] transition-colors duration-200" />
                    </Link>

                    <Link to="/cart">
                        <div className="relative cursor-pointer">
                            <HiOutlineShoppingBag />
                            <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <IoSearchOutline className="cursor-pointer hover:text-[var(--primary)] transition-colors duration-200" /></button>
                    {/* Search Overlay */}
                    <Search open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />



                    {/* Mobile Menu Button */}
                    <button
                        onClick={handleMenuToggle}
                        className="lg:hidden p-2 text-2xl cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </nav>

            {/* 🔹 Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className=" fixed lg:hidden z-40 top-20 bg-white w-full animate-slideLeft">
                    <ul className="flex flex-col items-center py-4 space-y-3 text-base font-medium">
                        {combinedLinks.map((link, index) => (
                            <li key={index} onClick={() => setIsMobileMenuOpen(false)}>
                                <Link
                                    to={link.path}
                                    className="block px-3 py-2 hover:text-[var(--primary)] transition"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
