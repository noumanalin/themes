// components/BestSellers.jsx
import React from 'react';
import Item from '../Item';
import { allProducts } from '../../assets/data';

const BestSellers = () => {
  const bestSellers = allProducts.filter(p => p.category === 'bestSellerProduct');

  return (
    <section data-aos="fade-up" className="mb-16 px-3 text-center md:px-20 ">
      <h1 className="md:text-4xl text-2xl font-serif">Our Best Sellers</h1>

      <div className=" mt-12 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bestSellers.map((product) => (
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

export default BestSellers;
