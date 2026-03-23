import React from "react";
import { MdGridView, MdViewList } from "react-icons/md";
import { useShop } from "../../Context/ShopContext.jsx";

function LayoutToggle() {
  const { layoutView, setLayoutView, filteredProducts } = useShop();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLayoutView("grid")}
        className={`p-2 rounded-sm hover:bg-primary hover:text-white  transition-all duration-200 ${
          layoutView === "grid"
            ? "bg-primary text-white  "
            : " bg-primary/10"
        }`}
      >
        <MdGridView className="w-5 h-5" />
      </button>
      <button
        onClick={() => setLayoutView("list")}
        className={`p-2 rounded-sm  transition-all hover:bg-primary hover:text-white duration-200 ${
          layoutView === "list"
            ? "bg-primary text-white "
            : "bg-primary/10"
        }`}
      >
        <MdViewList className="w-5 h-5" />
      </button>
      <span className="text-sm text-slate-600 ml-2">
        {filteredProducts.length} products
      </span>
    </div>
  );
}

export default LayoutToggle;
