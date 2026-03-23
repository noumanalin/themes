import React, { useState } from "react";
import { useShop } from "../Context/ShopContext.jsx";
import { AiFillStar } from "react-icons/ai";

function ProductCard({ product }) {
  const { addToCart } = useShop();
  const [hovered, setHovered] = useState(false);

  const hasDiscount = product.discount > 0;
  const displayPrice = product.price;
  const oldPrice = product.oldPrice;

  return (
    <div
      className="relative w-full bg-gray-50 px-5 py-10 shadow-md text-center transition-all duration-700 hover:scale-100 scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Discount Badge */}
      {hasDiscount && (
        <span className="absolute top-4 right-4 bg-primary text-white p-3 text-xs">
          -{product.discount}%
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-64 my-10 object-contain ${hovered ? "transition-all duration-700 scale-110" : ""
          }`}
      />

      {/* Product Details */}
      {!hovered ? (
        <>
          {/* Product Name */}
          <h3 className="text-sm font-medium text-gray-800 uppercase">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating > 0 && (() => {
            const rating = product.rating;
            return (
              <div className="text-primary text-sm mt-1 flex items-center justify-center gap-1">
                {'★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '')}
                <span>{rating}</span>
                <span className="text-gray-500">({product.reviewCount})</span>
              </div>
            );
          })()}

          {/* Price */}
          <div className="mt-2">
            {oldPrice && (
              <span className="text-gray-400 line-through mr-2">
                ${oldPrice}
              </span>
            )}
            <span className="text-gray-900 font-semibold">${displayPrice}</span>
          </div>
        </>
      ) : (
        // Hover State — Add to Cart Button
        <div className="flex justify-center mt-10">
                   <button 
                    onClick={() => addToCart(product)}
                    className=" border-4 hover:border-transparent hover:bg-primary hover:text-white px-4 py-2 font-medium transition-all duration-200 ml-4"
                  >
                    Add to Cart
                  </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
