import React from 'react'
import BlogCard from '../BlogCard';
import BlogData from '../../assets/BlogData';

const NewArrival = () => {
    return (
        <section className="md:px-20 md:pt-20 px-3 pt-5 text-center space-y-5">

            {/* Section Header */}
            <header className="space-y-2">
                <p className="tracking-[5px] text-secondary text-[12px] font-semibold uppercase">
                    our journal
                </p>
                <h2 className="text-2xl md:text-4xl text-primary font-semibold pb-5">
                    Fresh Stories & Style Guides
                </h2>
            </header>

            {/* Blog Grid */}
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BlogData.slice(0, 3).map((item) => (
                        <article
                            key={item.id}
                            aria-label={`Blog post: ${item.title}`}
                            className="h-full"
                        >
                            <BlogCard blog={item} />
                        </article>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default NewArrival
