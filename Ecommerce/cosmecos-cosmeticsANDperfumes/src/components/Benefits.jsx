

const benefits = [
  { number: 3, text: "HOME PAGES", shape: "triangle" },
  { number: 22, text: "INNER PAGES", shape: "square" },
  { number: 100, text: "+ ELEMENTS", shape: "circle" },
];

// Small inline decorative floral (very minimal, editable)
const Floral = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 60 C30 45, 50 40, 60 50" strokeOpacity="0.9" />
      <path d="M40 30 C45 20, 55 20, 60 30" strokeOpacity="0.65" />
      <circle cx="18" cy="78" r="1.2" fill="var(--primary)" stroke="none" />
    </g>
  </svg>
);

const Triangle = ({ number, text }) => (
  <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center -rotate-100">
    {/* Triangle outline */}
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Solid outline (like square and circle) */}
      <path
        d="M50 6 L96 94 L4 94 Z"
        stroke="black"
        strokeWidth="1"
        fill="transparent"
        strokeOpacity="0.9"
      />
    </svg>

    {/* Optional floral decoration */}
    <div className="absolute -top-2 left-6 w-20 h-20 opacity-80 pointer-events-none">
      <Floral />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-end text-center rotate-100 ">
      <p className="text-3xl font-stylish md:text-4xl text-[var(--primary)] leading-none">
        <strong>{number}</strong>
      </p>
      <p className="text-[10px] tracking-widest mt-1">{text}</p>
    </div>
  </div>
);



const Square = ({ number, text }) => (
  <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
    {/* primary fill */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -z-10">
      
      <rect x="6" y="6" width="88" height="88" rx="2" fill="url(#sFill)" />
    </svg>

    {/* Border with transparent top-left and bottom-right corners */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      {/* top border - transparent segment on left part */}
      <path d="M20 6 H96" stroke="black" strokeWidth="1" strokeOpacity="0.9" fill="none" />

      {/* right border */}
      <path d="M96 6 V65" stroke="black" strokeWidth="1" strokeOpacity="0.9" fill="none" />

      {/* bottom border - visible left part, transparent right corner */}
      <path d="M85 76 H6" stroke="black" strokeWidth="1" strokeOpacity="0.9" fill="none" />

      {/* left border */}
      <path d="M6 76 V15" stroke="black" strokeWidth="1" strokeOpacity="0.9" fill="none" />
    </svg>

    {/* floral */} 

    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <p className="text-3xl font-stylish md:text-4xl font-bold text-[var(--primary)] leading-none"><strong>{number}</strong></p>
      <p className="text-[10px] tracking-widest mt-1">{text}</p>
    </div>
  </div>
);

const Circle = ({ number, text }) => (
  <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
    {/* primary fill */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -z-10">
       
      <circle cx="50" cy="50" r="44" fill="url(#cFill)" />
    </svg>

    {/* circle border with transparent arc ~30% at top-left */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      {/* transparent arc (approx 30%) */} 

      {/* visible remainder of circle */}
      <path d="M50 6 A44 44 0 1 1 22 22" stroke="black" strokeWidth="1" strokeOpacity="0.9" fill="none" />
    </svg>

    {/* floral */}
    <div className="absolute -right-2 top-6 w-20 h-20 opacity-80 pointer-events-none">
      <Floral />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <p className="text-3xl md:text-4xl font-stylish text-[var(--primary)] leading-none"><strong>{number}</strong></p>
      <p className="text-[10px] tracking-widest mt-1">{text}</p>
    </div>
  </div>
);

const ShapeCard = ({ number, text, shape }) => {
  if (shape === "triangle") return <Triangle number={number} text={text} />;
  if (shape === "square") return <Square number={number} text={text} />;
  return <Circle number={number} text={text} />;
};

const Benefits = () => {
  return (
    <section className="w-screen relative min-h-[100vh] overflow-hidden bg-white">
      
      <img src="/intro-bg2-1.png" alt="intro bg image" className="absolute right-0 top-3 md:top-6 h-[80%] object-contain z-0 pointer-events-none" />
      <div className="absolute bg-[#f19c6411] inset-0"></div>

      <article className="wrapper py-10 z-20 relative">
        <h2 className="font-stylish text-[var(--primary)] text-5xl md:text-9xl italic opacity-80">
          Benefits
        </h2>

        <section className="flex items-center justify-center flex-wrap flex-col md:flex-row gap-2 mt-18">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex-1 flex items-center justify-center">
              <ShapeCard {...b} />
            </div>
          ))}
        </section>
      </article>
    </section>
  );
};

export default Benefits;
