import AboutComponent from "../components/AboutComponent"
import BookYourTable from "../components/BookYourTable"
import MainSlider from "../components/MainSlider"
import Pricing from "../components/Pricing"
import ServicesComponent from "../components/ServicesComponent"
import SpecialOffer from "../components/SpecialOffer"
import Testimonial from "../components/Testimonial"


const Home = () => {
  return (
    <>
      <MainSlider/>
      <AboutComponent/>
      <ServicesComponent/>
      <SpecialOffer/>
      <Pricing/>
      <BookYourTable/>
      <Testimonial/>
    </>
  )
}

export default Home