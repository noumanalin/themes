import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

import timeLine from "../assets/img-timeline.png"
import planningIcon from "../assets/icons/icon-planning.svg"
import prototypeIcon from "../assets/icons/icon-prototype.svg"
import refinementIcon from "../assets/icons/icon-refinement.svg"
import supportIcon from "../assets/icons/icon-support.svg"

// Data arrays
const leftSection = [
  {
    title: "Initial Analysis",
    text: (
      <p>
        Outline the project's <br className="hidden md:block" />
        requirements and <br className="hidden md:block" /> framework
      </p>
    ),
    icon: planningIcon,
  },
  {
    title: "Pilot Version",
    text: (
      <p>
        Create a functional <br className="hidden md:block" />
        pilot to evaluate your <br className="hidden md:block" /> concept
      </p>
    ),
    icon: prototypeIcon,
  },
]

const rightSection = [
  {
    title: "Enhancement",
    text: (
      <p>
        Polish and optimize <br className="hidden md:block" />
        your application
      </p>
    ),
    icon: refinementIcon,
  },
  {
    title: "Maintenance",
    text: (
      <p>
        Launch the solution <br className="hidden md:block" />
        and provide ongoing <br className="hidden md:block" /> assistance
      </p>
    ),
    icon: supportIcon,
  },
]

// Zoom-in animation
const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
}

const Development = () => {
  return (
    <section aria-level="development" id="development" className="my-28">
      {/* Heading */}
      <motion.article
        variants={fadeIn("down", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-3xl">
          <span className="text-accent">Project</span>{" "}
          <span className="text-tertiary">phases</span>
        </h1>
        <h3 className="text-5xl mt-5">
          We can join at any stage or guide you through the{" "}
          <br className="hidden md:block" />
          complete development journey.
        </h3>
      </motion.article>

      {/* Timeline Section */}
      <motion.article
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full flex flex-col gap-12 md:flex-row items-center justify-between my-16 relative"
      >
        {/* Background only md+ */}
        <div
          className="hidden md:flex absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${timeLine})` }}
        ></div>

        {/* Left Section */}
        <div className="relative z-10 h-auto md:h-screen w-full md:max-w-[400px] flex flex-col items-start md:items-center justify-evenly gap-8">
          {leftSection.map((data, index) => (
            <div key={index} className="flex flex-row-reverse md:flex-row items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">{data.title}</h2>
                {data.text}
              </div>
              <figure className="w-18 h-18 flex items-center justify-center rounded-full bg-gray-800">
                <img src={data.icon} alt={`${data.title} icon`} loading="lazy" className="w-10 h-10 object-contain" />
              </figure>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="relative z-10 h-auto md:h-screen w-full md:max-w-[400px] flex flex-col items-start md:items-center justify-evenly gap-8">
          {rightSection.map((data, index) => (
            <div key={index} className="flex items-center gap-4">
              <figure className="w-18 h-18 flex items-center justify-center rounded-full bg-gray-800">
                <img src={data.icon} alt={`${data.title} icon`} loading="lazy" className="w-10 h-10 object-contain" />
              </figure>
              <div>
                <h2 className="text-xl font-semibold">{data.title}</h2>
                {data.text}
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </section>
  )
}

export default Development