import React from 'react'
import testi from "../../assets/testimonial-pic.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
import author from "../../assets/testimonial-author.jpg";

const Testimonial = () => {
    return (
        <section
            className="bg-gray-100 md:px-20 px-3 md:relative md:h-[90vh] flex md:flex-row flex-col items-center justify-between gap-10 md:pt-0 pt-10"
            aria-labelledby="testimonial-heading"
        >
            {/* Testimonial Content */}
            <article className="md:w-1/2 w-2/3 flex flex-col items-center justify-center space-y-5 text-center md:text-left">
                <RiDoubleQuotesR className="text-secondary text-5xl" />

                <blockquote className="lg:w-2/3 italic tracking-wider text-gray-800">
                    “This brand completely changed how I express my style. The quality,
                    attention to detail, and timeless designs make me feel confident
                    wherever I go.”
                </blockquote>

                <footer className="flex items-center justify-center gap-5">
                    <figure className="flex items-center gap-4">
                        <img
                            src={author}
                            alt="Sophia Reynolds portrait"
                            className="rounded-full w-16 h-16 object-cover"
                        />
                        <figcaption className="space-y-1 text-left">
                            <h3 className="text-primary/80 font-semibold text-lg">
                                William Reynolds
                            </h3>
                            <p className="text-lg italic">Creative Director</p>
                        </figcaption>
                    </figure>
                </footer>
            </article>

            {/* Background Image */}
            <figure className="h-full md:w-1/2 w-full md:absolute md:right-0">
                <img
                    src={testi}
                    alt="Testimonial background fashion"
                    className="h-full w-full object-cover"
                />
            </figure>
        </section>
    )
}

export default Testimonial
