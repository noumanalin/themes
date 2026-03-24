import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const AboutPerfume = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [perfumeDisplay, setPerfumeDisplay] = useState(0);
    const [yearDisplay, setYearDisplay] = useState(0);

    // Create motion values
    const perfumeCount = useMotionValue(0);
    const yearCount = useMotionValue(0);

    useEffect(() => {
        // Animate perfume count
        const perfumeAnim = animate(perfumeCount, 470, {
            duration: 3,
            ease: "easeOut",
            onUpdate: (latest) => setPerfumeDisplay(Math.floor(latest)),
        });

        // Animate year count
        const yearAnim = animate(yearCount, 10, {
            duration: 3,
            ease: "easeOut",
            onUpdate: (latest) => setYearDisplay(Math.floor(latest)),
        });

        return () => {
            perfumeAnim.stop();
            yearAnim.stop();
        };
    }, []);

    return (
        <section className="w-full sectionlayout mx-auto pb-10">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <p className="text-[var(--primary)] meow-script-regular md:text-left text-center text-5xl md:text-7xl mb-2">
                        About perfume
                    </p>

                    <h1 className="text-2xl md:text-4xl font-light text-gray-800 tracking-wide mb-6">
                        PERFECT PERFUME
                    </h1>

                    <p className="font-semibold text-gray-700 max-w-xl mb-6">
                        Popularized through customer relationships with some of the world's
                        most recognizable faces.
                    </p>

                    <p className="text-gray-500 leading-relaxed mb-10 max-w-xl">
                        Our fragrances blend art and science, offering a luxurious experience
                        inspired by nature. Discover captivating scents that define elegance
                        and individuality, made to leave a lasting impression.
                    </p>

                    {/* Stats Section */}
                    <section className="flex gap-12 items-end mb-12">
                        <div>
                            <motion.h3
                                className="text-[var(--primary)] text-4xl lg:text-5xl font-light"
                            >
                                {perfumeDisplay}K
                            </motion.h3>
                            <p className="text-sm text-gray-500 mt-2">Perfumes sold</p>
                        </div>

                        <div>
                            <motion.h3
                                className="text-[var(--primary)]  text-4xl lg:text-5xl font-light"
                            >
                                {yearDisplay} years
                            </motion.h3>
                            <p className="text-sm text-gray-500 mt-2">Perfect years</p>
                        </div>
                    </section>

                    {/* Explore Button */}
                    <button
                        className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2
             overflow-hidden transition-all duration-700 text-lg 
             after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
             after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
             after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                    >
                        explore more
                    </button>
                </div>

                {/* Right Content - Video Preview */}
                <figure className="relative flex justify-center items-center w-full md:px-0 px-5">
                    <div className="relative inline-block">
                        {/* Decorative Border */}
                        <div className="absolute inset-0 border w-full h-full border-gray-700 -left-5 -top-5 z-10"></div>

                        {/* Thumbnail */}
                        <img
                            src="/home/yt-thumbnail.avif"
                            className="w-full h-full object-cover relative z-0 transition-all duration-1000"
                            loading="lazy"
                            itemProp="image"
                        />

                        {/* Play Button */}
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="absolute inset-0 flex justify-center items-center z-20 bg-black/30 hover:bg-black/50 transition-color duration-300"
                            aria-label="Play video"
                        >
                            <FaPlay className="text-gray-800 text-6xl bg-white/80 rounded-full p-4 hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </figure>
            </article>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                    <div className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-3 right-3 text-white text-3xl z-50 hover:text-teal-400"
                            aria-label="Close video"
                        >
                            <FaTimes />
                        </button>

                        {/* YouTube Embed */}
                        <iframe
                            src="https://www.youtube.com/embed/8ZK_S-46KwE?autoplay=1"
                            title="Perfume Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutPerfume;
