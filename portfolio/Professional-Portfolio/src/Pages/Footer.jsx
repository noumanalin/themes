import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { id: 1, title: "Home", link: "#" },
        { id: 2, title: "About Us", link: "#" },
        { id: 3, title: "Blog", link: "#" },
        { id: 4, title: "Services", link: "#" },
    ];

    return (
        <footer className="w-full md:px-10 px-4 md:pt-10 bg-white border-t border-gray-300">
            <section className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">

                {/* Navigation + Subscribe */}
                <nav
                    className="flex flex-col md:flex-row items-center gap-4 md:order-last"
                    aria-label="Footer Navigation"
                >
                    <ul className="flex flex-wrap items-center gap-6 text-gray-700 font-medium">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.link}
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-primary/80 transition uppercase cursor-pointer"
                        aria-label="Subscribe to newsletter"
                    >
                        Subscribe
                    </button>
                </nav>

                {/* Copyright */}
                <address className="not-italic text-gray-700 text-center md:text-left md:order-first">
                    <p>
                        &copy; {year}{" "}
                        <span className="font-semibold">portfolio</span> by Creative
                        beta. Distributed by{" "}
                        <a href="#" className="hover:underline text-primary">
                            betacommunes
                        </a>
                    </p>
                </address>
            </section>
        </footer>
    );
};

export default Footer;
