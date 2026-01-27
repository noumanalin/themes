import { motion } from "framer-motion";
import CounterAnimation from "../../utils/CounterAnimation";
import {
  containerVariants,
  delayedContainerVariants,
  waveVariants,
  fadeInVariants,
} from "../../utils/motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.2,
    },
  },
};

const ProjectsTop = () => {
  const words = ["Start", "your", "path"];
  const normalText = "with flexible ";
  const specialText = "layouts."; // Moon Dance / Playfair font

  const features = [
    { title: "Easy to Customize" },
    { title: "Light & Dark Modes" },
    { title: "Dedicated Support" },
  ];

  return (
    <article className="text-center">
      {/* First H2: Wave per WORD */}
      <motion.h2
        className="flex flex-wrap justify-center gap-2 text-3xl md:text-7xl font-semibold text-gray-900 mb-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={waveVariants}>
            {word}
          </motion.span>
        ))}
        <motion.span variants={waveVariants} className="flex items-center">
          <CounterAnimation
            number={50}
            color="text-gray-900"
            speed={2}
            fs="text-3xl md:text-7xl"
          />
          +
        </motion.span>
      </motion.h2>

      {/* Second H2 */}
      <motion.h2
        className="flex flex-wrap justify-center gap-1 text-3xl md:text-7xl font-bold text-gray-900 mb-10"
        variants={delayedContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Normal text */}
        {normalText.split("").map((char, i) => (
          <motion.span key={`normal-${i}`} variants={waveVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        {/* Special styled text */}
        {specialText.split("").map((char, i) => (
          <motion.span
            key={`special-${i}`}
            variants={waveVariants}
            className="playfair"
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-600"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        Curated Design Library
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.3 }}
      >
        Explore a carefully crafted collection of ready-made layouts.
        <br className="hidden sm:block" />
        Each design is fully adaptable—mix and match sections to build
        a unique interface with ease.
      </motion.p>

      {/* Features */}
      <motion.div
        className="flex flex-wrap justify-center gap-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="px-4 py-1 rounded-full border-[1px] border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[180px]"
          >
            <h4 className="font-medium text-gray-800 text-center">
              {feature.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </article>
  );
};

export default ProjectsTop;
