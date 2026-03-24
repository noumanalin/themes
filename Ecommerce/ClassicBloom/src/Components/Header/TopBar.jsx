import React, { useState, useEffect } from "react";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const TopBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const infoLinks = ["Terms of Use", "New Arrivals", "Delivery"];

    const socials = [
        { icon: <FaTwitter />, name: "Twitter" },
        { icon: <FaFacebookF />, name: "Facebook" },
        { icon: <FaLinkedinIn />, name: "LinkedIn" },
        { icon: <FaInstagram />, name: "Instagram" },
    ];

    // Detect scroll to hide TopBar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`bg-gray-900 text-white hidden lg:flex justify-between items-center sectionlayout py-3 transition-all duration-500 ${isScrolled
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
        >
            {/* Left Links */}
            <nav aria-label="Top navigation">
                <ul className="flex gap-5">
                    {infoLinks.map((link, index) => (
                        <li key={index} className="flex items-center gap-3">
                            {index !== 0 && <span>—</span>}
                            <a
                                href="#"
                                className="hover:text-[var(--top-primary)] cursor-pointer transition-colors duration-200"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Contact + Social */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <FaEnvelope />
                    <a
                        href="mailto:blossom_company@mail.com"
                        className="hover:text-[var(--top-primary)]"
                    >
                        blossom_company@mail.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <FaPhoneAlt />
                    <a
                        href="tel:+180098745698"
                        className="hover:text-[var(--top-primary)]"
                    >
                        +1 (800) 987 456 98
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href="#"
                            aria-label={s.name}
                            className="hover:text-[var(--top-primary)] text-lg transition-colors duration-200"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
