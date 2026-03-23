// components/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-primary/5  py-16 px-3 md:px-20 text-center">
      <h1 className="text-2xl md:text-4xl font-serif mb-4">
        Join Thousands of Satisfied Customers Worldwide
      </h1>
      <p className="text-base tracking-wider mb-6">
        Discover a new standard in modern timekeeping. Elevate your wristwear today.
      </p>
      <Link
        to="/shop"
        className="inline-block  font-medium px-6 py-3 hover:border-transparent hover:text-white border-inherit border-4  hover:bg-primary transform transition duration-300 "
      >
        Explore Our Watches
      </Link>
    </section>
  );
};

export default CTASection;
