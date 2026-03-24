import React, { useState } from "react";
import products from "../../Data/productData";
import ProductCard from "../ProductCard";
import { LuSearch } from "react-icons/lu";
import Breadcrumb from "../Breadcrumb"


export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 500]);

    const productsPerPage = 6;

    // ✅ Use the correct price key (your products have newPrice, not price)
    const filteredProducts = products.filter((p) => {
        const matchesSearch = p.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory
            ? p.category.toLowerCase() === selectedCategory.toLowerCase()
            : true;
        const matchesPrice =
            p.newPrice >= priceRange[0] && p.newPrice <= priceRange[1];
        return matchesSearch && matchesCategory && matchesPrice;
    });

    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // ✅ Prevent start index from going negative
    const startIndex = Math.max(0, (currentPage - 1) * productsPerPage);
    const displayedProducts = filteredProducts.slice(
        startIndex,
        startIndex + productsPerPage
    );

    const handleAddToCart = (product) => {
        alert(`Added "${product.title}" to cart`);
    };

    return (
        
        <>
            <Breadcrumb
                title="Shop"
                subtitle="Explore our exclusive collection of premium products curated just for you."
                image="/shopHero.jpg"
            />
        <section className="w-full sectionlayout py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 md:space-y-10 space-y-5 md:order-last order-first ">
                {/* Search */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b pb-2">
                        Search Products
                    </h3>
                    
                    <div className="relative ">

                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full border border-gray-300 px-3 py-2 outline-none"
                        />
                        <LuSearch className=" absolute top-[25%] right-3 text-xl" /> </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b pb-2">
                        Categories
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        {["All", "bestSeller", "feature", "new"].map((cat) => (
                            <li
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat === "All" ? "" : cat);
                                    setCurrentPage(1);
                                }}
                                className={`cursor-pointer hover:text-[var(--primary)] ${selectedCategory === cat ? "font-semibold text-[var(--primary)]" : ""
                                    }`}
                            >
                                {cat === "bestSeller"
                                    ? "Best Sellers"
                                    : cat === "feature"
                                        ? "Featured"
                                        : cat === "new"
                                            ? "New"
                                            : "All"}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Filter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b pb-2">
                        Filter by Price
                    </h3>
                    <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        step="10"
                        value={priceRange[1]}
                        onChange={(e) => {
                            setPriceRange([0, Number(e.target.value)]);
                            setCurrentPage(1);
                        }}
                        className="w-full accent-[var(--accent)]"
                    />
                </div>

                {/* New Arrivals */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 border-b pb-2">
                        Meet New Arrivals
                    </h3>
                    <ul className="space-y-3">
                        {products.slice(-3).map((p) => (
                            <li key={p.id} className="flex items-center space-x-3">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-20 h-20 object-cover bg-[var(--primary)]/5 border transition-all duration-300 border-gray-300 hover:border-gray-500"
                                />
                                <div>
                                    <p className="text-sm font-medium">{p.title}</p>
                                    {/* ⭐ Rating */}
                                    <span className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill={star <= Math.round(p.rating) ? "#fbbf24" : "#e5e7eb"} // orange-400 or gray-200
                                                className="w-3.5 h-3.5"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.063 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
                                            </svg>
                                        ))}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        ${p.newPrice.toFixed(2)}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Perfume image */}
                <figure className=" hidden md:block">
                    <img src="https://perfumedubai.com/cdn/shop/files/valentines-day-gifts-tablet_copy_1.jpg?v=1761644322" alt="" />
                </figure>

            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
                {/* Header with sorting & count */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <p className="text-gray-600 text-sm">
                        Showing{" "}
                        {totalProducts > 0
                            ? `${startIndex + 1}–${Math.min(
                                startIndex + displayedProducts.length,
                                totalProducts
                            )}`
                            : 0}{" "}
                        of {totalProducts} results
                    </p>
                   
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product) => (
                            <div key={product.id} className="flex justify-center">
                                <ProductCard product={product} onAddToCart={handleAddToCart} />
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No products found.
                        </p>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-3 mt-8">
                        {/* Prev Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="relative z-30 px-5 py-3 border bg-transparent text-[var(--secondary)] hover:text-white font mt-2 overflow-hidden transition-all duration-700 text-lg 
                 after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                 after:bg-[var(--secondary)] after:rounded-md after:-z-10 after:translate-y-full 
                 after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase
                 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Prev
                        </button>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => {
                            const isActive = currentPage === index + 1;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`relative z-30 px-5 py-3 border font mt-2 overflow-hidden transition-all duration-700 text-lg uppercase cursor-pointer
                      after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 after:rounded-md after:-z-10 after:translate-y-full after:transition-all after:duration-700 
                      ${isActive
                                            ? "bg-[var(--secondary)] text-white"
                                            : "bg-transparent text-[var(--secondary)] hover:text-white after:bg-[var(--secondary)] hover:after:scale-[300]"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}

                        {/* Next Button */}
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="relative z-30 px-5 py-3 border bg-transparent text-[var(--secondary)] hover:text-white font mt-2 overflow-hidden transition-all duration-700 text-lg 
                 after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                 after:bg-[var(--secondary)] after:rounded-md after:-z-10 after:translate-y-full 
                 after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase
                 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
            </section>

            {/* SEO meta tags */}
            <meta
                name="description"
                content="Discover our exclusive perfume collection — from timeless classics to modern blends. Shop luxury fragrances crafted to match every mood and occasion."
            />
            <meta
                name="keywords"
                content="perfume shop, luxury perfumes, buy perfumes online, long lasting fragrances, best perfumes"
            />
            <title>Shop | Perfume Collection</title>


        </>
    );
}
