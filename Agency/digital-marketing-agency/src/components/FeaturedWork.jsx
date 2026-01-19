import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import image1 from '../assets/featured-image-1.jpg';
import image2 from '../assets/featured-image-2.jpg';
import image3 from '../assets/featured-image-3.jpg';
import image4 from '../assets/featured-image-4.jpg';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

const data = [
  { id: 1, text: ["Portfolio", "Web", "2022"], image: image1 },
  { id: 2, text: ["Landing", "Page", "2023"], image: image2 },
  { id: 3, text: ["E-Commerce", "Store", "2024"], image: image3 },
  { id: 4, text: ["Creative", "Agency", "2025"], image: image4 },
];

const totalCards = data.length;

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4
        }
    }
};

const FeaturedWork = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isNavReady, setIsNavReady] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setIsNavReady(true);
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
        // Force re-render of animations by updating the key
        setAnimationKey(prev => prev + 1);
    };

    return (
        <section className="w-full bg-dark text-light relative overflow-hidden">
            <section className="container-sm py-15 md:py-12 px-4">
                <h2 className='my-3 font-semibold text-[20px]'>Featured <br />Work</h2>
                
                <Swiper
                     ref={swiperRef}
                    modules={[EffectFade, Navigation]} // Add EffectFade here
                    effect="fade" // Enable fade effect
                    fadeEffect={{ crossFade: true }} // Smooth cross-fade between slides
                    slidesPerView={1}
                    loop={true}
                    speed={800}  
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    className="w-full fade-slider"
                >
                    {data.map((d, index) => (
                        <SwiperSlide key={index} className='w-full relative h-[400px] md:h-[600px] lg:h-[700px]'>
                            <h4 className='text-center mb-5'>
                                <strong>
                                    <span className='text-4xl md:text-6xl'>0{d.id} /</span> 
                                    <span className='text-xl md:text-2xl'> 0{totalCards}</span>
                                </strong>
                            </h4>

                            <div className='relative z-10 h-full flex flex-col justify-center' key={`${animationKey}-${d.id}`}>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`${animationKey}-${d.id}-0`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        className="text-left uppercase leading-none text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-semibold"
                                    >
                                        {d.text[0]}
                                    </motion.p>
                                </AnimatePresence>
                                
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`${animationKey}-${d.id}-1`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ delay: 0.2 }}
                                        className="text-center uppercase leading-none text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-semibold"
                                    >
                                        {d.text[1]}
                                    </motion.p>
                                </AnimatePresence>
                                
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`${animationKey}-${d.id}-2`}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ delay: 0.4 }}
                                        className="text-left uppercase leading-none text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-semibold"
                                    >
                                        {d.text[2]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <figure className='w-full md:w-1/2 lg:w-1/3 h-[250px] md:h-[350px] lg:h-[400px] absolute right-0 top-1/2 -translate-y-1/2 z-0'>
                                <img 
                                    src={d.image} 
                                    alt="Benjon website image" 
                                    className='w-full h-full object-cover'
                                />
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-1 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                    <button
                        ref={prevRef}
                        className="w-10 h-10 md:w-12 md:h-12 center-center rounded-full border border-gray-300 hover:bg-gray-800 transition-colors"
                    >
                        <img src={leftArrow} alt="Prev" className="w-4 md:w-5 white-filter" />
                    </button>
                    <button
                        ref={nextRef}
                        className="w-10 h-10 md:w-12 md:h-12 center-center rounded-full border border-gray-300 hover:bg-gray-800 transition-colors"
                    >
                        <img src={rightArrow} alt="Next" className="w-4 md:w-5 white-filter" />
                    </button>
                </div>
            </section>
        </section>
    );
};

export default FeaturedWork;