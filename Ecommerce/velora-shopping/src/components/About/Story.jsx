import React from 'react'
import story1 from "../../assets/about-story1.avif";
import story2 from "../../assets/about-story2.avif";
const Story = () => {
  return (
    <section
      className="flex md:flex-row flex-col justify-center md:justify-between md:gap-32 gap-10 md:px-10 px-3 my-10 py-10"
      aria-labelledby="story-heading"
    >
      {/* Left Image */}
      <figure
        data-aos="zoom-in"
        className="md:w-1/4 w-full flex items-start md:justify-start justify-center"
      >
        <img
          src={story1}
          alt="Fashion designer sketching patterns in a studio"
          className="md:h-[50%] h-96 object-cover"
        />
      </figure>

      {/* Center Content */}
      <article className="md:w-1/2 w-full space-y-5">
        <h2
          id="story-heading"
          className="md:text-5xl text-2xl uppercase"
        >
          Our Story
        </h2>

        <p className="md:text-lg text-gray-700 leading-relaxed">
          Founded in 2010, One Vintage emerged with a bold vision: to reimagine
          heritage textiles and transform them into timeless contemporary fashion.
          Each collection reflects a passion for craftsmanship, blending tradition
          with modern design to create pieces that feel both innovative and enduring.
        </p>

        <p className="md:text-lg text-gray-700 leading-relaxed">
          Our philosophy embraces individuality, creativity, and sustainability.
          With every garment, we strive to honor artisanal techniques while shaping
          new trends in the fashion world. Looking ahead, One Vintage continues to
          experiment with fabrics, silhouettes, and concepts—always driven by a
          commitment to excellence and the art of self-expression.
        </p>
      </article>

      {/* Right Image */}
      <figure
        data-aos="zoom-in"
        className="md:w-1/4 w-full flex items-end md:justify-end justify-center"
      >
        <img
          src={story2}
          alt="Minimalist mannequin showcasing luxury fashion"
          className="md:h-auto h-96 object-cover"
        />
      </figure>
    </section>
  )
}

export default Story
