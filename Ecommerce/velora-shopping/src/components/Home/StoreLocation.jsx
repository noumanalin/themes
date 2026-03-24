import React from "react";
import location1 from "../../assets/location1.png";
import location2 from "../../assets/location2.png";
const StoreLocation = () => {
    return (
        <section className="flex md:flex-row flex-col items-center md:justify-between px-3 md:px-10 py-10 gap-10">
            {/* Right Content (Images) */}
            <div className="md:w-1/2 flex gap-3 justify-center items-end">
                <figure className="w-1/2">
                    <img
                        src={location1}
                        alt="Modern boutique accessories display"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </figure>
                <figure className="w-1/2">
                    <img
                        src={location2}
                        alt="Contemporary clothing store interior"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </figure>
            </div>

            {/* Left Content (Text) */}
            <article className="md:w-1/3 w-full md:space-y-8 space-y-2 order-last md:order-first">
                <h2 className="text-2xl md:text-5xl leading-tight">
                    VELORA FLAGSHIP STORE – NEW YORK
                </h2>

                <address className="not-italic text-gray-700">
                    145 Madison Avenue, Manhattan, NY 10016 <br />
                    <time dateTime="10:00">10:00 AM</time> –{" "}
                    <time dateTime="19:00">7:00 PM</time> (Open Daily)
                </address>

                <nav>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block text-sm tracking-widest cursor-pointer group uppercase w-fit text-primary"
                        aria-label="Get directions to Velora New York store"
                    >
                        Get Directions
                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                    </a>
                </nav>
            </article>
        </section>
    );
};

export default StoreLocation;
