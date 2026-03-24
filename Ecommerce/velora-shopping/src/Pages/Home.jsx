import React from 'react'
import Hero from "../components/Home/Hero";
import Story from '../components/Home/Story';
import WhatsNew from '../components/Home/WhatsNew';
import StoreLocation from "../components/Home/StoreLocation";
import FallCollection from "../components/Home/FallCollection";
import ConfidentDesign from "../components/Home/CofidentDesign";
import Sustainability from "../components/Home/Sustainability";


const Home = () => {
    return (
        <>
            <Hero />
            <Story />
            <WhatsNew />
            <FallCollection />
            <ConfidentDesign />
            <Sustainability/>
            <StoreLocation />

        </>
    )
}

export default Home
