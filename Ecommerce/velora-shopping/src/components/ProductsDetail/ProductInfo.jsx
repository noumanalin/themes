import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data";

const ProductInfo = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id.toString() === id);
    if (!product) {
        return <h2 className="text-center mt-20">Product not found</h2>;
    }
    return (
        <section className="grid md:grid-cols-2 gap-10 md:px-10 px-3 mt-20">
            {/* Left side - Images */}
            <div className="grid grid-cols-2 gap-4">
                <img src={product.images[0]} alt={product.title} className="" />
                <img src={product.images[1]} alt={product.title} className="" />
                <img src={product.images[2]} alt={product.title} className="" />
                <img src={product.images[3]} alt={product.title} className="" />
            </div>

            {/* Right side - Details */}
            <div>
                <h1 className="text-2xl uppercase text-primary">{product.name}</h1>
                <p className="text-xl text-gray-700 my-4">${product.price}</p>

                {/* Color */}
                <label className="block mb-2 font-medium">Color</label>
                <select className="border p-2 mb-4 md:w-auto w-full cursor-pointer">
                    <option>Choose an option</option>
                    {product.colors.map((color, i) => (
                        <option key={i} className=" cursor-pointer">{color}</option>
                    ))}
                </select>

                {/* Size */}
                <label className="block mb-2 font-medium">Size</label>
                <select className="border p-2 mb-4 md:w-auto w-full cursor-pointer">
                    <option>Choose an option</option>
                    {product.sizes.map((size, i) => (
                        <option key={i} className=" cursor-pointer">{size}</option>
                    ))}
                </select>

                {/* Add to Cart */}
                <div className="flex items-center gap-4 md:justify-start justify-between">
                    <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        className="w-24  border text-center"
                    />
                    <button className=" text-white px-6 py-2 bg-primary cursor-pointer transition duration-700">
                        ADD TO CART
                    </button>
                </div>

                {/* Wishlist + Info */}
                <button className="mt-4 text-sm underline hover:text-primary cursor-pointer">Add to Wishlist</button>

                <div className="mt-6 space-y-4">
                    <details>
                        <summary className="cursor-pointer font-semibold">Description</summary>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                    </details>
                    <details>
                        <summary className="cursor-pointer font-semibold">Product Details</summary>
                        <p className="mt-2 text-gray-600">{product.details}</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;