import React from "react";
import {Link} from "react-router-dom"
export default function BestWay() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
                {/* Left image */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                        src="/delivery/parcel.png"
                        alt="Makeup Powders"
                        className="rounded-xl max-w-md lg:max-w-full"
                    />
                </div>
                {/* Right content */}
                <div className="lg:w-1/2 w-full flex flex-col justify-center items-start">
                    <h2 className="text-2xl lg:text-4xl  mb-6 leading-tight text-gray-900">
                        WE DELIVER THE BEST <br /> POSSIBLE WAY
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Palfmoon yellow moray tompot blenny, cuchia tompot blenny; smelt southern flounder grunt sculpin yellowbanded perch.
                    </p>
                    <ul className="mb-8 space-y-4">
                        {[
                            "Frilled shark ground shark livebearer cutthroat trout",
                            "Tonguefish devil ray smalleyes squaretail dogfish",
                            "Porcupinefish warty angler zebra turkeyfish",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-800">
                                <span className="bg-[var(--primary)] rounded-full p-1 mt-1">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Shop Button */}
                    <Link to="/shop">
                        <button
                            className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2
                                overflow-hidden transition-all duration-700 text-lg 
                                after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                                after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
                                after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                        >
                            shop now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}