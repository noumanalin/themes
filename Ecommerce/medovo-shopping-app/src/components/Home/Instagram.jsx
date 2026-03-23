import React from "react";
import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.avif";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.avif";

const instagramImages = [
    // Suggested image topics (replace these URLs with your own local assets or royalty-free images)
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
];

const Instagram = () => {
    return (
        <section
            className="md:px-20 px-3 md:h-[80vh] w-full my-10 flex md:flex-row flex-col gap-8"
            aria-labelledby="instagram-title"
        >
            {/* Left - Instagram Grid */}
            <section className="w-full md:w-[65%] grid grid-cols-3">
                {instagramImages.map((img, index) => (
                    <figure key={index} className="overflow-hidden group">
                        <img
                            src={img}
                            alt={`Style inspiration ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </figure>
                ))}
            </section>

            {/* Right - Instagram Info */}
            <aside className="w-full md:w-[35%] flex flex-col justify-center text-center md:text-left md:space-y-8 space-y-5">
                <h2
                    id="instagram-title"
                    className="md:text-4xl text-2xl font-semibold text-primary/80"
                >
                    Follow Us on Instagram
                </h2>
                <p className="text-gray-600">
                    Get daily style inspiration, explore new arrivals, and see how our
                    community wears their favorite pieces. Join us and share your own looks.
                </p>
                <p className="text-secondary md:text-2xl text-xl font-semibold">
                    #StyleWithUs
                </p>
            </aside>
        </section>
    );
};

export default Instagram;
