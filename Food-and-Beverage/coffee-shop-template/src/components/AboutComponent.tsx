import { Link } from "react-router-dom"
import SectionHead from "./SectionHead"
import aboutImage from '../assets/about.png'
import { Check } from "lucide-react"

const AboutComponent = () => {
    return (
        <section className="wrapper">
            <SectionHead heading="About Us" subHeadig="Crafting Quality Since 1950" />

            <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-left lg:grid-cols-3 gap-12 md:gap-4 my-15">
                {/* 1 */}
                <article>
                    <h2 className="text-4xl capitalize text-dark"><strong>Our Journey</strong></h2>
                    <p className="text-dark my-4">
                        From a small idea to a recognized name, our passion for quality and consistency has guided every step. 
                        What began as a humble effort has grown into a tradition of excellence.
                    </p>
                    <p className="text-accent mb-5">
                        We believe in combining timeless values with modern approaches to deliver products and services that 
                        truly make a difference. Every milestone reflects our dedication to innovation, care, and community. 
                    </p>
                    <Link to={'/'} className="px-5 py-2 text-white bg-[var(--primary-dark)]">Learn More</Link>
                </article>

                {/* 2 */}
                <figure>
                    <img src={aboutImage} alt="About Us" />
                </figure>

                {/* 3 */}
                <article>
                    <h2 className="text-4xl capitalize text-dark"><strong>Our Mission</strong></h2>
                    <p className="text-accent my-4">
                        We aim to inspire trust and deliver value by staying true to our principles. 
                        Every decision we make is centered on creating meaningful experiences for our clients and partners. 
                    </p>
                    <ul className="my-5">
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Committed to quality and innovation</span></li>
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Driven by passion and purpose</span></li>
                        <li className="flex gap-3"><Check className="text-fair font-semibold"/> <span className="text-dark">Building trust through consistency</span></li>
                    </ul>
                    <div className="text-left">
                        <Link to={'/'} className="px-5 py-2 text-dark bg-[var(--primary-fair)]">Learn More</Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutComponent
