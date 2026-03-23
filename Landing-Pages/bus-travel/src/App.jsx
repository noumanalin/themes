import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Tour from './Pages/Tour';
import Packages from './Pages/Packages';
import Statistics from './Pages/Statistics';
import Feature from './Pages/Feature';
import Footer from "./Pages/Footer";
import Navbar from './Pages/Navbar';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      easing: "ease-in-out", // animation easing
      once: false, // whether animation should happen only once
      mirror: true, // whether elements animate out while scrolling past
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tour />
      <Packages />
      <Statistics />
      <Feature />
      <Footer />
    </>
  )
}

export default App
