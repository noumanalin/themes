import Border from "../Border"

import nextjs from '../../../assets/nextjs.svg'
import reactjs from '../../../assets/react.svg'
import tailwindcss from '../../../assets/tailwind.svg'
import nextauth from '../../../assets/nextauth.png'
import ts from '../../../assets/typescript.svg'

const techs = [
    { icon: nextjs, version: "v15.0.3", name: "NextJs" },
    { icon: reactjs, version: "v18.3.1", name: "React" },
    { icon: tailwindcss, version: "v3.4.1", name: "Tailwindcss" },
    { icon: nextauth, version: "v4.24.7", name: "NextAuth" },
    { icon: ts, version: "v5.6.3", name: "Typescript" },
]

const PackageVersions = () => {
    return (
        <article id='PackageVersions' className=" mb-15">
            <h1 className="text-2xl font-bold">Technology Stack</h1>
            <Border className="flex flex-col md:flex-row justify-between items-center relative">
                {techs && techs.map((tech, index) => (
                    <div key={index} className={`flex flex-col  items-center gap-5 cursor-pointer w-full py-4
                     ${index != (techs.length - 1)?"border-b":"border-none"}  md:border-none border-gray-500 relative`}>
                        <figure className="w-10">
                            <img src={tech.icon} alt={`${tech.name} image`} />
                        </figure>
                        <div className="text-center">
                            <h4 className="text-2xl">{tech.version}</h4>
                            <h3 className="text-lg text-accent -mt-2">{tech.name}</h3>
                        </div>

                         {index < techs.length - 1 && (
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full w-[1px] bg-gray-600" />
                        )}
                    </div>
                ))}
            </Border>
            <p className="text-lg text-accent">This template is developed using Tailwind CSS and Next.js framework.</p>
            <p className="text-lg text-accent">This theme is production-ready and fully customizable according to your specific needs.</p>
            <p className="text-lg text-accent">For customization, familiarity with Next.js, React, Tailwind CSS, and JSX is recommended to modify this template.</p>
        </article>
    )
}

export default PackageVersions