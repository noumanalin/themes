import React from "react";
import hero from "../assets/hero.webp";

const Hero = () => {
    return (
        <section
            className="flex flex-col md:flex-row bg-white min-h-screen items-center justify-center px-3 md:px-10 py-6 pt-20"
            aria-labelledby="hero-title"
        >
            {/* Left Side */}
            <article className="md:w-1/2 w-full md:pr-12 flex flex-col justify-center">
                <header>
                    <h1
                        id="hero-title"
                        className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                    >
                        Building Modern Web <br />
                        Experiences with Style
                    </h1>
                </header>

                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Hi, I’m <strong className="font-semibold">Lily Smith</strong>, a web
                    developer passionate about crafting clean, functional, and engaging
                    digital experiences. Explore my portfolio and discover how I bring
                    ideas to life online.
                </p>

                <form className="mb-2" aria-label="Newsletter Signup">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Subscribe with your email
                    </label>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                        <div className="w-full md:w-2/3 relative flex group">
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="border focus:border-primary rounded-md px-4 py-3 w-full outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-white font-semibold rounded-md cursor-pointer hover:shadow-2xl px-6 py-3 w-full md:w-auto"
                        >
                            Get Started
                        </button>
                    </div>
                </form>

                <p className="text-sm text-gray-500 mt-2">
                    By subscribing, you agree to our{" "}
                    <a href="#" className="underline text-primary">
                        terms of service
                    </a>
                    .
                </p>
            </article>

            {/* Right Side */}
            <figure className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="rounded-lg overflow-hidden max-w-sm md:max-w-lg w-full">
                    <img
                        src={hero}
                        alt="Portrait of a web developer"
                        className="object-cover w-full h-[400px] md:h-[520px]"
                    />
                </div>
                <figcaption className="sr-only">
                    A professional portrait of Lily Smith, web developer.
                </figcaption>
            </figure>
        </section>
    );
};

export default Hero;
