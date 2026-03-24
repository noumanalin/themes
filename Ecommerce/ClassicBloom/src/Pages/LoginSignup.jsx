import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import Breadcrumb from "../Components/Breadcrumb"

export default function LoginSignup({ open, onClose }) {
    const [closing, setClosing] = useState(false);
    const [login, setLogin] = useState(true);





    return (

        <>

            <Breadcrumb
                title="Join Us"
                subtitle="We’re here to help! Reach out with your questions, feedback, or collaboration ideas — our team would love to hear from you."
                image="/contactHero.avif"
            />
            <div className=" py-10 z-50 w-full flex items-center justify-center">

                <div className=" max-w-md w-full ">

                    {/* Login/Signup Form */}
                    <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)] "> {login ? "Login" : "SignUp"} </h2>

                    <form className="flex flex-col gap-4">
                        {

                            !login && (
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    className="px-4 py-3 border border-gray-300 focus:outline-none"
                                />
                            )
                        }


                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="px-4 py-3 border border-gray-300 focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="px-4 py-3 border border-gray-300 focus:outline-none"
                        />


                        <div className=" flex items-center justify-between">
                            <div className=" flex items-center gap-2">
                                <input type="checkbox" name="" id="" className=" accent-[var(--accent)] cursor-pointer" />
                                <p>Remember Me</p>
                            </div>
                            <p> <a href="#" className=" text-[var(--primary)]">Forgot your Password</a></p>
                        </div>


                        <div className=" flex items-center justify-center gap-5  py-5 ">


                            <button type="Submit" className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font  overflow-hidden transition-all duration-700 text-lg after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase">
                                <span className="relative z-10">{login ? "Login" : "SignUp"}</span>
                            </button>


                            <button onClick={() => { setLogin(!login) }} className="relative z-30 px-8 py-3 border bg-transparent text-gray-900 hover:text-white font  overflow-hidden transition-all duration-700 text-lg after:content-[''] after:absolute after:left-5 after:bottom-0 after:h-1 after:w-1 after:bg-gray-900 after:rounded-md after:-z-10 after:translate-y-full after:transition-all after:duration-700 hover:after:scale-[300] cursor-pointer uppercase">
                                <span className="">{login ? "Register" : "Login"}</span>
                            </button>


                        </div>

                    </form>
                </div>
            </div>

            {/* SEO meta tags */}
            <meta
                name="description"
                content="Login or create an account to access exclusive perfume offers, manage your orders, and personalize your fragrance experience."
            />
            <meta
                name="keywords"
                content="perfume login, signup perfume account, perfume store registration, user account perfumes"
            />
            <title>Login / Signup | Perfume Shop</title>

        </>

    );
}
