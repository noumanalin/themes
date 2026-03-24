import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../Data/blogData";
import CommentsReviews from "./CommentsReviews";
import Breadcrumb from "../Breadcrumb";

export default function BlogDetails() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="sectionlayout w-full py-20 text-center text-gray-600">
                <p>Blog not found.</p>
                <Link to="/blog" className="text-[var(--primary)] hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (

        <>
            <Breadcrumb
                title="Our Blog"
                subtitle="Dive into expert insights, stories, and the latest trends — crafted to inspire and keep you informed."
                image="/blogHero.avif"
            />

            <section className=" w-full sectionlayout py-10">
                {/* Main Blog Image */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center py-3 text-gray-800 mb-2">
                    {blog.title}
                </h1>
                <div className="gap-5 flex flex-col items-center w-full justify-center">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-[80vh] object-cover "
                    />
                    <p className="text-sm text-gray-500 mb-6 text-left">{blog.date}</p>
                </div>

                {/* Title & Date */}



                {/* Content */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    {blog.content.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>

                <div className=" mt-10 w-full flex items-center justify-center">
                    <p className=" text-gray-800 p-10 text-xl max-w-md bg-[var(--primary)]/10">{blog.quote}</p>
                </div>

                {/* Related Images */}
                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {blog.relatedImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${blog.title} related ${i}`}
                            className=" object-cover h-48 w-full"
                        />
                    ))}
                </div>

                {/* Comments Section */}
                <CommentsReviews />
            </section>
            
            
            {/* SEO meta tags */}
            <meta
                name="description"
                content="Explore our perfume blog for expert tips, fragrance trends, and guides to help you discover the art and science of fine perfumery."
            />
            <meta
                name="keywords"
                content="perfume blog, fragrance tips, perfume guides, scent layering, perfume trends"
            />
            <title>Blog | Fragrance Insights</title>

        </>

    );
}
