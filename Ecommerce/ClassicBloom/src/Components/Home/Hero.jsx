import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const heroData = [
        {
            id: 1,
            title: "Discover the Essence of Nature",
            description:
                "Experience the freshness and purity of natural products designed to bring calmness and beauty to your lifestyle.",
            image: "/home/hero/hero1.png",
            imagePosition: "left", // image left, text right
           
        },
        {
            id: 2,
            title: "Elegance that Defines You",
            description:
                "Explore timeless fragrances and premium collections crafted to express your unique identity.",
            image: "/home/hero/hero2.png",
            imagePosition: "right", // image right, text left
        },
    ];

    const nextSlide = () => {
        setCurrent((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
    };

    const slide = heroData[current];
    const isImageLeft = slide.imagePosition === "left";

    // Animation variants
    const imageVariants = {
        hidden: { x: isImageLeft ? -100 : 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
        exit: { x: isImageLeft ? 100 : -100, opacity: 0, transition: { duration: 0.6 } },
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
        }),
        exit: { y: -50, opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            className="relative w-full overflow-hidden min-h-[90vh] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(/home/hero/bg.avif)`,
            }}
        >
           

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        className={`w-full md:w-1/2 flex justify-center ${isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
                            }`}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className=" w-full max-w-md object-cover"
                        />
                    </motion.div>

                    <motion.div
                        key={`text-${slide.id}`}
                        className={`w-full md:w-1/2 ${isImageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
                            }`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.h2
                            custom={0}
                            variants={textVariants}
                            className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-gray-900"
                        >
                            {slide.title}
                        </motion.h2>
                        <motion.p
                            custom={1}
                            variants={textVariants}
                            className="text-lg md:text-xl mb-6 drop-shadow-md text-gray-900"
                        >
                            {slide.description}
                        </motion.p>


                        {/* Explore Button */}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2
             overflow-hidden transition-all duration-700 text-lg 
             after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
             after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
             after:transition-all after:duration-700 hover:border-gray-900 hover:after:scale-[300] cursor-pointer uppercase"
                        >
                            Explore Now
                        </motion.button>
                        
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* === Vertically Centered Buttons === */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 font-semibold rounded-r-md shadow-md transition duration-300 rotate-180 origin-center cursor-pointer"
                style={{ writingMode: "vertical-rl" }}
            >
                Previous
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 px-3 py-2 font-semibold rounded-l-md shadow-md transition duration-300 cursor-pointer"
                style={{ writingMode: "vertical-rl" }}
            >
                Next
            </button>
        </section>
    );
};

export default Hero;
