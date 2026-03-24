import React ,{useState} from "react";
import logo from "../assets/logo.png";
import { BsArrowRightShort } from "react-icons/bs";

const Footer = () => {
    
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        // simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Subscribed successfully with: ${email}`);
        setEmail(""); // clear input
    };
    
    const navLinks = [
        { name: "About", link: "/about" },
        { name: "Sustainability", link: "/sustainability" },
        { name: "Press", link: "/press" },
        { name: "Contact", link: "/contact" },
        { name: "Delivery and returns", link: "/delivery-returns" },
    ];

    const socialLinks = [
        { name: "Instagram", link: "https://instagram.com" },
        { name: "Facebook", link: "https://facebook.com" },
        { name: "Pinterest", link: "https://pinterest.com" },
    ];

    const policyLinks = [
        { name: "Terms & Conditions", link: "/terms" },
        { name: "Privacy policy", link: "/privacy" },
    ];

    return (
        <footer className="md:px-10 px-3 my-10">
            {/* Logo */}
            <div className="flex flex-col items-center">
                <a href="/" aria-label="Innové Couture Home">
                    <img src={logo} alt="Innové Couture Logo" className="h-6 md:h-16 lg:h-20" />
                </a>
            </div>

            {/* Signup Section */}
            <section
                className="mt-10 mx-auto w-full max-w-5xl font-sans"
                aria-labelledby="newsletter-heading"
            >
                <div className="border-y border-gray-200 flex md:flex-row flex-col">
                    <div className="w-full md:w-1/2 flex items-center md:justify-start justify-center py-6">
                        <h2 id="newsletter-heading" className="sr-only">
                            Newsletter Signup
                        </h2>
                        <span className="md:text-left text-center">
                            SIGN UP TO GET 10% OFF YOUR FIRST ORDER
                        </span>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full md:w-1/2 flex items-center justify-between md:px-8 py-6 md:border-l md:border-t-0 border-t border-gray-200"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email Address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-base placeholder-inherit"
                            required
                        />
                        <button
                            type="submit"
                            className="ml-4 text-4xl cursor-pointer"
                            aria-label="Submit email"
                        >
                            <BsArrowRightShort  className=" hover:text-primary"/>
                        </button>
                    </form>
                </div>
            </section>

            {/* Navigation Links */}
            <nav
                className="mt-8 mb-8 mx-auto w-full max-w-5xl"
                aria-label="Footer Navigation"
            >
                <ul className="flex flex-wrap gap-5 justify-center text-base">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="hover:text-primary">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-200 w-full py-6">
                <div className="flex flex-col md:flex-row md:justify-between items-center text-sm gap-3">
                    {/* Left */}
                    <div className="mb-2 md:mb-0 flex-1 md:order-first order-last">
                        <p>&copy; 2025 Betacommunes. All rights reserved.</p>
                    </div>

                    {/* Center Social Links */}
                    <nav
                        className="flex-1 flex justify-center space-x-8"
                        aria-label="Social Media Links"
                    >
                        <ul className="flex space-x-8">
                            {socialLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Policy Links */}
                    <nav
                        className="flex-1 flex justify-end space-x-8"
                        aria-label="Legal Links"
                    >
                        <ul className="flex space-x-8">
                            {policyLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="hover:text-primary">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
