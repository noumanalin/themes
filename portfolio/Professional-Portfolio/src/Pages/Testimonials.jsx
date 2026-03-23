import React from "react";

const Testimonial = () => {
    const testimonial = {
        title: "Mobile App Development",
        description:
            "I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
        name: "Michael - Technical Manager",
        role: "Marketing @ APPLE INC.",
        image:
            "https://randomuser.me/api/portraits/women/2.jpg",
    };

    const avatars = [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        
    ];

    return (
        <section
            className="bg-white py-16 px-3 md:px-10"
            aria-labelledby="testimonial-heading"
        >
            {/* Section Header */}
            <header className="text-center mb-12">
                <h2
                    id="testimonial-heading"
                    className="text-2xl md:text-4xl text-gray-900 font-bold mb-3"
                >
                    What Clients Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover what clients have to say about their experiences working with
                    me. My clients’ satisfaction is my greatest achievement!
                </p>
            </header>

            {/* Testimonial Content */}
            <article
                className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
                itemScope
                itemType="https://schema.org/Review"
            >
                {/* Left Side */}
                <div className="flex-1">
                    <h3
                        className="text-xl text-gray-900 font-semibold mb-4"
                        itemProp="headline"
                    >
                        {testimonial.title}
                    </h3>

                    <blockquote
                        className="text-gray-600 mb-6 leading-relaxed"
                        itemProp="reviewBody"
                    >
                        {testimonial.description}
                    </blockquote>

                    <p
                        className="font-bold text-gray-900"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                    >
                        <span itemProp="name">{testimonial.name}</span>
                    </p>
                    <p className="text-gray-500 mb-6" itemProp="jobTitle">
                        {testimonial.role}
                    </p>

                    {/* Avatars */}
                    <nav aria-label="Client testimonials">
                        <ul className="flex gap-3">
                            {avatars.map((img, i) => (
                                <li key={i}>
                                    <img
                                        src={img}
                                        alt={`Client testimonial avatar ${i + 1}`}
                                        className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-gray-400 transition"
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Right Side */}
                <figure className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.name}, ${testimonial.role}`}
                        className="w-72 h-80 object-cover rounded-lg shadow-md"
                        itemProp="image"
                    />
                    <figcaption className="sr-only">{testimonial.name}</figcaption>
                </figure>
            </article>
        </section>
    );
};

export default Testimonial;
