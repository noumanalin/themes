import { useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";

const CounterAnimation = ({ number = 100, color = "text-black", speed = 2, fs = "text-4xl" }) => {
  const controls = useAnimation();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    controls.start({
      x: number, // target
      transition: { duration: speed, ease: "easeOut" },
    });

    // animate number change
    count.set(0);
    const animation = controls.start({
      x: number,
      transition: { duration: speed, ease: "easeOut" },
    });

    // update count smoothly
    const interval = setInterval(() => {
      count.set(count.get() + (number - count.get()) / 10);
    }, 30);

    setTimeout(() => clearInterval(interval), speed * 1000 + 500);

    return () => clearInterval(interval);
  }, [number, speed, controls, count]);

  return (
    <motion.span
      className={`${color} ${fs} font-bold`}
    >
      {rounded}
    </motion.span>
  );
};

export default CounterAnimation;
