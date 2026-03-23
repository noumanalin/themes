import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FiHeart, FiSearch } from "react-icons/fi";
import { TbArrowsDoubleNwSe } from "react-icons/tb";

const ProductCard = ({ product }) => {
    const [hovered, setHovered] = useState(false);

    // Generate star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-400" />);
            }
        }
        return stars;
    };

    return (
        <article
            className="w-full relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Product Image */}
            <figure className="relative w-full overflow-hidden">
                <img
                    src={product.images}
                    alt={product.name}
                    className="w-full object-cover cursor-pointer"
                />

                {/* Sale Tag */}
                {product.sale && (
                    <mark className="absolute top-5 left-0 tracking-widest font-semibold bg-secondary text-white text-xs px-3 py-1 uppercase">
                        SALE
                    </mark>
                )}

                {/* Right Side Drawer (icons) */}
                <nav
                    className={`absolute top-5 right-0 flex flex-col gap-3 p-2 transform transition-all duration-500 ${hovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        }`}
                    aria-label="Product actions"
                >
                    <button className="p-2 bg-white text-primary transition cursor-pointer">
                        <FiHeart />
                    </button>
                    <button className="p-2 bg-white text-primary transition cursor-pointer">
                        <FiSearch />
                    </button>
                    <button className="p-2 bg-white text-primary transition cursor-pointer">
                        <TbArrowsDoubleNwSe className="-rotate-[45deg]" />
                    </button>
                </nav>
            </figure>

            {/* Product Info */}
            <section className="mt-3 relative h-7">
                {/* Product Name */}
                <h3
                    className={`absolute left-0 top-0 w-full text-primary font-semibold transition-all duration-500 ease-in-out md:text-md text-sm ${hovered
                            ? "opacity-0 translate-y-2"
                            : "opacity-100 translate-y-0"
                        }`}
                >
                    {product.name}
                </h3>

                {/* Add to Cart Button */}
                <button
                    className={`absolute left-0 top-0 font-semibold text-secondary/70 transition-all duration-500 ease-in-out cursor-pointer ${hovered
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        }`}
                >
                    + Add to cart
                </button>
            </section>

            {/* Star Ratings */}
            <div className="flex justify-start items-center gap-1 my-1">
                {renderStars(product.rating || 0)}
            </div>

            {/* Price */}
            <p className="text-gray-900 font-semibold text-base">
                {product.price}
            </p>
        </article>
    );
};

export default ProductCard;
