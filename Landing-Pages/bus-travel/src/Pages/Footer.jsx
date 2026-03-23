import React from "react";
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaLocationDot,
    FaVoicemail,
    FaPhone,
} from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();

    const quickLinks = ["Home", "Bus", "Hotels", "Cruise"];

    const contactLinks = [
        {
            id: 1,
            icon: FaPhone,
            content: "+91 98765 43210",
        },
        {
            id: 2,
            icon: FaVoicemail,
            content: "support@gobus.com",
        },
        {
            id: 3,
            icon: FaLocationDot,
            content: "New Delhi, India",
        },
    ];

    return (
        <footer className="contact bg-gray-200 md:py-10 py-3 mt-20 md:px-20 px-3 text-gray-600">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-28  py-5">
                {/* Column 1 */}
                <section className="md:w-1/3 w-full space-y-5 md:space-y-10">
                    <h2 className="text-black text-3xl font-bold">GoBus</h2>
                    <p className="text-md tracking-wide leading-6">
                        With GoBus, traveling is made simple. Book your seats easily,
                        enjoy comfortable rides, and explore destinations without stress.
                    </p>

                    <div className="flex items-center justify-start gap-2 text-white">
                        <a href="#">
                            <FaFacebookF className="bg-secondary cursor-pointer h-10 w-10 p-3 rounded-full" />
                        </a>

                        <a href="#">
                            <FaInstagram className="bg-secondary cursor-pointer h-10 w-10 p-3 rounded-full" />
                        </a>

                        <a href="#">
                            <FaYoutube className="bg-secondary cursor-pointer h-10 w-10 p-3 rounded-full" />
                        </a>
                    </div>
                </section>

                {/* Column 2 & 3 */}
                <nav
                    aria-label="Footer Navigation"
                    className="flex items-start justify-between md:w-1/3 w-full gap-5"
                >
                    <div className="md:space-y-5 space-y-3">
                        <h2 className="text-md font-semibold text-black uppercase tracking-wider">
                            Quick Links
                        </h2>
                        <ul className="md:space-y-3 text-md">
                            {quickLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-secondary transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:space-y-5 space-y-3">
                        <h2 className="text-md font-semibold text-black uppercase tracking-wider">
                            Contact Us
                        </h2>
                        <ul className="md:space-y-3 text-md">
                            {contactLinks.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition flex items-center gap-2"
                                    >
                                        <item.icon />
                                        {item.content}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Column 4 */}
                <section className="md:w-1/3 w-full md:space-y-5 space-y-3">
                    <h2 className="text-md uppercase font-semibold text-black">
                        Subscribe
                    </h2>
                    <p className="mb-3">
                        Get travel updates, exclusive discounts, and the latest offers from
                        GoBus — straight to your inbox.
                    </p>
                    <form
                        className="flex flex-col items-center gap-5"
                        aria-label="Newsletter Subscription"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email Address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-3 rounded-md text-sm focus:outline-none bg-white px-3"
                            required
                        />
                        <button
                            type="submit"
                            className="py-2 rounded-md w-full text-white bg-secondary cursor-pointer"
                            aria-label="Subscribe to Newsletter"
                        >
                            Subscribe
                        </button>
                    </form>
                </section>
            </div>

            {/* Bottom Bar */}
            <div className="text-center mt-5">
                <p>© {year} GoBus. All rights reserved.</p>

                <p>
                    Developed by{" "}
                    <a href="#" className="text-secondary font-medium">
                        Beta Communes
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
