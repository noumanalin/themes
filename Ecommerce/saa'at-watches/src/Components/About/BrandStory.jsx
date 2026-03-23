// components/BrandStory.jsx
import React from 'react';
import storyImg from '../../assets/StoryImg.png'; // Replace with actual image path

const BrandStory = () => {
  return (
    <section className="pb-16 px-3 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <img
data-aos="fade-right"
          src={storyImg}
          alt="Watchmaker crafting a watch"
          className="w-full rounded-xl shadow-md object-cover  md:order-1 order-2"
        />
        <div data-aos="fade-left" className=' md:text-left text-center order-1 md:order-2'>
          <h1 className="text-2xl md:text-4xl font-serif mb-4">
            Our Story
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Founded with a vision to redefine elegance in timekeeping, our brand brings together
            traditional watchmaking artistry with modern innovation. From our first sketch to the final
            timepiece, every detail is crafted with precision, passion, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
