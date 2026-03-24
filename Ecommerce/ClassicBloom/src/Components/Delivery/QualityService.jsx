import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

const QualityService = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [testDisplay, setTestDisplay] = useState(0);
    const [yearDisplay, setYearDisplay] = useState(0);

    // Motion values for counters
    const testCount = useMotionValue(0);
    const yearCount = useMotionValue(0);

    useEffect(() => {
        const testAnim = animate(testCount, 1200, {
            duration: 3,
            ease: "easeOut",
            onUpdate: (latest) => setTestDisplay(Math.floor(latest)),
        });

        const yearAnim = animate(yearCount, 15, {
            duration: 3,
            ease: "easeOut",
            onUpdate: (latest) => setYearDisplay(Math.floor(latest)),
        });

        return () => {
            testAnim.stop();
            yearAnim.stop();
        };
    }, []);

    return (
        <section className="w-full sectionlayout py-10">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <p className="text-[var(--primary)] meow-script-regular md:text-left text-center text-5xl md:text-7xl mb-2">
                        Our Commitment
                    </p>

                    <h1 className="text-2xl md:text-4xl font-light text-gray-800 tracking-wide mb-6">
                        QUALITY ASSURANCE
                    </h1>

                    <p className="font-semibold text-gray-700 max-w-xl mb-6">
                        Setting the benchmark for reliability, consistency, and excellence in every product we deliver.
                    </p>

                    <p className="text-gray-500 leading-relaxed mb-10 max-w-xl">
                        From raw material selection to final inspection, our multi-stage quality control ensures each
                        item meets international standards. We believe quality isn’t tested at the end — it’s built in
                        from the very beginning.
                    </p>

                    {/* Stats Section */}
                    <section className="flex gap-12 items-end mb-12">
                        <div>
                            <motion.h3 className="text-[var(--primary)] text-4xl lg:text-5xl font-light">
                                {testDisplay}+
                            </motion.h3>
                            <p className="text-sm text-gray-500 mt-2">Tests Conducted</p>
                        </div>

                        <div>
                            <motion.h3 className="text-[var(--primary)]  text-4xl lg:text-5xl font-light">
                                {yearDisplay} Years
                            </motion.h3>
                            <p className="text-sm text-gray-500 mt-2">Of Certified Excellence</p>
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
                        learn more
                    </button>
                </div>

                {/* Right Content  */}
                <figure className="relative flex justify-center items-center w-full md:px-0 px-5">
                   
                       

                        {/* img */}
                        <img
                        src="/delivery/qa.webp"
                            alt="Quality Assurance Process"
                            className="w-full h-full object-cover relative z-0 transition-all duration-1000"
                            loading="lazy"
                        />

                      
                  
                </figure>
            </article>

        </section>
    );
};

export default QualityService;
