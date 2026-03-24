import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FiltersSidebar = () => {
    const [openFilter, setOpenFilter] = useState({
        type: false,
        size: false,
        color: false,
        brand: false,
    });

    const [priceRange, setPriceRange] = useState([35, 590]);

    const toggleFilter = (filter) => {
        setOpenFilter((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };

    const filterOptions = [
        {
            key: "type",
            label: "PRODUCT TYPE",
            options: ["Default Shop", "Men", "Women"],
        },
        {
            key: "size",
            label: "SIZE",
            options: ["S", "M", "L"],
        },
        {
            key: "color",
            label: "COLOR",
            options: ["Black", "Brown", "Navy", "Sand"],
        },
        {
            key: "brand",
            label: "BRAND",
            options: [
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
            ],
        },
    ];

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), priceRange[1] - 1);
        setPriceRange([value, priceRange[1]]);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), priceRange[0] + 1);
        setPriceRange([priceRange[0], value]);
    };

    return (
        <aside className="md:w-[20%] w-full space-y-6 relative">
            <button className="text-sm text-gray-600 underline">Clear All</button>

            {filterOptions.map((filter) => (
                <div key={filter.key}>
                    <h3
                        className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center border-b border-gray-300 py-3"
                        onClick={() => toggleFilter(filter.key)}
                    >
                        {filter.label}
                        {openFilter[filter.key] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </h3>
                    {openFilter[filter.key] && (
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                            {filter.options.map((option) => (
                                <label key={option} className="block">
                                    <input type="checkbox" className="mr-2 accent-primary cursor-pointer" />
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* PRICE RANGE */}
            <div>
                <h3 className="font-semibold text-gray-800 flex justify-between items-center">
                    PRICE
                </h3>

                <div className="mt-4 relative h-6">
                    {/* Track line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded-full -translate-y-1/2"></div>

                    {/* Filled range */}
                    <div
                        className="absolute top-1/2 h-1  bg-primary rounded-full -translate-y-1/2"
                        style={{
                            left: `${((priceRange[0] - 35) / (590 - 35)) * 100}%`,
                            right: `${100 - ((priceRange[1] - 35) / (590 - 35)) * 100}%`,
                        }}
                    ></div>

                    {/* Min slider */}
                    <input
                        type="range"
                        min="35"
                        max="590"
                        value={priceRange[0]}
                        onChange={handleMinChange}
                        className="absolute w-full h-6 bg-transparent range-input"
                    />

                    {/* Max slider */}
                    <input
                        type="range"
                        min="35"
                        max="590"
                        value={priceRange[1]}
                        onChange={handleMaxChange}
                        className="absolute w-full h-6 bg-transparent range-input"
                    />
                </div>

                <p className="text-sm font-medium mt-3">
                    ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
                </p>
            </div>

            {/* Custom styles for slider */}
            <style jsx>{`
                .range-input {
                    -webkit-appearance: none;
                    appearance: none;
                    background: transparent;
                    pointer-events: none;
                }

                .range-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background:  var(--color-primary);
                    border: none;
                    cursor: pointer;
                    pointer-events: auto;
                    margin-top: -6px; /* centers thumb */
                    z-index: 2;
                }

                .range-input::-moz-range-thumb {
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background:  var(--color-primary);
                    border: none;
                    cursor: pointer;
                    pointer-events: auto;
                    z-index: 2;
                }

                input[type="range"]::-webkit-slider-runnable-track {
                    height: 1px;
                    background: transparent;
                }

                input[type="range"]::-moz-range-track {
                    height: 1px;
                    background: transparent;
                }
            `}</style>
        </aside>
    );
};

export default FiltersSidebar;
