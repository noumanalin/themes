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
      type, // "spring" or "tween"
      delay,
      duration: duration || 0.8,
      stiffness: 80,
      damping: 20,
      ease: "easeOut",
    },
  },
});

export const fadeInLine = (direction, duration = 1) => ({
  hidden: {
    x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});


export const fadeBlock = (direction, duration = 1) => ({
  hidden: {
    y: direction === "up" ? -250 : direction === "down" ? 250 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
});



// Examples of usage:

{/* <motion.div
  variants={fadeIn("left", "spring", 0.2, 1)}
  initial="hidden"
  whileInView="show"
>

<motion.div
  variants={fadeInLine("right", 1)}
  initial="hidden"
  whileInView="show"
>


<motion.div
  variants={fadeBlock("down", 1)}
  initial="hidden"
  whileInView="show"
>
*/}