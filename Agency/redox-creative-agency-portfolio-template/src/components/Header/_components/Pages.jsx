import { Link } from "react-router-dom";

const lightData = [
  { name: "Core Portfolio", link: "/portfolio/core" },
  { name: "Portfolio ST. Classic", link: "/portfolio/classic" },
  { name: "Portfolio ST. Minimal", link: "/portfolio/minimal" },
  { name: "Portfolio ST. Modern", link: "/portfolio/modern" },
  { name: "Portfolio ST. Interactive", link: "/portfolio/interactive" },
  { name: "Portfolio ST. Metro", link: "/portfolio/metro" },
  { name: "Portfolio Details", link: "/portfolio/details" },
  { name: "Portfolio ST. Classic", link: "/portfolio/classic" },
  { name: "Portfolio ST. Minimal", link: "/portfolio/minimal" },
  { name: "Portfolio ST. Modern", link: "/portfolio/modern" },
  { name: "Portfolio ST. Interactive", link: "/portfolio/interactive" },
];

const darkData = [
  { name: "Core Portfolio", link: "/portfolio-dark/core" },
  { name: "Portfolio ST. Classic", link: "/portfolio-dark/classic" },
  { name: "Portfolio ST. Minimal", link: "/portfolio-dark/minimal" },
  { name: "Portfolio ST. Modern", link: "/portfolio-dark/modern" },
  { name: "Portfolio ST. Interactive", link: "/portfolio-dark/interactive" },
  { name: "Portfolio ST. Metro", link: "/portfolio-dark/metro" },
  { name: "Portfolio Details", link: "/portfolio-dark/details" },
  { name: "Portfolio ST. Classic", link: "/portfolio-dark/classic" },
  { name: "Portfolio ST. Minimal", link: "/portfolio-dark/minimal" },
  { name: "Portfolio ST. Modern", link: "/portfolio-dark/modern" },
];

const Column = ({ title, items }) => (
  <div className="space-y-2">
    <h3 className="text-sm font-semibold text-white mb-2 border-b border-neutral-700 pb-1">
      {title}
    </h3>
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            to={item.link}
            className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"

          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);



const Pages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:min-w-[400px]">
      <Column title="Light" items={lightData} />
      <Column title="Dark" items={darkData} />
    </div>
  )
}

export default Pages