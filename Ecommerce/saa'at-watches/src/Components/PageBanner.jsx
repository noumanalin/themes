import React from 'react';
import Banner from "../assets/pageBanner.png";

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <div
      className="relative w-full h-[60vh] my-20 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Overlay for brightness effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top of the dimmed background */}
      <div className="relative z-10 text-center">
        <h1 className=" text-white text-2xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white/80 tracking-wider">{breadcrumb}</p>
      </div>
    </div>
  );
};

export default PageBanner;
