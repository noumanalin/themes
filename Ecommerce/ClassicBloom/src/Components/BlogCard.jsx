import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <Link
                to={`/blog/${blog.id}`}>
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
                />
            </Link>

            <div className="p-5">
                <p className="text-gray-400 text-sm">{blog.date}</p>
                <h3 className="text-lg font-semibold mt-2 text-gray-800">
                    {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {blog.description}
                </p>
                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-block mt-4 text-[var(--primary)] text-sm font-medium hover:underline"
                >
                    Read More 
                </Link>
                
                 
            </div>
        </div>
    );
};

export default BlogCard;
