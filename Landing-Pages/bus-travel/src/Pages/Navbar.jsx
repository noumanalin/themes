import React, { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menu = () => setToggle(!toggle);

    // 🔹 Menu Items Array
    const menuItems = [
        { name: "Home", to: "home", offset: 0 },
        { name: "About", to: "about", offset: -50 },
        { name: "Tour", to: "tour", offset: -100 },
        { name: "Packages", to: "packages", offset: 0 },
        { name: "Contact", to: "contact", offset: 0 },
    ];

    return (
        <div>
            <nav className="md:px-20 px-3 py-5 bg-white flex items-center justify-between top-0 z-50 w-full">
                {/* Logo */}
                <Link
                    to="home"
                    activeClass="font-semibold"
                    smooth={true}
                    offset={0}
                    duration={300}
                >
                    <div className="flex items-center justify-center cursor-pointer">
                        <p className="text-3xl font-bold text-black">GoBus</p>
                    </div>
                </Link>

                {/* 🔹 Desktop Menu */}
                <div className="flex items-center">
                    <ul className="md:flex lg:gap-10 gap-3 items-center justify-center hidden">
                        {menuItems.map((item) => (
                            <li
                                key={item.to}
                                className="text-black uppercase hover:text-secondary active:text-secondary transition duration-300 font-semibold py-1 cursor-pointer"
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={700}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Book A Trip Button */}
                <div className="md:block hidden">
                    <button className="cursor-pointer text-white px-5 py-1 my-1 rounded-full font-semibold relative group overflow-hidden border-2 border-secondary">
                        <span className="text-white relative z-10 text-sm uppercase group-hover:text-secondary duration-500">
                            Book A Trip
                        </span>
                        <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-x-full h-full"></span>
                        <span className="absolute top-0 left-0 w-full bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                        <span className="absolute delay-300 top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
                    </button>
                </div>

                {/* 🔹 Mobile Menu */}
                <div className="px-3 md:hidden block bg-white z-50">
                    <ul
                        className={`fixed top-0 right-0 h-screen text-center text-black font-semibold duration-500 space-y-10 w-[100%] bg-white shadow-lg pt-20 ${toggle ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        {menuItems.map((item) => (
                            <li
                                key={item.to}
                                className="focus:text-secondary active:text-secondary py-2 cursor-pointer"
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={300}
                                    onClick={menu} // Close menu on click
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Book A Trip Button */}
                        <div className="block md:hidden">
                            <button className="cursor-pointer text-white py-20 my-1 rounded-full font-semibold relative group overflow-hidden border-2 border-secondary">
                                <span className="text-white relative z-10 text-sm uppercase group-hover:text-secondary duration-500">
                                    Book A Trip
                                </span>
                                <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-x-full h-full"></span>
                                <span className="absolute top-0 left-0 w-full bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                                <span className="absolute delay-300 top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
                            </button>
                        </div>
                    </ul>

                    
                    
                    
                    {/* Toggle Icon */}
                    <div className="md:mr-5 block place-content-center text-black cursor-pointer md:hidden">
                        {toggle ? (
                            <IoClose
                                onClick={menu}
                                className="hover:rotate-[360deg] p-1 rounded-full h-8 w-8 transition-transform duration-500"
                            />
                        ) : (
                            <IoMenuOutline
                                onClick={menu}
                                className="h-8 w-8 p-1 rounded-full transition-transform duration-500"
                            />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
