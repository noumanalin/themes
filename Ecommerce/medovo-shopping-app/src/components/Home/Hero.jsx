import React, { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import hero1 from "../../assets/hero.jpg";
import hero2 from "../../assets/hero-2.jpg";

const slides = [
    {
        id: 1,
        image: hero1,
        subtitle: "Summer Collection",
        title: "Fall - Winter Collections 2030",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quasi deserunt amet magni beatae voluptatibus iste pariatur magnam consectetur odio!",
        button: "Shop Now",
    },
    {
        id: 2,
        image: hero2,
        subtitle: "New Arrivals",
        title: "Exclusive Spring Collections 2031",
        description:
            "Discover the latest fashion arrivals. Trendy styles, fresh looks, and timeless designs to upgrade your wardrobe instantly.",
        button: "Shop now",
    },
];

const socialLinks = [
    { id: 1, icon: FaTwitter, url: "#", label: "Twitter" },
    { id: 2, icon: FaInstagram, url: "#", label: "Instagram" },
    { id: 3, icon: FaFacebookF, url: "#", label: "Facebook" },
    { id: 4, icon: FaPinterestP, url: "#", label: "Pinterest" },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto slide every 5s
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <article
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="relative z-30 md:px-20 px-5 w-full h-full flex items-center">
                        <div className="py-10 w-2/3 md:w-1/3 flex flex-col justify-between h-full">
                            {/* Text content */}
                            <header
                                className={`text-left space-y-6 pt-5 transition-all duration-2000 ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
                                    }`}
                            >
                                <p className="tracking-[5px] text-secondary text-[12px] font-semibold uppercase">
                                    {slide.subtitle}
                                </p>
                                <h1 className="text-2xl md:text-5xl text-primary font-semibold">
                                    {slide.title}
                                </h1>
                                <p className="text-gray-700">{slide.description}</p>
                                <button className="bg-black px-6 py-3 tracking-[5px] uppercase text-[12px] text-white font-semibold cursor-pointer">
                                    {slide.button}
                                </button>
                            </header>

                            {/* Social icons */}
                            <nav className="flex space-x-6 mt-8 transition-all duration-1000" aria-label="Social Media">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.id}
                                            href={social.url}
                                            aria-label={social.label}
                                            className="text-primary/70 hover:text-primary transition"
                                        >
                                            <Icon />
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </article>
            ))}

            {/* Arrows */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="hidden md:block absolute top-1/2 left-5 -translate-y-1/2 text-black p-3 cursor-pointer transition z-40"
            >
                <IoIosArrowRoundBack className="font-semibold text-4xl" />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="hidden md:block absolute top-1/2 right-5 -translate-y-1/2 p-3 text-black transition z-40"
            >
                <IoIosArrowRoundForward className="text-4xl cursor-pointer" />
            </button>
        </section>
    );
};

export default Hero;
