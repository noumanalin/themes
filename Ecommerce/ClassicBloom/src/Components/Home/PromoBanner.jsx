import React from 'react';

const PromoBanner = () => {
    const data = [
        {
            id: 1,
            heading: "Best price",
            content: "Perfume Flower Collection",
            image: "/home/promoImg1.jpeg",
        },
        {
            id: 2,
            heading: "new perfume",
            content: "Perfume Cool Collection",
            image: "/home/promoImg2.jpg",
        },
    ];

    return (
        <section className="sectionlayout grid md:grid-cols-2 grid-cols-1 my-20 w-full gap-20">
            {data.map((item) => (
                <article
                    key={item.id}
                    className="group relative text-center"
                    itemScope
                    itemType="https://schema.org/Person"
                >
                    {/* Center wrapper */}
                    <div className="relative flex justify-center items-center">
                        {/* Decorative container */}
                        <div className="relative inline-block md:mx-0  mx-5">

                            {/* Decorative border */}
                            <div className="absolute w-full h-full border border-gray-700 -left-5 -top-5 z-10"></div>

                            {/* Image container */}
                            <div className="flex justify-center items-center overflow-hidden">
                                <img
                                    src={item.image}
                                    className="w-full h-full mx-auto object-cover relative z-0 group-hover:scale-110 transition-all duration-1000"
                                    loading="lazy"
                                    itemProp="image"
                                />
                            </div>

                            {/* Overlay text */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center pl-5 md:space-y-5 z-20">
                                <h2
                                    className="text-5xl md:text-7xl meow-script-regular text-[var(--primary)] tracking-wide"
                                    itemProp="name"
                                >
                                    {item.heading}
                                </h2>
                                <p
                                    className="text-xl mt-2 font-light italic text-gray-800"
                                    itemProp="description"
                                >
                                    {item.content}
                                </p>

                                <button
                                    className="relative z-30 px-8 py-2 border bg-transparent text-gray-900 hover:text-white mt-2
                    overflow-hidden transition-all duration-700 text-lg 
                    after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                    after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
                    after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase hover:border-gray-900"
                                >
                                    SHOP now
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default PromoBanner;
