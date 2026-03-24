import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Aiden Clarke",
        role: "Perfume Collector",
        message:
            "Each fragrance feels like a story captured in a bottle. The balance of notes is simply stunning, lasting all day without being overpowering. It’s easily one of my favorite perfume experiences so far.",
    },
    {
        id: 2,
        name: "Sophia Bennett",
        role: "Luxury Scent Enthusiast",
        message:
            "The perfume’s aroma is elegant yet refreshing, leaving a beautiful trail that stays for hours. I’m impressed with the quality, presentation, and how every detail feels premium and well-thought-out.",
    },
    {
        id: 3,
        name: "Ethan Morgan",
        role: "Regular Customer",
        message:
            "From the first spray to the final dry-down, the scent evolves beautifully. The longevity and subtle projection make it perfect for daily wear. The packaging adds a classy touch to the entire experience.",
    },
];


const Testimonial = () => {
    return (
        <section
            className="relative py-20 bg-[url('/about/testimonial-bg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center px-4"
            style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1757334203899-91f5c733ea77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870)` }} // teal fallback
        >
            <div className="max-w-4xl w-full">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="relative"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <article className="relative bg-white shadow-md text-center px-2 md:px-10 py-10 md:py-14">
                                {/* Inner border box */}
                                <div className="border border-gray-400 p-10 relative">
                                    
                                    
                                    {/* Header */}
                                    <p className="tracking-wide meow-script-regular text-[var(--primary)] md:text-7xl text-5xl">
                                        Testimonials
                                    </p>
                                    <h2 className="text-2xl md:text-4xl font-light text-gray-800 uppercase mb-6">
                                        What Our Clients Say
                                    </h2>

                                    {/* Message */}
                                    <blockquote className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                                        “{testimonial.message}”
                                    </blockquote>

                                    {/* Author Info */}
                                    <footer className="mb-6">
                                        <p className="font-medium text-gray-800">{testimonial.name}</p>
                                        <p className="text-[var(--primary)] font-semibold text-sm tracking-wide uppercase mt-1">
                                            {testimonial.role}
                                        </p>
                                    </footer>

                                    {/* Swiper pagination dots inside box */}
                                    <div className="swiper-pagination !static flex justify-center " />
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
