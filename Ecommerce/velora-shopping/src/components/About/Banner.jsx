import React from 'react'
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <section
      className="text-center mt-20 space-y-5 leading-tight"
      aria-labelledby="banner-heading"
    >
      <p className="px-3 text-sm uppercase tracking-wide text-gray-600">About</p>

      {/* Main heading for SEO */}
      <h1
        id="banner-heading"
        className="uppercase md:text-4xl text-2xl mb-5 px-3"
      >
        Everyday Luxury had to begin somewhere
      </h1>

      {/* Descriptive alt text for SEO */}
      <img
        src={banner}
        alt="Minimalist luxury interior design inspiration"
        className=" h-[80vh] w-full object-cover"
      />
    </section>
  )
}

export default Banner
