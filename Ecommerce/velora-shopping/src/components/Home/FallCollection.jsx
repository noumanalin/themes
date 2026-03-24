import React from "react";
import fabric from "../../assets/fall3.avif";
import fall from "../../assets/fall1.avif"
const FallCollection = () => {
    return (
        <section
            className="md:h-screen md:px-10 px-3 py-16 grid md:grid-cols-2 gap-10 items-start"
            aria-labelledby="fall-collection-title"
        >
            {/* Left Images */}
            <div className="relative flex justify-start">
                <figure className="w-full">
                    <img
                        src={fall}
                        alt="Elegant model wearing beige fall outfit with leather handbag"
                        className="w-[95%] md:w-[70%] md:h-[90vh] object-cover"
                    />
                </figure>
                <figure className="absolute md:top-20 top-10 md:right-[10%] right-0 w-[30%] shadow-md">
                    <img
                        src={fall}
                        alt="Portrait of woman in fall fashion outfit from Autumn 2023 collection"
                        className="w-full h-auto object-cover"
                    />
                </figure>
            </div>

            {/* Right Content */}
            <article className="h-full flex flex-col justify-between gap-5">
                {/* Text Content */}
                <div className="md:order-last order-first">
                    <p className="uppercase text-sm tracking-widest mb-3 text-primary">
                        Autumn/Winter 2023
                    </p>
                    <h2
                        id="fall-collection-title"
                        className="text-2xl md:text-5xl mb-5 uppercase"
                    >
                        Autumn Elegance Collection
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Discover our Autumn/Winter 2023 Collection featuring timeless
                        elegance with earthy tones, luxe fabrics, and versatile pieces
                        designed for effortless layering. From cozy knitwear to tailored
                        outerwear, every detail embraces comfort and sophistication.
                    </p>

                    {/* SEO-friendly link */}
                    <a
                        href="#"
                        className="relative inline-block text-sm tracking-widest cursor-pointer group uppercase w-fit text-primary"
                        aria-label="Shop the Autumn/Winter 2023 Fashion Collection"
                    >
                        Shop the Collection
                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                    </a>
                </div>

                {/* Fabric Image */}
                <div className="flex justify-end mb-6">
                    <figure className="text-right">
                        <img
                            src={fabric}
                            alt="Luxury close-up texture of wool and cashmere fabric for fall outfits"
                            className="md:w-[90%] h-48 object-cover ml-auto"
                        />
                        <figcaption className="text-xs mt-2 uppercase tracking-wide">
                            Premium Wool & Cashmere
                        </figcaption>
                    </figure>
                </div>
            </article>
        </section>
    );
};

export default FallCollection;
