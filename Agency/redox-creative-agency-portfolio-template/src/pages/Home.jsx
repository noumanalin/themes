import Faqs from "../components/Faqs/Faqs"
import Gsap from "../components/Gsap"
import Hero from "../components/Hero"
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll"
import PremiumElements from "../components/Premium/PremiumElements"
import Projects from "../components/Projects/Projects"
import { imageInfiniteSlider } from "../utils/appData"

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="bg-zinc-900 w-screen relative py-4">
        <InfiniteScroll speed={20} direction="left">
          {imageInfiniteSlider &&
            imageInfiniteSlider.map((image, index) => (
              <figure key={index} className="mx-2 w-[550px] h-[350px]" style={{ width: 650 }}>
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </figure>
            ))}
        </InfiniteScroll>

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-0" />
      </section>

      <Projects/>
      <Gsap />
      <PremiumElements />
      <Faqs/>
    </main>
  )
}

export default Home
