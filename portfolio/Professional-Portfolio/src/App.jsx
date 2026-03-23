import React from 'react'
import Navbar from "./Pages/Navbar"
import Hero from './Pages/Hero';
import Footer from './Pages/Footer'
import Testimonial from './Pages/Testimonials';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Clients from './Pages/Clients';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Clients/>
      <Skills />
      <Projects />
      <Resume/>
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
