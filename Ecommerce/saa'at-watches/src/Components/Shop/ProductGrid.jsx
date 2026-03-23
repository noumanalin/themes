import ProductCard from "../ProductCard.jsx";
import { useShop } from "../../Context/ShopContext.jsx";

function ProductGrid() {
  const { layoutView, paginatedProducts, addToCart } = useShop();

  if (layoutView === "list") {
    return (
      <div className="space-y-4">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
          >
            <div className="flex">
              <div className="relative my-5 w-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-col space-y-5 items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center space-x-4">
                      {/* Price */}
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-slate-900">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-lg text-slate-500 line-through">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      {product.rating > 0 && (
                        <div className="flex items-center space-x-1 text-primary text-sm">
                          <span>
                            {"★".repeat(Math.floor(product.rating)) +
                              (product.rating % 1 >= 0.5 ? "½" : "")}
                          </span>
                          <span className="text-slate-600">
                            {product.rating}
                          </span>
                          <span className="text-slate-400">
                            ({product.reviewCount})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="border-4 hover:border-transparent hover:bg-primary hover:text-white px-4 py-2 font-medium transition-all duration-200 ml-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {paginatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
