import React, { useState } from "react";
import products from "../../assets/data";
import ProductCard from "../ProductCard";

const Main = () => {
    // State for how many products to show initially
    const [visibleCount, setVisibleCount] = useState(9);

    // Load more handler
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 9); // show 9 more each time
    };

    // Load less handler (reset to initial 9)
    const handleLoadLess = () => {
        setVisibleCount(9);
    };

    // Products to display
    const displayedProducts = products.slice(0, visibleCount);

    return (
        <main className="md:w-[80%] w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-primary">
                    Showing {displayedProducts.length} of {products.length} results
                </p>

                {/* Sort Dropdown */}
                <div className="flex items-center">
                    <label htmlFor="sort" className="text-sm text-gray-600">
                        Sort by:
                    </label>
                    <select id="sort" className="px-2 py-1 text-sm bg-white">
                        <option value="default">Default</option>
                        <option value="popularity">Popularity</option>
                        <option value="rating">Average rating</option>
                        <option value="newest">Newest</option>
                        <option value="priceLowHigh">Price (Low to High)</option>
                        <option value="priceHighLow">Price (High to Low)</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map((item) => (
                    <article
                        key={item.id}
                        className="product-card"
                        aria-label={item.name}
                    >
                        <ProductCard key={item.id} product={item} />
                    </article>
                ))}
            </div>

            {/* Load More & Load Less Buttons */}
            <div className="flex justify-center mt-8 gap-4">
                {visibleCount < products.length && (
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 border border-primary text-sm font-medium hover:bg-primary hover:text-white text-primary transform transition duration-300 cursor-pointer"
                    >
                        Show More
                    </button>
                )}

                {visibleCount > 9 && (
                    <button
                        onClick={handleLoadLess}
                        className="px-6 py-2 border border-primary text-sm font-medium hover:bg-primary hover:text-white text-primary transform transition duration-300 cursor-pointer"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </main>
    );
};

export default Main;
