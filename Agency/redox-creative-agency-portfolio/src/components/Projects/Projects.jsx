import ProjectsTop from "./ProjectsTop"
import { projects } from "../../utils/appData"
import ProjectCard from "./ProjectCard"
import { MyButton } from "../MyButton"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"


const Projects = () => {
  return (
    <section className="w-screen bg-[#f6f6f6] py-26">
      <section className="wrapper">
        <ProjectsTop />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              image={project.image}
              name={project.name}
              link={project.link}
              dark={project.dark}
            />
          ))}
        </div>

        <article className="center-center gap-5 mt-15">
          <span className="hidden md:block flex-1 h-0.5 w-full bg-zinc-950 " />

          <div className="relative">
            <MyButton
              initialColor="bg-zinc-950 text-gray-100"
              flipColor="bg-orange-500"
              className="px-8 py-4   relative self-end "
            >
              <Link to={'/'} className='flex items-center gap-2 relative z-10'>
                Purchase Now <ArrowRight size={20} />
              </Link>
            </MyButton>
            <span className="absolute z-50 -top-8 -right-2 rounded-full bg-[#98f027] text-zinc-800  text-sm   py-2 px-3 text-center">
              Only <br /> <span className="text-zinc-950"><strong>$9</strong></span>
            </span>
          </div>

          <span className="hidden md:block flex-1 h-0.5 w-full bg-zinc-950" />

        </article>
      </section>
    </section>
  )
}

export default Projects