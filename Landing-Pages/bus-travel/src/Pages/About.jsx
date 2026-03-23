import React from 'react'
import { FaStar } from "react-icons/fa6";

const About = () => {

  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      name: "Tranquility at the Himalayan Shrine",
      address: "Chamoli District, Uttarakhand, India",
      ratings: "4.7",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      name: "Sacred Heritage of the Eastern Coast",
      address: "Puri, Odisha, India",
      ratings: "4.8",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1697730421390-63ae0487b986?q=80&w=870&auto=format&fit=crop&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Peaceful Retreat in the Foothills",
      address: "Near Dehradun, Uttarakhand, India",
      ratings: "4.5",
    },
  ]

  return (
    <section className='about px-3 md:px-20 my-10 py-10 space-y-5'>
      <header>
        <h2 className=' text-black md:text-4xl text-2xl font-bold py-3'>Top Spiritual Escapes</h2>
        <p>Explore some of the most cherished places that inspire faith and peace.</p>
      </header>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {destinations.map((info) => (
          <article data-aos="fade-up" key={info.id} className=' space-y-6'>
            <figure>
              <img
                src={info.image}
                alt={info.name}
                className=' w-full h-[40vh] object-cover rounded-4xl shadow-secondary/10 shadow-xl'
              />
              <figcaption className=' flex items-center justify-between mt-3'>
                <div>
                  <h3 className=' font-semibold text-xl text-black'>{info.name}</h3>
                  <address className="not-italic">{info.address}</address>
                </div>
                <p className=' flex items-center gap-2 text-white bg-secondary/80 rounded-full px-3 py-1'>
                  <FaStar /> {info.ratings}
                </p>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
