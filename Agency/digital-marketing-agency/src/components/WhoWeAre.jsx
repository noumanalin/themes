import bgWho from '../assets/who-baner.jpg';
import { motion } from 'framer-motion';
import MyButton from './my-button/MyButton';
import { ArrowUpRight } from 'lucide-react';
import { fadeIn, textVariants } from '../utils/framer-motion';

const WhoWeAre = () => {
  return (
    <section className="w-full bg-dark relative overflow-hidden">
      <article className="container-sm flex-bc flex-col md:flex-row gap-7 min-h-[900px] py-10">

        {/* media */}
        <motion.div
          initial={{ scaleX: 0.2 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'linear' }}
          viewport={{ once: true, amount: 0.3 }}
          className=" w-full md:w-[45%] h-[650px] bg-contain bg-center bg-fixed bg-no-repeat py-4"
          style={{ backgroundImage: `url(${bgWho})` }}
        />

        {/* content */}
        <div className="relative">
          {/* vertical line */}
          <span className="hidden md:block min-h-[900px] w-[1px] absolute left-28 -top-52 z-0 bg-gray-400" />

          <div className="text-light z-50 bg-dark relative py-3">
            <h4 className="text-[18px]">WHO WE ARE</h4>

            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-6xl font-bold uppercase my-2"
            >
              <span>We are leading</span> <br />
              <span>digital marketing</span> <br />
              <span>agency.</span>
            </motion.h2>
          </div>

          <div className="md:ml-32 text-gray max-w-[400px] relative right-0 z-50">
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              We’re a team of strategic digital marketing experts working globally with the largest brands.
              We believe that progress only happens when you refuse to play it safe. We combine ideas, behaviors,
              and insights with design and technology to produce brand experiences that customers love.
            </motion.p>

            <MyButton size="200px" url="/">
              <span className="relative z-10 text-md text-light mix-blend-difference pointer-events-none center-center gap-2 px-3">
                <span>Explore Us</span>
                <ArrowUpRight />
              </span>
            </MyButton>
          </div>
        </div>
      </article>

      {/* Circle Decoration */}
      <span className="absolute right-[-150px] top-[45%] w-[350px] h-[350px] border border-gray-600 rounded-full block z-0">
        <span className="w-[120px] h-[1px] absolute -left-8 bottom-17 -rotate-45 bg-gray-600" />
      </span>
    </section>
  );
};

export default WhoWeAre;
