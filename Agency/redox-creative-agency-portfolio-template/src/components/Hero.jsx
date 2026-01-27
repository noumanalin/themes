import { Link } from "react-router-dom";
import CounterAnimation from "../utils/CounterAnimation"
import { MyButton } from "./MyButton";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    number: 50, suffix: "+", label: <p>Modern design <br className="hidden md:block" /> components</p>,
  },
  {
    number: 30, suffix: "+", label: <p>Pre-built page <br className="hidden md:block" /> layouts</p>,
  },
  {
    number: null, suffix: "Responsive", label: <p>Fully optimized for <br className="hidden md:block" /> all devices</p>,
  },
  {
    number: 100, suffix: "%", label: <p>Customizable and <br className="hidden md:block" /> flexible</p>,
  },
];

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="bg-zinc-950 text-gray-100 min-h-screen">
      <div className="wrapper text-center pt-22">

        <article>
          <h1 className="text-5xl md:text-8xl">
            <strong>
              Create stunning websites <br />
              with modern tools and <br />
              <span className="playfair">templates</span>
            </strong>
          </h1>

          <section className="center-center flex-wrap gap-4 my-20">
            <MyButton initialColor="bg-orange-500 text-gray-100" flipColor="bg-white" className='px-8 py-6 hover:text-gray-900'>
              <Link to={'/'} className='center-center gap-2'>Get Started <ArrowRight size={20} /></Link>
            </MyButton>
            <p className="text-zinc-300">
              Professional quality designs, <br />
              ready to customize and deploy.
            </p>
          </section>
        </article>

        {/* Stats */}
        <article className="md:max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-8">
          {stats.map((stat, index) => (
            <>
              <div key={index} className="relative pt-3 text-left border-t border-gray-700 ">
                <span className="text-2xl">
                  {stat.number && <CounterAnimation number={stat.number} color="text-gray-100" speed={2} fs="text-2xl" />}
                  {stat.suffix}
                </span> <br />
                <p className="text-md text-gray-300 mt-1">{stat.label}</p>

                {/* Horizontal Divider Line */}
                {index > 0 && (
                  <div className="hidden md:block absolute -left-4 top-0 h-full w-px bg-gray-700" />
                )}
              </div>
            </>
          ))}
        </article>

      </div>
    </section>
  )
}

export default Hero