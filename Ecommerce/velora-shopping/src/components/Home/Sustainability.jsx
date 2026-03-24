import React from "react";
import sustainability2 from "../../assets/sustainability2.avif";
import sustainability1 from "../../assets/sustainability1.avif";
const Sustainability = () => {
    return (
        <section className="md:h-screen md:px-10 px-3 flex flex-col md:flex-row items-end justify-between my-10 py-10 gap-10">
            
            {/* Left side content */}
            <aside className="md:w-1/2 w-full h-full overflow-hidden flex md:justify-start">
                <img
                    src={sustainability1}
                    alt="Sustainable fashion garment on mannequin"
                    className="lg:h-screen h-[70vh] md:w-auto w-full object-cover"
                    loading="lazy"
                />
            </aside>
            
            {/* Right side content */}
            <article className="md:w-1/2 w-full flex flex-col justify-between h-full gap-10">
                
                {/* Story content */}
                <div className="flex flex-col justify-between h-full gap-3">
                    <p className="uppercase text-sm tracking-widest text-primary">Sustainability</p>
                    <h2 className="md:text-5xl text-2xl uppercase tracking-wide">
                        Crafting with Purpose
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        At Velora, we believe fashion should be timeless, not disposable. Our collections are created with premium materials and ethical practices to ensure every piece lasts for years to come.
                    </p>

                    {/* Animated underline link */}
                    <nav>
                        <a
                            href="#"
                            className="relative inline-block text-xs tracking-widest cursor-pointer group uppercase w-fit text-primary"
                            aria-label="Learn more about Velora sustainability practices"
                        >
                            Learn More
                            <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                        </a>
                    </nav>
                </div>
                
                <figure>
                    <img
                        src={sustainability2}
                        alt="Eco-friendly textile and fabric close-up"
                        className="h-96 w-full object-cover bg-gray-100 md:p-10"
                        loading="lazy"
                    />
                </figure>
            </article>
        </section>
    );
};

export default Sustainability;
