import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

const ProjectCard = ({ image, name, link, dark, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link to={link}>
        <figure>
          <img src={image} alt={name} className="rounded-md" />
          <figcaption className="text-center my-3 capitalize font-medium text-lg">
            {name}{" "}
            {dark && (
              <span className="text-[12px] uppercase px-1 rounded-lg text-white bg-zinc-950">
                Dark
              </span>
            )}
          </figcaption>
        </figure>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
