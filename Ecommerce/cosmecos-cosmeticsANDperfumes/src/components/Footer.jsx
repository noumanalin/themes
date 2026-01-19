import React from "react";
import AppLink from "./AppLink";

const Footer = () => {
  return (
    <footer className="w-screen relative overflow-hidden min-h-[60vh] bg-[#fffaf8] flex items-center justify-center">
      {/* Decorative absolute images */}
      <img
        src="/footer-absolute-1.png"
        alt=""
        className="absolute -top-1 right-3 w-[25vw] max-w-[350px] opacity-90 pointer-events-none"
      />
      <img
        src="/footer-absolute-2.png"
        alt=""
        className="absolute -bottom-10 -left-10 w-[25vw] max-w-[350px] opacity-90 pointer-events-none"
      />

      {/* Optional subtle floral decoration */}
      <svg
        viewBox="0 0 60 60"
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-10 h-10 opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M30 5 C25 15, 35 25, 28 35 C32 30, 42 25, 30 5 Z"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>

      {/* Main Content */}
      <section className="wrapper py-16 text-center relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-zinc-900 text-xl md:text-2xl font-light leading-snug max-w-3xl">
          Get <span className="font-medium">NatureGlow</span> | Natural Beauty &amp; Fragrances WordPress Template
        </h2>

        {/* Button */}
        <AppLink className="border border-zinc-900 px-6 py-2 text-sm tracking-wider hover:bg-zinc-900 hover:text-white transition-all duration-300">
          GET NATUREGLOW
        </AppLink>
      </section>
    </footer>
  );
};

export default Footer;