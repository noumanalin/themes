import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const Star = ({ filled }) => (
    <svg
        className={`w-4 h-4 ${filled ? "text-orange-400" : "text-gray-200"}`}
        viewBox="0 0 20 20"
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M10 1.5l2.59 5.25 5.8.84-4.19 4.08.99 5.76L10 15.9 4.81 18.43l.99-5.76L1.61 8.59l5.8-.84L10 1.5z"
            strokeWidth="0"
        />
    </svg>
);

export default function ProductCard({ product, onAddToCart }) {
    const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating));

    return (
        <div className="max-w-xs mx-auto">
            <div className="bg-white p-6">
                {/* ✅ Image container wrapped in Link */}
                <Link
                    to={`/product/${product.id}`}
                    className="relative bg-[var(--primary)]/5 flex items-center justify-center overflow-visible group"
                >
                    {/* Animated border */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-[90%] h-[90%] z-10 border border-gray-800 ease-out transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                    </div>

                    {/* SALE badge */}
                    {product.badge && (
                        <div className="absolute top-5 left-0 z-20">
                            <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-3 py-1 tracking-wide">
                                {product.badge}
                            </span>
                        </div>
                    )}

                    {/* Product image */}
                    <div className="relative z-10 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="md:w-[40vw] w-[60vw] h-[40vh] md:h-[50vh] object-contain"
                            loading="lazy"
                        />
                    </div>
                </Link>

                {/* Rating */}
                <div className="mt-3 flex justify-center">
                    <div className="flex items-center gap-1">
                        {stars.map((filled, idx) => (
                            <Star key={idx} filled={filled} />
                        ))}
                    </div>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-center text-gray-800 text-lg font-medium">
                    {product.title}
                </h3>

                {/* Add to cart / price box */}
                <div className="mt-3">
                    <div className="border border-gray-800">
                        <div className="flex">
                            <button
                                onClick={() => onAddToCart(product)}
                                className="relative z-10 py-2 border-r bg-transparent text-gray-900 w-1/2 hover:text-white overflow-hidden transition-all duration-700  
             after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
             after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
             after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                                aria-label={`Add ${product.title} to cart`}
                            >
                                ADD TO CART
                            </button>

                            <div className="w-1/2 py-3 px-4 bg-white flex items-center justify-end gap-2 text-sm">
                                {product.oldPrice ? (
                                    <span className="text-gray-400 line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                ) : (
                                    <span className="text-transparent">placeholder</span>
                                )}
                                <span className="text-[var(--primary)] font-semibold">
                                    ${product.newPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
