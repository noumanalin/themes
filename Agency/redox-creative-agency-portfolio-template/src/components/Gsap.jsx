import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

import Shape1 from '../assets/shape-1.png';
import Shape2 from '../assets/shape-2.png';
import Shape3 from '../assets/shape-3.png';
import gif from '../assets/gif.jpg';
import { MyButton } from './MyButton';

const Gsap = () => {
  const controls = useAnimation();
  const phoneRef = useRef(null);

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <section className="relative w-screen bg-[#eeeeee] ">
      <div className="wrapper flex flex-col lg:flex-row items-center justify-center p-8 lg:p-20 overflow-hidden font-['Inter']">
        {/* Shapes - hidden on mobile */}
        <motion.img
          src={Shape1}
          alt="Shape 1"
          className="absolute w-28 top-0 left-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0], // floating
            rotate: [0, 5, -5, 0], // slight tilt
          }}
          transition={{ duration: 6, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={Shape2}
          alt="Shape 2"
          className="absolute w-20 bottom-16 right-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, 20, 0], // floating up & down
            scale: [1, 1.1, 1], // pulse
          }}
          transition={{ duration: 5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={Shape3}
          alt="Shape 3"
          className="hidden lg:block absolute w-32 top-24 right-[35%]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1], // subtle breathing
            rotate: [0, 8, -8, 0], // slow rotation
          }}
          transition={{ duration: 7, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 lg:p-0">
          <h1 className="text-5xl lg:text-8xl font-bold text-gray-700">
            Advanced <br />
            <span className="font-['Playfair Display'] italic font-normal text-6xl lg:text-9xl text-gray-900">
              Animations
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg lg:text-2xl">
            <span className='text-gray-900'>Enhance your website's energy with tailored animations</span>
            <span className='text-gray-700'> or dynamic
              pre-configured ones to deliver a seamless and engaging user journey!</span>
          </p>

          {/* Features */}
          <div className="mt-8 text-left">
            <p className="font-bold text-gray-800 mb-2">Features:</p>
            <ul className="text-gray-600 space-y-2">
              {[
                'Smooth Scrolling',
                'Animate Anything including Text',
                'Image Horizontal Scrolling',
                'Pin Anything',
                'Animate Character, Words or Lines',
                'User Interaction',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-orange-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="mt-10">
            <MyButton
              initialColor="bg-orange-500 text-gray-100"
              flipColor="bg-white"
              className="px-8 py-6 hover:text-gray-900"
            >
              <Link to="/" className="flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </Link>
            </MyButton>
          </div>
        </div>

        {/* Right phone image */}
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
        >
          <img
            ref={phoneRef}
            src={gif}
            alt="Animated phone"
            className="max-w-xs lg:max-w-xl rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gsap;
