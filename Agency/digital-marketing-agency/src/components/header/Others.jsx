const lightVersionOthers = [
  { name: "Our Group", url: "/" },
  { name: "Group Profile", url: "/" },
  { name: "Company Info", url: "/" },
  { name: "Company Info V.2", url: "/" },
  { name: "Reach Out", url: "/" },
  { name: "Job Openings", url: "/" },
  { name: "Position Info", url: "/" },
  { name: "Help Center", url: "/" },
  { name: "Error Page", url: "/" },
];

const darkVersionOthers = [
  { name: "Our Group", url: "/" },
  { name: "Group Profile", url: "/" },
  { name: "Company Info", url: "/" },
  { name: "Reach Out", url: "/" },
  { name: "Job Openings", url: "/" },
  { name: "Help Center", url: "/" },
];

const Others = () => {
  return (
    <section className="min-w-[450px] max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left">
      {/* Light Version */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Additional Light
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {lightVersionOthers.map((item) => (
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

      {/* Dark Version */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Additional Dark
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {darkVersionOthers.map((item) => (
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

export default Others;