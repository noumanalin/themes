import React, { useState, useEffect } from "react";
import bagImg from "../../assets/product-sale.png"; // replace with your actual image

const Deals = () => {
    // ✅ set targetDate once (29 days from now)
    const targetDate = React.useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 29);
        return date;
    }, []);

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // expired
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="bg-gray-100 md:h-screen my-20 py-10 px-3 md:px-20 flex flex-col md:flex-row items-center justify-between space-y-10 md:gap-20 relative md:pt-0 pt-20">

            {/* Decorative block */}
            <div className="absolute bg-white h-[35vh] md:h-[40vh] md:w-48 w-36 left-0 md:top-44 top-10"></div>

            {/* Categories */}
            <aside
                className="md:space-y-6 space-y-3 md:w-1/3 w-full text-4xl font-medium text-gray-400 z-10"
                aria-label="Product categories"
            >
                <p>Trending Apparel</p>
                <p className="text-black font-semibold">Footwear Styles</p>
                <p>Fashion Add-ons</p>
            </aside>

            {/* Product Image */}
            <figure className="relative md:mt-0 mt-10 md:w-1/2">
                <img
                    src={bagImg}
                    alt="Utility Shoulder Bag"
                    className="w-72 md:w-96"
                />
                <figcaption className="absolute top-0 md:right-24 right-10 bg-black text-white rounded-full md:w-24 w-20 h-20 md:h-24 flex flex-col items-center justify-center text-sm">
                    <span className="text-xs">Now Only</span>
                    <span className="font-bold text-lg">$29.99</span>
                </figcaption>
            </figure>

            {/* Deal Section */}
            <article className="md:w-1/3 w-full text-center md:text-left md:space-y-7 space-y-3">
                <header>
                    <p className="text-secondary text-sm font-semibold tracking-wider">
                        LIMITED TIME DEAL
                    </p>
                    <h2 className="text-2xl md:text-3xl text-primary font-semibold">
                        Utility Shoulder <br /> Bag – Black
                    </h2>
                </header>

                {/* Countdown */}
                <section
                    className="flex space-x-4 text-2xl font-bold justify-center md:justify-start"
                    aria-label="Countdown Timer"
                >
                    <time>
                        {timeLeft.days.toString().padStart(2, "0")}{" "}
                        <p className="text-sm font-normal">Days</p>
                    </time>
                    <span>:</span>
                    <time>
                        {timeLeft.hours.toString().padStart(2, "0")}{" "}
                        <p className="text-sm font-normal">Hours</p>
                    </time>
                    <span>:</span>
                    <time>
                        {timeLeft.minutes.toString().padStart(2, "0")}{" "}
                        <p className="text-sm font-normal">Minutes</p>
                    </time>
                    <span>:</span>
                    <time>
                        {timeLeft.seconds.toString().padStart(2, "0")}{" "}
                        <p className="text-sm font-normal">Seconds</p>
                    </time>
                </section>

                {/* Button */}
                <footer>
                    <button className="px-8 py-3 bg-black text-white font-semibold cursor-pointer tracking-[4px]">
                        SHOP NOW
                    </button>
                </footer>
            </article>
        </section>
    );
};

export default Deals;
