import React from "react";
import story1 from "../../assets/img1.png";
import story2 from "../../assets/stimg2.png";

const Story = () => {
    return (
        <section className="lg:h-screen md:px-10 px-3 flex flex-col md:flex-row items-center justify-between my-10 py-10 gap-10">
            {/* Left side content */}
            <article className="md:w-1/2 w-full flex flex-col justify-between h-full md:gap-10">
                <figure>
                    <img
                        src={story1}
                        alt="Luxury vintage fabric design"
                        className="h-68 object-cover"
                    />
                </figure>

                {/* Story content */}
                <div className="flex flex-col justify-between h-full py-5 md:gap-7 gap-3">
                    <h2 className="md:text-5xl text-2xl uppercase tracking-wide font-medium">
                        The Story
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        One Vintage is a distinctive luxury brand founded by Simone Myson in
                        2010. This avant-garde label ingeniously revitalizes antique
                        textiles and relics, seamlessly weaving them into contemporary and
                        modern masterpieces.
                    </p>

                    {/* Animated underline link */}
                    <a
                        href="#"
                        className="relative inline-block text-sm tracking-widest cursor-pointer group uppercase w-fit text-primary"
                    >
                        Discover more
                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                    </a>
                    
                </div>
            </article>

            {/* Right side content */}
            <aside className="md:w-1/2 w-full h-full overflow-hidden flex md:justify-end justify-center ">
                <img
                    src={story2}
                    alt="Contemporary couture dress"
                    className="lg:h-[90vh] h-[70vh] md:w-auto w-full  object-cover"
                />
            </aside>
        </section>
    );
};

export default Story;
