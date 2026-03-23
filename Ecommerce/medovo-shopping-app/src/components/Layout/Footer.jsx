import React from "react";
import logo from "../../assets/footer-logo.png";
import pay from "../../assets/payment.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";

const Footer = () => {
    const year = new Date().getFullYear();

    const shoppingLinks = [
        "Men's Apparel",
        "Footwear Collection",
        "Fashion Accessories",
        "Special Offers",
    ];

    const supportLinks = [
        "Get in Touch",
        "Payment Options",
        "Shipping Info",
        "Returns & Refunds",
    ];

    return (
        <footer className="bg-gray-950 py-10 mt-20 md:px-20 px-3 text-gray-400">
            <section className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-28 md:py-10 py-5">
                {/* Column 1 - About */}
                <article className="md:w-1/3 w-full space-y-5 md:space-y-10">
                    <img src={logo} alt="Brand Logo " className=" w-44" />
                    <p className="text-md tracking-wide leading-6">
                        We focus on delivering quality designs and styles that place our
                        customers at the center of everything we create.
                    </p>
                    <img
                        src={pay}
                        alt="Accepted Payment Methods"
                        className="cursor-pointer"
                    />
                </article>

                {/* Column 2 & 3 - Navigation */}
                <nav
                    aria-label="Footer Navigation"
                    className="flex items-start justify-between md:w-1/3 w-full gap-5"
                >
                    <div className="md:space-y-5 space-y-3">
                        <h2 className="text-md font-semibold text-white uppercase tracking-wider">
                            Shop
                        </h2>
                        <ul className="md:space-y-3 text-md">
                            {shoppingLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                        title={`Explore ${item}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:space-y-5 space-y-3">
                        <h2 className="text-md font-semibold text-white uppercase tracking-wider">
                            Support
                        </h2>
                        <ul className="md:space-y-3 text-md">
                            {supportLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="hover:text-white transition"
                                        title={`${item} Information`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Column 4 - Newsletter */}
                <aside className="md:w-1/3 w-full md:space-y-5 space-y-3">
                    <h2 className="text-md uppercase font-semibold text-white">
                        Join Our Newsletter
                    </h2>
                    <p className="mb-3">
                        Subscribe to get updates on latest arrivals, exclusive promotions,
                        and style inspiration directly in your inbox.
                    </p>
                    <form
                        className="flex items-center border-b-2 border-gray-300"
                        aria-label="Newsletter Subscription"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email Address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-3 text-sm focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="py-3 hover:text-white text-sm"
                            aria-label="Subscribe to Newsletter"
                        >
                            <HiOutlineMail className="text-xl cursor-pointer" />
                        </button>
                    </form>
                </aside>
            </section>

            {/* Bottom Bar */}
            <section className="md:mt-10 md:border-t border-gray-600 md:pt-6 text-center text-gray-400">
                <p>
                    © {year} All Rights Reserved | Designed with{" "}
                    <IoMdHeartEmpty className="inline text-secondary align-middle mx-1" /> by{" "}
                    <a
                        href="#"
                        className="text-secondary hover:underline"
                        title="Website Designer"
                    >
                        betacommunes
                    </a>
                </p>
            </section>
        </footer>
    );
};

export default Footer;
