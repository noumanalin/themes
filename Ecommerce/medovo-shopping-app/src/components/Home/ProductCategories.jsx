import React, { useState } from "react";
import products from "../../assets/data"; // adjust path
import ProductCard from "../ProductCard";

const tabs = [
    { key: "bestSeller", label: "Best Sellers" },
    { key: "newArrival", label: "New Arrivals" },
    { key: "sale", label: "Hot Sale" },
];

const ProductCategories = () => {
    const [activeTab, setActiveTab] = useState("bestSeller");

    // Filter products based on active tab
    const filteredProducts = products.filter(
        (product) => product.category === activeTab
    );

    return (
        <section className="px-3 md:px-20 py-12">
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={` py-2 text-lg md:text-2xl font-semibold cursor-pointer transition ${activeTab === tab.key
                                ? " text-black/80"
                                : "border-transparent text-gray-300 "
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((item) => (
                    <article key={item.id} aria-label={item.name}>
                        <ProductCard product={item} />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProductCategories;
