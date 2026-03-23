import React from "react";

const ContactInfo = () => {
    return (
        <section className=" md:p-20 px-3 flex md:flex-row flex-col gap-10 md:gap-28 justify-between pt-10">

            {/* Contact Information */}
            <article className="space-y-7 md:w-1/2 w-full">
                <header className="space-y-3">
                    <p className="text-secondary text-sm uppercase tracking-[4px] font-semibold">
                        Get in Touch
                    </p>
                    <h2 className="md:text-5xl text-2xl text-primary font-semibold">
                        Contact Us
                    </h2>
                    <p className="text-sm">
                        We’re here to answer your questions and provide support. Reach out
                        to us and our team will get back to you as soon as possible.
                    </p>
                </header>

                <address className="space-y-5 not-italic">
                    <div>
                        <h3 className="text-2xl font-bold pb-3 text-primary">United States</h3>
                        <p>215 Madison Street, Denver, CO 80205</p>
                        <p>+1 720-555-2389</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold pb-3 text-primary">France</h3>
                        <p>45 Rue de la République, 69002 Lyon</p>
                        <p>+33 4 72-555-893</p>
                    </div>
                </address>
            </article>

            {/* Contact Form */}
            <aside className="w-full md:w-1/2">
                <form className="space-y-8">
                    {/* Name & Email Fields */}
                    <div className="flex md:flex-row flex-col gap-10">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required
                            className="outline-none py-3 px-2 border border-gray-300 w-full"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required
                            className="outline-none py-3 px-2 border border-gray-300 w-full"
                        />
                    </div>

                    {/* Message Field */}
                    <textarea
                        name="message"
                        placeholder="Write your message..."
                        rows="5"
                        required
                        className="border border-gray-300 w-full outline-none px-2 py-3 resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="text-white cursor-pointer bg-primary py-3 px-5 font-semibold uppercase tracking-[4px] text-sm"
                    >
                        Send Message
                    </button>
                </form>
            </aside>
        </section>
    );
};

export default ContactInfo;
