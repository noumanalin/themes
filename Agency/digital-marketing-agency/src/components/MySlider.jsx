import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

// import './slider.css';


const MySlider = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="mySwiper"
      >
        <SwiperSlide><div className="h-[300px] bg-red-300 flex items-center justify-center text-3xl">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="h-[300px] bg-blue-300 flex items-center justify-center text-3xl">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="h-[300px] bg-green-300 flex items-center justify-center text-3xl">Slide 3</div></SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        <button className="custom-prev w-12 h-12">
          <img src={leftArrow} alt="Previous" className="w-full h-full" />
        </button>
        <button className="custom-next w-12 h-12">
          <img src={rightArrow} alt="Next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default MySlider;
