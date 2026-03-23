import React from 'react'
import ProductCard from '../ProductCard';
import products from '../../assets/data';

const RelatedProducts = () => {
    return (
        <div className=' md:px-20 px-3 mt-10 md:mt-20'>
            <h2 className=' text-primary text-3xl font-semibold py-10 text-center'>Related Products</h2>
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-8">
                {products.slice(0, 4).map((item) => (
                    <article key={item.id} aria-label={item.name}>
                        <ProductCard product={item} />
                    </article>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
