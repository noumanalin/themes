import React from 'react'
import PromoBanner from '../Components/Home/PromoBanner'
import Category from '../Components/Home/Category';
import AboutPerfume from '../Components/Home/AboutPerfume';
import Hero from '../Components/Home/Hero';
import BestSellers from '../Components/Home/BestSellers';
import NewArrivals from '../Components/Home/NewArrival';
import Testimonial from '../Components/Home/Testimonial';
import BlogPreview from '../Components/Home/BlogPreview';


const Home = () => {
  return (
    <div>
      <Hero/>
      <PromoBanner />
      <Category/>
      <AboutPerfume />
      <BestSellers />
      <Testimonial/>
      <NewArrivals />
      <BlogPreview/>
      
      {/* SEO meta tags */}
      <meta name="description" content="Learn about our perfume shop — where elegance meets craftsmanship. Explore our story and the passion behind our luxury fragrances." />
      <meta name="keywords" content="about perfume shop, perfume story, luxury fragrances, perfume craftsmanship, elegant perfumes" />
      <title>Home | Perfume Shop</title>
    </div>
  )
}

export default Home
