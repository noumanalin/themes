import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionHead from "./SectionHead"
import { testimonialClientsArray } from "../utils/appData";
import type { TestimonialClientsArray } from "../utils/types";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";


const Testimonial = () => {
  return (
    <div className="wrapper">
      <SectionHead heading="testimonial" subHeadig="our Clients say" />
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {testimonialClientsArray.map((item: TestimonialClientsArray, index: number) => (
          <SwiperSlide key={index}>
            <article className="p-8">
              <figure className="flex gap-3 items-center mb-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="text-dark text-xl font-semibold">{item.name}</h3>
                  <p className="text-accent mb-4">{item.profession}</p>
                </div>
              </figure>
              <p className="text-accent italic">"{item.message}"</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>



    </div>
  )
}

export default Testimonial