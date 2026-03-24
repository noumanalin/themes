import React from "react";
import cashmare from "../../assets/about-cashmare.avif";
import fall from "../../assets/fall1.avif";

const Stores = () => {
    return (
        <section
            className="md:h-screen md:px-10 px-3 py-10 grid md:grid-cols-2 gap-10 items-start"
            aria-labelledby="stores-title"
        >
            {/* Left Images */}
            <aside className="relative flex justify-start">
                <figure className="w-full">
                    <img
                        src={fall}
                        alt="Fashion model in cream blazer and skirt holding a designer handbag"
                        className="w-[95%] md:w-[70%] md:h-[90vh] object-cover"
                    />
                </figure>
                <figure className="absolute md:top-20 top-10 md:right-[10%] right-0 w-[30%] shadow-md">
                    <img
                        src={fall}
                        alt="Close-up of model in luxury fall collection blazer"
                        className="w-full h-auto object-cover"
                    />
                </figure>
            </aside>

            {/* Right Content */}
            <article className="h-full flex flex-col justify-between gap-5">
                {/* Store Information */}
                <header className="md:order-last order-first">
                    <h2
                        id="stores-title"
                        className="text-2xl md:text-5xl mb-5 uppercase"
                    >
                        Our Global Stores
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        With a growing network of boutiques across North America and a strong global eCommerce presence, Innove brings timeless luxury to communities worldwide. From flagship city locations to curated online experiences, our stores reflect a legacy of design and craftsmanship.
                    </p>

                    {/* SEO-friendly link */}
                    <nav>
                        <a
                            href="/stores"
                            className="relative inline-block text-sm tracking-widest cursor-pointer group uppercase w-fit text-primary"
                            aria-label="Discover Innove stores and global locations"
                        >
                            See Our Stores
                            <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                        </a>
                    </nav>
                </header>

                {/* Fabric / Design Detail */}
                <div className="flex md:justify-end justify-center mb-6">
                    <figure className="md:text-right">
                        <img
                            src={cashmare}
                            alt="Detailed view of premium cashmere and wool textile"
                            className="md:w-[90%] h-48 object-cover ml-auto"
                        />
                        <figcaption className="text-xs mt-2 uppercase tracking-wide">
                            Premium Cashmere & Wool Textures
                        </figcaption>
                    </figure>
                </div>
            </article>
        </section>
    );
};

export default Stores;
