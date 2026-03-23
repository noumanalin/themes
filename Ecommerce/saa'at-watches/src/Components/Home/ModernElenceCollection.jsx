// components/CollectionSection.jsx
import React from 'react';
import Item from '../Item';
import { allProducts } from '../../assets/data';

const ModernEleganceCollection = () => {
  const modernProducts = allProducts.filter(p => p.category === 'modernProduct');

  return (
    <section data-aos="fade-up" className="py-16 px-3 text-center md:px-20">
      <h1 className="md:text-4xl text-2xl font-serif">Modern Elegance Collection</h1>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
        Discover our newest range of refined timepieces designed for simplicity and modern style.
        With stainless steel backs and elegant finishes, each piece offers room for personalized engraving —
        complimentary with every purchase.
      </p>

      <div className=" mt-12 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {modernProducts.map((product) => (
          <Item
            key={product.id}
            image={product.image}
            discount={product.discount}
            title={product.name}
            oldPrice={product.oldPrice}
            newPrice={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default ModernEleganceCollection;
