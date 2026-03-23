import React from 'react';
import watchImage from '../../assets/watch.png'; // Update path as per your file structure

const WatchFeatures = () => {
    const features = [
        {
            number: '01',
            title: 'Sapphire Crystal',
            description: 'Known for obtaining a remarkable hardness (nearly as hard as a diamond). Has a high scratch resistance which makes it a perfect material for wristwatches.'
        },
        {
            number: '02',
            title: 'Swiss Ronda Movement',
            description: 'Run by the vibration of a quartz crystal (32,786 times per second) under current to keep possibly accurate time.'
        },
        {
            number: '03',
            title: '316L Stainless Steel',
            description: 'The watch case is made of extra low carbon steel that is often used in surgical instruments and marine appliances thanks to its high corrosion resistance.'
        },
        {
            number: '04',
            title: 'Italian Leather Straps',
            description: 'The band is made of high-grade Italian eco-leather with a soft nubuck lining for extra comfort. Obtains excellent wearing qualities.'
        }
    ];

    return (
        <section className="w-full px-3 md:px-20 ">
            <div className=' bg-gray-50 p-10'>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Left 2 features */}
                    <div data-aos="fade-right" className="flex flex-col gap-6">
                        {features.slice(0, 2).map((feature, index) => (
                            <div key={index} className=" p-6 ">
                                <div className="space-y-2">
                                    <p className=' font-mono'>
                                        {feature.number}.
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center image */}
                    <div data-aos="fade-up" className="flex justify-center">
                        <img
                            src={watchImage}
                            alt="Watch"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Right 2 features */}
                    <div data-aos="fade-left" className="flex flex-col gap-6">
                        {features.slice(2).map((feature, index) => (
                            <div key={index} className=" p-6 ">
                                <div className="space-y-2">
                                    <p className=' font-mono'>
                                        {feature.number}.
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WatchFeatures;
