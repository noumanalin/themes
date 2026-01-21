import { motion } from "framer-motion"
import { fadeInLine } from "../utils/motion"

import BannerImage from "../assets/banner-image.png"
import bag from '../assets/icons/icon-bag.svg'
import appleStore from '../assets/applestore.png'
import googlePlay from '../assets/playstore.png'

const MainBanner = () => {
    return (
        <section id="main-banner" className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 mt-20">
            <motion.article
                variants={fadeInLine("left", 0.7)}
                initial="hidden"
                whileInView="show"
                className="md:flex-1/2">
                <h1 className="flex items-center gap-4 mb-6 text-3xl">
                    <img src={bag} alt="bag icon" />
                    <span>
                        Digital Currency <span className="text-tertiary">Anywhere</span>
                    </span>
                </h1>

                <h3 className="text-5xl md:text-7xl font-semibold leading-tight">Trade Digital <br /> <span className="text-tertiary">Assets</span> with <br /> <span className="text-tertiary">Ease</span>!</h3>

                <section className="flex gap-4 mt-6">
                    <button
                        className="px-8 py-3 border border-[var(--tertiary-color)] text-white rounded-lg 
                hover:bg-[var(--tertiary-color)] hover:text-gray-900 transition-colors duration-300">
                        Purchase Assets
                    </button>
                    <button
                        className="px-8 py-3 bg-[var(--tertiary-color)] text-gray-900 rounded-lg hover:bg-transparent 
                hover:text-white border border-[var(--tertiary-color)] transition-colors duration-300 font-medium"
                    >
                        Exchange Assets
                    </button>
                </section>

                <section className="flex gap-4 mt-7">
                    <button>
                        <img className="w-[200px] md:w-[220px] hover:scale-110 transition-transform duration-300 ease-in-out" src={googlePlay} alt="Google Play Store" />
                    </button>
                    <button>
                        <img className="w-[200px] md:w-[220px] hover:scale-110 transition-transform duration-300 ease-in-out" src={appleStore} alt="Apple App Store" />
                    </button>
                </section>
            </motion.article>

            <motion.figure
                variants={fadeInLine("right", 0.8)}
                initial="hidden"
                whileInView="show"
                className="md:flex-1/2">
                <img src={BannerImage} alt="Main Banner" className="w-full h-auto" />
            </motion.figure>
        </section>
    )
}

export default MainBanner