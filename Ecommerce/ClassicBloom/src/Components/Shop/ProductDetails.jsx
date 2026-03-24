import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../Data/productData";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import BestSeller from "./BestSeller";
import Breadcrumb from "../Breadcrumb";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    if (!product) {
        return <div className="text-center py-20 text-gray-500">Product not found.</div>;
    }

    const handleAddToCart = () => {
        alert(`Added "${product.title}" to cart`);
    };

    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1));
    };

    return (
        
        <>
<Breadcrumb
                title="Shop"
                subtitle="Explore our exclusive collection of premium products curated just for you."
                image="/shopHero.jpg"
            />

        <section className="py-10 sectionlayout w-full  gap-10">
            {/* product info */}

            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10">



                <figure className="relative bg-[var(--primary)]/5 flex items-center justify-center group md:w-1/2 w-full h-[70vh]">
                    {/* Hover Border */}
                    <span className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <span className=" w-[90%] h-[90%] z-10 border border-gray-800 ease-out transition-all duration-500 group-hover:w-full group-hover:h-full"></span>
                    </span>

                    <img
                        src={product.image}
                        alt={`${product.title} cosmetic product`}
                        className="relative  z-10 object-contain"
                        loading="lazy"
                    />
                </figure>

                {/* Right: Product Info */}
                <div className=" md:w-1/2 w-full">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-lg font-semibold text-primary mb-2">${product.newPrice.toFixed(2)}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) =>
                            i < Math.round(product.rating || 0) ? (
                                <FaStar key={i} className="text-yellow-400" />
                            ) : (
                                <FaRegStar key={i} className="text-gray-300" />
                            )
                        )}
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.desc || "no description"}
                    </p>



                    {/* Categories & Tags */}
                    <p className="text-gray-500 uppercase">
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p className="text-gray-500 uppercase">
                        <strong>Tags:</strong> {product.tags || "None"}
                    </p>
                    

                    {/*    increment & decrement & add to cart      */}
                    <div className="flex  gap-7 mt-3">
                        {/* Quantity Selector */}
                        <div className="flex items-center  gap-3">
                            <button
                                onClick={() => handleQuantityChange("dec")}
                                className="relative z-10 py-3 px-6 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                            >
                                −
                            </button>
                            <span className="px-5 font-medium  py-3 border border-gray-800 text-gray-900">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange("inc")}
                                className="relative z-10 py-3 px-6  bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                            >
                                +
                            </button>

                        </div>

                        {/* Add to cart */}
                        <button onClick={handleAddToCart}
                            className="relative z-10 py-1 px-6 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                        >
                            Add to Cart
                        </button>

                       
                    </div>


                </div>

            </section>

            
            {/* Tabs */}
            <div className="col-span-2 mt-10">
                <div className="flex gap-4 border w-fit">
                    <button
                        className={`pb-2 font-medium px-5 py-3 cursor-pointer ${activeTab === "description"
                            ? "text-white bg-[var(--secondary)]"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("description")}
                    >
                        Description
                    </button>
                    <button
                        className={`pb-2 font-medium px-5 py-2 cursor-pointer ${activeTab === "reviews"
                            ? "text-white bg-[var(--secondary)]"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </button>
                </div>

                {activeTab === "description" ? (
                    <div className="py-5 text-gray-600">{product.desc}</div>
                ) : (
                    <div className="py-5">
                            <div className="flex items-start gap-4 mb-6 border-b border-gray-200 pb-4">
                                {/* Left: Reviewer Image */}
                                <figure className="w-14 h-14 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
                                    <img
                                        src="/productData/avatar.jpg" // replace with your actual reviewer/user image path
                                        alt="Reviewer"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>

                                {/* Right: Review Content */}
                                <div className="flex flex-col gap-1 w-full">
                                    {/* Dynamic Rating */}
                                    <div className="flex items-center mb-1">
                                        {[...Array(5)].map((_, i) =>
                                            i < Math.round(product.rating || 0) ? (
                                                <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                                            ) : (
                                                <FaRegStar key={i} className="text-gray-300 w-4 h-4" />
                                            )
                                        )}
                                    </div>

                                    {/* Reviewer Name */}
                                    <h3 className="font-semibold text-gray-800 text-sm">John Doe</h3>

                                    {/* Review Message */}
                                    <p className="text-gray-600 tracking-wider leading-relaxed">
                                        Duckbill gizzard shad redmouth whalefish yellowtail barracuda convict cichlid; saw shark yellowfin surgeonfish? Silver dollar salamanderfish longfin
                                    </p>

                                    {/* Review Date */}
                                    <span className="text-xs text-gray-400 mt-1">Reviewed on Nov 5, 2025</span>
                                </div>
                            </div>


                            <div className='md:w-1/2 w-full'>
                                <h2
                                    id="achievements-title"
                                    className="text-2xl   leading-snug text-gray-800"
                                >
                                    Add Review
                                </h2>
                                <p className=' text-sm'>Your email address will not be published. Required fields are marked *</p>

                                <form action="" className=' py-10 md:space-y-10 space-y-7'>

                                    

                                    {/*     message field */}

                                    <textarea name="message" id="message" placeholder='Message' className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full h-40' />
                                    
                                    

                                    {/*     Name field */}

                                    <input type="text" placeholder='Full Name *' name='name' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />

                                    {/*     email field */}
                                    <input type="email" placeholder='Email *' name='email' required className='outline-none border border-gray-300 focus:border-gray-500 transition-colors duration-200 px-2 py-3 w-full' />

                                    


                                    <button
                                        className="relative z-30 px-8 py-2 border bg-transparent text-gray-900 hover:text-white font  mt-2
                         overflow-hidden transition-all duration-700 text-lg 
                         after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
                         after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
                         after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                                    >
                                  submit
                                    </button>

                                </form>
                            </div>
                        
                    </div>
                )}
            </div>
            
            
            
            <BestSeller/>
        </section>


            {/* SEO meta tags */}
            <meta
                name="description"
                content="Discover our exclusive perfume collection — from timeless classics to modern blends. Shop luxury fragrances crafted to match every mood and occasion."
            />
            <meta
                name="keywords"
                content="perfume shop, luxury perfumes, buy perfumes online, long lasting fragrances, best perfumes"
            />
            <title>Shop | Perfume Collection</title>

            
        </>
    );
};

export default ProductDetails;
