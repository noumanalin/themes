import { motion } from "framer-motion";
import CounterAnimation from "../../utils/CounterAnimation";
import {
  containerVariants,
  delayedContainerVariants,
  waveVariants,
  fadeInVariants,
} from "../../utils/motion";

const PremiumTopSection = () => {
  const words = ["80+", "Advanced"];
  const charText = "components provided";

  return (
    <article className="max-w-4xl mx-auto text-center">
      {/* Heading – first line (wave per WORD) */}
      <motion.h2
        className="flex flex-wrap justify-center gap-2 text-3xl md:text-7xl font-semibold text-gray-100"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={waveVariants}>
            {word === "80+" ? (
              <span className="flex items-center">
                <CounterAnimation
                  number={80}
                  color="text-gray-100"
                  speed={3}
                  fs="text-3xl md:text-7xl"
                />
                +
              </span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </motion.h2>

      {/* Second line (wave per CHARACTER) */}
      <motion.h2
        className="flex flex-wrap justify-center gap-1 text-3xl md:text-7xl font-bold text-gray-100 mb-5"
        variants={delayedContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {charText.split("").map((char, i) => {
          // Apply .moon-dance class only for "components"
          const isStyled =
            i < "components".length; // first word only

          return (
            <motion.span
              key={i}
              variants={waveVariants}
              className={`inline-block ${isStyled ? "moon-dance" : ""}`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.3 }}
      >
        Access a thoughtfully assembled set of practical building blocks
        designed to help you grow engagement, increase conversions, and
        streamline development.
        <br />
        Fewer external dependencies are needed to achieve professional results.
      </motion.p>
    </article>
  );
};

export default PremiumTopSection;
