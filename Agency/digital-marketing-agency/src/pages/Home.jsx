import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Reviews from '../components/Reviews' 
import Services from '../components/Services'
import FeaturedWork from '../components/FeaturedWork'
import FaqComponent from '../components/faqs/FaqComponent' 
import Journal from '../components/journal/Journal'
import HorizontalScroll from '../components/horizontalScroll/HorizontalScroll'

const Home = () => {
  return (
    <>
    <Hero/>
    <main> 
      <WhoWeAre/>
      <Services/>
      <FeaturedWork/>
      <Reviews />
      <HorizontalScroll/>
      <FaqComponent/> 
      <Journal/>
    </main>
    
    </>
  )
}

export default Home