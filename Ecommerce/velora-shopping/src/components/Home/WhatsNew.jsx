import React from 'react'
import ProductCard from '../ProductCard'
import products from "../../assets/data"

const WhatsNew = () => {
    return (
        <section className="md:px-10 px-3 py-10" aria-labelledby="whats-new-heading">
            {/* Section Header */}
            <header className="flex items-center justify-between mb-5">
                <h2 id="whats-new-heading" className="md:text-3xl text-2xl font-semibold">
                    WHAT'S NEW
                </h2>

                {/* Animated underline link */}
                <a
                    href="#"  
                    className="relative inline-block text-sm tracking-widest cursor-pointer group uppercase w-fit text-primary"
                    aria-label="View all new products"
                >
                    View All
                    <span className="absolute left-0 -bottom-[2px] h-[1px] bg-primary transition-all duration-500 w-full group-hover:w-1/2 group-hover:left-1/4"></span>
                </a>
            </header>

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map((item) => (
                    <article key={item.id} className="product-card" aria-label={item.name}>
                        <ProductCard product={item} />
                    </article>
                ))}
            </div>
        </section>
    );
}

export default WhatsNew
