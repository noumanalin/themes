import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import BadgeImage from "../../assets/badge.png";

const points = [
  { id: 1, title: "Strategy", description: "We create tailored strategies to help your brand grow with clear, measurable goals.", percentage: 60 },
  { id: 2, title: "Audience", description: "Understanding your audience allows us to design campaigns that connect and convert.", percentage: 95 },
  { id: 3, title: "Analytics", description: "We rely on data-driven insights to refine performance and maximize results.", percentage: 70 },
];

const WhyChooseUs = () => {
  return (
    <section className="w-screen min-h-screen md:h-screen py-10 flex items-center justify-center">
      <article className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 md:gap-10">
        
        {/* Left Section */}
        <section className="flex-1 h-full">
          <h4 className="text-light text-[18px] uppercase mb-1 md:mb-4">
            WHY <br /> CHOOSE US
          </h4>
          <h1 className="uppercase text-light text-xl md:text-5xl font-semibold mb-2 md:mb-6">
            Research, strategy, <br /> insights & <br /> innovation
          </h1>
          <div className="w-full md:w-[80%] text-gray mb-5 text-md md:text-lg">
            <p>
              We focus on building meaningful digital experiences that solve real problems. 
              By blending creativity with research, we deliver solutions that drive impact 
              and help brands stay ahead of the curve.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={BadgeImage} className="white-filter w-10 md:w-20" alt="Badge" />
            <div className="flex gap-2">
              {["Google", "Pinterest", "Instagram"].map((name) => (
                <Link
                  key={name}
                  to="/"
                  className="text-sm uppercase px-2 py-1 border border-gray-300 rounded-full text-light"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-10 mt-2 md:mt-10">
          {points.map((data) => {
            const circleRef = useRef(null);
            const isInView = useInView(circleRef, { once: true });

            return (
              <div
                key={data.id}
                className={`flex items-center gap-5 w-[80%] ${
                  data.id === 2 ? "" : "justify-end"
                }`}
              >
                <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                  <motion.div
                    ref={circleRef}
                    initial={{ "--percent": 5 }}
                    animate={isInView ? { "--percent": data.percentage } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "conic-gradient(white calc(var(--percent) * 1%), transparent 0%)",
                      WebkitMaskImage:
                        "radial-gradient(farthest-side, transparent calc(100% - 6px), black 100%)",
                      maskImage:
                        "radial-gradient(farthest-side, transparent calc(100% - 6px), black 100%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      fontSize: "18px",
                    }}
                  >
                    {data.percentage}%
                  </span>
                </div>

                <div className="max-w-[280px]">
                  <h1 className="text-[20px] md:text-[26px] uppercase font-semibold md:mb-2">
                    {data.title}
                  </h1>
                  <p className="text-[13px] md:text-[16px]">{data.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </section>
  );
};

export default WhyChooseUs;
