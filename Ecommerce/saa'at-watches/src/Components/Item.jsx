import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ image, discount, title, oldPrice, newPrice, rating }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-50 px-5 py-10 shadow-md text-center transition-all duration-700 hover:scale-100 scale-105 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-4 right-4 bg-primary text-white p-3 text-xs ">
          -{discount}%
        </span>
      )}

      {/* Product Image */}
      <img src={image} alt={title} className={`w-full h-64 my-10 object-contain ${hovered ? "transition-all duration-700 scale-110":""}`} />

      {/* Product Details (Only show when not hovered) */}
      {!hovered && (
        <>
          {/* Title */}
          <h3 className="text-sm font-medium text-gray-800 uppercase">{title}</h3>

          {/* Rating */}
          {rating > 0 && (
            <div className="text-primary text-sm mt-1">
              {'★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '')}
            </div>
          )}

          {/* Price */}
          <div className="mt-2">
            {oldPrice && (
              <span className="text-gray-400 line-through mr-2">${oldPrice}</span>
            )}
            <span className="text-gray-900 font-semibold">${newPrice}</span>
          </div>
        </>
      )}

      {/* Hover Button */}
      {hovered && (
<Link to="/shop">

        <div className="flex  justify-center mt-10">
          <button className="uppercase border-2 border-inherit px-6 py-3 font-semibold hover:bg-primary hover:text-white hover:border-transparent transition">
            Buy Now
          </button>
        </div>
</Link>

      )}
    </div>
  );
};

export default Item;
