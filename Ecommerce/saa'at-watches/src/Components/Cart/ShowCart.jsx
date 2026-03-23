import React from "react";
import { FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa";
import { useShop } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function ShowCart() {
  const {
    cartItems,
    updateCartQuantity,
    removeFromCart,
  } = useShop();

  return (
    <div className="w-full md:px-20 px-3 py-10">
      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="text-center py-10 ">
          <p className="text-gray-600 pb-10">Your cart is empty</p>
          <Link to="/shop">
            <button className="uppercase border-2 border-inherit px-6 py-3 font-semibold hover:bg-primary hover:text-white hover:border-transparent transition">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Table Header */}
          <div className="border rounded-t bg-sectionbg text-white/50 text-sm font-medium grid-cols-8 md:grid-cols-12 grid">
            <div className="col-span-6 p-4 pl-10">Product</div>
            <div className="col-span-2 p-4">Price</div>
            <div className="col-span-2 p-4 hidden md:block">Quantity</div>
            <div className="col-span-2 p-4 hidden md:block">Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item, index) => {
            const price = parseFloat(
              item.product.salePrice || item.product.price
            );
            const subtotal = price * item.quantity;

            return (
              <div
                key={item.id}
                className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
              >
                {/* Product Row */}
                <div className="grid grid-cols-8 md:grid-cols-12 items-center p-4 text-sm">
                  {/* Product Info */}
                  <div className="col-span-6 flex items-center gap-4">
                    <button
                      className="text-primary p-1 duration-700 rounded-full hover:text-white hover:bg-primary"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <FaTimes />
                    </button>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <p className="truncate">{item.product.name}</p>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-right md:text-left md:col-span-2">
                    ${price.toFixed(2)}
                  </div>

                  {/* Quantity Controls (Desktop) */}
                  <div className="hidden md:flex md:col-span-2 items-center">
                    <div className="border bg-white border-primary w-16 flex items-center">
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-full h-full text-center"
                      />
                      <div className="flex flex-col">
                        <button
                          className="bg-[#a8654d] text-white text-xs p-1 hover:opacity-90"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        >
                          <FaChevronUp />
                        </button>
                        <button
                          className="bg-[#a8654d] text-white text-xs p-1 hover:opacity-90"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        >
                          <FaChevronDown />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtotal (Desktop) */}
                  <div className="hidden md:block md:col-span-2">
                    ${subtotal.toFixed(2)}
                  </div>
                </div>

                {/* Mobile Quantity Controls */}
                <div className="md:hidden flex justify-between items-center px-4 pb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span>Qty:</span>
                    <div className="border bg-white border-primary w-16 flex items-center">
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-full h-full text-center"
                      />
                      <div className="flex flex-col">
                        <button
                          className="bg-primary text-white text-xs p-1 hover:opacity-90"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        >
                          <FaChevronUp />
                        </button>
                        <button
                          className="bg-primary text-white text-xs p-1 hover:opacity-90"
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        >
                          <FaChevronDown />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium">
                    Subtotal: <span className="text-gray-700 font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cart Actions */}
          <div className="px-3 py-5 h-full bg-gray-50">
            <div className="flex gap-3 justify-between items-center">
              <input
                type="text"
                placeholder="Coupon code"
                className="bg-gray-100 outline-none px-4 py-3 text-sm max-w-sm"
              />
              <button className="bg-white border-4 w-fit hover:border-transparent duration-700 hover:bg-sectionbg hover:text-white border-inherit px-10 py-3 text-sm">
                APPLY COUPON
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
