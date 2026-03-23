import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { TbStack } from "react-icons/tb";

const skillsDetails = [
    {
        title: "Frontend Development",
        icon: BiCodeAlt,
        description:
            "I build responsive, user-friendly interfaces that combine clean design with smooth functionality. From layout to interactivity, I ensure websites deliver an engaging experience on every device.",
    },
    {
        title: "Mobile Applications",
        icon: MdOutlineMobileFriendly,
        description:
            "I design and develop mobile apps optimized for both iOS and Android platforms. My focus is on performance, usability, and consistency to create apps people love to use.",
    },
    {
        title: "Tech Stack Expertise",
        icon: TbStack,
        description:
            "Proficient in modern web technologies such as HTML5, CSS3, JavaScript, and frameworks like React and React Native. I adapt the right tools to match the needs of each project.",
    },
];

const Skills = () => {
    return (
        <section
            className="py-16 md:px-10 px-3 bg-white"
            aria-labelledby="skills-title"
        >
            <header className="text-center">
                <h5 className="text-lg font-semibold text-black/80 mb-2">
                    Professional Skills
                </h5>
                <h2
                    id="skills-title"
                    className="text-2xl md:text-4xl font-bold mb-4 text-gray-800"
                >
                    Areas of Expertise
                </h2>
                <p className="text-gray-500 text-xl mb-12">
                    I combine technical knowledge with creativity to deliver impactful
                    digital solutions. Explore my core areas of expertise below.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                {skillsDetails.map((skill, idx) => (
                    <article
                        key={idx}
                        className="flex flex-col items-center text-center px-10"
                    >
                        <div className="bg-primary/80 text-white rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                            <skill.icon className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black/70">
                            {skill.title}
                        </h3>
                        <p className="text-gray-500 text-base">{skill.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Skills;
