import React from 'react';

const BlogCard = ({ blog }) => {
    if (!blog) return null; // safeguard against undefined

    return (
        <article className="h-[50vh] md:h-[35vh] lg:h-[60vh]">
            <figure className="relative group">
                <img
                    src={blog.image || "https://via.placeholder.com/300"}
                    alt={blog.title || "Blog image"}
                    className="w-full h-auto object-cover"
                />

                <figcaption className="absolute bg-white group-hover:shadow-md left-[15%] top-[80%] w-[70%] p-5 text-primary space-y-2">
                    <time className="text-sm" dateTime={blog.date || ""}>
                        {blog.date || "Unknown date"}
                    </time>
                    <h2 className="text-lg font-semibold">
                        {blog.title || "Untitled Blog"}
                    </h2>

                    <a
                        href={blog.link || "#"}
                        className="uppercase tracking-[5px] text-[12px] cursor-pointer font-semibold relative"
                    >
                        Read More
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-primary transition-all duration-500 group-hover:bg-secondary group-hover:w-1/3 group-hover:left-0"></span>
                    </a>
                </figcaption>
            </figure>
        </article>
    );
};

export default BlogCard;
