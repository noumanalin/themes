import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/framer-motion";

const JournalCard = ({
  image,
  date = "December 20, 2023",
  text,
  url = "/",
}) => {
  return (
    <motion.article
     variants={fadeIn("left", "tween", 0.4, 2)}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.3 }}
     className="group flex-1 flex-bc flex-col md:flex-row relative">
      {/* Image */}
      <figure className="relative w-full md:w-[60%] overflow-hidden h-64 md:h-[450px]">
        <img
          src={image}
          alt="journal card"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:-translate-x-2"
        />
      </figure>

      {/* Content */}
      <section className="w-full md:w-[370px] bg-dark p-6 md:absolute md:bottom-0 md:right-0 z-50">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
            <Link to={url} className="uppercase tracking-wider text-grat relative after-line">
              UI Design
            </Link>
            <p>{date}</p>
          </div>
          <h2 className="text-lg md:text-xl font-semibold leading-snug mb-15 mt-10 text-light">
            {text}
          </h2>
        </div>

        <div className="mt-auto">
          <hr className="border-t border-gray-700 mb-4" />
          <Link
            to={url}
            className=" text-sm font-medium text-gray relative underline-css"
          >
            <span className="flex items-center">
              Read More
            <ArrowUpRight className="ml-1 w-5 h-5" />
            </span>
          </Link>
        </div>
      </section>
    </motion.article>
  );
};

export default JournalCard;
