// Components/ShopHeader.jsx
import React from "react";
import { useShop } from "../../Context/ShopContext";
import LayoutToggle from "./LayoutToggle";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

const ShopHeader = () => {
  const { sortBy, setSortBy } = useShop();

  return (
    <header className="px-3 md:px-20">
      {/* Mobile SearchBar */}
      <div className="lg:hidden my-10 flex items-center justify-center">
        <SearchBar />
      </div>

      <div className="flex items-center justify-between h-16">
        <LayoutToggle />
        
        <div className="flex items-center space-x-4">
          {/* Pass props to SortDropdown */}
          <SortDropdown sortOption={sortBy} setSortOption={setSortBy} />

          {/* Desktop SearchBar */}
          <div className="lg:block hidden">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
