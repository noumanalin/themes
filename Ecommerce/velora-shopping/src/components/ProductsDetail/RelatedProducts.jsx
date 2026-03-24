import React, { useState, useEffect } from "react";
import products from "../../assets/data";
import ProductCard from "../ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RelatedProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesToShow = 4;
    const totalSlides = Math.ceil(products.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="py-12 px-3 md:px-10 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-light md:text-left text-center uppercase tracking-wider text-gray-800 mb-8">
                    YOU MIGHT ALSO LIKE
                </h2>

                <div className="relative">
                    {/* Navigation arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft className="w-4 h-4 text-primary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label="Next slide"
                    >
                        <FaChevronRight className=" w-4 h-4 text-primary" />
                    </button>

                    {/* Slider container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {products.map((item) => (
                                <article
                                    key={item.id}
                                    className="md:w-1/4 w-1/2 flex-shrink-0 px-2"
                                    aria-label={item.name}
                                >
                                    <ProductCard product={item} />
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default RelatedProducts;
