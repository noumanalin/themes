
import MyButton from '../my-button/MyButton'
import { ArrowRight } from 'lucide-react'

const ProjectCTA = () => {
  return (
    <section className='w-screen h-screen center-center bg-accent'>
        <article className='text-center'>
            <h3 className='text-3xl text-gray'>Have you project in mind?</h3>

            <h1 className='text-6xl md:text-[100px] tracking-tighter text-light mt-10 mb-20'> 
                <span>Let's make something</span> <br />
                <span>great together!</span> 
            </h1>

        <MyButton size='280px' url={'/'}>
          <span className="relative z-10 text-2xl font-semibold text-gray mix-blend-difference pointer-events-none center-center gap-2 px-3">
            <span className='w-22'>Contact  with Us</span> 
            <ArrowRight size={36}/>
          </span>
        </MyButton>
        </article>
    </section>
  )
}

export default ProjectCTA