import React from "react";
import F1 from "../../assets/feature1.png";
import F2 from "../../assets/feature2.png";
import F3 from "../../assets/feature3.png";

const FeatureCollections = () => {
    return (
        <section className="md:px-20 px-3 mt-20 py-10 md:flex gap-40 items-end h-full">

            {/* Accessories */}
            <article className="md:mb-20 mb-10 md:w-1/2">
                <figure className="flex flex-col items-start w-full  group md:space-y-5 space-y-2">
                    <img
                        src={F2}
                        alt="Elegant fashion accessorie"
                        className=" w-full aspect-square"
                    />
                    <figcaption>
                        <h2 className="text-2xl md:text-4xl text-primary font-semibold">Fashion Accessories</h2>
                    </figcaption>
                    <a
                        href="#"
                        className="uppercase tracking-[5px] text-[12px] cursor-pointer font-semibold relative"
                    >
                        Explore Now
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-primary transition-all duration-500 group-hover:bg-secondary group-hover:w-1/3"></span>
                    </a>
                </figure>
            </article>

            {/* Clothing & Shoes */}
            <section className="flex flex-col md:gap-28 gap-10  md:w-1/2">

                {/* Clothing */}
                <article className="md:flex items-center w-full justify-end md:relative group">
                    <figure className="w-full">
                        <img
                            src={F1}
                            alt="Contemporary clothing styles for men and women"
                            className="w-full aspect-square"
                        />
                    </figure>
                    <figcaption className="md:absolute -left-48 md:w-2/3 w-full md:space-y-5">
                        <h2 className="md:order-first order-last text-2xl md:text-4xl text-primary font-semibold leading-12">
                            Modern Clothing Line 2030
                        </h2>
                        <a
                            href="#"
                            className="uppercase tracking-[5px] text-[12px] cursor-pointer font-semibold relative"
                        >
                            Discover More
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-primary transition-all duration-500 group-hover:bg-secondary group-hover:w-1/3"></span>
                        </a>
                    </figcaption>
                </article>

                {/* Shoes */}
                <article className="md:flex items-center w-full justify-end relative group">
                    <figure>
                        <img
                            src={F3}
                            alt="Seasonal footwear collection with stylish sneakers and formal shoes"
                            className="w-full aspect-square"
                        />
                    </figure>
                    <figcaption className="md:absolute -left-32 md:w-1/2 w-full md:space-y-5">
                        <h2 className="md:order-first order-last text-2xl md:text-4xl text-primary font-semibold leading-12">
                            Spring Footwear 2030
                        </h2>
                        <a
                            href="#"
                            className="uppercase tracking-[5px] text-[12px] cursor-pointer font-semibold relative"
                        >
                            Shop Collection
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-primary transition-all duration-500 group-hover:bg-secondary group-hover:w-1/3"></span>
                        </a>
                    </figcaption>
                </article>

            </section>
        </section>
    );
};

export default FeatureCollections;
