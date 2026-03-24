import React from "react";
import heroImage from "../../assets/hero.png"; // replace with your image path

const Hero = () => {
    return (
        <header
            className="relative h-screen bg-cover bg-center flex justify-center brightness-120"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

            {/* Content */}
            <article data-aos="fade-up" className="md:w-1/4 text-center mt-32 relative z-10">
                <h1 className="text-2xl md:text-4xl font-semibold leading-12 tracking-wide text-black">
                    MINIMALISM AND FANTASY
                </h1>

                {/* Animated underline link */}
                <nav>
                    <a
                        href="#"
                        className="relative mt-6 inline-block text-sm tracking-widest cursor-pointer group"
                    >
                        EXPLORE COLLECTION
                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-gray-600 transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4 group-hover:right-1/4"></span>
                    </a>
                </nav>
            </article>
        </header>
    );
};

export default Hero;
