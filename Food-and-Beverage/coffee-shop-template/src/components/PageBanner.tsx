import { Link } from "react-router-dom"
import bgImage from "../assets/bg-image.jpg";

const PageBanner = ({ name }: { name: string }) => {
    return (
        <section className="bottom-border-shape relative center-center text-white  w-[99vw] h-[45vh] overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-[#1c110fc0] z-0" />

            <article className="z-10 text-center">
                <h1 className="uppercase text-4xl md:text-5xl mb-3"><strong>{name}</strong></h1>
                <p><Link to={'/'}>Home</Link> {" "} / {" "} {name}</p>
            </article>
        </section>
    )
}

export default PageBanner