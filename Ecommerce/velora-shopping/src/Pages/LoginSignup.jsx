import React, { useState } from "react";
import { FiX } from "react-icons/fi"; // Close icon from react-icons

const LoginSignup = ({ open, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin(!isLogin);

    if (!open) return null; // don’t render anything when closed

    return (
        // Overlay
        <section
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex justify-end"
            onClick={onClose} // close when clicking outside
        >
            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full md:w-[40%] bg-white transform transition duration-500 z-50 px-5 ${open ? "translate-x-0" : "translate-x-full"}`}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside

            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className=" flex items-end justify-end  hover:text-primary  transition cursor-pointer w-full my-5"
                >
                    <FiX size={24} />
                </button>

                {/* Header */}
                <div className="flex justify-between items-center py-5">
                    <h2 className="text-3xl uppercase text-primary">
                        {isLogin ? "Login" : "Sign Up"}
                    </h2>
                </div>

                <p className="text-md text-gray-600 leading-relaxed">
                    {isLogin
                        ? "Welcome back! Log in to your account to manage your profile, track your orders, and enjoy a personalized shopping experience."
                        : "Create a new account today and unlock access to exclusive deals, order tracking, and a faster checkout experience."}
                </p>


                {/* Form */}
                <div className="py-5">
                    <form className="space-y-7">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none"
                            />
                        )}

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none"
                        />

                        <input type="checkbox" name="" id="" className="accent-primary cursor-pointer" />
                        
                        <span className="ml-5 font-semibold">Remember Me</span>
                        

                        <button
                            type="submit"
                            className="w-full bg-primary hover:text-primary py-3 hover:bg-transparent text-white transition transform duration-300 border border-primary outline-none uppercase tracking-wide cursor-pointer"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    {/* Toggle */}
                    <p className="text-sm text-center mt-4">
                        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                        <span
                            onClick={toggleLogin}
                            className="cursor-pointer underline text-primary"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginSignup;
