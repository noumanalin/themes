import { motion } from "framer-motion";
import { textVariants } from "../../utils/framer-motion";

const AnimatedText = ({ children, className }) => {
  return (
    <motion.span
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedText;