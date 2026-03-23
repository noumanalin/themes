import React from 'react'
import PageBanner from '../Components/PageBanner'
import BrandStory from '../Components/About/BrandStory'
import WhyChooseUs from '../Components/About/WhyChooseUs'
import Testimonials from '../Components/About/Testimonials'
import MissionCards from '../Components/About/MissionCards'
import CTASection from '../Components/About/CTASection'
import Team from "../Components/About/Team"


const About = () => {
    return (
        <div>
            <PageBanner title="About Us" breadcrumb="Explore the journey of how time meets artistry" />
            <BrandStory />
            <MissionCards />
            <WhyChooseUs />
<Team/>
            <Testimonials />
            <CTASection />
        </div>
    )
}

export default About
