import React from "react";
import { Link } from "react-router-dom";
import products from "../../assets/data";

const AllCollection = () => {
    const displayedProducts = products.slice(4, 11); // 7 products

    return (
        <section className="md:px-10 px-3 py-8 mt-10">
            <p className=" text-[10px] uppercase opacity-80 tracking-wider py-5 text-primary">Home / Shop / Collection</p>
            <h1 className="text-2xl uppercase tracking-wide mb-6">Collections</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedProducts && displayedProducts.length > 0 ? (
                    <>
                        {displayedProducts.map((item) => (
                            <article
                                key={item.id}
                                className="product-card w-full cursor-pointer overflow-hidden"
                                aria-label={item.name}
                            >
                                <img
                                    src={item.images[0]}
                                    alt={item.name}
                                    className="w-full h-[300px] md:h-[400px] lg:h-[420px] xl:h-[450px] object-cover"
                                />

                                <div className="p-3">
                                    <h3 className="text-base font-medium">{item.name}</h3>

                                    {/* Animated underline link */}
                                    <a
                                        href="#"
                                        className="relative inline-block text-xs tracking-widest cursor-pointer group uppercase w-fit"
                                        aria-label="View all new products"
                                    >
                                        shop now
                                        <span className="absolute left-0 -bottom-[2px] h-[1px] bg-gray-600 transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                                    </a>
                                </div>
                            </article>
                        ))}

                        {/* Extra "Explore All Categories" card */}
                        <article
                            className="flex items-end justify-start py-5 p-3 bg-gray-100  cursor-pointer 
                                       w-full h-[300px] md:h-[400px] lg:h-[420px] xl:h-[450px] hover:bg-gray-200 transition"
                        >
                            <Link to="/shop" className="text-lg uppercase md:w-1/3 tracking-wider hover:text-primary">
                                shop all collections
                            </Link>
                        </article>
                    </>
                ) : (
                    <p className="col-span-4 text-center text-gray-500">
                        No products found.
                    </p>
                )}
            </div>
        </section>
    );
};

export default AllCollection;
