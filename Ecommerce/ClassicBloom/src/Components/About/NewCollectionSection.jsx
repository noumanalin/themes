import React from "react";

const NewCollectionSection = () => {
    const iconData = [
        {
            icon: "/about/NewCollection/freshTypes.png",
            label: "Fresh Essence",
        },
        {
            icon: "/about/NewCollection/floralTypes.png",
            label: "Blooming Floral",
        },
        {
            icon: "/about/NewCollection/oceanicTypes.png",
            label: "Ocean Breeze",
        },
    ];

    return (
        <section
            className="py-16 sectionlayout "
            aria-labelledby="new-collection-heading"
        >
            <div className="w-full flex flex-col md:flex-row items-center justify-between lg:gap-20 gap-10">
                {/* Image Section */}
                <figure className="w-full md:w-1/2 relative md:order-first order-last">
                    <div className="absolute lg:block hidden w-[100%] h-[80vh] border -left-5 -top-5 inset-0 z-0"></div>
                    <img
                        src="/about/NewCollection/newCollection.jpg"
                        alt="Display of pure natural skincare and fragrance products"
                        className="w-full lg:h-[80vh] z-0"
                    />
                    <figcaption className="absolute md:block hidden top-5 -right-3 text-6xl md:text-[200px] py-0 text-[var(--primary)] opacity-70 meow-script-regular z-10">
                        new
                    </figcaption>
                </figure>

                {/* Text Section */}
                <article className="w-full md:w-1/2">
                    <header>
                        <h2
                            id="new-collection-heading"
                            className="text-2xl md:text-4xl uppercase mb-4 leading-snug text-gray-800"
                        >
                            Naturally Crafted Beauty for a Radiant You
                        </h2>
                    </header>

                    <p className=" mb-8 leading-relaxed tracking-wide">
                        Indulge in the freshness of nature with our thoughtfully curated range
                        of organic fragrances and skincare products. Each formula is designed
                        to uplift your mood, nourish your skin, and highlight your natural
                        charm with botanical purity.
                    </p>

                    {/* Icons Section */}
                    <div className="flex flex-wrap items-center justify-between mt-8">
                        {iconData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center justify-end"
                            >
                                <img src={item.icon} alt={item.label} className="md:w-28 w-20" />
                                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

            {/* SEO Meta Tags */}
            <meta
                name="description"
                content="Explore our new collection of organic skincare and perfumes. Enjoy naturally inspired scents—fresh, floral, and oceanic—for everyday rejuvenation."
            />
            <meta
                name="keywords"
                content="organic skincare, natural beauty, eco-friendly perfumes, botanical fragrances, floral essence, ocean breeze scent"
            />
        </section>
    );
};

export default NewCollectionSection;
