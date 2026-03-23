import React from "react";
import C1 from "../../assets/client-1.png";
import C2 from "../../assets/client-2.png";
import C3 from "../../assets/client-3.png";
import C4 from "../../assets/client-4.png";
import C5 from "../../assets/client-5.png";
import C6 from "../../assets/client-6.png";
import C7 from "../../assets/client-7.png";
import C8 from "../../assets/client-8.png";

const Partner = () => {
    const team = [
        { id: 1, image: C1, link: "#" },
        { id: 2, image: C2, link: "#" },
        { id: 3, image: C3, link: "#" },
        { id: 4, image: C4, link: "#" },
        { id: 5, image: C5, link: "#" },
        { id: 6, image: C6, link: "#" },
        { id: 7, image: C7, link: "#" },
        { id: 8, image: C8, link: "#" },
    ];

    return (
        <section className="md:px-20 px-3 space-y-5 flex flex-col items-center md:mt-10 md:pt-10 w-full">
            <p className="tracking-[4px] text-secondary text-[12px] font-semibold uppercase">
                partner
            </p>

            <h1 className="text-2xl md:text-4xl text-primary font-semibold">
                Happy Clients
            </h1>

            <ul className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-10 justify-items-center">
                {team.map((client) => (
                    <li key={client.id} className="mt-5">
                        <a href={client.link}>
                            <img
                                src={client.image}
                                alt={`Client ${client.id}`}
                                className="cursor-pointer"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Partner;
