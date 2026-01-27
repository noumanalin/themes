

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type, // "spring" is good
      delay,
      duration: duration || 0.8, // slightly longer
      stiffness: 80, // smoother spring
      damping: 20,   // less bounce
      ease: "easeOut",
    },
  },
});




// ------------------------ Wave Animation ---------------------------------------------------------
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const delayedContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
    },
  },
};

export const waveVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};