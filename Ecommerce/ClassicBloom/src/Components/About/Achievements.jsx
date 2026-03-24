import React from 'react';

const Achievements = () => {
    const achievementImages = [
        { src: "/about/Achievements/perfumeSold.png", alt: "Perfumes Sold Achievement" },
        { src: "/about/Achievements/satisfiedCustomer.png", alt: "Satisfied Customers Achievement" },
        { src: "/about/Achievements/locations.png", alt: "Locations" },
        { src: "/about/Achievements/staff.png", alt: "Staff" },
    ];

    return (
        <section
            className="sectionlayout text-center flex flex-col items-center justify-center py-10 px-4"
            aria-labelledby="achievements-title"
        >
            <header>
                <h2
                    id="achievements-title"
                    className="text-2xl md:text-4xl uppercase mb-4 leading-snug text-gray-800"
                >
                    Our Achievements
                </h2>
                <p className="max-w-xl mx-auto text-gray-600 tracking-wide">
                    We take pride in our journey, delivering quality and satisfaction to our valued customers
                    through every fragrance we create.
                </p>
            </header>

            <div className="mt-8 flex flex-wrap w-full items-center justify-cente justify-between">
                {achievementImages.map((item, index) => (
                    <figure key={index} className="flex flex-col items-center">
                        <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="md:w-52 w-32 object-contain"
                        />
                       
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
