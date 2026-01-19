import { Link } from "react-router-dom";


const AppLink = ({ children, className = "", href = "/", ...rest }) => {
    return (
        <Link
            {...rest}
            to={href}
            className="group relative px-4 py-2 font-medium border border-2-gray-800 inline hover:shadow-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--secondary)] transition-all duration-100 group-hover:w-[0px]" />
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-zinc-950 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-[var(--secondary)] transition-all delay-100 duration-100 group-hover:h-[0px]" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-zinc-950 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[var(--secondary)] transition-all delay-200 duration-100 group-hover:w-[0px]" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-zinc-950 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[var(--secondary)] transition-all delay-300 duration-100 group-hover:h-[0px]" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-zinc-950 transition-all delay-300 duration-100 group-hover:h-full" />

        </Link>
    );

}

export default AppLink