import React from "react";
import { FiPhone, FiMail, FiLifeBuoy } from "react-icons/fi";

const Contact = () => {
    return (
        <section
            className="flex flex-col md:flex-row gap-6 md:gap-10 md:px-10 px-3 bg-white"
            aria-labelledby="contact-heading"
        >
            {/* Left Side - Contact Info */}
            <aside
                className="bg-primary/10  rounded-lg p-8 md:p-12 flex-1"
                itemScope
                itemType="https://schema.org/Organization"
            >
                <h2
                    id="contact-heading"
                    className="text-2xl font-semibold mb-4"
                    itemProp="department"
                >
                    Contact Information
                </h2>
                <p className="text-gray-400 mb-8">
                    Fill up the form and our team will get back to you within 24 hours.
                </p>

                <address className="not-italic">
                    <ul className="space-y-6">
                        <li className="flex items-center space-x-3">
                            <FiPhone className="text-xl" aria-hidden="true" />
                            <a
                                href="tel:+14245353523"
                                className="font-medium hover:underline"
                                itemProp="telephone"
                            >
                                +1 (424) 535 3523
                            </a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FiMail className="text-xl" aria-hidden="true" />
                            <a
                                href="mailto:hello@mail.com"
                                className="font-medium hover:underline"
                                itemProp="email"
                            >
                                hello@mail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FiLifeBuoy className="text-xl" aria-hidden="true" />
                            <a href="/support" className="font-medium hover:underline">
                                Open Support Ticket
                            </a>
                        </li>
                    </ul>
                </address>
            </aside>

            {/* Right Side - Contact Form */}
            <article className="flex-1 bg-white py-6 md:p-10">
                <form
                    action="#"
                    method="POST"
                    className="w-full"
                    itemScope
                    itemType="https://schema.org/ContactForm"
                >
                    {/* Name Fields */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="first-name" className="text-sm text-gray-600 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="e.g. Lucas"
                                required
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="last-name" className="text-sm text-gray-600 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                name="last-name"
                                placeholder="e.g. Jones"
                                required
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e.g. lucas@mail.com"
                            required
                            className="border-b border-gray-300 focus:outline-none p-2"
                        />
                    </div>

                    {/* Radio Options */}
                    <fieldset className="mb-6">
                        <legend className="text-sm text-gray-600 mb-3">
                            What are you interested in?
                        </legend>
                        <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="design"
                                    defaultChecked
                                    className="accent-primary h-4 w-5 cursor-pointer"
                                />
                                Design
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="development"
                                    className="accent-primary h-4 w-5 cursor-pointer"
                                />
                                Development
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="support"
                                    className="accent-primary h-4 w-5 cursor-pointer"
                                />
                                Support
                            </label>
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="interest"
                                    value="other"
                                    className="accent-primary h-4 w-5 cursor-pointer"
                                />
                                Other
                            </label>
                        </div>
                    </fieldset>

                    {/* Message */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="message" className="text-sm text-gray-600 mb-1">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            required
                            className="border-b border-gray-300 focus:outline-none p-2 resize-none h-28"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-primary cursor-pointer hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </article>
        </section>
    );
};

export default Contact;
