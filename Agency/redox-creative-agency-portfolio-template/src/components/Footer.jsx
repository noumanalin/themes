import { Link } from "react-router-dom";
import { MyButton } from "./MyButton";
import { ArrowRight } from "lucide-react";
import icon1 from "../assets/footer/icon-1.svg";
import icon2 from "../assets/footer/icon-2.svg";
import icon3 from "../assets/footer/icon-3.svg";
import icon4 from "../assets/footer/icon-4.svg";

const data = [
  { text: <p>Trusted <br /> Creator</p>, icon: icon1 },
  { text: <p>Featured <br /> Collection</p>, icon: icon2 },
  { text: <p>Top-Rated <br /> Solutions</p>, icon: icon3 },
  { text: <p>Weekly <br /> Spotlight</p>, icon: icon4 },
];

const Footer = () => {
  return (
    <footer
      aria-label="Footer"
      className="w-screen bg-[#f6f6f6] border-t-[1px] border-gray-300"
    >
      {/* Top Section */}
      <article className="wrapper text-zinc-950 py-12 md:py-16">
        <div className="flex flex-col w-full">
          <h1 className="text-7xl md:text-[13rem] font-bold uppercase tracking-tighter leading-[0.75] w-full">
            VORTEX DIGITAL
          </h1>

          <div className="flex flex-wrap">
            <h1 className="text-7xl md:text-[13rem] font-bold uppercase tracking-tighter leading-[0.75]">
              SOLUTIONS
            </h1>

            <div className="relative">
              <MyButton
                initialColor="bg-zinc-950 text-gray-100"
                flipColor="bg-orange-500"
                className="px-8 py-5 md:py-15 md:px-26 mt-6 md:mt-0 relative self-end md:self-center"
              >
                <Link
                  to={"/"}
                  className="flex items-center gap-2 relative z-10"
                >
                  Explore Package <ArrowRight size={20} />
                </Link>
              </MyButton>

              <span className="absolute z-50 md:-top-6 right-4 rounded-full bg-[#98f027] text-zinc-800 md:text-3xl font-medium px-2 md:px-4 md:p-3 text-center">
                From <br />
                <span className="text-zinc-950">
                  <strong>$19</strong>
                </span>
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Bottom Section */}
      <section className="w-screen bg-zinc-950 text-white py-4 md:py-6">
        <article className="wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[800px] mx-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="center-center gap-2 text-left p-2 relative"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 object-contain"
                />

                <div className="text-xs md:text-sm font-medium leading-tight">
                  {item.text}
                </div>

                {index > 0 && (
                  <div className="absolute h-full w-px left-0 top-1/2 -translate-y-1/2 bg-white/30 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
