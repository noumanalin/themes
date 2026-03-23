import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import bus from "../assets/bus.png";
import herobg from "../assets/herobg.jpg"

const Home = () => {
  return (
    <section className='home md:h-screen w-full px-3 '>
      <div
        className='md:px-20 px-3 h-full rounded-4xl flex md:flex-row flex-col items-center justify-between text-black py-10 bg-cover bg-center'
        style={{ backgroundImage: `url("https://media.istockphoto.com/id/1145752822/photo/asphalt-race-track-and-beautiful-natural-landscape.jpg?s=612x612&w=0&k=20&c=DvVVJprZfzRe1MCr4fVg14gq72kpFm8PQVEJ91t7q_Q=")` }}
      >
        {/* Hero Text Section */}
        <header
          data-aos="fade-up"
          className='md:w-1/2 md:text-left text-center w-full md:space-y-5 space-y-3'
        >
          <p className='font-semibold uppercase tracking-wide'>
            GoBus • Travel Made Simple
          </p>
          <h1 className='md:text-6xl text-3xl font-semibold md:leading-20 leading-snug'>
            Discover Comfort and Convenience in Every Journey
          </h1>

          <nav className='flex items-center md:justify-start justify-center gap-10'>
            <a
              href="#booking"
              className='text-white bg-secondary px-5 py-3 rounded-full hover:bg-secondary/80 cursor-pointer text-sm uppercase font-semibold tracking-[2px]'
            >
              Book Your Ride
            </a>
            <a
              href="#explore"
              className='w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer'
            >
              <span className="sr-only">Watch Intro</span>
              <FaPlayCircle className="text-secondary text-xl" />
            </a>
          </nav>
        </header>

        {/* Hero Image Section */}
        <figure
          data-aos="fade-left"
          className='md:w-1/2 w-full'
        >
          <img
            src={bus}
            alt="Modern luxury bus illustration for GoBus"
            className='w-full'
          />
        </figure>
      </div>
    </section>
  )
}

export default Home
