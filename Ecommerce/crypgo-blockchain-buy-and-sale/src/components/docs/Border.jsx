 

const Border = ({children, className}) => {
  return (
    <article className={`${className} w-full h-auto p-2 md:p-6 border rounded-md border-gray-600 my-5`}>
      {children}
    </article>
  )
}

export default Border