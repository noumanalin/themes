import React, { useState } from 'react';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

const sliderData = [
  {
    id: 1,
    title: 'Luxury',
    subtitle: 'Brands',
    image: img1,
  },
  {
    id: 2,
    title: 'Classic',
    subtitle: 'Pieces',
    image: img2,
  },
  {
    id: 3,
    title: 'Modern',
    subtitle: 'Elegance',
    image: img3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div data-aos="fade-up" className="relative w-full lg:h-screen h-[70vh] bg-slate-50 overflow-hidden flex items-center justify-center content-center">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute lg:top-[40%] top-[20%] transition-all duration-700 ease-in-out transform ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } flex flex-col items-center justify-center text-center`}
        >
          <div className="lg:text-[40px] md:text-[30px] lg:gap-40 font-serif z-10 flex tracking-wide">
            <h1 data-aos="fade-right" className="text-gray-300">{slide.title}</h1>
            <h1 data-aos="fade-left" className="text-gray-300 lg:ml-10">{slide.subtitle}</h1>
          </div>

          <img
    
            src={slide.image}
            alt={slide.title}
            className={`lg:absolute  z-0 rotate-[30deg] w-[250px] md:mt-0 mt-10 md:w-[300px] h-auto object-contain `}
          />
        </div>
      ))}

      {/* Browse button */}
      <button className="absolute bottom-10 text-sm uppercase tracking-widest hover:text-primary transition-all flex">
        Browse Collection
        <IoIosArrowDown className="text-lg ml-1" />
      </button>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute bottom-10 left-3 md:left-10 text-sm flex items-center gap-1 hover:text-primary transition-all"
      >
        <IoIosArrowBack className="text-md" /> Previous
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute bottom-10 right-3 md:right-10 text-sm flex items-center gap-1 hover:text-primary transition-all"
      >
        Next <IoIosArrowForward className="text-md" />
      </button>
    </div>
  );
};

export default Hero;
