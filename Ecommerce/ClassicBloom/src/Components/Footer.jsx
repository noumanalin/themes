import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

/**
 * Footer Component
 * 
 * Purpose:
 * - Displays company contact info, quick navigation links, and subscription form.
 * - Designed using semantic HTML for SEO and accessibility.
 * - Uses map() to render data dynamically from arrays.
 */

const Footer = () => {
    const fullYear = new Date().getFullYear();

    // Contact info data (icon + text, no links)
    const contactInfo = [
        {
            icon: FaMapMarkerAlt ,
            text: "58 White St., New York",
        },
        {
            icon: FaEnvelope,
            text: "blossom_company@mail.com",
        },
        {
            icon: FaPhoneAlt,
            text: "+1 (800) 987 456 98",
        },
    ];

    // Navigation links data (name + link + optional icon)
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Shop", link: "/shop" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact" },
        { name: "Delivery", link: "/delivery" },
    ];

    return (
        <footer className="bg-[#1e1e1e] text-gray-300 relative py-10">
            {/* Main Footer Grid */}
            <section className="max-w-7xl mx-auto grid md:grid-cols-3 sectionlayout gap-12">

                {/* Contact Info Section */}
                <address className="not-italic">
                    <h2 className="text-white text-lg font-semibold mb-6 tracking-widest">
                        CLASSIC BLOOM
                    </h2>
                    <ul className="space-y-3">
                        {contactInfo.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <item.icon className="mt-1 text-gray-400"/>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </address>

                {/* Navigation Section */}
                <nav aria-label="Footer Navigation" className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-white font-semibold mb-5 text-lg">
                            Useful Links
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.slice(0, 3).map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.link}
                                        className="hover:text-white cursor-pointer transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="mt-10 space-y-2">
                            {navLinks.slice(3).map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.link}
                                        className="hover:text-white cursor-pointer transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Subscription Section */}
                <section aria-label="Newsletter Subscription">
                    <h3 className="text-white font-semibold mb-5 text-lg">Subscribe</h3>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="relative w-full max-w-sm"
                    >
                        <label htmlFor="email" className="sr-only">
                            Enter your email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-transparent border-b border-white focus:outline-none py-2 text-gray-200"
                            required
                        />
                        <button
                            type="submit"
                            className="relative z-30 px-8 py-2 mt-2 w-full border border-white text-white text-2xl font-semibold bg-transparent overflow-hidden 
              transition-all duration-700 hover:text-gray-900 cursor-pointer
              after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
              after:bg-white after:rounded-md after:-z-10 after:translate-y-full 
              after:transition-all after:duration-700 hover:after:scale-[300]"
                        >
                            Subscribe
                        </button>
                    </form>
                </section>
            </section>

            {/* Footer Bottom Bar */}
            <section className="border-t border-gray-700 mt-20 pt-10 sectionlayout flex flex-col md:flex-row items-center justify-between text-gray-400 text-center md:text-left gap-4">
                <p>© {fullYear} Classic Bloom. All Rights Reserved.</p>
                <Link
                    to="/terms"
                    className="hover:text-white transition-colors duration-200"
                >
                    Terms and Conditions
                </Link>
            </section>

            {/* Subtle Background Watermark */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 800 600"
                >
                    <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        fontSize="400"
                        fontFamily="serif"
                        fill="white"
                    >
                        B
                    </text>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
