import React from 'react'
import BannerHero from "../../assets/about-us.png"

const Banner = () => {

    const data = [
        {
            id: 1,
            title: "About Our Identity",
            desc: "We are a team dedicated to building meaningful digital solutions, focusing on innovation, creativity, and customer satisfaction.",
        },
        {
            id: 2,
            title: "What We Offer",
            desc: "Our services range from branding and design to modern web applications, helping businesses create a lasting impression in today’s digital world.",
        },
        {
            id: 3,
            title: "Why Work With Us",
            desc: "We combine expertise with a client-first approach, ensuring every project is crafted with care, efficiency, and long-term value.",
        },
    ]

    return (
        <section className="md:px-20 px-3 my-10 py-10" aria-labelledby="about-banner-title">

            <header>
                <figure>
                    <img src={BannerHero} alt="About Us Banner" className=' w-full object-cover' />
                </figure>
            </header>

            <main>
                <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-5">
                    {data.map((info) => (
                        <article key={info.id} className="space-y-2">
                            <h2 className="text-2xl font-semibold text-primary">{info.title}</h2>
                            <p className="text-sm tracking-wider">{info.desc}</p>
                        </article>
                    ))}
                </section>
            </main>

        </section>
    )
}

export default Banner
