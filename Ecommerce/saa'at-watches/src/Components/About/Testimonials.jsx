// components/TestimonialSlider.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ali Khan',
    feedback: 'The craftsmanship is truly stunning. I get compliments every time I wear my new watch!',
    location: 'Dubai, UAE',
  },
  {
    name: 'Emily Smith',
    feedback: 'I was blown away by the packaging and attention to detail. Absolutely recommend!',
    location: 'London, UK',
  },
  {
    name: 'Mohammed Arif',
    feedback: 'Elegant design, fast shipping, and perfect fit. Worth every penny.',
    location: 'Karachi, Pakistan',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Optional: Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <section className="py-16 mx-3 px-3 md:px-20 text-center">
      <h1 className="text-2xl md:text-4xl font-serif  mb-10 ">
        What Our Customers Say
      </h1>
      <div className="relative max-w-3xl  mx-auto">
        {/* Slide content */}
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute top-0 left-0 w-full'
            }`}
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg min-h-[200px]">
              <p className="text-gray-600 text-lg italic mb-4">“{item.feedback}”</p>
              <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-all"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-all"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-primary' : 'bg-gray-400'
            } transition-all`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
