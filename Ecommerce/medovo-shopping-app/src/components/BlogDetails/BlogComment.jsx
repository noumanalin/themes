import React from "react";

const BlogComments = () => {
    return (
        <section
            className="w-full max-w-5xl mx-auto md:px-20 px-3 space-y-10"
            aria-labelledby="comments-title"
        >
            {/* Comment Form */}
            <article className="bg-white">
                <h2
                    id="comments-title"
                    className="text-2xl font-bold mb-6 text-center text-primary/80"
                >
                    Leave a Comment
                </h2>

                <form className="space-y-6">
                    {/* Name, Email, Phone in a row */}
                    <fieldset className="md:flex-row flex-col flex gap-4">
                        <legend className="sr-only">Comment Details</legend>

                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            aria-label="Name"
                            className="md:w-1/3 w-full p-2 border border-gray-300 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            aria-label="Email"
                            className="md:w-1/3 w-full p-2 border border-gray-300 focus:outline-none"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            aria-label="Phone"
                            className="md:w-1/3 w-full p-2 border border-gray-300 focus:outline-none"
                        />
                    </fieldset>

                    {/* Comment Box */}
                    <label htmlFor="comment" className="sr-only">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                        className="w-full p-2 border border-gray-300 h-24 focus:outline-none"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black text-white px-4 cursor-pointer font-semibold text-sm uppercase tracking-[2px] py-2 hover:bg-gray-800 transition"
                    >
                        Post Comment
                    </button>
                </form>
            </article>
        </section>
    );
};

export default BlogComments;
