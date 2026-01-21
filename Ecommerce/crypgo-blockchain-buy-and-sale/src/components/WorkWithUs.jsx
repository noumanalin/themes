import { motion } from 'framer-motion'
import { fadeBlock } from '../utils/motion'

import bannerImage from '../assets/img-work-with-us.png'
import consulting from '../assets/icons/icon-consulting.svg'
import solutions from '../assets/icons/icon-blockchain.svg'
import development from '../assets/icons/icon-Services.svg'

const features = [
  { name: <p>Digital Ledger<br className="hidden md:block" />Consultation</p>, src: consulting },
  { name: <p>Distributed Ledger<br className="hidden md:block" />Solutions</p>, src: solutions },
  { name: <p>Custom<br className="hidden md:block" />Development</p>, src: development },
]

const WorkWithUs = () => {
  return (
  <section id='work' className='wrapper flex justify-between flex-col md:flex-row gap-5 items-center'>
      {/* Left Section - Text and Icons */}
      <motion.article
        variants={fadeBlock("down", 1)}
        initial="hidden"
        whileInView="show"
        className="flex-1 w-full md:w-auto text-center md:text-left my-10">
        <h1 className='text-xl md:text-2xl font-medium text-secondary mb-2'>
          Work with <span className='text-tertiary'>us</span>
        </h1>

        <h2 className='text-3xl md:text-5xl font-bold leading-tight mb-8 text-white'>
          Successfully launch your distributed ledger project.
        </h2>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2  gap-y-8 md:gap-y-12 w-full max-w-lg mx-auto md:mx-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center sm:items-start text-center sm:text-left gap-4">
              <figure className="w-18 h-18 flex items-center justify-center rounded-full bg-gray-800">
                <img src={feature.src} alt="feature icon" loading='lazy' className="w-10 h-10 object-contain" />
              </figure>
              <div className="text-secondary font-semibold text-lg">
                {feature.name}
              </div>
            </div>
          ))}
        </section>
      </motion.article>


      {/* Right Section - Image */}
      <motion.figure variants={fadeBlock("up", 1)}
        initial="hidden"
        whileInView="show"
        className="flex-1 w-full md:w-auto mt-12 md:mt-0">
        <img src={bannerImage} alt="Work with us banner" className="w-full h-auto object-contain" />
      </motion.figure>
    </section>
  )
}

export default WorkWithUs;