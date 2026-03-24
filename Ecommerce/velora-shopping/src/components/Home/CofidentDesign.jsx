import React from "react";
import confi1 from "../../assets/confi1.avif";
import confi3 from "../../assets/confi3.avif";
import confi from "../../assets/confi.avif";

const ConfidentDesign = () => {
    return (
        <section
            className="md:h-screen flex md:flex-row flex-col gap-5 md:my-20 md:px-10 px-3 items-end"
            aria-labelledby="confident-design-title"
        >
            {/* Section heading */}
            <h2 id="confident-design-title" className="sr-only">
                Confident Fashion Design – Ready to Wear, Accessories & Sale
            </h2>

            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col">
                <p className="md:py-10 pb-5 uppercase md:w-2/3 tracking-wider">
                    Confidence is about expressing your true self — no matter what others
                    say or think.
                </p>

                <div className="flex md:flex-row flex-col gap-5 items-end">
                    {/* Ready to Wear */}
                    <article className="flex flex-col justify-end h-full md:w-1/2">
                        <figure>
                            <img
                                src={confi1}
                                alt="Model wearing ready-to-wear designer fashion outfit"
                                className="md:h-[80vh] w-full object-cover"
                            />
                            <figcaption className="mt-2">
                                <h3 className="text-sm uppercase tracking-widest font-medium">
                                    <a
                                        href="/collection/ready-to-wear"
                                        className="relative inline-block group text-primary"
                                        aria-label="Explore Ready to Wear Collection"
                                    >
                                        Ready to Wear
                                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                                    </a>
                                </h3>
                            </figcaption>
                        </figure>
                    </article>

                    {/* Accessories */}
                    <article className="flex flex-col justify-end h-full md:w-1/2">
                        <figure>
                            <img
                                src={confi}
                                alt="Luxury fashion accessories like handbags and jewelry"
                                className="md:h-[80vh] w-full object-cover"
                            />
                            <figcaption className="mt-2">
                                <h3 className="text-sm uppercase tracking-widest font-medium">
                                    <a
                                        href="#"
                                        className="relative inline-block group text-primary"
                                        aria-label="Discover Fashion Accessories Collection"
                                    >
                                        Accessories
                                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                                    </a>
                                </h3>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </div>

            {/* Right Column - On Sale */}
            <aside className="md:w-1/2 w-full flex items-end">
                <article className="flex flex-col justify-end h-full w-full">
                    <figure>
                        <img
                            src={confi3}
                            alt="Exclusive designer collection available on seasonal sale"
                            className="h-[90vh] w-full object-cover"
                        />
                        <figcaption className="mt-2">
                            <h3 className="text-sm uppercase tracking-widest font-medium">
                                <a
                                    href="#"
                                    className="relative inline-block group text-primary"
                                    aria-label="Shop Fashion Collection On Sale Now"
                                >
                                    On Sale Now
                                    <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                                </a>
                            </h3>
                        </figcaption>
                    </figure>
                </article>
            </aside>
        </section>
    );
};

export default ConfidentDesign;
