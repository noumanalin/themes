import React from "react";
import BlogCard from "../BlogCard";
import blogData from "../../Data/blogData";
import Breadcrumb from "../Breadcrumb";

const BlogGrid = () => {
    return (
        <>

<Breadcrumb
    title="Our Blog"
    subtitle="Dive into expert insights, stories, and the latest trends — crafted to inspire and keep you informed."
    image="/blogHero.avif"
/>


            <section className="py-10 sectionlayout">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Perfume Insights & Stories
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
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
};

export default BlogGrid;
