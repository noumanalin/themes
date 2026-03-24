import React from 'react'
import Hero from "../Components/About/Hero";
import NewCollectionSection from '../Components/About/NewCollectionSection';
import Achievements from '../Components/About/Achievements';
import Team from '../Components/About/Team';
import Brands from "../Components/About/Brands"

const About = () => {
    return (
        <>
            <Hero />
            <NewCollectionSection />
            <Achievements />
            <Team />
            <Brands/>

            {/* SEO meta tags */}
            <meta name="description" content="Learn about our perfume shop — where elegance meets craftsmanship. Explore our story and the passion behind our luxury fragrances." />
            <meta name="keywords" content="about perfume shop, perfume story, luxury fragrances, perfume craftsmanship, elegant perfumes" />
            <title>About Us | Perfume Shop</title>
        </>
    )
}

export default About
