import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BigTitle from "./BigTitle";
import ProjectCTA from "./ProjectCTA";
import ProjectAnalytics from "./ProjectAnalytics";
import WhyChooseUs from "./WhyChooseUs";



const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <main ref={targetRef} className=" h-[400vh] bg-black text-white">
      <section className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div style={{ x }} className="flex w-[400vw]">
          <BigTitle />
          <WhyChooseUs/>
          <ProjectAnalytics />
          <ProjectCTA />
        </motion.div>
      </section>
    </main>
  );
};

export default HorizontalScroll;
