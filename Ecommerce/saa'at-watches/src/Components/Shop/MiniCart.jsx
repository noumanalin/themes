import React from "react";
import { useShop } from "../../Context/ShopContext.jsx";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"; // ✅ Correct imports

function MiniCart() {
  const {
    cartItems,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartTotal,
    cartItemsCount,
  } = useShop();

  return (
    <aside className="lg:w-80 md:w-[50vw] w-full sticky top-24 h-fit">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Shopping Cart</h3>
          <span className="bg-primary text-white text-sm text-center content-center w-8 h-8 rounded-full">
            {cartItemsCount}
          </span>
        </div>

        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium text-slate-900">
                  {item.product.name}
                </h4>
                <p className="text-sm text-slate-600">
                  ${item.product.salePrice || item.product.price}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <button
                    onClick={() =>
                      updateCartQuantity(item.product.id, item.quantity - 1)
                    }
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
                  >
                    <FiMinus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateCartQuantity(item.product.id, item.quantity + 1)
                    }
                    className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
                  >
                    <FiPlus className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-slate-400 hover:text-red-500 transition-colors duration-200"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Subtotal</span>
            <span className="text-sm font-medium">${cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Shipping</span>
            <span className="text-sm font-medium text-primary">Free</span>
          </div>
          <div className="flex items-center justify-between mb-4 pt-2 border-t border-slate-100">
            <span className="font-semibold text-slate-900">Total</span>
            <span className="font-bold text-xl text-slate-900">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-medium ">
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default MiniCart;
