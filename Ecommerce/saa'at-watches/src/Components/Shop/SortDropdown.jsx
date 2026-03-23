// src/Components/SortDropdown.jsx
import React from 'react';

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="border p-2 rounded-md shadow-sm outline-none focus:border-primary"
    >
      <option value="rating">Sort by Average Rating</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;
