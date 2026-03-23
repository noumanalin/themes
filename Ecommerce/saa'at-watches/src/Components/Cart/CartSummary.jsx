import React from "react";
import { useShop } from "../../Context/ShopContext";

function CartSummary() {
  const { cartItems, cartSubtotal, cartTotal } = useShop();

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Use cartSubtotal from context instead of calculating here
  const shipping = cartSubtotal > 0 ? 20 : 0;
  const total = cartTotal; // Use cartTotal from context

  return (

    <div className=" w-full md:px-20 px-3 flex justify-center md:justify-end my-10">

      <div className="bg-white p-6 w-full  md:max-w-lg  rounded-xl shadow-md border border-gray-100">
        <h1 className="text-xl font-serif mb-4 text-center">Cart Summary</h1>

        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-base">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-sectionbg text-white py-2 px-4 rounded hover:bg-primary transition">
          Proceed to Checkout
        </button>
      </div>
    </div>

  );
}

export default CartSummary;