import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../assets/rg1.png"

const Cart = () => {
    const [step, setStep] = useState(1); // 1 = Cart, 2 = Checkout, 3 = Complete
    const [shippingOption, setShippingOption] = useState('free');
    const [couponCode, setCouponCode] = useState('');
    const handleApplyCoupon = () => {
        alert(`Coupon code ${couponCode} applied!`);
    };

    // --- Step 1: Cart Page ---
    const CartStep = () => (
        <main className="md:px-10 px-3 py-8 mt-20">
            {/* Progress Steps */}
            <nav aria-label="Checkout steps" className="text-sm text-gray-500 mb-8 text-center">
                <span className={step === 1 ? "font-semibold" : ""}>CART</span> &gt;
                <span className={step === 2 ? "font-semibold" : ""}> CHECKOUT</span> &gt;
                <span className={step === 3 ? "font-semibold" : ""}> ORDER COMPLETE</span>
            </nav>

            <section className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Cart Items */}
                <section className="lg:w-2/3" aria-labelledby="cart-items">
                    <header>
                        <h1 id="cart-items" className="text-2xl md:mb-6">MY BAG</h1>
                    </header>

                    {/* Cart Item */}
                    <article className="border-t border-gray-300 md:pt-5 pt-2 mb-6">
                        <div className="flex flex-col md:items-center justify-between sm:flex-row md:gap-10 gap-3">
                            <figure>
                                <img
                                    src={image}
                                    alt="Exclusive Cropped Tuxedo Trouser In Ivory"
                                    className="w-16 h-24 md:block hidden"
                                />
                            </figure>

                            <div className="flex-grow">
                                <h2 className="font-semibold block md:hidden">Product:</h2>
                                <div>
                                    <h3 className="font-semibold">Exclusive Cropped Tuxedo Trouser In Ivory</h3>
                                    <p className="text-gray-600">Size: XS</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-semibold block md:hidden">Price:</h2>
                                <p className="text-lg">$520</p>
                            </div>

                            <div>
                                <h2 className="font-semibold block md:hidden">Quantity:</h2>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="w-20 h-10 border text-center cursor-pointer"
                                />
                            </div>

                            <div>
                                <h2 className="font-semibold block md:hidden">Subtotals:</h2>
                                <p>$520</p>
                            </div>

                            <button aria-label="Remove item" className="text-gray-300 cursor-pointer text-2xl">
                                <MdDelete />
                            </button>
                        </div>
                    </article>

                    {/* Coupon Section */}
                    <section className="py-6" aria-labelledby="coupon-code">
                        <h2 id="coupon-code" className="font-semibold mb-3">Coupon code</h2>
                        <form className="flex md:flex-row flex-col md:gap-10 gap-3" onSubmit={(e) => { e.preventDefault(); handleApplyCoupon(); }}>
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter coupon code"
                                className="flex-grow border border-gray-300 px-3 py-2 focus:outline-none focus:ring-none"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-10 py-2 hover:bg-primary/80 cursor-pointer transition-colors"
                            >
                                APPLY COUPON
                            </button>
                        </form>
                    </section>
                </section>

                {/* Right Column - Order Summary */}
                <aside className="lg:w-[40%]" aria-labelledby="order-summary">
                    <section id="order-summary" className="border border-gray-300 p-6 sticky top-8">
                        <header>
                            <h2 className="sr-only">Order Summary</h2>
                        </header>

                        <dl className="space-y-4">
                            {/* Subtotal */}
                            <div className="flex justify-between border-b border-gray-300 pb-5">
                                <dt>Subtotal</dt>
                                <dd className="font-semibold">$520</dd>
                            </div>

                            {/* Shipping Options */}
                            <div>
                                <h3 className="font-semibold mb-2">Shipping</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <input
                                            type="radio"
                                            id="free-shipping"
                                            checked={shippingOption === "free"}
                                            onChange={() => setShippingOption("free")}
                                            className="mr-2 accent-black cursor-pointer"
                                        />
                                        <label htmlFor="free-shipping" className="flex-grow">Free shipping</label>
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            type="radio"
                                            id="flat-rate"
                                            checked={shippingOption === "flat"}
                                            onChange={() => setShippingOption("flat")}
                                            className="mr-2 accent-black cursor-pointer"
                                        />
                                        <label htmlFor="flat-rate" className="flex-grow">Flat rate: $10</label>
                                    </li>
                                    <li className="flex items-center">
                                        <input
                                            type="radio"
                                            id="local-pickup"
                                            checked={shippingOption === "local"}
                                            onChange={() => setShippingOption("local")}
                                            className="mr-2 accent-black cursor-pointer"
                                        />
                                        <label htmlFor="local-pickup" className="flex-grow">Local pickup: $10</label>
                                    </li>
                                </ul>
                            </div>

                            {/* Shipping Address */}
                            <div>
                                <h3 className="font-semibold mb-2">Shipping to:</h3>
                                <div className="flex justify-between items-center">
                                    <span>Sofia</span>
                                    <button className="hover:underline text-primary cursor-pointer">Change address</button>
                                </div>
                            </div>

                            {/* VAT */}
                            <div className="flex justify-between">
                                <dt>VAT</dt>
                                <dd className="font-semibold">$50</dd>
                            </div>

                            {/* Total */}
                            <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold">
                                <dt>Total</dt>
                                <dd>$520 USD</dd>
                            </div>
                        </dl>

                        {/* Proceed Button */}
                        <button
                            onClick={() => setStep(2)}
                            className="w-full bg-primary text-white py-3 mt-6 hover:bg-transparent transform transition duration-300 border border-primary hover:text-primary cursor-pointer"
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </section>
                </aside>
            </section>
        </main>
    );


    // --- Step 2: Checkout Form ---
    const CheckoutStep = () => {
        const [paymentOption, setPaymentOption] = useState("bank"); // Default payment method

        return (
            <main className="md:px-10 px-3 py-8 mt-20">
                {/* Progress Steps */}
                <nav
                    className="text-sm text-gray-500 mb-8 text-center"
                    aria-label="Checkout Progress"
                >
                    CART &gt; <span className="font-semibold">CHECKOUT</span> &gt; ORDER COMPLETE
                </nav>

                <section className="flex flex-col lg:flex-row gap-8">
                    {/* Left - Shipping Form */}
                    <article className="lg:w-2/3 w-full p-6">
                        <header>
                            <h2 className="text-2xl mb-6">Shipping Information</h2>
                        </header>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setStep(3);
                            }}
                            className="space-y-6"
                        >
                            <label className="block">
                                <span className="sr-only">Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="sr-only">Email</span>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="sr-only">Phone</span>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="sr-only">Address</span>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="sr-only">City</span>
                                <input
                                    type="text"
                                    placeholder="City"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <label className="block">
                                <span className="sr-only">Postal Code</span>
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                />
                            </label>

                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="bg-primary text-white px-6 py-3 w-full hover:bg-transparent transform transition duration-300 cursor-pointer hover:text-primary border"
                            >
                                Go Back
                            </button>
                        </form>
                    </article>

                    {/* Right - Order Summary + Payment */}
                    <aside className="lg:w-[40%] border border-gray-300 p-6 h-fit space-y-6">
                        {/* Order Summary */}
                        <section>
                            <h3 className="font-semibold mb-4">Order Summary</h3>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>$520</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>$50</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg border-t pt-4">
                                <span>Total</span>
                                <span>$570</span>
                            </div>
                        </section>

                        {/* Payment Options */}
                        <section>
                            <h3 className="font-semibold mb-3">Payment</h3>
                            <fieldset className="space-y-3">
                                <legend className="sr-only">Select Payment Method</legend>

                                {/* Bank Transfer */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="radio"
                                        id="bank"
                                        name="payment"
                                        checked={paymentOption === "bank"}
                                        onChange={() => setPaymentOption("bank")}
                                        className="mt-1 accent-black cursor-pointer"
                                    />
                                    <label htmlFor="bank" className="flex flex-col">
                                        <span className="font-medium">Direct bank transfer</span>
                                        <span className="text-sm text-gray-600">
                                            Make your payment directly into our bank account. Use your
                                            Order ID as reference. Order will ship once funds are cleared.
                                        </span>
                                    </label>
                                </div>

                                {/* Cash on Delivery */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="radio"
                                        id="cod"
                                        name="payment"
                                        checked={paymentOption === "cod"}
                                        onChange={() => setPaymentOption("cod")}
                                        className="mt-1 accent-black cursor-pointer"
                                    />
                                    <label htmlFor="cod" className="flex flex-col">
                                        <span className="font-medium">Cash on delivery</span>
                                    </label>
                                </div>
                            </fieldset>
                        </section>

                        {/* Terms & Conditions */}
                        <section className="text-sm text-gray-600">
                            <p className="mb-2">
                                Your personal data will be used to process your order, support your
                                experience on this website, and for purposes described in our privacy
                                policy.
                            </p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    className="accent-black cursor-pointer"
                                />
                                <label htmlFor="terms">
                                    I have read and agree to the website terms and conditions *
                                </label>
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="hover:bg-primary hover:text-white px-6 py-3 w-full bg-transparent transform transition duration-300 text-primary cursor-pointer border"
                        >
                            PLACE ORDER
                        </button>
                    </aside>
                </section>
            </main>
        );
    };


    // --- Step 3: Complete Order ---
    const CompleteOrderStep = () => (
        <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <header>
                <h1 className="md:text-3xl text-xl font-bold mb-4">🎉 Congratulations!</h1>
            </header>

            <section>
                <p className="text-lg text-gray-700 mb-6">
                    Your order has been successfully placed.
                </p>
            </section>

            <nav aria-label="Continue Shopping">
                <Link
                    to="/shop"
                    className="bg-primary text-white cursor-pointer px-6 py-3 hover:bg-primary/80 transition"
                >
                    Continue Shopping
                </Link>
            </nav>
        </main>
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
