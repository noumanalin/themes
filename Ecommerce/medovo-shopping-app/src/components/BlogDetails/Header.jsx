import React from "react";
import blogImg from "../../assets/blog-details.jpg"; // replace with your static blog image
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import author from "../../assets/testimonial-author.jpg";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const BlogHeader = () => {
    return (
        <main>
            {/* Blog Header */}
            <header className="text-center w-full md:h-[100vh] lg:h-[130vh] flex items-start justify-center">
                <section className="w-full py-10 bg-gray-100 md:px-20 px-3 h-[70vh] flex flex-col items-center lg:gap-10">
                    <h1 className="text-2xl md:text-4xl w-2/3 font-bold text-gray-900 mb-4">
                        Are You Missing Out on the Hidden Style Potential of Your Wardrobe?
                    </h1>

                    <p className="text-sm text-gray-500 mb-6">
                        <span className=" md:mx-5 mx-3">By VogueLine Editorial</span> |
                        <span className=" md:mx-5 mx-3">March 14, 2025</span> |
                        <span className=" md:mx-5 mx-3">8 Comments</span>
                    </p>

                    <figure>
                        <img
                            src={blogImg}
                            alt="Fashion blog featured clothing"
                            className="rounded-md w-full md:h-[90vh]"
                        />
                    </figure>
                </section>
            </header>

            {/* Blog Details Section */}
            <section className="w-full lg:w-2/3 mx-auto px-4 py-10 flex flex-col md:flex-row items-start justify-center gap-10">
                {/* Sidebar Share */}
                <aside className="md:w-1/4 w-full flex flex-col items-center justify-center md:items-start">
                    <h3 className="font-semibold text-primary mb-4">Share</h3>
                    <nav className="flex md:flex-col gap-4 text-white text-xl">
                        <a href="#" className="bg-blue-600 p-4 rounded-full" aria-label="Share on Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-sky-400 p-4 rounded-full" aria-label="Share on Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-red-600 p-4 rounded-full" aria-label="Share on YouTube">
                            <FaYoutube />
                        </a>
                        <a href="#" className="bg-blue-700 p-4 rounded-full" aria-label="Share on LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </nav>
                </aside>

                {/* Blog Content */}
                <article className="prose prose-lg text-gray-700">
                    <section>
                        <p>
                            Many of us wear the same few outfits on repeat while ignoring
                            pieces that could completely refresh our look. Unlocking the hidden
                            value in your wardrobe isn’t about buying more—it’s about learning
                            how to style what you already own.
                        </p>

                        <p>
                            Layering, mixing patterns, and accessorizing can transform simple
                            clothing into statement pieces. A white shirt, for example, can
                            be styled for casual outings, office wear, or even evening looks
                            with the right pairings.
                        </p>

                        {/* Blockquote */}
                        <blockquote className="bg-gray-100 p-6 rounded-md my-6 border-l-4 border-secondary">
                            <div className="flex items-center gap-2 mb-2 text-secondary">
                                <FaQuoteLeft />
                            </div>
                            <p className="italic text-gray-700 mb-2">
                                “Style is not about having more clothes, but about knowing how
                                to wear them differently every time.”
                            </p>
                            <cite className="text-sm text-red-600 font-semibold">— Emily Carter</cite>
                        </blockquote>

                        <p>
                            Building a timeless wardrobe means investing in versatile pieces:
                            denim that never goes out of style, a tailored blazer, or neutral
                            -toned basics that can be styled in countless ways.
                        </p>

                        <p>
                            With a little creativity, you can make your wardrobe work harder
                            for you and reduce the need for constant shopping—while still
                            keeping your style fresh and current.
                        </p>
                    </section>

                    {/* Author Info */}
                    <footer className="flex justify-between items-center mb-6 my-10 border-t pt-5 border-gray-300 text-black">
                        <div className="flex items-center">
                            <img
                                src={author}
                                alt="Author profile"
                                className="w-10 h-10 mr-2 rounded-full"
                            />
                            <span className="font-semibold">Aiden Blair</span>
                        </div>
                        <span className="font-semibold">#Fashion #WardrobeTips #Style2025</span>
                    </footer>

                    {/* Previous & Next Posts */}
                    <nav className="flex flex-col md:flex-row justify-between gap-6 mt-20">
                        <section className="w-full md:w-1/2 p-4 bg-white shadow">
                            <a
                                href="#"
                                className="text-primary/60 hover:text-primary/80 gap-2 flex items-center"
                            >
                                <GoArrowLeft />
                                Previous Post
                            </a>
                            <h3 className="text-lg font-bold mt-2">
                                The Secret to Choosing Wardrobe Staples That Last for Years
                            </h3>
                        </section>

                        <section className="w-full md:w-1/2 p-4 bg-white shadow">
                            <a
                                href="#"
                                className="text-primary/60 hover:text-primary/80 gap-2 flex justify-end items-center"
                            >
                                Next Post
                                <GoArrowRight />
                            </a>
                            <h3 className="text-lg font-bold mt-2">
                                How to Accessorize Smartly and Elevate Any Outfit
                            </h3>
                        </section>
                    </nav>
                </article>
            </section>
        </main>
    );
};

export default BlogHeader;
