import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import bitcoin from '../assets/icon-bitcoin-circle.svg';
import ethereum from '../assets/icon-ethereum.svg';
import litecoin from '../assets/icon-litecoin.svg';
import dogecoin from '../assets/icon-dogecoin.svg';

const MySlider = () => {
    const cryptoData = [
        {
            icon: bitcoin,
            name: 'Bitcoin',
            symbol: 'BTC/USD',
            price: '$93,291.24',
            change: '($94,040.99)',
            percentage: '-0.9%',
            isNegative: true,
        },
        {
            icon: ethereum,
            name: 'Ethereum',
            symbol: 'ETH/USD',
            price: '$3,128.84',
            change: '($4,878.26)',
            percentage: '-35.9%',
            isNegative: true,
        },
        {
            icon: litecoin,
            name: 'Litecoin',
            symbol: 'LTC/USD',
            price: '$86.11',
            change: '($413.26)',
            percentage: '-79.1%',
            isNegative: true,
        },
        {
            icon: dogecoin,
            name: 'Dogecoin',
            symbol: 'DOGE/USD',
            price: '$0.07',
            change: '($0.05)',
            percentage: '+40.0%',
            isNegative: false,
        },
    ];

    const Card = ({ data }) => (
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-start space-y-4 text-white">
            <div className="flex items-center space-x-2">
                <img src={data.icon} alt={`${data.name} icon`} className="w-8 h-8 rounded-full" />
                <div>
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <p className="text-sm text-gray-400">{data.symbol}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-xl font-bold">{data.price}</span>
                <span className={`text-sm ${data.isNegative ? 'text-red-500' : 'text-green-500'}`}>
                    {data.change} ({data.percentage})
                </span>
            </div>
        </div>
    );

    // Function to create a repeating array for the slider's infinite loop
    const slides = [...cryptoData, ...cryptoData, ...cryptoData];

    return (
        <motion.section
            variants={fadeIn("up", "spring", 0.2, 1)}
            initial="hidden"
            whileInView="show">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                spaceBetween={20}
            >
                {slides.map((crypto, index) => (
                    <SwiperSlide key={index}>
                        <Card data={crypto} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.section>
    );
};

export default MySlider;
