
import rest from "../assets/resturant.avif";
import fitness from "../assets/fitness.webp";
import travel from "../assets/travel.avif";
import eshop from "../assets/eshop.png";

const projects = [
    {
        title: "Restaurant Discovery App",
        description:
            "A mobile application designed to help users find, explore, and review local restaurants with ease.",
        image: rest, // replace with local downloaded file
        link: "#",
        alt: "Mobile app interface for restaurant discovery",
    },
    {
        title: "Fitness Campaign Landing Page",
        description:
            "A promotional landing page built for a fitness brand’s summer campaign, featuring lead forms and responsive design.",
        image: fitness, // replace with local downloaded file
        link: "#",
        alt: "Landing page preview for a fitness campaign",
    },
    {
        title: "Travel Companion Mobile App",
        description:
            "A mobile app prototype providing location-based recommendations for travelers, with a sleek and intuitive UI.",
        image: travel, // replace with local downloaded file
        link: "#",
        alt: "Travel mobile app screen designs",
    },
    {
        title: "E-commerce Gadget Store",
        description:
            "An e-commerce website developed for a gadget store, featuring product catalog, cart integration, and secure checkout.",
        image: eshop, // replace with local downloaded file
        link: "#",
        alt: "Modern e-commerce website for electronic gadgets",
    },
    
    {
        title: "Restaurant Discovery App",
        description:
            "A mobile application designed to help users find, explore, and review local restaurants with ease.",
        image: rest, // replace with local downloaded file
        link: "#",
        alt: "Mobile app interface for restaurant discovery",
    },
    {
        title: "Fitness Campaign Landing Page",
        description:
            "A promotional landing page built for a fitness brand’s summer campaign, featuring lead forms and responsive design.",
        image: fitness, // replace with local downloaded file
        link: "#",
        alt: "Landing page preview for a fitness campaign",
    },
    {
        title: "Travel Companion Mobile App",
        description:
            "A mobile app prototype providing location-based recommendations for travelers, with a sleek and intuitive UI.",
        image: travel, // replace with local downloaded file
        link: "#",
        alt: "Travel mobile app screen designs",
    },
    {
        title: "E-commerce Gadget Store",
        description:
            "An e-commerce website developed for a gadget store, featuring product catalog, cart integration, and secure checkout.",
        image: eshop, // replace with local downloaded file
        link: "#",
        alt: "Modern e-commerce website for electronic gadgets",
    },
    
];

const Projects = () => {
    return (
        <section
            className="px-3 md:px-10 py-12 flex flex-col items-center justify-center"
            aria-labelledby="projects-title"
        >
            <header className="text-center mb-12 max-w-3xl">
                <h2
                    id="projects-title"
                    className="text-2xl md:text-4xl font-bold mb-4 text-gray-800"
                >
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-600">
                    Explore a selection of my recent work, including mobile apps, landing
                    pages, and e-commerce solutions. Each project highlights my focus on
                    functionality, performance, and user-centered design.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {projects.map((project, idx) => (
                    <article
                        key={idx}
                        className="bg-white overflow-hidden flex flex-col rounded-lg shadow hover:shadow-lg transition"
                    >
                        <figure>
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="h-48 w-full object-cover"
                            />
                            <figcaption className="sr-only">{project.title}</figcaption>
                        </figure>
                        <div className="py-5 px-4 flex-1 flex flex-col">
                            <h3 className="font-bold text-xl mb-2 text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto bg-primary/80 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-primary/90 transition w-fit text-center"
                            >
                                View Project
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
