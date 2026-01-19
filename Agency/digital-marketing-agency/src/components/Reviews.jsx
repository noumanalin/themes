import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { fadeIn } from '../utils/framer-motion';

import quoteIcon from '../assets/qoutes.png';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

import image1 from '../assets/review-1.jpg';
import image2 from '../assets/review-2.jpg';
import image3 from '../assets/review-3.jpg';
import image4 from '../assets/review-4.jpg';
import image5 from '../assets/review-5.jpg';
import image6 from '../assets/review-6.jpg';

const imagePositions = [
  { src: image1, className: 'top-15 left-[10%] w-[120px]' },
  { src: image2, className: 'top-[40%] left-30 w-[180px]' },
  { src: image3, className: 'top-26 right-[25%] w-[60px]' },
  { src: image4, className: 'bottom-[35%] right-[10%] w-[180px]' },
  { src: image5, className: 'bottom-0 left-[25%] w-[200px]' },
  { src: image6, className: 'bottom-[30%] right-[20%] w-[90px]' },
];

const reviews = [
  {
    name: "Maria Khan",
    position: "Marketing Manager",
    body: "Working with this team has been an amazing experience. They’re responsive, creative, and always willing to go the extra mile to deliver high-quality results on time.",
  },
  {
    name: "David Lee",
    position: "Founder & CEO",
    body: "I was impressed by the professionalism and attention to detail. From planning to execution, everything was smooth, and the final product exceeded our expectations.",
  },
];


const Reviews = () => {
  const sectionRef = useRef(null);
  // 1. Use proper scroll tracking with container ref
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 2. Transform scroll progress to scale values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // 3. Track scroll direction for resetting scale
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollY = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > prevScrollY.current);
    prevScrollY.current = currentScrollY;
  });


  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isNavReady, setIsNavReady] = useState(false);

  useEffect(() => {
    setIsNavReady(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full md:h-[1100px] py-20 relative center-center bg-accent overflow-hidden"
    >
      {/* Animate Floating Images */}
      {imagePositions.map((img, idx) => (
        <motion.img
          key={idx}
          src={img.src}
          alt={`Decorative ${idx}`}
          className={`hidden md:block absolute ${img.className} object-cover z-0`}
          style={{
            scale: isScrollingDown ? scale : 1,
          }}
          variants={fadeIn("up", "tween", 0.1 * idx, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />
      ))}

      {/* Main Swiper Section */}
      <motion.article
        variants={fadeIn("up", "spring", 0.2, 3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative h-[450px] container-lg z-10"
      >
        {isNavReady && (
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="w-full max-w-[582px] px-4"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.article
                  variants={fadeIn("up", "tween", 0.3 + index * 0.2, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-8 text-center flex flex-col items-center"
                >
                  <img
                    src={quoteIcon}
                    alt="Quote Icon"
                    className="w-10 mb-6 white-filter"
                  />
                  <blockquote className="mb-6 text-light text-2xl italic font-semibold">
                    {review.body}
                  </blockquote>
                  <cite className="font-bold text-light text-[28px] uppercase">
                    {review.name}
                  </cite>
                  <span className="text-gray text-[14px]">
                    {review.position}
                  </span>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Arrows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          <button
            ref={prevRef}
            className="w-12 h-12 center-center rounded-full border border-gray-300"
          >
            <img src={leftArrow} alt="Prev" className="w-5 white-filter" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 center-center rounded-full border border-gray-300"
          >
            <img src={rightArrow} alt="Next" className="w-5 white-filter" />
          </button>
        </div>
      </motion.article>
    </section>
  );
};

export default Reviews;