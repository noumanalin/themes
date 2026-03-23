import React from 'react'

const Statistics = () => {
    const data = [
        {
            id: 1,
            title: "15+",
            desc: "Successful Projects",
        },
        {
            id: 2,
            title: "8K+",
            desc: "Satisfied Travelers",
        },
        {
            id: 3,
            title: "4.9/5",
            desc: "Customer Feedback Score",
        },
    ]

    return (
        <section
            data-aos="zoom-out"
            className="px-3 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 mb-20 gap-10"
        >
            {data.map((stat) => (
                <article
                    key={stat.id}
                    className="bg-gray-100 rounded-4xl py-10 flex flex-col items-center justify-center gap-5 shadow-xl"
                >
                    <h2 className="text-5xl text-secondary/80 font-semibold">
                        {stat.title}
                    </h2>
                    <h3 className="text-lg font-medium">{stat.desc}</h3>
                </article>
            ))}
        </section>
    )
}

export default Statistics
