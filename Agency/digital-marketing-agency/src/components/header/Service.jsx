const lightVersionService = [
  { name: "Services Overview", url: "/" },
  { name: "Services V.2", url: "/" },
  { name: "Services V.3", url: "/" },
  { name: "Services V.4", url: "/" },
  { name: "Services V.5", url: "/" },
  { name: "Services V.6", url: "/" },
  { name: "Service Details", url: "/" },
];

const darkVersionService = [
  { name: "Services Overview Dark", url: "/" },
  { name: "Services V.2 Dark", url: "/" },
  { name: "Services V.3 Dark", url: "/" },
  { name: "Services V.4 Dark", url: "/" },
  { name: "Services V.5 Dark", url: "/" },
  { name: "Services V.6 Dark", url: "/" },
  { name: "Service Details Dark", url: "/" },
];

const Service = () => {
  return (
    <section className="min-w-[450px] max-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left">
      {/* Light Version */}
      <article>
        <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
          Services Light
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {lightVersionService.map((item) => (
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
          Services Dark
        </h3>
        <hr className="text-gray-400" />
        <ul className="px-4 pt-4 space-y-2">
          {darkVersionService.map((item) => (
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

export default Service;
