import React from 'react'

const Footer = () => {
    const sections = [
        {
            title: "Links",
            items: ["Home", "Blog", "Shop", "Services"],
        },
        {
            title: "Info",
            items: ["Team", "Our Mission", "Our History", "Contacts"],
        },
        {
            title: "Socials",
            items: [
                { name: "Instagram", link: "https://instagram.com" },
                { name: "Pinterest", link: "https://pinterest.com" },
                { name: "Facebook", link: "https://facebook.com" },
                { name: "YouTube", link: "https://youtube.com" },
            ],
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <div data-aos="fade-up"  className="bg-sectionbg text-gray-50 md:px-20 px-3">
            <div className="flex lg:flex-row flex-col  justify-between gap-20 py-20">
                {/* Newsletter */}
                <div className="lg:w-1/3 w-full">
                    <h2 className="text-xl mb-6 tracking-wider">
                        Sign up for our newsletter to receive special offers, news and great sales notifications.
                    </h2>
                    <div className="flex flex-col sm:flex-row ">
                        <input
                            type="email"
                            name='email'
                            placeholder="Email address"
                            className="px-5 py-3 w-full sm:w-auto flex-1 bg-white/5  text-gray-200 placeholder:text-gray-500 outline-none border border-transparent  focus:border-gray-200 text-sm"
                        />
                        <button className="mt-5 sm:mt-0 w-fit  px-6 py-3 bg-white text-black font-semibold hover:bg-primary hover:text-white transition duration-300">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
               
                <div className=' lg:w-1/2 w-full flex items-center justify-between lg:border-l border-white/10 lg:pl-20'>
                    {/* Render all footer sections */}
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold uppercase mb-5 tracking-widest">{section.title}</h3>
                            <ul className="space-y-2 text-[11px] ">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className=' tracking-widest uppercase hover:text-primary cursor-pointer'>
                                        {typeof item === "string" ? (
                                            item
                                        ) : (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-primary"
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>



            {/* Copyright */}
            <div className="text-center text-sm border-t border-white/10">
                <p className='py-10'>

                    <span className="font-semibold">betacommunes Themes</span> <span className=' text-white/50'>

© {currentYear}. All Rights Reserved.</span> 
                </p>

            </div>
        </div>
    );
};

export default Footer;
