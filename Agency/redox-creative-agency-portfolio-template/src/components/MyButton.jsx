import { motion } from "framer-motion";

export const MyButton = ({ initialColor, flipColor, children, className = "", ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`
        group relative inline-flex items-center justify-center 
        gap-2 rounded-full  font-medium 
        cursor-pointer overflow-hidden
        transition-colors duration-300
        ${initialColor} 
        ${className}
      `}
      {...props}
    >
      {/* background flip effect */}
      <span
        className={`
          absolute inset-0 
          ${flipColor} 
          translate-y-full 
          transition-transform duration-300 ease-in-out 
          group-hover:translate-y-0
        `}
      />

      {/* button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};