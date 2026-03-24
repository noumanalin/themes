import React from "react";
import { GiFruitBowl, GiFlowerPot, GiPineTree } from "react-icons/gi";
import { FaWater } from "react-icons/fa";

export default function Category() {
    const categories = [
        {
            id: "fresh",
            title: "Fresh Fragrances",
            icon: GiFruitBowl, // component reference only (no JSX)
            description:
                "Crisp, lively scents with citrus and green notes—perfect for a fresh everyday vibe.",
        },
        {
            id: "floral",
            title: "Floral Fragrances",
            icon: GiFlowerPot,
            description:
                "Delicate bouquets and soft petals — romantic, elegant, and timeless floral blends.",
        },
        {
            id: "oceanic",
            title: "Oceanic Fragrances",
            icon: FaWater, // clearer water icon for oceanic
            description:
                "Airy and cool aromas that evoke sea breezes, salt air, and coastal freshness.",
        },
        {
            id: "woody",
            title: "Woody Fragrances",
            icon: GiPineTree,
            description:
                "Warm, resinous notes of cedar, sandalwood and amber — grounding and earthy.",
        },
    ];

    return (
        <section
            className="py-20 sectionlayout bg-white"
            aria-labelledby="category-heading"
        >
            <header className="text-center mb-16">
                <p
                    className="tracking-wide meow-script-regular text-[var(--primary)] text-7xl"
                    aria-hidden="true"
                >
                    Category
                </p>

                <h2 id="category-heading" className="md:text-4xl text-2xl font-light text-gray-800 mt-4 uppercase">
                    Fragrance Types
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Explore our curated fragrance families — each crafted with its own personality.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {categories.map((cat) => (
                    <article
                        key={cat.id}
                        className="flex flex-col items-center text-center px-4"
                        itemScope
                        itemType="https://schema.org/OfferCatalog"
                    >
                        <figure className="w-28 h-28 flex items-center justify-center text-[var(--primary)]">
                           
                            <cat.icon className="w-20 h-20" aria-hidden="true" />
                        </figure>

                        <figcaption className=" space-y-2">
                            <h3 className="text-xl text-gray-800 font-medium" itemProp="name">
                                {cat.title}
                            </h3>

                            <p className=" text-sm text-gray-400 leading-relaxed" itemProp="description">
                                {cat.description}
                            </p>
                        </figcaption>
                    </article>
                ))}
            </div>
        </section>
    );
}
