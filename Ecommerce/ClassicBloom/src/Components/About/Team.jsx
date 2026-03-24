import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamMembers = [
    {
        name: "Sara Malik",
        role: "Product Strategist",
        image: "/about/Team/member1.png",
        socials: [
            { icon: FaTwitter, link: "#" },
            { icon: FaFacebookF, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
        ],
    },
    {
        name: "Adeela Khan",
        role: "Operations Manager",
        image: "/about/Team/member2.png",
        socials: [
            { icon: FaTwitter, link: "#" },
            { icon: FaFacebookF, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
        ],
    },
    {
        name: "Bilal Qureshi",
        role: "Creative Director",
        image: "/about/Team/member3.png",
        socials: [
            { icon: FaTwitter, link: "#" },
            { icon: FaFacebookF, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
        ],
    },
    {
        name: "Mina Raza",
        role: "HR & Culture Lead",
        image: "/about/Team/member4.png",
        socials: [
            { icon: FaTwitter, link: "#" },
            { icon: FaFacebookF, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
        ],
    },
];

const Team = () => {
    return (
        <section
            className="py-10 sectionlayout bg-white text-center"
            aria-labelledby="team-heading"
        >
            
            <header className=" mb-14">
                <h2
                    id="achievements-title"
                    className="text-2xl md:text-4xl uppercase mb-4 leading-snug text-gray-800"
                >
                    Our Team
                </h2>
                <p className="max-w-xl mx-auto text-gray-600 tracking-wide">
                    Mosshead warbonnet queen triggerfish black bass scissor-tail rasbora–great white shark driftfish carpetshark swamp-eel rice eel
                </p>
            </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 place-content-center">
                    {teamMembers.map((member, index) => (
                        <article
                            key={index}
                            className="group relative text-center"
                            itemScope
                            itemType="https://schema.org/Person"
                        >
                            {/* Image container with decorative border */}
                            <figure className="relative flex justify-center items-center">
                                <div className="relative inline-block">
                                    {/* Decorative border */}
                                    <div className="absolute w-full h-full border border-gray-300 -left-5 -top-5"></div>

                                    {/* Image */}
                                    <img
                                        src={member.image}
                                        alt={`Portrait of ${member.name}, ${member.role}`}
                                        className="w-64 h-72 object-cover bg-[var(--primary)]/5 relative z-10"
                                        loading="lazy"
                                        itemProp="image"
                                    />
                                </div>
                            </figure>


                            {/* Name and Role */}
                            <figcaption className="mt-5">
                                <h3
                                    className="text-lg font-semibold text-gray-800"
                                    itemProp="name"
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-sm text-gray-500"
                                    itemProp="jobTitle"
                                >
                                    {member.role}
                                </p>
                            </figcaption>

                            {/* Social Icons */}
                            <nav
                                aria-label={`${member.name}'s social links`}
                                className="flex justify-center mt-4 space-x-4"
                            >
                                {member.socials.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 border rounded-full text-gray-600 hover:bg-[var(--primary)] hover:text-white transition-colors duration-200 hover:border-transparent"
                                            itemProp="sameAs"
                                        >
                                            <Icon />
                                        </a>
                                    );
                                })}
                            </nav>
                        </article>
                    ))}
                </div>
            
        </section>
    );
};

export default Team;
