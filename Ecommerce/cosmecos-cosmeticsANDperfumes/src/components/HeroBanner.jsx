import bgImage from "/hero-banner.png";

const HeroBanner = () => {
  return (
    <section
      id="heroBanner"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-[var(--primary)] overflow-hidden mt-17"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Decorative Text */}
      <h2 className="absolute top-12 left-6 text-[80px] sm:text-[100px] lg:text-[140px] text-[var(--primary)] font-stylish select-none">
        Beauty
      </h2>
      <h2 className="absolute bottom-10 right-6 text-[80px] sm:text-[100px] lg:text-[140px] text-[var(--primary)] font-stylish select-none">
        Style
      </h2>

      {/* Hero Content */}
     <div className="relative z-10 px-4 wrapper">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
          NatureGlow | Natural Beauty <br className="hidden sm:block" /> &
          Fragrances WordPress Template
        </h1>

        <button className="mt-10 border border-gray-800 px-6 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
          VIEW DEMONSTRATIONS
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
