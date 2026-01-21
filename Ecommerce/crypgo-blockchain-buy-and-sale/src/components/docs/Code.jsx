 

const Code = ({children, className=""}) => {
  return (
    <section className={`${className} text-sm text-[#9ca3af] px-1 md:px-3 py-4 w-full rounded-md bg-[#2e3033] my-5`}>
      {children}
    </section>
  )
}

export default Code