import React from "react";

const homeLight = [
  { name: "Online Promotion", url: "/" },
  { name: "Creative Workspace", url: "/" },
  { name: "Web Firm", url: "/" },
  { name: "Innovative Firm", url: "/" },
  { name: "Contemporary Firm", url: "/" },
  { name: "New Venture Firm", url: "/" },
  { name: "Individual Showcase", url: "/" },
];

const homeDark = [
  { name: "Online Promotion", url: "/" },
  { name: "Creative Workspace", url: "/" },
  { name: "Web Firm", url: "/" },
  { name: "Innovative Firm", url: "/" },
  { name: "Contemporary Firm", url: "/" },
  { name: "New Venture Firm", url: "/" },
  { name: "Individual Showcase", url: "/" },
];

const portfolioLight = [
  { name: "Project Display", url: "/" },
  { name: "Display Rotator", url: "/" },
  { name: "Dynamic Connection", url: "/" },
  { name: "Project Grid Layout", url: "/" },
  { name: "Upright Layout", url: "/" },
  { name: "Dynamic Photo Slider", url: "/" },
  { name: "Display Scroll Effect", url: "/" },
  { name: "Brand Display", url: "/" },
  { name: "Dynamic Reveal Display", url: "/" },
  { name: "Display Slider", url: "/" },
];

const portfolioDark = [
  { name: "Project Display", url: "/" },
  { name: "Display Rotator", url: "/" },
  { name: "Dynamic Connection", url: "/" },
  { name: "Project Grid Layout", url: "/" },
  { name: "Upright Layout", url: "/" },
  { name: "Dynamic Photo Slider", url: "/" },
  { name: "Display Scroll Effect", url: "/" },
  { name: "Brand Display", url: "/" },
];

const Demos = () => (
  <section className="min-w-[786px] max-w-[1300px] bg-white mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l divide-gray-400 divide-x divide-y md:divide-y-0 text-left ">
    {/* Home Light */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Main Light
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {homeLight.map((item) => (
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

    {/* Home Dark */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Main Dark
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {homeDark.map((item) => (
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

    {/* Portfolio Light */}
    <article>
      <h3 className="px-4 pt-4 text-md  font-bold uppercase mb-4 text-black">
        Projects Light
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {portfolioLight.map((item) => (
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

    {/* Portfolio Dark */}
    <article>
      <h3 className="px-4 pt-4 text-md font-bold uppercase mb-4 text-black">
        Projects Dark
      </h3>
      <hr className="text-gray-400" />
      <ul className="px-4 pt-4 space-y-2">
        {portfolioDark.map((item) => (
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

export default Demos;