import React, { useState } from "react";
import products from "../../assets/data";
import ProductCard from "../ProductCard";

const Main = () => {
    const productsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const displayedProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Generate pagination buttons with ellipsis
    const renderPagination = () => {
        const pages = [];
        const leftSide = Math.max(1, currentPage - 1);
        const rightSide = Math.min(totalPages, currentPage + 1);

        // Always show first page
        if (currentPage > 2) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    aria-label="Go to page 1"
                    className={`aspect-square w-10 h-10 text-primary font-semibold border rounded-full cursor-pointer ${currentPage === 1 ? "border-secondary" : "border-black"
                        }`}
                >
                    1
                </button>
            );
        }

        // Ellipsis before middle
        if (currentPage > 3) {
            pages.push(
                <span key="start-ellipsis" className="px-2" aria-hidden="true">
                    …
                </span>
            );
        }

        // Middle pages
        for (let i = leftSide; i <= rightSide; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    aria-label={`Go to page ${i}`}
                    aria-current={currentPage === i ? "page" : undefined}
                    className={`aspect-square w-10 h-10 text-primary font-semibold border rounded-full cursor-pointer ${currentPage === i ? "border-secondary" : "border-black"
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Ellipsis after middle
        if (currentPage < totalPages - 2) {
            pages.push(
                <span key="end-ellipsis" className="px-2 text-primary font-semibold" aria-hidden="true">
                    …
                </span>
            );
        }

        // Always show last page
        if (currentPage < totalPages - 1) {
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    aria-label={`Go to last page, page ${totalPages}`}
                    className={`aspect-square w-10 h-10 text-primary font-semibold border rounded-full cursor-pointer ${currentPage === totalPages ? "border-secondary" : "border-black"
                        }`}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };


    return (
        <main className="md:w-[75%] w-full">
            {/* Header Section */}
            <header className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-600">
                    Showing {displayedProducts.length} of {products.length} products
                </p>

                {/* Sort Dropdown */}
                <div className="flex items-center">
                    <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                        Sort by:
                    </label>
                    <select
                        id="sort"
                        name="sort"
                        aria-label="Sort products"
                        className="px-2 py-1 text-sm bg-white border rounded"
                    >
                        <option value="default">Default</option>
                        <option value="popularity">Popularity</option>
                        <option value="rating">Average rating</option>
                        <option value="newest">Newest</option>
                        <option value="priceLowHigh">Price (Low to High)</option>
                        <option value="priceHighLow">Price (High to Low)</option>
                    </select>
                </div>
            </header>

            {/* Product Grid Section */}
            <section aria-labelledby="product-list-heading">
                <h2 id="product-list-heading" className="sr-only">
                    Product Listings
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProducts.map((item) => (
                        <article key={item.id} aria-label={item.name}>
                            <ProductCard product={item} />
                        </article>
                    ))}
                </div>
            </section>

            {/* Pagination Section */}
            <nav className="flex justify-center mt-8 gap-2 cursor-pointer" aria-label="Pagination Navigation">
                {renderPagination()}
            </nav>
        </main>
    );
};

export default Main;
