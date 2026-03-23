import React from 'react'

const Statistics = () => {
    const data = [
        {
            id: 1,
            number: "150+",
            part1: "Active",
            part2: "Clients",
        },
        {
            id: 2,
            number: "40+",
            part1: "Product",
            part2: "Categories",
        },
        {
            id: 3,
            number: "25",
            part1: "Global",
            part2: "Markets",
        },
        {
            id: 4,
            number: "97%",
            part1: "Customer",
            part2: "Satisfaction",
        },
    ]

    return (
        <section className="w-full md:px-20 px-3 md:my-10 pt-10" aria-labelledby="stats-heading">
            <header className="sr-only">
                <h2 id="stats-heading">Business Growth Statistics</h2>
            </header>

            <section className="w-full mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 border-b border-gray-300 md:pb-20 pb-10 justify-items-center">
                    {data.map((item) => (
                        <article
                            key={item.id}
                            className="w-fit flex items-center justify-center text-primary font-semibold gap-3"
                        >
                            <header>
                                <h3 className="text-3xl font-bold">{item.number}</h3>
                            </header>
                            <p className="leading-tight">
                                {item.part1} <br /> {item.part2}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Statistics
