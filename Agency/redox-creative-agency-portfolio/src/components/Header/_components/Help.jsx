import { Link } from "react-router-dom"



const Help = () => {
  return (
    <div className=" md:min-w-[400px]">
      <Link to={'/'}
        className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
      >
        Documentation
      </Link>

      <Link to={'/'}
        className="block py-2 px-3 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
      >
        Support
      </Link>
    </div>
  )
}

export default Help