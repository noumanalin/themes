import React, { useState } from "react";

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "reviews", label: "Customer Reviews" },
        { id: "additional", label: "Additional Information" },
    ];

    return (
        <section className="w-full md:px-20 px-3">
            {/* Tabs Header */}
            <nav
                className="flex border-b border-gray-300 w-full justify-evenly"
                aria-label="Product details navigation"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-3 text-md md:text-xl cursor-pointer font-semibold transition 
              ${activeTab === tab.id ? "border-b-2 border-secondary " : ""}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            {/* Tabs Content */}
            <article className="mt-6 text-gray-700 leading-relaxed text-sm">
                {activeTab === "description" && (
                    <section>
                        <header>
                            <h2 className="font-semibold text-lg">Product Overview</h2>
                        </header>
                        <p className="mt-2">
                            This classic men’s jacket is designed with premium fabric that
                            combines durability with comfort. Its modern tailored fit ensures
                            versatility — whether you’re dressing for the office, a formal
                            dinner, or a casual day out.
                        </p>

                        <h3 className="mt-4 text-lg font-semibold">Key Features</h3>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Breathable inner lining for all-day comfort</li>
                            <li>Available in multiple colors and sizes</li>
                            <li>Easy-care fabric resistant to creasing</li>
                            <li>Lightweight design suitable for year-round wear</li>
                        </ul>

                        <h3 className="mt-4 text-lg font-semibold">Materials Used</h3>
                        <p className="mt-2">
                            Crafted from a blend of cotton and polyester for a balance of
                            breathability and durability. Select styles also feature velvet
                            trims for a refined finish.
                        </p>
                    </section>
                )}

                {activeTab === "reviews" && (
                    <section>
                        <header>
                            <h2 className="font-semibold text-lg">Customer Feedback</h2>
                        </header>
                        <p className="mt-2">
                            Our customers appreciate the stylish look and long-lasting comfort
                            of this jacket. Here are some highlights from recent reviews:
                        </p>

                        <blockquote className="mt-3 border-l-4 border-secondary pl-3 italic text-gray-600">
                            “The fit is perfect, and the fabric feels premium. I’ve worn it
                            multiple times, and it still looks brand new.” – Amir K.
                        </blockquote>

                        <blockquote className="mt-3 border-l-4 border-secondary pl-3 italic text-gray-600">
                            “A great jacket for both casual and formal occasions. Worth every
                            penny!” – Sarah M.
                        </blockquote>
                    </section>
                )}

                {activeTab === "additional" && (
                    <section>
                        <header>
                            <h2 className="font-semibold text-lg">Additional Information</h2>
                        </header>
                        <dl className="mt-4 space-y-2">
                            <div className="flex justify-between border-b pb-2">
                                <dt className="font-medium">Material</dt>
                                <dd>65% Cotton, 35% Polyester</dd>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <dt className="font-medium">Care Instructions</dt>
                                <dd>Machine wash cold, tumble dry low</dd>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <dt className="font-medium">Fit</dt>
                                <dd>Regular / Slim Fit Options</dd>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <dt className="font-medium">Country of Origin</dt>
                                <dd>Made in Turkey</dd>
                            </div>
                        </dl>
                    </section>
                )}
            </article>
        </section>
    );
};

export default ProductTabs;
