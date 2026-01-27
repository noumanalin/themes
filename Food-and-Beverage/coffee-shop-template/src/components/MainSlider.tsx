import { useState } from "react";
import { mainSlider } from "../utils/appData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderLength = mainSlider.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderLength - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderLength - 1 ? 0 : prev + 1));
  };

  if (!mainSlider || sliderLength === 0) return null;

  return (
    <section id="mainSlider" className="bottom-border-shape relative w-[99vw] h-[50vh] md:h-[120vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {mainSlider.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            <div className="absolute inset-0 bg-black/80"/>
            <img
              src={item.image}
              alt={`${item.item} banner`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
              <div className="p-8">
                <p className="text-lg text-fair uppercase tracking-widest"><strong>{item.title}</strong></p>
                <h1 className="text-6xl md:text-9xl font-bold uppercase my-2">{item.item}</h1>
                <p className="text-lg uppercase tracking-widest">
                  <strong>* {item.subTitle} *</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default MainSlider;