import React from "react";
import BlogCard from "../components/BlogCard";
import Banner from "../assets/blog-banner.jpg";
import BlogData from "../assets/BlogData";

const Blog = () => {
    return (
        <>
            <main>
                {/* Banner */}
                <header
                    className="relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${Banner})` }}
                >
                    <div className="relative z-10 text-center">
                        <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
                            Insights & Stories
                        </h1>
                        <p className="text-gray-200 max-w-xl mx-auto text-sm md:text-base">
                            Explore our latest fashion tips, trends, and lifestyle advice to
                            keep your wardrobe inspired and refreshed.
                        </p>
                    </div>
                </header>

                {/* Blog Grid */}
                <section
                    className="md:px-20 md:pt-20 px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10"
                    aria-label="Blog articles"
                >
                    {BlogData.map((item) => (
                        <article key={item.id} aria-label={item.title}>
                            <BlogCard blog={item} />
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Blog;
