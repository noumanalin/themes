import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="md:block hidden px-3 md:px-20 bg-black text-gray-200 z-10">
            <div className="flex justify-between items-center py-3">
                {/* Left Section - Offer Text */}
                <p>Enjoy free delivery & hassle-free 30-day returns.</p>

                {/* Right Section - Navigation + Currency */}
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors uppercase tracking-wide duration-200 text-sm"
                            >
                                Log In
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors uppercase tracking-wide duration-200 text-sm"
                            >
                                Help Center
                            </a>
                        </li>

                        {/* Custom Currency Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button className="uppercase tracking-wide text-sm hover:text-white cursor-pointer z-10 flex items-center gap-1">
                                USD
                                <IoIosArrowDown
                                    className={`text-lg font-semibold transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            <ul
                                className={`absolute right-0 mt-2 bg-white z-[1000] text-black shadow-lg transition-all duration-300 ease-out ${open
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10 pointer-events-none"
                                    }`}
                            >
                                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                                    USD
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                                    EUR
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                                    GBP
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Topbar;
