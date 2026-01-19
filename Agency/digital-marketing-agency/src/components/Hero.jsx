import { motion } from 'framer-motion'

import heroImage from '../assets/hero-img.jpg';       
import downArrow from '../assets/down-arrow.svg';    
import Brands from './Brands';
import starImage from '../assets/stars.webp'

const Hero = () => {
  return (
    <section className='w-full bg-accent pt-20 pb-10 overflow-hidden relative'>
      <article className='container-lg flex flex-col md:flex-row gap-10 items-start'>

        {/* Circle Decoration */}
        <div className="hidden md:block md:w-[200px] relative">
          <span className='absolute -left-[80%] top-[220px] w-[320px] h-[320px] border border-gray-600 rounded-full'>
            <span className='w-[120px] h-[1px] absolute -right-7 bottom-15 rotate-45 bg-gray-600' />
          </span>
        </div>

        {/* Star */}
        <img src={starImage} alt="decorative star graphic" className='white-filter absolute right-7 top-5' />

        <div className="flex-1">

          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6 md:mb-10'
          >
            <h2 className='uppercase text-light text-base sm:text-lg tracking-wider flex items-center gap-4'>
              creative 
              <span className='w-20 sm:w-32 h-[2px] bg-white'></span>
            </h2>
          </motion.div>

          {/* Heading + Video Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] uppercase tracking-tight text-light font-bold leading-[0.8] -ml-2'
            >
              mark
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 center-center border border-white/20 group-hover:bg-primary transition-all duration-300 flex justify-center items-center'>
                <svg className='w-6 h-6 sm:w-8 sm:h-8 text-white ml-1' fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
              <p className='text-light text-xs sm:text-sm uppercase tracking-wider'>
                play <br /> intro video
              </p>
            </motion.div>
          </div>

          {/* Paragraph + Second Word */}
          <div className="flex-bc flex-col-reverse md:flex-row gap-6 z-10 mt-6 relative">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='text-gray text-sm md:text-base max-w-[320px] leading-6'
            >
              We create impactful digital solutions that help brands stand out, connect with their audience, and grow faster in a competitive market.
            </motion.p>

            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-[100px] sm:text-[120px] md:text-[200px] lg:text-[300px] uppercase tracking-tight text-light font-bold leading-[0.8]'
            >
              eting
            </motion.h1>
          </div>

          {/* Arrow + Image */}
          <div className="flex flex-col md:flex-row items-center gap-25 md:-top-20 relative z-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href='#brands' className='block animate-slow-bounce'>
                <img src={downArrow} alt="scroll down arrow" className='white-filter' />
              </a>
            </motion.div>

            <motion.figure
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className='w-full max-w-full overflow-hidden'
            >
              <img 
                src={heroImage}
                alt="creative digital agency banner" 
                className='w-full h-auto object-cover'
              />
            </motion.figure>
          </div>

          {/* Brand Logos */}
          <Brands />
        </div>
      </article>
    </section>
  )
}

export default Hero
