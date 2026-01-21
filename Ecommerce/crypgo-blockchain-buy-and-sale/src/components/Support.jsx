import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import supportIcon from '../assets/icons/icon-support.svg';
import communityIcon from '../assets/icons/icon-community.svg';
import academyIcon from '../assets/icons/icon-academy.svg';

const Support = () => {
    const supportItems = [
        {
            icon: supportIcon,
            title: 'Round-the-Clock Assistance',
            description: 'Require assistance? Our support team resolves inquiries promptly.',
        },
        {
            icon: communityIcon,
            title: 'User Network',
            description: 'Participate in discussions within our global user networks',
        },
        {
            icon: academyIcon,
            title: 'Learning Center',
            description: 'Access complimentary educational resources on distributed ledger technology.',
        },
    ];

    return (
        <section className="text-center">
            <motion.article
                variants={fadeIn("up", "spring", 0.2, 1)}
                initial="hidden"
                whileInView="show"
            >
                <p className="text-2xl mb-2 ">Always By <span className="text-tertiary">your side</span></p>
                <span className='w-20 h-1 bg-[var(--color-tertiary)] mx-auto mb-6' />
                <h2 className="text-4xl md:text-5xl font- mb-12">
                    Be among the first to experience our Digi<span className='text-tertiary'>Trade</span>!
                </h2>
            </motion.article>

            <motion.div
                variants={fadeIn("up", "spring", 0.4, 1)}
                initial="hidden"
                whileInView="show"
                className="bg-gray-90 rounded-2xl p-8 shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
                    {supportItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center max-w-xs p-4">

                            <figure className="w-18 h-18 flex items-center justify-center rounded-full mb-5 bg-gray-800">
                                <img src={item.icon} alt={`${item.title} icon`} loading="lazy" className="w-10 h-10 object-contain" />
                            </figure>


                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-accent">{item.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Support;