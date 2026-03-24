import React from "react";
import banner from "../../assets/timelineBanner.png"

const TimelineTopBanner = () => {
  return (
    <section
      className="relative w-full"
      aria-labelledby="hero-banner-title"
    >
      <h1 id="hero-banner-title" className="sr-only">
        Innove Couture – Luxury Fashion
      </h1>
      
      <figure className=" w-full bg-gray-50 pt-5 flex items-center justify-center">
        <img
          src={banner}
          alt="Luxury fashion clothing collection by Innove Couture"
          className="  "
        />
      </figure>
    </section>
  );
};

export default TimelineTopBanner;
