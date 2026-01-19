import { motion } from 'framer-motion';
import { fadeIn, textVariants } from '../../utils/framer-motion';
import image1 from '../../assets/journal-1.jpg';
import image2 from '../../assets/journal-2.jpg';
import JournalCard from './JournalCard';

const Journal = () => {
  return (
    <section className="w-full bg-accent">
      <div className="container-sm">
        {/* vertical Line section */}
        <article className="relative py-15 md:pt-32 max-w-[600px] mx-auto">
          {/* vertical line */}
          <span className="hidden md:block h-full min-h-[300px] w-[1px] absolute left-28 -top-2 z-0 bg-zinc-700"></span>

          <div className="text-light z-50 bg-accent relative py-3">
            <h4 className="text-[18px]">Latest Insights</h4>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-6xl font-bold uppercase my-2"
            >
              <span>Read Updated</span> <br />
              <span>Journal</span>
            </motion.h2>
          </div>

          <div className="md:ml-32 text-gray max-w-[400px] relative right-0 z-50">
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              Explore stories, ideas, and updates from our team. 
              We share knowledge to inspire creativity and 
              support meaningful growth for individuals and businesses.
            </motion.p>
          </div>
        </article>

        {/* Cards Section */}
        <section className="w-full flex-bc flex-col md:flex-row gap-6 mt-10">
          <JournalCard
            image={image1}
            date="January 15, 2024"
            text="5 ways to lead a creative team with confidence"
            url="/"
          />
          <JournalCard
            image={image2}
            date="February 02, 2024"
            text="Turning bold ideas into powerful startup strategies"
            url="/"
          />
        </section>
      </div>
    </section>
  );
};

export default Journal;
