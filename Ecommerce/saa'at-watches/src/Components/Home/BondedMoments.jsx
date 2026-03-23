import React from 'react';
import BondedImage from "../../assets/bondedmoments.avif"

const BondedMoments = () => {
  return (
    <section data-aos="fade-up" className="w-full bg-white content-center py-16 px-3 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-start gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src={BondedImage} // Replace with your chosen image
            alt="Couple wearing watches"
            className="w-full lg:h-auto h-[50vh] rounded shadow-md object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center order-1 md:order-2 md:text-left">
          <h1 className="text-2xl md:text-4xl font-serif mb-4">
            Crafted for Souls That Move as One
          </h1>
          <p className=" text-sm lg:leading-relaxed">
            Every tick tells a story — not just of time, but of us. On our 5-year journey together,
            these timeless companions from the <span className="font-semibold text-[#B4916C]">Vellora Signature Pair</span> symbolize more than minutes; they mirror our bond. <br /><br />
            Whenever I glance at mine, I know she’s doing the same. <br /><br />
            In a world that never pauses, our time stands still — together.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BondedMoments;
