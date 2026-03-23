import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import p1 from "../../assets/product-info1.png";
import p2 from "../../assets/product-info2.png";
import p3 from "../../assets/product-info3.png";
import p4 from "../../assets/product-info4.png";


const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Sample clothing product images
    const productImages = [
        p1,p2,p3,p4
    ];

    return (
        <main className="w-full flex flex-col items-center">
            {/* Product Gallery Section */}
            <section className="bg-gray-100 md:px-20 px-3 w-full h-screen py-5">
                {/* Breadcrumb */}
                <nav
                    className="w-full text-center text-sm text-gray-600"
                    aria-label="Breadcrumb"
                >
                    <ol className="inline-flex list-none p-0">
                        <li>
                            <a href="/" className="text-primary cursor-pointer mr-1">
                                Home /
                            </a>
                        </li>
                        <li>
                            <a href="/shop" className="text-primary cursor-pointer mr-1">
                                Shop /
                            </a>
                        </li>
                        <li>
                            <span>Product Details</span>
                        </li>
                    </ol>
                </nav>

                {/* Gallery Layout */}
                <div className="flex items-center justify-between w-full h-full">
                    {/* Thumbnails */}
                    <aside className="flex flex-col items-center justify-center gap-5">
                        {productImages.map((image, index) => (
                            <button
                                key={index}
                                type="button"
                                className="cursor-pointer transition-all duration-200"
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Clothing thumbnail ${index + 1}`}
                                    className="h-28 w-20 object-contain bg-gray-200 border-y border-gray-50"
                                />
                            </button>
                        ))}
                    </aside>

                    {/* Main Image */}
                    <figure className="flex items-center md:justify-center justify-end h-full w-full">
                        <img
                            src={productImages[selectedImage]}
                            alt="Elegant Men's Jacket - product view"
                            className="max-h-[90%] max-w-[90%] object-contain transition-opacity duration-300"
                        />
                    </figure>
                </div>
            </section>

            {/* Product Details Section */}
            <article className="md:px-20 px-3 text-center justify-between w-full max-w-3xl my-20 space-y-10">
                <header>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Elegant Classic Jacket
                    </h1>
                </header>

                {/* Ratings */}
                <aside className="flex w-full justify-center items-center mb-4">
                    <div
                        className="flex text-yellow-400"
                        aria-label="Product rating: 5 stars"
                    >
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <span className="ml-2 text-gray-600">(36 reviews)</span>
                </aside>

                {/* Price */}
                <p className="text-2xl font-bold text-gray-900 mb-6">
                    $149.00
                    <span className="text-base ml-5 text-gray-400 line-through">
                        210.00
                    </span>
                </p>

                {/* Description */}
                <p className="text-gray-700">
                    Elevate your wardrobe with this premium jacket, crafted from high-quality
                    fabric for both style and durability. Perfect for formal occasions or
                    casual outings, it offers a timeless fit with modern detailing.
                </p>

                {/* Size and Colors */}
                <section className="flex md:flex-row gap-5 flex-col items-center justify-between">
                    {/* Size */}
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Size:</h2>
                        <div className="flex flex-wrap gap-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className="px-4 py-2 border border-gray-300 text-primary hover:bg-primary hover:border-primary font-semibold hover:text-white transition-colors"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Colors:</h2>
                        <div className="flex flex-wrap gap-4">
                            {["bg-black", "bg-gray-500", "bg-blue-500", "bg-brown-600"].map(
                                (color, index) => (
                                    <button
                                        key={index}
                                        className={`h-8 w-8 rounded-full ${color} outline-1 outline-gray-200 outline-offset-4 cursor-pointer`}
                                        aria-label={`Select color option`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* Quantity & Add to Cart */}
                <section className="flex items-center justify-center gap-4">
                    <div className="flex items-center border border-gray-300 overflow-hidden w-28">
                        <input
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-full text-center outline-none font-semibold text-gray-800"
                            aria-label="Product quantity"
                        />

                        <div>
                            <button
                                type="button"
                                className="text-gray-800 cursor-pointer"
                                onClick={() => setQuantity((prev) => prev + 1)}
                                aria-label="Increase quantity"
                            >
                                <IoIosArrowUp />
                            </button>

                            <button
                                type="button"
                                className="text-gray-800 cursor-pointer"
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                aria-label="Decrease quantity"
                            >
                                <IoIosArrowDown />
                            </button>
                        </div>
                    </div>

                    <button className="bg-primary text-white py-3 px-6 hover:bg-primary/90 font-semibold cursor-pointer transition-colors uppercase tracking-widest text-sm">
                        Add to Cart
                    </button>
                </section>

                {/* Safe Checkout */}
                <section className="space-y-5 flex flex-col items-center justify-center">
                    <h2 className="text-primary/90 font-semibold text-xl">
                        Secure Payment Guaranteed
                    </h2>
                    <img
                        src="https://themewagon.github.io/malefashion/img/shop-details/details-payment.png"
                        alt="Payment options"
                    />
                </section>

                {/* Meta info */}
                <footer className="space-y-3">
                    <p className="text-primary/40">
                        SKU: <span className="font-semibold text-primary">AJK2025</span>
                    </p>
                    <p className="text-primary/40">
                        Category:{" "}
                        <span className="font-semibold text-primary">Men’s Jackets</span>
                    </p>
                    <p className="text-primary/40">
                        Tags:{" "}
                        <span className="font-semibold text-primary">
                            Fashion, Winter Wear, Formal
                        </span>
                    </p>
                </footer>
            </article>
        </main>
    );
};

export default ProductInfo;
