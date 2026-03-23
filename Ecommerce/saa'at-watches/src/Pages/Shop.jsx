import ProductGrid from "../Components/Shop/ProductGrid";
import MiniCart from "../Components/Shop/MiniCart";
import Pagination from "../Components/Shop/Pagination";
import ShopHeader from "../Components/Shop/ShopHeader";
import PageBanner from "../Components/PageBanner"

function ShopContent() {
  return (
    <div className="">


      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content Area */}
          <div className="w-full flex flex-col lg:flex-row gap-20 lg:items-start items-center lg:justify-between justify-center">

            <main className="flex-1">
              <ProductGrid />
              <Pagination />
            </main>

            {/* Sidebar Mini Cart */}
            <MiniCart />
          </div>
        </div>
      </div>
    </div>
  );
}

const Shop = () => {
  return (
    <div>
      <PageBanner title="Shop" breadcrumb="From timeless classics to modern marvels — find your perfect match" />
      <ShopContent />
    </div>
  );
}
export default Shop;