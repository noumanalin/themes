import React from 'react'
import { FaMountainSun, FaWater, FaLandmark } from "react-icons/fa6";

const Feature = () => {

    const featureData = [
        {
            id: 1,
            icon: FaMountainSun, // Mountains & scenic travel
            title: "Journeys that Inspire",
            desc: "Travel in comfort while enjoying breathtaking scenery. Our buses are designed for relaxation with spacious seating, making every ride as memorable as the destination itself.",
        },
        {
            id: 2,
            icon: FaWater, // Ocean / coastal theme
            title: "Seaside Adventures",
            desc: "Unwind as you pass along golden shores, dramatic coastlines, and refreshing sea breezes. Let our routes take you closer to nature’s most calming escapes by the water.",
        },
        {
            id: 3,
            icon: FaLandmark, // Historical monuments / heritage
            title: "Timeless Heritage",
            desc: "Step into the past with our heritage tours. Discover remarkable landmarks and cultural treasures, while we ensure your journey is as enriching as it is comfortable.",
        },
    ]


    return (
        <section className=' md:px-20 px-3 text-center space-y-5 my-5'>
           
            
            <header>
                <h2 className=' text-black font-bold md:text-4xl text-2xl pb-5'>
                    Journey Through Nature, Culture, and Timeless Stories
                </h2>
                <p>Enjoy every moment of the ride with comfort and unforgettable views</p>
            </header>

            

            <div data-aos="fade-up" className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {featureData.map((data) => (
                    <article
                        key={data.id}
                        className=' bg-white rounded-4xl hover:shadow-xl px-5 py-10 space-y-5 flex flex-col items-center'
                    >
                        <div className=' flex items-center justify-center'>
                            <data.icon className=" bg-secondary/10 text-secondary p-5 rounded-full h-16 w-16" />
                        </div>

                        <h3 className=' text-black font-semibold text-xl md:text-2xl w-2/3'>{data.title}</h3>
                        <p className=' text-black'>{data.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Feature
