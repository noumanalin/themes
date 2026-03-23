import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Banner from '../components/About/Banner';
import Testimonial from '../components/About/Testimonial';
import Team from "../components/About/Team";
import Statistics from "../components/About/Statistics";
import Partner from "../components/About/Partner";


const About = () => {
    return (
        <>

            <div className=" bg-gray-100 py-10 space-y-5 md:px-20 px-3">
                <h1 className="text-2xl uppercase tracking-wider text-primary font-semibold">About</h1>

                <p className=" flex items-center tracking-wider text-primary/40">

                    <span className=' text-primary flex items-center justify-center'>
                        Home
                        <IoIosArrowUp className="rotate-[90deg] font-semibold text-sm mx-1 -mb-1" />
                    </span>

                    About Us
                </p>
            </div>
            
            
            <Banner />
            <Testimonial />
            <Statistics/>
            <Team />
            <Partner/>
            
        </>
    )
}

export default About
