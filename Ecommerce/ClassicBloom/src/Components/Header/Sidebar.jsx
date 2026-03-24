import React from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
    const contactInfo = [
        { icon: <FaEnvelope />, text: "cosmecos@mail.com" },
        { icon: <FaPhoneAlt />, text: "+1 (800) 987 456 98" },
        { text: "123 Cosmetic Street, Los Angeles, USA" },
    ];

    const socials = [
        { icon: <FaTwitter />, name: "Twitter" },
        { icon: <FaFacebookF />, name: "Facebook" },
        { icon: <FaLinkedinIn />, name: "LinkedIn" },
        { icon: <FaInstagram />, name: "Instagram" },
    ];

    return (
        <>
            <aside
                className={`fixed lg:block hidden top-0 left-0 h-full bg-gray-800 text-white w-[30%] shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                aria-hidden={!isOpen}
            >
                <header className="p-6 flex justify-between items-center ">
                    <button onClick={onClose} className="text-xl font-bold w-full text-end cursor-pointer" aria-label="Close sidebar">
                        ✕
                    </button>
                </header>

                <section className="p-6 space-y-8 flex flex-col justify-center ">
                    
                    <h2 className="text-lg font-semibold">About ClassicBloom</h2>

                    <p>
                        Welcome to COSMECOS — your premium beauty destination offering the
                        latest trends in skincare, cosmetics, and personal care.
                    </p>

                    <div>
                        <h3 className="font-semibold mb-2">Contact Info</h3>
                        <ul className="space-y-2 text-sm">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex item-center">
                                    {item.icon && <span className="inline mr-2">{item.icon}</span>}
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4 pt-4 text-lg">
                        {socials.map((s, i) => (
                            <a key={i} href="#" aria-label={s.name} className="hover:text-teal-500">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </section>
            </aside>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/40 bg-opacity-40 z-40"
                    aria-label="Sidebar overlay"
                ></div>
            )}
        </>
    );
};

export default Sidebar;
