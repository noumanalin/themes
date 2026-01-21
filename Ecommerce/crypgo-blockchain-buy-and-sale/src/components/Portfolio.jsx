import { motion } from "framer-motion"
import { fadeBlock } from "../utils/motion"

import portfolioImage from '../assets/img-portfolio.png'
import bag from '../assets/icons/icon-bag.svg'
import vaultProtectionIcons from '../assets/icons/icon-vault.svg'
import mobileIcon from '../assets/icons/icon-mobileapp.svg'

const data = [
    { title: "Manage your portfolio", icon: bag },
    { title: "Vault protection", icon: vaultProtectionIcons },
    { title: "Mobile apps", icon: mobileIcon }
]


const Portfolio = () => {
    return (
        <section id="portfolio" aria-label="Portfolio" className="wrapper flex flex-col md:flex-row gap-8 md:gap-4 items-center">
            {/* Left - media section */}
            <motion.figure
                variants={fadeBlock("down", 0.7)}
                initial="hidden"
                whileInView="show"
                className="w-full md:w-[48%] ">
                <img className="w-full object-center object-cover" src={portfolioImage} alt="Portfolio image" />
            </motion.figure>

            {/* Right - content section */}
            <motion.article
                variants={fadeBlock("up", 0.7)}
                initial="hidden"
                whileInView="show"
                className="w-full md:w-[48%] flex flex-col items-start text-left"
            >
                <h3 className="text-xl sm:text-2xl   mb-2">
                    <span className="text-accent">Cryptocurrency</span> <span className="text-tertiary">Portfolio</span>
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                    Create your crypto portfolio today with CrypGo!
                </h2>
                <p className="text-sm sm:text-base text-accent mb-8">
                    Coinbase has a variety of features that make it the best place to start trading.
                </p>

                {/* Features list */}
                <ul className="space-y-6">
                    {data.map((item, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <figure className="w-18 h-18 flex items-center justify-center rounded-full bg-gray-800">
                                <img src={item.icon} alt={`${item.title} icon`} loading="lazy" className="w-10 h-10 object-contain" />
                            </figure>
                            <p className="text-lg sm:text-xl font-semibold text-white">
                                {item.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </motion.article>
        </section>
    )
}

export default Portfolio;