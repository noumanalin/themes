import React from 'react'
import team1 from "../../assets/team-1.avif";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";

const Team = () => {
    const team = [
        {
            id: 1,
            image: team1,
            name: "Emma Carter",
            role: "Lead Designer",
        },
        {
            id: 2,
            image: team2,
            name: "Michael Harris",
            role: "Chief Executive Officer",
        },
        {
            id: 3,
            image: team3,
            name: "Sophia Lee",
            role: "Project Manager",
        },
        {
            id: 4,
            image: team4,
            name: "Daniel Brooks",
            role: "Operations Head",
        },
    ]

    return (
        <section
            className="md:px-20 px-3 space-y-5 flex flex-col items-center md:my-10 py-10"
            aria-labelledby="team-heading"
        >
            <header className="text-center">
                <p className="tracking-[4px] text-secondary text-[12px] font-semibold uppercase">
                    our professionals
                </p>
                <h1
                    id="team-heading"
                    className="text-2xl md:text-4xl text-primary font-semibold my-3"
                >
                    Meet the People Behind Our Success
                </h1>
            </header>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-7 w-full ">
                {team.map((member) => (
                    <li key={member.id} className="mt-5 space-y-5 w-full">
                        <article>
                            <figure>
                                <img
                                    src={member.image}
                                    alt={`Portrait of ${member.name}`}
                                    className="w-full object-cover h-[40vh] md:h-[60vh]"
                                />
                                <figcaption className="text-left mt-3">
                                    <h3 className="text-primary font-bold text-xl">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 font-medium tracking-wide">
                                        {member.role}
                                    </p>
                                </figcaption>
                            </figure>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Team
