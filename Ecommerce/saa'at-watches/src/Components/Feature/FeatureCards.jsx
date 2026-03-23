import React from "react";
import Luxury from "../../assets/Luxury.avif"
import PrecisionEng from "../../assets/PrecisionEng.avif"
import modern from "../../assets/modern.webp";
import timelessLegacy from "../../assets/timelessLegacy.avif"
import warrenty from "../../assets/warrenty.avif";
import handcrafted from "../../assets/handcrafted.webp";
import advanced from "../../assets/advanced.avif";
import echo from "../../assets/echo.avif";

const features = [
  {
    title: "Luxury Built In",
    description:
      "Every watch we craft is a symbol of timeless luxury. Designed with meticulous attention to detail, our timepieces embody elegance, refinement, and a dedication to high-end craftsmanship. From polished bezels to premium straps, luxury is not an option—it's built in.",
    imageSrc: Luxury,
    imagePosition: "right",
  },
  {
    title: "Precision Engineering",
    description:
      "Behind every tick lies a legacy of precision engineering. Our watches are assembled using state-of-the-art machinery and hand-finished by skilled watchmakers to ensure unrivaled accuracy and performance, day after day, year after year.",
    imageSrc: PrecisionEng,
    imagePosition: "left",
  },
  {
    title: "Modern Elegance",
    description:
      "Our designs are more than just trendy — they represent a bold expression of modern sophistication. From minimalist dials to cutting-edge materials, these watches are built to complement contemporary lifestyles with a refined and fashionable edge.",
    imageSrc: modern,
    imagePosition: "right",
  },
  {
    title: "Advanced Features",
    description:
      "Experience the fusion of tradition and technology. Our timepieces incorporate advanced features such as chronographs, luminous hands, and smart integrations, all wrapped in a design that honors the essence of classic watchmaking.",
    imageSrc: advanced,
    imagePosition: "left",
  },
  {
    title: "Eco-Friendly Materials",
    description:
      "Sustainability is at the core of our design philosophy. We use eco-conscious materials including vegan leather straps, recycled metals, and biodegradable packaging — proving that high style can coexist with a low carbon footprint.",
    imageSrc: echo,
    imagePosition: "right",
  },
  {
    title: "Global Warranty",
    description:
      "Wherever you are in the world, our commitment to quality follows. Our global warranty ensures that you receive expert care and service, giving you complete confidence in every purchase, no matter where life takes you.",
    imageSrc: warrenty,
    imagePosition: "left",
  },
  {
    title: "Handcrafted Perfection",
    description:
      "Craftsmanship is our signature. Each watch is carefully assembled and finished by hand, ensuring that no two pieces are exactly the same. This dedication to human touch gives each timepiece a soul of its own.",
    imageSrc: handcrafted,
    imagePosition: "right",
  },
  {
    title: "Timeless Legacy",
    description:
      "Our watches are designed not just for today, but for generations to come. With enduring style, reliable mechanics, and an aura of heritage, they become treasured heirlooms that tell stories far beyond the time they keep.",
    imageSrc: timelessLegacy,
    imagePosition: "left",
  },
];



function FeatureCards() {
  return (
    <section className="md:space-y-0 my-10 space-y-10 md:px-20 px-3 ">
      {features.map((feature, index) => {
        const isRight = feature.imagePosition === "right";
        return (
          <div

            key={index}
            className={`flex md:gap-0 gap-5 flex-col md:flex-row ${
              isRight ? "" : "md:flex-row-reverse"
            } items-center `}
          >
            <div data-aos={isRight ? "flip-right" : "flip-left"} className="md:w-1/2 md:order-1 order-2">
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="shadow-md w-[100vw] lg:h-[80vh] h-[50vh] object-cover"
              />
            </div>
            <div data-aos={isRight ? "fade-left" : "fade-right"} className="md:w-1/2 order-1 md:order-2 text-center md:text-left px-3">
              <h1 className="text-2xl font-serif mb-4">
                {feature.title}
              </h1>
              <p className="">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}


export default FeatureCards;