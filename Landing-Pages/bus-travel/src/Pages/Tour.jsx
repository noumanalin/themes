import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaMountainSun } from "react-icons/fa6";
import { CgInsights } from "react-icons/cg";

const features = [
  {
    id: 1,
    icon: BsFillBookmarkHeartFill,
    title: "Quick & Simple Reservations",
    subtitle: "Book Seats Instantly",
    description:
      "Secure your spot in just a few taps. Skip the waiting lines and confirm your seat right from your phone — fast, reliable, and stress-free.",
  },
  {
    id: 2,
    icon: FaMountainSun,
    title: "Personalized Journeys",
    subtitle: "Plans That Fit Your Needs",
    description:
      "Travel your way with options tailored to your timing, budget, and comfort. Enjoy flexibility that adapts to your lifestyle.",
  },
  {
    id: 3,
    icon: CgInsights,
    title: "Trusted Travel Guidance",
    subtitle: "Tips from Local Experts",
    description:
      "Discover the best pickup points, routes, and insider hacks with advice backed by real travelers. Navigate with confidence wherever you go.",
  },
];

const Tour = () => {
  return (
    <section className="tour flex flex-col items-center gap-3 px-3 md:px-20 my-10">
      <header className="text-center">
        <h2 className="md:text-4xl text-2xl font-bold text-black">
          Travel by Bus Made Simple
        </h2>
        <p className="px-8 max-w-md mx-auto">
          Smarter planning for your next journey
        </p>
      </header>

      {/* Features Grid */}
      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-20 mt-8">
        {features.map((item) => (
          <article
            key={item.id}
            className="relative h-[250px] py-10 w-full bg-gray-200 rounded-lg flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-y-100 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] group"
          >
            {/* Card Front */}
            <div className="px-5 flex flex-col items-start justify-between h-full">
              <item.icon className="text-2xl text-secondary" />
              <h3 className="text-black font-bold text-xl">{item.title}</h3>
            </div>

            {/* Card Back */}
            <div className="absolute top-1/2 left-1/2 w-full h-full p-5 bg-secondary backdrop-blur-sm opacity-0 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100 rounded-lg shadow-lg shadow-purple-400/30 ring-1 ring-secondary/20 flex flex-col justify-between">
              <div className="space-y-5">
                <item.icon className="text-white w-12 h-12 rounded-full border-2 p-2 border-white" />
                <h4 className="text-white font-semibold text-xl">{item.subtitle}</h4>
                <p className="mt-2 text-sm text-black leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tour;
