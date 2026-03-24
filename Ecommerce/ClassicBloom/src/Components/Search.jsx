import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const Search = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm transition-all duration-300">
      {/* Search Bar at the Top */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-gray-300">
        <div className="flex items-center w-full max-w-4xl">
          <FiSearch className="text-gray-500 w-6 h-6 mr-3" />
          <input
            type="text"
            placeholder="Type Your Search..."
            className="w-full text-gray-800 placeholder-gray-500 text-lg outline-none bg-transparent"
            autoFocus
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      {/* Optional background image or dimmed area below search */}
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-sm">
          Start typing to find your favorite perfume...
        </p>
      </div>
    </div>
  );
};

export default Search;
