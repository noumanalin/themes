import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Packages = () => {
  return (
    <section className='packages md:h-screen w-full md:px-20 px-3 my-20 flex md:flex-row flex-col items-center justify-between gap-10'>

      {/* Left Image Showcase */}
      <figure data-aos="fade-right" className=' md:w-1/3 w-full flex justify-center'>
        <img
          src="https://images.unsplash.com/photo-1751221709791-059bc247d69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fFR1cm4lMjBFdmVyeSUyMEpvdXJuZXklMjBJbnRvJTIwYW4lMjBBZHZlbnR1cmUlMjB0cmF2ZWxsaW5nJTIwYnklMjBidXN8ZW58MHx8MHx8fDA%3D"
          alt="Modern travel bus on scenic road"
          className=' md:h-full h-[70vh] shadow-2xl object-cover'
        />
      </figure>

      {/* Right Content Section */}
      <article data-aos="fade-left" className=' md:w-2/3 w-full md:space-y-10 space-y-3'>
        <header>
          <h2 className=' text-black font-bold leading-[1.5] text-2xl md:text-4xl'>
            Turn Every Journey Into an Adventure
          </h2>
        </header>

        <p>
          Our buses combine comfort with convenience, giving you the perfect way to explore. With roomy seating, climate control, and smooth rides, you can enjoy breathtaking views while traveling stress-free. Whether your destination is a lively city or a calm retreat, the journey itself becomes part of the experience.
        </p>

        <p>
          Discover the joy of traveling at your own pace. From scenic landscapes to hidden gems, our bus routes take you closer to the heart of every destination. Whether it’s a weekend escape or a long exploration, relax, enjoy the view, and let the road tell your story.
        </p>

        {/* Call to Action */}
        <a
          href="#booking"
          className=' w-full h-20 bg-cover bg-center rounded-sm flex items-center justify-center text-black'
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80)` }}
        >
          <span className=' font-bold flex items-center gap-2'>
            BOOK YOUR SEAT <FaArrowRightLong />
          </span>
        </a>
      </article>
    </section>
  )
}

export default Packages
