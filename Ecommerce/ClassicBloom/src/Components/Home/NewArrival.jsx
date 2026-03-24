import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import products from "../../Data/productData"; // adjust path as needed
import { Link } from "react-router";

const NewArrivals = () => {
    const newProducts = products.filter((p) => p.category === "new");
    const [showAll, setShowAll] = useState(false);
    const displayedProducts = showAll ? newProducts : newProducts.slice(0, 6);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i)
                stars.push(<FaStar key={i} className="text-orange-400 w-4 h-4" />);
            else if (rating >= i - 0.5)
                stars.push(
                    <FaStarHalfAlt key={i} className="text-orange-400 w-4 h-4" />
                );
            else stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
        }
        return stars;
    };

    return (
        <section
            className="py-16 sectionlayout bg-white"
            aria-labelledby="new-arrivals-heading"
        >
            {/* Section Header */}
            <header className="text-center mb-5">
                <p
                    className="tracking-wide meow-script-regular text-[var(--primary)] md:text-7xl text-5xl"
                    aria-hidden="true"
                >
                    Latest Collection
                </p>

                <h2
                    id="new-arrivals-heading"
                    className="md:text-4xl text-2xl font-light text-gray-800 mt-4 uppercase"
                >
                    Fresh Arrivals
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Discover our newly launched self-care and beauty essentials,
                    crafted to elevate your daily routine with a touch of elegance.
                </p>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Left: Product Grid */}
                <section className="grid grid-cols-2 gap-10" aria-label="Product List">
                    {displayedProducts.map((item) => (
                        <article
                            key={item.id}
                            className="flex md:flex-row flex-col items-center text-center justify-between transition-all duration-300 gap-3"
                        >
                            {/* Product Image */}
                            <figure className="relative bg-[var(--primary)]/5 flex items-center justify-center overflow-visible group">
                                {/* Hover Border */}
                                <span className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                    <span className="w-[90%] h-[90%] z-10 border border-gray-800 ease-out transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                                </span>

                                <img
                                    src={item.image}
                                    alt={`${item.title} cosmetic product`}
                                    className="relative z-10 w-36 h-36 object-contain"
                                    loading="lazy"
                                />
                            </figure>

                            {/* Product Info */}
                            <div>
                                <h3 className="font-medium text-gray-800 text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-sm mt-1">
                                    {item.oldPrice && (
                                        <span className="line-through text-gray-400 mr-2">
                                            ${item.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="text-[var(--primary)] font-semibold">
                                        ${item.newPrice.toFixed(2)}
                                    </span>
                                </p>

                                <div className="flex justify-center mt-2" aria-label="Product rating">
                                    {renderStars(item.rating)}
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Explore More Button */}
                    {newProducts.length > 6 && !showAll && (
                        <div className="col-span-2 flex justify-center mt-6">
                            <button
                                onClick={() => setShowAll(true)}
                                className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2 overflow-hidden transition-all duration-700 text-lg after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                                aria-label="Explore more new arrivals"
                            >
                                Explore More
                            </button>
                        </div>
                    )}
                </section>

                {/* Right: Promotional Image */}
                <aside className="flex justify-center">
                    <figure>
                        <img
                            src="https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-plant-book-lady-perfume-bottle-fashion-photography-advertising-background-image_2457925.jpg"
                            alt="Elegant perfume bottle promotional banner"
                            className="  lg:w-[70vh] object-cover"
                            loading="lazy"
                        />
                        <figcaption className="sr-only">
                            A luxurious perfume bottle from our latest product collection.
                        </figcaption>
                    </figure>
                </aside>
            </main>
        </section>
    );
};

export default NewArrivals;
