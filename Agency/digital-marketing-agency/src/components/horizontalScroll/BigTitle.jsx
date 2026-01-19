import AnimatedText from "../motion/AnimatedText"

const BigTitle = () => {
  return (
    <section className='w-screen h-screen center-center bg-dark'>
      <AnimatedText className='text-9xl md:text-[200px] uppercase text-center text-light px-4'>
        <strong>
          <span>why</span> <br />
          <span>choose us</span>
        </strong>
      </AnimatedText>
    </section>
  )
}

export default BigTitle