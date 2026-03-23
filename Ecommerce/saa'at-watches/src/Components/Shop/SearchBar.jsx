import { useShop } from "../../Context/ShopContext.jsx";
import { FiSearch } from "react-icons/fi"; // ✅ Feather Search Icon

function SearchBar() {
  const { searchQuery, setSearchQuery } = useShop();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="lg:w-64 w-full pl-10 pr-4 py-2 border border-slate-200 outline-none focus:border-primary transition-all duration-200"
      />
      <FiSearch className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
    </div>
  );
}

export default SearchBar;
