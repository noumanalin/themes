// src/components/PricingPackages.jsx
import React from "react";

const pricingData = [
    {
        id: 1,
        title: "Premium Edition",
        price: "75$",
        features: [
            "Pure Botanical Extracts",
            "Complimentary Wellness Guide",
            "Natural Mineral Pigments",
        ],
        theme: "light",
        image: "/delivery/d1.jpg", // replace with your actual image path
    },
    {
        id: 2,
        title: "Deluxe Edition",
        price: "95$",
        features: [
            "Pure Botanical Extracts",
            "Complimentary Wellness Guide",
            "Natural Mineral Pigments",
        ],
        theme: "dark",
        image:"/delivery/d2.jpg",
    },
];

const PricingPackages = () => {
    return (
        <section className="py-10 sectionlayout bg-white">
            <header className="text-center mb-10">
                <h2 className=" text-2xl md:text-4xl font-semibold tracking-wide text-gray-800 uppercase">
                    Pricing Packages
                </h2>
                <p className="mt-3 max-w-2xl w-full mx-auto">
                    Explore our exclusive natural care editions crafted with organic
                    elements and sustainable wellness in mind.
                </p>
            </header>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {pricingData.map((pkg) => (
                    <article
                        key={pkg.id}
                        className={`relative flex flex-col justify-between overflow-hidden ${pkg.theme === "light"
                            ? "bg-[#f9f6f4] text-gray-800"
                            : "text-gray-100"
                            }`}
                        style={
                            {
                                backgroundImage: ` url(${pkg.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }

                        }
                    >
                        <div
                            className={`p-10 ${pkg.theme === "dark"
                                ? "bg-transparent"
                                : "bg-transparent"
                                }`}
                        >
                            <h3 className="text-xl font-medium mb-4">{pkg.title}</h3>
                            <p
                                className={`text-6xl font-serif italic mb-6 ${pkg.theme === "light" ? "text-gray-900" : "text-[var(--primary)]"
                                    }`}
                            >
                                {pkg.price}
                            </p>

                            <ul className="space-y-2 mb-8">
                                {pkg.features.map((item, index) => (
                                    <li
                                        key={index}
                                      
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`px-6 py-2 border text-sm font-medium transition duration-300 cursor-pointer ${pkg.theme === "light"
                                    ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                                    : "border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-black"
                                    }`}
                            >
                                Shop Now
                            </button>
                        </div>


                    </article>
                ))}
            </div>
        </section>
    );
};

export default PricingPackages;
