import React from "react";
import ProductCard from "../ProductCard";
import products from "../../Data/productData";
import { Link } from "react-router-dom";

export default function BestSellers() {
    const handleAddToCart = (product) => {
        alert(`Added "${product.title}" to cart (bestsellers)`);
    };

    // Get all best sellers
    const bestsellers = products.filter((p) => p.category === "bestSeller");

    // Show only first 8 products
    const displayedProducts = bestsellers.slice(0, 8);

    return (
        <section className="sectionlayout py-10">
            <header className="text-center mb-5">
                <p
                    className="tracking-wide meow-script-regular text-[var(--primary)] text-7xl"
                    aria-hidden="true"
                >
                    Best Products
                </p>

                <h2
                    id="category-heading"
                    className="md:text-4xl text-2xl font-light text-gray-800 mt-4 uppercase"
                >
                    Best Seller Products
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    The stylish and organized cosmetic products
                </p>
            </header>

            <div className="container mx-auto px-4">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="flex justify-center">
                            <ProductCard
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    ))}
                </div>

                {/* Explore More Button — only if more than 8 bestsellers exist */}
                {bestsellers.length > 8 && (
                    <div className="text-center mt-10">

                        {/* Explore Button */}
                        <Link to="/shop">
                            <button
                                className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2
             overflow-hidden transition-all duration-700 text-lg 
             after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
             after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
             after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                            >
                                explore more
                            </button>
                        </Link>

                    </div>
                )}
            </div>
        </section>
    );
}
