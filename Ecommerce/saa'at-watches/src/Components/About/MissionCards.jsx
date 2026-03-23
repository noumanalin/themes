// components/MissionCards.jsx
import React from 'react';
import { FaLightbulb, FaTools, FaInfinity } from 'react-icons/fa';

const philosophies = [
  {
    title: 'Innovation',
    icon: <FaLightbulb className="text-3xl text-primary mb-4" />,
    desc: 'Blending smart features and performance materials into every design.',
  },
  {
    title: 'Craftsmanship',
    icon: <FaTools className="text-3xl text-primary mb-4" />,
    desc: 'Our watches are assembled by seasoned artisans with unparalleled attention to detail.',
  },
  {
    title: 'Timeless Style',
    icon: <FaInfinity className="text-3xl text-primary mb-4" />,
    desc: 'Pieces that never go out of fashion — built to transcend trends.',
  },
];

const MissionCards = () => {
  return (
    <section data-aos="fade-up" className="bg-white mb-20 py-10 px-3 md:px-20 text-center">
      <h1 className="text-2xl md:text-4xl font-serif  mb-10">
        Our Mission
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {philosophies.map((item, index) => (
          <div
            key={index}
            className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-primary transition-all duration-300"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-2 text-gray-800 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionCards;
