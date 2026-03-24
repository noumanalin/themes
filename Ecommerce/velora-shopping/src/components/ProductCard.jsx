import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % product.images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    return (
        <article
            className="product-card"
            itemScope
            itemType="https://schema.org/Product"
        >
            {/* Product Image Section */}
            <figure
                className="relative group overflow-hidden"
                onMouseEnter={() => {
                    setHovered(true);
                    setCurrentIndex(1);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                    setCurrentIndex(0);
                }}
            >
                {/* Image Carousel */}
                <div className="relative w-full md:h-[450px] lg:h-[400px] xl:h-[450px] h-[300px]">
                    {product.images.map((img, index) => (
                        <Link
                            to={`/product/${product.id}`}

                        >
                            <img
                                key={index}
                                src={img}
                                alt={`${product.name} - view ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-center transition-opacity duration-700 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                itemProp="image"
                            />

                            </Link>
                    ))}
                        </div>

                {/* Navigation Arrows */ }
                { hovered && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white hover:text-white text-primary rounded-full p-2 hover:bg-primary transition cursor-pointer"
                                    aria-label="Previous product image"
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-primary hover:text-white rounded-full p-2 hover:bg-primary transition cursor-pointer"
                                    aria-label="Next product image"
                                >
                                    <FaChevronRight />
                                </button>
                            </>
                        )}

                    {/* Sale Tag */}
                    {product.sale && (
                        <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1">
                            SALE
                        </span>
                    )}

                    {/* CTA: Select Options */}
                    <Link
                        to={`/product/${product.id}`}
                        className={`absolute bottom-0 p-2 bg-white w-full transform transition-all duration-700 ${hovered ? "opacity-100" : "md:opacity-0"
                            }`}
                        aria-label={`View details of ${product.name}`}
                    >
                        <button className="hover:bg-primary hover:text-white bg-white duration-300 text-center py-2 border border-primary text-primary cursor-pointer w-full text-sm uppercase tracking-wider">
                            Select Options
                        </button>
                    </Link>

                    <figcaption className="sr-only">{product.name}</figcaption>
            </figure>

            {/* Product Info */}
            <div className="p-3">
                <h3
                    className="text-base font-medium"
                    itemProp="name"
                >
                    <Link
                        to={`/product/${product.id}`}
                        className="hover:underline"
                        aria-label={`Go to product page for ${product.name}`}
                    >
                        {product.name}
                    </Link>
                </h3>
                <p
                    className="text-gray-700 font-semibold"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                >
                    <span itemProp="priceCurrency" content="USD">$</span>
                    <span itemProp="price">{product.price}</span>
                </p>
            </div>
        </article>
    );
};

export default ProductCard;
