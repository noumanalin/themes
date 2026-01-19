import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";  
import "swiper/css";
import "swiper/css/pagination";

const data = [
  { id: 1, title: "01. About Us", imgSrc: "/about-1.jpg" },
  { id: 2, title: "02. Shipping Info", imgSrc: "/delivery-2.png" },
  { id: 3, title: "03. Store", imgSrc: "/shop-3.jpg" },
  { id: 4, title: "04. Natural Skincare", imgSrc: "/demo-1.jpg" },
  { id: 5, title: "05. Fragrance Store", imgSrc: "/demo-2.jpg" },
  { id: 6, title: "06. Wellness Products", imgSrc: "/demo-3.jpg" },
];

const InnerPages = () => {
  return (
    <section
      aria-label="Inner Pages"
      id="inner-pages"
      className="wrapper py-16 text-center"
    >
      <h2 className="font-stylish text-2xl md:text-3xl text-[var(--primary)]">
        Additional Pages
      </h2>
      <h1 className="text-3xl md:text-4xl font-light">
        EXTENSIVE COLLECTION OF PAGES
      </h1>
      <p className="text-[var(--secondary)] mb-12 mt-2 max-w-2xl mx-auto">
        We have developed 22 pre-designed pages ready for use. All e-commerce functionality pages are included.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}  
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{
          delay: 3000,  
          disableOnInteraction: false,  
        }}
        loop={true}  
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 inner-pages-swiper"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="group relative bg-white shadow-md overflow-hidden flex flex-col justify-between cursor-pointer h-[380px]"
          >
            <div className="overflow-hidden h-[320px] w-full">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-[rgba(0,0,0,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="font-semibold text-[var(--secondary)] text-lg py-4 group-hover:text-[var(--primary)] transition-colors duration-300">
              {item.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-6"></div> {/* custom pagination outside */}
    </section>
  );
};

export default InnerPages;