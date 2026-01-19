import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Test = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <main ref={targetRef} className="h-[400vh] bg-gray-400">
      {/* Sticky section stays in view while scrolling */}
      <section className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">

        <motion.div style={{ x }} className="flex w-[400vw]">
          <article className="w-screen h-screen bg-amber-600"></article>
          <article className="w-screen h-screen bg-orange-800"></article>
          <article className="w-screen h-screen bg-yellow-900"></article>
          <article className="w-screen h-screen bg-green-600"></article>
        </motion.div>

      </section>
    </main>
  );
};

export default Test;
