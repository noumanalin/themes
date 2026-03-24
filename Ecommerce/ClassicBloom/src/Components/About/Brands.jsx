
import React from "react";

const brandLogos = [
    { src: "/about/Brands/brand1.png", alt: "Brand 1 Logo" },
    { src: "/about/Brands/brand2.png", alt: "Brand 2 Logo" },
    { src: "/about/Brands/brand3.png", alt: "Brand 3 Logo" },
    { src: "/about/Brands/brand4.png", alt: "Brand 4 Logo" },
 
];

const Brands = () => {
    return (
        <section className="sectionlayout md:py-20 py-10 bg-white">
        
                

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    {brandLogos.map((brand, index) => (
                        <figure key={index} className="flex justify-center items-center">
                            <img
                                src={brand.src}
                                alt={brand.alt}
                                loading="lazy"
                                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                            />
                        </figure>
                    ))}
                </div>
        
        </section>
    );
};

export default Brands;



