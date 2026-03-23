import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ImSpinner } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Link } from "react-router-dom";

// --- Progress Header Component ---
const ProgressHeader = ({ step }) => {
    return (
        <div className="md:px-20 px-3 text-sm text-gray-500 mb-8 bg-gray-100 py-10 space-y-5">
            {/* Dynamic Title */}
            <p className=" text-xl md:text-3xl text-primary font-semibold">
                Shopping Cart
            </p>

            {/* Steps Indicator */}
            <div className="flex space-x-2">
                <p
                    className={
                        step === 1
                            ? "font-semibold text-primary flex items-center gap-2"
                            : "flex items-center gap-2"
                    }
                >
                    CART
                    <IoIosArrowUp className="rotate-[90deg] font-semibold text-md" />
                </p>

                <p
                    className={
                        step === 2
                            ? "font-semibold text-primary flex items-center gap-2"
                            : "flex items-center gap-2"
                    }
                >
                    CHECKOUT
                    <IoIosArrowUp className="rotate-[90deg] font-semibold text-md" />
                </p>

                <p
                    className={
                        step === 3
                            ? "font-semibold text-primary flex items-center gap-2"
                            : "flex items-center gap-2"
                    }
                >
                    ORDER COMPLETE
                </p>
            </div>
        </div>
    );
};

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
        <div>
            <ProgressHeader step={1} />
            <div className="md:px-20 px-3 flex flex-col lg:flex-row gap-8 text-primary">
                {/* Left Column - Cart Items */}
                <div className="lg:w-2/3">

                    {/* Table Header */}
                    <div className="grid md:grid-cols-5 grid-cols-4 font-semibold pb-1 mb-4 text-primary">
                        <span className="md:col-span-2 ">PRODUCT</span>
                        <span className="text-center">QUANTITY</span>
                        <span className="text-center">TOTAL</span>
                        <span className="text-center">REMOVE</span>
                        <span></span>
                    </div>

                    {/* Cart Item */}
                    <div className="grid grid-cols-5 items-center border-t border-gray-200 py-4">
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
                            <div className=" flex items-center w-20">

                                <button
                                    type="button"
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                    aria-label="Decrease quantity"
                                >
                                    <IoIosArrowUp className=" -rotate-[90deg]" />
                                </button>

                                <input
                                    type="number"
                                    value={quantity}
                                    min={1}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="w-full text-center outline-none font-semibold text-gray-800"
                                    aria-label="Product quantity"
                                />

                                <button
                                    type="button"
                                    className="text-gray-400 cursor-pointer"
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    aria-label="Increase quantity"
                                >
                                    <IoIosArrowDown className=" -rotate-[90deg]" />
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
                        <button
                            className=" px-6 py-3  bg-transparent duration-300 cursor-pointer text-black border border-gray-300 text-sm tracking-wider uppercase font-semibold"
                        >
                            Continue shopping
                        </button>

                        <button
                            className="bg-black text-white px-6 py-3 transform transition duration-300 cursor-pointer  border text-sm tracking-wider uppercase font-semibold flex items-center gap-2"
                        >
                            <ImSpinner />
                            update cart
                        </button>

                    </div>

                </div>

                {/* Right Column - Order Summary */}
                <div className="lg:w-[35%] space-y-6">


                    {/* Coupon Section */}
                    <div className="">
                        <h3 className="font-semibold mb-3 text-primary">DISCOUNT CODES</h3>
                        <div className="flex">
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Coupon code"
                                className="flex-grow border border-gray-300 px-3 py-2 focus:outline-none"
                            />
                            <button
                                onClick={handleApplyCoupon}
                                className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
                            >
                                APPLY
                            </button>
                        </div>
                    </div>


                    {/* Cart Total */}
                    <div className="bg-gray-100 p-6">
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
                            className="bg-black text-white px-6 py-3 mt-5 w-full hover:bg-transparent transform transition duration-300 cursor-pointer hover:text-black border border-black text-sm tracking-wider uppercase font-semibold"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- Step 2: Checkout Form ---
    const CheckoutStep = () => {
        const [paymentOption, setPaymentOption] = useState("bank"); // Default payment method

        return (
            <div>
                <ProgressHeader step={2} />
                <div className="md:px-10 px-3 py-8">
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
                                className="bg-black text-white px-6 py-3 w-full hover:bg-transparent transform transition duration-300 hover:text-black cursor-pointer border"
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // --- Step 3: Complete Order ---
    const CompleteOrderStep = () => (
        <div>
            <ProgressHeader step={3} />
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your order has been successfully placed.
                </p>
                <Link
                    to="/shop"
                    className="bg-black text-white cursor-pointer px-6 py-3 hover:bg-gray-800 transition"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );

    // --- Render Correct Step ---
    return (
        <>
            {step === 1 && <CartStep />}
            {step === 2 && <CheckoutStep />}
            {step === 3 && <CompleteOrderStep />}
        </>
    );
};

export default Cart;
