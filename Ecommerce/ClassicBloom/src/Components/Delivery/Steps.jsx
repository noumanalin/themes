import React from "react";

const Steps = () => {
 
    const steps = [
    {
      number: "1",
      title: "Choose Your Location",
      description:
        "Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat.",
    },
    {
      number: "2",
      title: "Make Your Order",
      description:
        "Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat.",
    },
    {
      number: "3",
      title: "Order is on the Way",
      description:
        "Tidewater goby sheepshead sand tilefish longnose dace, mooneye; kanyu pike pirat.",
    },
  ];

  return (
    <section className="sectionlayout py-20 bg-white">
      <div className="text-center md:text-left">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-light tracking-wide text-gray-800 uppercase">
              How We Works
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl">
              Palfmoon yellow moray tompot blenny, cuchia tompot spiny dwarf
              catfish eelpout yellow weaver mudskipper black bass.
            </p>
          </div>
                  <h3 className="text-[80px] md:text-[150px] meow-script-regular text-[var(--primary)] italic tracking-wider">
            Steps
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <span className="absolute md:-top-10 -top-24 left-1/2 md:-left-10 transform -translate-x-1/2 md:translate-x-0 text-[80px] text-[var(--primary)]/20 font-serif select-none">
                {step.number}
              </span>

              {/* Step Content */}
              <div className="relative z-10 ">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  {step.title}
                </h4>
                      <p className="text-gray-500 leading-relaxed md:pb-0 pb-10">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
