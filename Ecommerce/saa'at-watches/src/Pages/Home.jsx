import React from 'react'
import Hero from "../Components/Home/Hero";
import ModernElenceCollection from '../Components/Home/ModernElenceCollection';
import SwissEssence from '../Components/Home/SwissEsence';
import BestSellers from '../Components/Home/BestSellers';
import WatchFeatures from '../Components/Home/WatchFeatures';
import BondedMoments from "../Components/Home/BondedMoments"

const Home = () => {
  return (
    <>
      <Hero />
      <ModernElenceCollection />
      <SwissEssence />
      <WatchFeatures />
      <BondedMoments />
      <BestSellers />
    </>
  )
}

export default Home;