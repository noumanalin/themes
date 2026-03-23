// components/WhyChooseUs.jsx
import React from "react";
import { FaGem, FaGlobe, FaGift, FaShippingFast } from "react-icons/fa";

const features = [
    {
        icon: <FaGem />,
        title: "Premium Materials",
        desc: "Crafted using high-quality, durable, and timeless materials.",
    },
    {
        icon: <FaGlobe />,
        title: "Global Warranty",
        desc: "Enjoy peace of mind with our international warranty coverage.",
    },
    {
        icon: <FaGift />,
        title: "Elegant Packaging",
        desc: "Delivered in luxury boxes, perfect for gifts and collections.",
    },
    {
        icon: <FaShippingFast />,
        title: "Fast & Secure Shipping",
        desc: "Reliable delivery ensures your watch arrives safely and quickly.",
    },
];

const WhyChooseUs = () => {
    return (
        <div data-aos="fade-up" className=" flex lg:flex-row flex-col items-center justify-between px-3 md:px-20 bg-gray-50 gap-10 py-10">
            {/* Left Content */}
            <div className="basis-[46%] flex flex-col items-center lg:items-start justify-center gap-5">
                <h1 className="md:text-4xl text-2xl font-serif ">Why Choose Us</h1>
                <p className="">
                    Discover what sets our brand apart. From quality craftsmanship to exceptional service, we offer unmatched value and commitment to excellence.
                </p>
            </div>

            {/* Right Feature Cards */}
            <div className=" grid md:grid-cols-2 grid-cols-1  gap-5 ">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="h-52 w-60 bg-white rounded-lg p-5 shadow-lg hover:scale-105 transition-transform duration-300 text-center"
                    >
                        <p className="w-10 h-10 p-2 bg-primary/20 hover:bg-primary flex items-center justify-center hover:text-white hover:bg-box-bg rounded-md mb-3">
                            {item.icon}
                        </p>
                        <p className="font-semibold text-lg text-gray-800">{item.title}</p>
                        <p className="px-2 text-sm ">{item.desc}</p>
                    </div>
                ))}



            </div>
        </div>
    );
};

export default WhyChooseUs;
