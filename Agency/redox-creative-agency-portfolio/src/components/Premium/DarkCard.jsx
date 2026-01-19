
const DarkCard = ({ heading, text, dimText, children, className = "" }) => {
  return (
    <article className={`bg-[#262626] rounded-[20px] p-5 sm:p-8 m-4 ${className} md:flex-1/2 flex flex-col gap-8`}>
      <section>
        <h3 className="py-2 px-4 text-[20px] mb-3 shadow shadow-zinc-950 rounded-lg inline-block text-white bg-zinc-950">{heading}</h3>
        <p className="text-lg font-semibold md:max-w-[80%]">
          <span className="text-gray-100">{text}</span> {" "}
          <span className="text-gray-500">{dimText}</span>
        </p>
      </section>

      {children}
    </article>
  )
}

export default DarkCard