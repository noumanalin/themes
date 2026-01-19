const lightVersionInner = [
  { name: "Projects Overview", url: "/" },
  { name: "Projects Grid V.2", url: "/" },
  { name: "Projects Grid V.3", url: "/" },
  { name: "Projects Grid V.4", url: "/" },
  { name: "Projects Grid V.5", url: "/" },
  { name: "Projects Grid V.6", url: "/" },
  { name: "Project Details", url: "/" },
];

const darkVersionInner = [
  { name: "Projects Overview Dark", url: "/" },
  { name: "Projects Grid V.2 Dark", url: "/" },
  { name: "Projects Grid V.3 Dark", url: "/" },
  { name: "Projects Grid V.4 Dark", url: "/" },
  { name: "Projects Grid V.5 Dark", url: "/" },
  { name: "Projects Grid V.6 Dark", url: "/" },
  { name: "Project Details Dark", url: "/" },
];

const Portfolio = () => {
  return (
    <section className="min-w-[450px] max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left">
      {/* Light Version Inner */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Portfolio Light
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {lightVersionInner.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </article>

      {/* Dark Version Inner */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Portfolio Dark
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {darkVersionInner.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                className="text-sm text-gray-600 font-semibold hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Portfolio;
