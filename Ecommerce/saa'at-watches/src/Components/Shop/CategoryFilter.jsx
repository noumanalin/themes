import React from 'react';

const categories = ['Luxury', 'Smart', 'Vintage', 'Gift-Worthy', 'Office Look', 'Vacation Mood'];

const CategoryFilter = () => {
  return (
    <aside className="w-[200px] sticky top-20 h-[calc(100vh-80px)] overflow-y-auto p-4 border-r border-gray-200">
      <h2 className="font-semibold mb-4">Categories</h2>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat} className="hover:text-primary cursor-pointer">{cat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;