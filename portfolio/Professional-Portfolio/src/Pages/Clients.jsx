import React from "react";

// Partner / Client logo list
const logos = [
    {
        name: "coinbase",
        src: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg",
        alt: "Coinbase brand mark",
    },
    {
        name: "spotify",
        src: "https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg",
        alt: "Spotify brand mark",
    },
    {
        name: "pinterest",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png",
        alt: "Pinterest brand mark",
    },
    {
        name: "google",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google brand mark",
    },
    {
        name: "amazon",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon brand mark",
    },
    {
        name: "netflix",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        alt: "Netflix brand mark",
    },
];

export default function Clients() {
    return (
        <section
            className="w-full md:px-10 px-3 py-12 bg-white"
            aria-labelledby="clients-title"
        >
            <div className="flex flex-col items-start justify-center">
                <h2
                    id="clients-title"
                    className="text-xl font-semibold text-gray-800 mb-10 text-center w-full"
                >
                    Trusted by leading global brands
                </h2>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 w-full">
                    {logos.map((logo) => (
                        <figure
                            key={logo.name}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 md:h-16 w-auto object-contain"
                                loading="lazy"
                                style={{ maxWidth: "110px" }}
                            />
                            <figcaption className="sr-only">{logo.alt}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
