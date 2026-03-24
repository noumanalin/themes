import React from 'react'
import Banner from "../components/About/Banner";
import Story from '../components/About/Story';
import TimelineTopBanner from "../components/About/TimelineTopBanner";
import Timeline from "../components/About/Timeline";
import Stores from "../components/About/Stores";

const About = () => {
    return (
        <>
            <Banner />
            <Story />
            <TimelineTopBanner />
            <Timeline />
            <Stores/>
        </>
    )
}

export default About
