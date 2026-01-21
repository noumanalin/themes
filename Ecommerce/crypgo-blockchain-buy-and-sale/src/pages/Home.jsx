import Development from "../components/Development"
import MainBanner from "../components/MainBanner"
import MySlider from "../components/MySlider"
import Platform from "../components/Platform"
import Portfolio from "../components/Portfolio"
import Support from "../components/Support"
import Upgrade from "../components/Upgrade"
import WorkWithUs from "../components/WorkWithUs"


const Home = () => {
  return (
    <>
    <MainBanner/>
    <MySlider/>
    <WorkWithUs/>
    <Development/>
    <Platform/>
    <Portfolio/>
    <Upgrade/>
    <Support/>
    </>
  )
}

export default Home