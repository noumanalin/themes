import React from "react";
import products from "../../Data/productData"; // adjust path if needed
import ProductCard from "../ProductCard"; // using your existing ProductCard

const BestSeller = () => {
  // Filter first 4 best seller products
  const bestSellers = products
    .filter((p) => p.category === "bestSeller")
    .slice(0, 4);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Best Seller Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our most loved products by customers
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => alert(`Added "${product.title}" to cart!`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
