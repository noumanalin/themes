import { Link } from "react-router-dom";

const data = [
    { id: 1, title: "01. Natural Skincare", href: "#", imgSrc: "/demo-1.jpg" },
    { id: 2, title: "02. Fragrance Store", href: "#", imgSrc: "/demo-2.jpg" },
    { id: 3, title: "03. Wellness Products", href: "#", imgSrc: "/demo-3.jpg" },
];

const AwesomeHomePages = () => {
    return (
        <section
            id="demo"
            aria-label="Demo Pages Showcase"
            className="wrapper text-center py-20 space-y-6"
        >
            {/* Headings */}
            <h2 className="text-[var(--primary)] font-stylish text-3xl m-0">
                Template Demos
            </h2>
            <h1 className="text-3xl text-[var(--secondary)] uppercase mt-0">
                Multiple Home Page Designs
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {data.map((item) => (
                    <Link
                        key={item.id}
                        to={item.href}
                        className="group relative overflow-hidden "
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 "
                            />
                        </div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-[rgba(0,0,0,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Title */}
                        <h3 className="font-semibold text-[var(--secondary)] text-lg py-4 group-hover:text-black transition-colors duration-300">
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AwesomeHomePages;