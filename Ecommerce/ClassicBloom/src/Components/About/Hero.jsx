import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative lg:h-screen h-[60vh] z-10 bg-cover bg-center bg-no-repeat flex sectionlayout"
            style={{ backgroundImage: "url('/about/banner.png')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div> {/* overlay for readability */}

            <div className="z-10 md:px-6 px-3 py-5 text-white">
                <h1 className="text-3xl md:text-6xl font-bold md:mb-4">About Us</h1>
                <p className="text-lg md:text-xl lmd:eading-relaxed max-w-md">
                    Discover the artistry behind our fragrances — a blend of elegance, passion,
                    and timeless beauty. Each perfume tells a story crafted with care and sophistication,
                    capturing the essence of luxury in every bottle.
                </p>
            </div>

           
        </section>
    );
};

export default Hero;
