import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ImSpinner } from "react-icons/im";
import Breadcrumb from "../Components/Breadcrumb"
import { Link } from "react-router-dom";



const Cart = () => {
    const [step, setStep] = useState(1); // 1 = Cart, 2 = Checkout, 3 = Complete
    const [shippingOption, setShippingOption] = useState("free");
    const [couponCode, setCouponCode] = useState("");
    const [quantity, setQuantity] = useState(1);


    const handleApplyCoupon = () => {
        alert(`Coupon code ${couponCode} applied!`);
    };

    // --- Step 1: Cart Page ---
    const CartStep = () => (
      
          
            <div className="sectionlayout py-10 flex-col gap-8 text-primary">
                {/* Left Column - Cart Items */}
                <div className="w-full">

                    {/* Table Header */}
                    <div className="grid md:grid-cols-5 grid-cols-4 font-semibold  mb-4 text-primary border-y border-gray-300 py-5">
                        <span className="md:col-span-2 ">PRODUCT</span>
                        <span className="text-center">QUANTITY</span>
                        <span className="text-center">TOTAL</span>
                        <span className="text-center">REMOVE</span>
                        <span></span>
                    </div>

                    {/* Cart Item */}
                    <div className="grid grid-cols-5 border-b border-gray-300 items-center py-4">
                        {/* Product */}
                        <div className="col-span-2  flex md:flex-row flex-col items-start gap-4">
                            <img
                                src="https://themewagon.github.io/malefashion/img/shopping-cart/cart-1.jpg"
                                alt="product"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <h3 className=" md:text-md text-sm">Exclusive Cropped Tuxedo Trouser</h3>
                                <p className=" font-semibold">$520</p>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex justify-center items-center">
                            <div className=" flex items-center w-28 space-x-2">

                                <button
                                    type="button"
                                    className="cursor-pointer border px-3 border-[var(--secondary)] text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] transition-colors duration-200"
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    aria-label="Decrease quantity"
                                >
                                   -
                                </button>

                                <input
                                    type="number"
                                    value={quantity}
                                    min={1}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="w-full text-center outline-none font-semibold text-gray-800 border "
                                    aria-label="Product quantity"
                                />
                                <button
                                    type="button"
                                    className="cursor-pointer border px-3 border-[var(--secondary)] text-[var(--secondary)] hover:text-white hover:bg-[var(--secondary)] transition-colors duration-200"
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    aria-label="Increase quantity"
                                >
+
                                </button>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="text-center font-semibold">$520</div>

                        {/* Remove */}
                        <div className="flex justify-center">
                            <CgClose className=" rounded-full p-2 w-8 h-8 cursor-pointer text-xl bg-gray-200" />
                        </div>
                    </div>

                    {/*      Buttons    */}
                    <div className=" flex item-center justify-between mt-5">
                        {/* Coupon Section */}
                        <div className="">
                           
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Coupon code"
                                    className="flex-grow border border-gray-300 px-3 py-2 focus:outline-none"                                />
                                <button
                                    onClick={handleApplyCoupon}
                                    className="relative z-10 px-6 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                                >
                                    APPLY
                                </button>
                            </div>
                        </div>

                        <button
                            className="relative z-10 px-6 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase flex items-center gap-2"
                        >
                            <ImSpinner />
                            update cart
                        </button>

                    </div>

                </div>

                {/* Right Column - Order Summary */}
                <div className=" flex my-10 w-full justify-end ">


                
                    {/* Cart Total */}
                    <div className="lg:w-[35%] bg-gray-100 p-6">
                        <h3 className="font-semibold mb-4">CART TOTAL</h3>
                        <div className="flex justify-between pb-3">
                            <span>Subtotal</span>
                            <span className="text-secondary font-semibold">$169.50</span>
                        </div>
                        <div className="flex justify-between pt-3">
                            <span>Total</span>
                            <span className="text-secondary font-semibold">$169.50</span>
                        </div>
                        <button
                            onClick={() => setStep(2)}
                            className="relative z-10 px-6 py-3 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700 w-full mt-3  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
       
    );

    // --- Step 2: Checkout Form ---
    const CheckoutStep = () => {
        const [paymentOption, setPaymentOption] = useState("bank"); // Default payment method

        return (
    
              <div className="sectionlayout  py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left - Form */}
                        <div className="lg:w-2/3 p-6 space-y-5">
                            <h2 className="font-semibold mb-8 pb-6 uppercase text-primary border-b border-gray-300 ">Billing Details</h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setStep(3);
                                }}
                                className="space-y-4"
                            >

                                {/*     names       */}
                                <div className=" flex w-full items-center gap-5">
                                    <div className=" w-full">

                                        <label htmlFor="" className=" text-primary">First Name<span className="text-red-500 text-lg">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border p-3 mt-3 outline-none"
                                        />
                                    </div>

                                    <div className=" w-full">

                                        <label htmlFor="" className=" text-primary">Last Name<span className="text-red-500 text-lg">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border p-3 mt-3 outline-none"
                                        />
                                    </div>
                                </div>


                                {/*         Country Name        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Country Name<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>

                                {/*         Address        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Address<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Appartment,suit,unit etc (Optional)"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>


                                {/*         City Name        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Town/City<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>


                                {/*         Postal code        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Postcode/ZIP<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>


                                {/*     phone and email       */}
                                <div className=" flex w-full items-center gap-5">
                                    <div className=" w-full">

                                        <label htmlFor="" className=" text-primary">Phone<span className="text-red-500 text-lg">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full border p-3 mt-3 outline-none"
                                        />
                                    </div>

                                    <div className=" w-full">

                                        <label htmlFor="" className=" text-primary">Email<span className="text-red-500 text-lg">*</span></label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full border p-3 mt-3 outline-none"
                                        />
                                    </div>
                                </div>


                                {/*         Account Checkbox        */}

                                <div className=" w-full flex gap-3">


                                    <input
                                        type="checkbox"
                                        required
                                        className="accent-secondary"
                                    />

                                    <p className="text-primary">Create an account?</p>
                                </div>

                                <p className="text-primary text-sm">Create an account by entering the information below. If you are a returning customer please login at the top of the page</p>

                                {/*         account Password        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Account Password<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>

                                {/*         Note Checkbox        */}

                                <div className=" w-full flex gap-3">


                                    <input
                                        type="checkbox"
                                        required
                                        className="accent-secondary"
                                    />

                                    <p className="text-primary">Note about your order, e.g, special noe for delivery </p>
                                </div>

                                {/*         Note        */}

                                <div className=" w-full">

                                    <label htmlFor="" className=" text-primary">Note<span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Note about your order, e.g.special notes for delivery"
                                        required
                                        className="w-full border p-3 mt-3 outline-none"
                                    />
                                </div>
                                
                                <button
                                    onClick={() => setStep(1)}
                                    className="bg-black text-white px-6 py-3 mt-3 w-full hover:bg-transparent transform transition duration-300 cursor-pointer hover:text-black border uppercase font-semibold text-sm"
                                >
                                    Go Back
                                </button>
                            </form>
                        </div>

                        {/* Right - Order Summary + Payment Section */}
                        <div className="lg:w-[40%] bg-gray-50 p-6 h-fit space-y-6 text-primary/70">
                            {/* Order Summary */}
                            <div>
                                <h3 className="font-semibold mb-4 text-2xl border-b border-gray-300 pb-4">
                                    YOUR ORDER
                                </h3>

                                {/* Product List */}
                                <div className="space-y-3 ">
                                    <div className="flex justify-between font-semibold ">
                                        <span>Product</span>
                                        <span>Total</span>
                                    </div>
                                    <div className="flex justify-between ">
                                        <span>01. Vanilla salted caramel</span>
                                        <span>$300.00</span>
                                    </div>
                                    
                                    <div className="flex justify-between ">
                                        <span>02. German chocolate</span>
                                        <span>$170.00</span>
                                    </div>
                                    
                                    
                                </div>

                                {/* Subtotal */}
                                <div className="flex justify-between border-t border-gray-300 py-3 mt-4">
                                    <span className="font-medium">Subtotal</span>
                                    <span className="text-secondary font-semibold">$750.99</span>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span className="text-secondary">$750.99</span>
                                </div>
                            </div>

                            {/* Account Option */}
                            <div className="text-sm space-y-3 border-t border-gray-300 pt-4">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="account" className="accent-secondary" />
                                    <label htmlFor="account" className="cursor-pointer">
                                        Create an account?
                                    </label>
                                </div>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="check" className="accent-secondary" />
                                    <label htmlFor="check" className="cursor-pointer">
                                        Check Payment
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="paypal" className="accent-secondary" />
                                    <label htmlFor="paypal" className="cursor-pointer">
                                        Paypal
                                    </label>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button
                                type="submit"
                                className="relative z-10 px-6 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase w-full py-3 "
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
    
        );
    };

    // --- Step 3: Complete Order ---
    const CompleteOrderStep = () => (
     
         
            <div className=" sectionlayout py-10 flex flex-col items-center justify-center min-h-[60vh] text-center ">
                <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your order has been successfully placed.
                </p>
                <Link
                    to="/shop"
                    className="relative z-10 px-6 py-3 mt-3 bg-transparent border border-gray-800 text-gray-900 hover:text-white overflow-hidden transition-all duration-700  
            after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 
            after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full 
            after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase"
                >
                    Continue Shopping
                </Link>
            </div>
      
    );

    // --- Render Correct Step ---
    return (
        <>
            <Breadcrumb
                title="Cart"
                subtitle="Review your selected items, adjust quantities, and proceed to secure checkout with confidence."
                image="/cartHero.avif"
            />
            {step === 1 && <CartStep />}
            {step === 2 && <CheckoutStep />}
            {step === 3 && <CompleteOrderStep />}
        
        
            {/* SEO meta tags */}
            <meta
                name="description"
                content="Review your selected perfumes before checkout. Secure payment and worldwide shipping for all luxury fragrance orders."
            />
            <meta
                name="keywords"
                content="perfume cart, checkout perfume, perfume order summary, fragrance purchase, luxury perfume checkout"
            />
            <title>My Cart | Perfume Shop</title>



        </>
    );
};

export default Cart;
