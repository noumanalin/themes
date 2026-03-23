import React from 'react';
import swissImg from '../../assets/swiss.png'; // update path as needed

const SwissEssence = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-end px-3 md:px-20 py-20 bg-white text-gray-800">
      
      {/* Left Content */}
      <div data-aos="fade-right" className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-2xl md:text-4xl font-serif ">Swiss Essence</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally a one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?
        </p>
        <button className="border-4 border-inherit hover:border-transparent px-6 py-3 mt-4 hover:bg-sectionbg hover:text-white transition-all duration-300">
          LEARN MORE
        </button>
      </div>

      {/* Right Image */}
      <div data-aos="fade-left" className="w-full md:w-3/5 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img src={swissImg} alt="Swiss Watches" className=" max-w-xl bg-primary/10 w-full object-contain" />
      </div>
    </section>
  );
};

export default SwissEssence;
