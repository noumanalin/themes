import AwesomeHomePages from "../components/AwesomeHomePages"
import Benefits from "../components/Benefits"
import Features from "../components/Features"
import HeroBanner from "../components/HeroBanner"
import InnerPages from "../components/InnerPages"
import Navbar from "../components/Navbar"
import UsedTechnology from "../components/UsedTechnology"


const Home = () => {
    return (
        <> 
            <HeroBanner />
            <AwesomeHomePages />
            <Benefits />
            <InnerPages />
            <Features/>
            <UsedTechnology/>
        </>
    )
}

export default Home