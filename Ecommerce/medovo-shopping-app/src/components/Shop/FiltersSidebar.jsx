import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FiltersSidebar = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const toggleFilter = (filter) => {
        setActiveFilter((prev) => (prev === filter ? null : filter));
    };

    const categories = [
        { label: "Bags", count: 20 },
        { label: "Clothing", count: 20 },
        { label: "Shoes", count: 20 },
        { label: "Accessories", count: 20 },
        { label: "Kids", count: 20 },
    ];

    const brandOptions = [
        "Alexander Mcqueen",
        "Balenciaga",
        "Balmain",
        "Bottega Veneta",
        "Brunello Cucinelli",
        "Burberry",
        "Dolce & Gabbana",
        "Dsquared2",
        "Etro",
        "Ferragamo",
        "GUCCI",
        "Mach & Mach",
        "MANOLO BLAHNIK",
        "MAX MARA",
        "MONCLER",
    ];

    const sizeOptions = ["S", "M", "L"];
    const colorOptions = ["Black", "Brown", "Navy", "Sand"];
    const priceRanges = ["$50 - $100", "$100 - $200", "$200 - $300", "$300 - $500"];
    const tagOptions = ["products", "bags", "shoes", "fashion", "clothing"];

    return (
        <aside className="md:w-[25%] w-full space-y-6 relative" aria-label="Product Filters">
            {/* Search */}
            <form role="search" className="w-full">
                <label htmlFor="search" className="sr-only">
                    Search products
                </label>
                <input
                    id="search"
                    type="search"
                    placeholder="Search..."
                    className="w-full border px-3 py-2 text-sm outline-none"
                />
            </form>

            {/* Categories */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3 uppercase tracking-wider"
                    onClick={() => toggleFilter("categories")}
                >
                    <h3>CATEGORIES</h3>
                    {activeFilter === "categories" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "categories" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {categories.map((cat) => (
                            <li
                                key={cat.label}
                                className="flex justify-between hover:text-black cursor-pointer last:border-b border-gray-300 last:pb-5"
                            >
                                <a href="#">{cat.label}</a>
                                <span className="text-gray-400">({cat.count})</span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Branding */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3"
                    onClick={() => toggleFilter("brand")}
                >
                    <h3>BRANDING</h3>
                    {activeFilter === "brand" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "brand" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {brandOptions.map((brand) => (
                            <li
                                key={brand}
                                className="hover:text-black cursor-pointer last:border-b border-gray-300 last:pb-5"
                            >
                                <a href="#">{brand}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Price */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3"
                    onClick={() => toggleFilter("price")}
                >
                    <h3>FILTER PRICE</h3>
                    {activeFilter === "price" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "price" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {priceRanges.map((range) => (
                            <li
                                key={range}
                                className="hover:text-black cursor-pointer last:border-b border-gray-300 last:pb-5"
                            >
                                <a href="#">{range}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Size */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3"
                    onClick={() => toggleFilter("size")}
                >
                    <h3>SIZE</h3>
                    {activeFilter === "size" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "size" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {sizeOptions.map((size) => (
                            <li
                                key={size}
                                className="hover:text-black cursor-pointer last:border-b border-gray-300 last:pb-5"
                            >
                                <a href="#">{size}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Colors */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3"
                    onClick={() => toggleFilter("color")}
                >
                    <h3>COLORS</h3>
                    {activeFilter === "color" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "color" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        {colorOptions.map((color) => (
                            <li
                                key={color}
                                className="hover:text-black cursor-pointer last:border-b border-gray-300 last:pb-5"
                            >
                                <a href="#">{color}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Tags */}
            <section>
                <header
                    className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center py-3"
                    onClick={() => toggleFilter("tags")}
                >
                    <h3>TAGS</h3>
                    {activeFilter === "tags" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </header>
                {activeFilter === "tags" && (
                    <ul className="mt-2 space-y-1 flex flex-wrap gap-5">
                        {tagOptions.map((tag) => (
                            <li
                                key={tag}
                                className="text-primary font-semibold tracking-wider uppercase cursor-pointer bg-gray-100 py-1 px-3 text-[12px]"
                            >
                                <a href="#">{tag}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </aside>
    );
};

export default FiltersSidebar;
