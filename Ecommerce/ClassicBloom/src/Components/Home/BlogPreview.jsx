import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import blogData from "../../Data/blogData";

const BlogPreview = () => {
    const previewBlogs = blogData.slice(0, 3); // show first 3 only

    return (
        <section className="py-16 sectionlayout">
            {/* Section Header */}
            <header className="text-center mb-5">
                <p
                    className="tracking-wide meow-script-regular text-[var(--primary)] md:text-7xl text-5xl"
                    aria-hidden="true"
                >
                    News & Articles
                </p>

                <h2
                    id="new-arrivals-heading"
                    className="md:text-4xl text-2xl font-light text-gray-800 mt-4 uppercase"
                >
                    Our Blog
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Discover our newly launched self-care and beauty essentials,
                    crafted to elevate your daily routine with a touch of elegance.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {previewBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

            <div className="text-center mt-10">
                <Link
                    to="/blog"

                >
                    <button
                        className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font mt-2
             overflow-hidden transition-all duration-700 text-lg 
             after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
             after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
             after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                    >
                        explore more
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default BlogPreview;
