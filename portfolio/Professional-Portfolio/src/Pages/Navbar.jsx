import React, { useState } from "react";
import { FaRegClone, FaUserCircle } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation Links
    const navLinks = [
        {
            label: "Page",
            icon: <FaRegClone className="mr-2 text-xl text-primary" />,
            href: "#",
        },
        {
            label: "Account",
            icon: <FaUserCircle className="mr-2 text-xl text-primary" />,
            href: "#",
        },
        {
            label: "Docs",
            icon: <BiCodeBlock className="mr-2 text-xl text-primary" />,
            href: "#",
        },
    ];

    return (
        <header className="w-full fixed bg-white z-50 md:bg-transparent backdrop-blur-3xl">
            {/* Navbar */}
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <span className="text-lg font-bold text-gray-800">
                    portfolio
                </span>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="flex items-center text-gray-800 hover:text-primary font-medium transition"
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Right Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-200 px-6 py-2 text-base font-semibold text-black transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-black/50 cursor-pointer">
                        <span className="text-lg uppercase">sign in</span>
                        <div
                            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] 
              group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]"
                        >
                            <div className="relative h-full w-10 bg-primary/20"></div>
                        </div>
                    </button>

                    <button className="bg-primary px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-primary/90 transition cursor-pointer">
                        BLOCKS
                    </button>
                </div>

                {/* Mobile Hamburger / Close */}
                <button
                    className="md:hidden ml-auto text-2xl text-gray-700 cursor-pointer"
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col px-5 py-6 bg-white shadow-lg">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-5 mb-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="flex items-center text-gray-800 hover:text-primary font-medium cursor-pointer transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Signin + Blocks Buttons */}
                    <div className="mt-auto flex flex-col items-start gap-4">
                        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-200 px-6 py-2 text-base font-semibold text-black transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-black/50 cursor-pointer">
                            <span className="text-lg uppercase">sign in</span>
                            <div
                                className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] 
                group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]"
                            >
                                <div className="relative h-full w-10 bg-primary/20"></div>
                            </div>
                        </button>

                        <button className="bg-primary px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-primary/90 transition cursor-pointer">
                            BLOCKS
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
