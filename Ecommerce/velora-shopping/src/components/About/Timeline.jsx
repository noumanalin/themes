import React from "react";

const Timeline = () => {
    const milestones = [
        {
            year: "2010",
            title: "Velora Launch",
            description:
                "The journey began with our first boutique opening at Central Centre, a renowned shopping destination in New York.",
            lineHeight: "h-8",
            lineWidth: "w-8",
        },
        {
            year: "2014",
            title: "Nationwide Expansion",
            description:
                "With growing demand, Innove Couture expanded across New York, opening multiple boutiques to reach more clients.",
            lineHeight: "h-12",
            lineWidth: "w-12",
        },
        {
            year: "2018",
            title: "Going Global",
            description:
                "We introduced international shipping, extending Innove Couture’s collections to clients worldwide.",
            lineHeight: "h-16",
            lineWidth: "w-16",
        },
    ];

    return (
        <section
            className="py-16"
            aria-labelledby="timeline-title"
        >
            {/* Header Section */}
            <header className="mb-16 md:px-10 px-3 text-left">
                <h1
                    id="timeline-title"
                    className="text-2xl md:text-5xl text-gray-800 uppercase tracking-wider mb-6"
                >
                    Our Journey
                </h1>
                <p className="text-lg md:text-xl text-gray-600 md:w-1/2 leading-relaxed">
                    What started as a simple idea — to create exquisite clothing in inspiring spaces with exceptional service — has grown into a global presence.
                </p>
            </header>

            {/* Timeline Section */}
            <div className="md:border-t border-gray-300">
                <ol className="relative grid md:grid-cols-3 grid-cols-1 md:gap-10 md:px-10 px-3">
                    {milestones.map((item, index) => (
                        <li
                            key={index}
                            className="md:pt-20 md:py-0 py-5 flex flex-col md:items-start relative"
                        >
                            {/* Decorative Line */}
                            <span
                                aria-hidden="true"
                                className={`absolute md:-top-3 top-0 bg-gray-500 md:w-0 md:${item.lineHeight} h-[1px] ${item.lineWidth}`}
                            ></span>

                            {/* Year */}
                            <time
                                dateTime={item.year}
                                className="md:text-2xl font-semibold block"
                            >
                                {item.year}
                            </time>

                            {/* Title & Description */}
                            <h2 className="text-base font-medium mt-2 mb-1 text-primary">
                                {item.title}
                            </h2>
                            <p className="text-gray-600">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Timeline;
