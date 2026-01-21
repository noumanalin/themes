import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const hashLinksArray = [
    { name: "Package Versions", to: "/docs#PackageVersions" },
    { name: "Package Structure", to: "/docs#PackageStructure" },
    { name: "Quick Start", to: "/docs#QuickStart" },
    { name: "Project Configuration", to: "/docs#ProjectConfiguration" },
];

const DocsSidebar = () => {
    const [activeLink, setActiveLink] = useState("/docs#PackageVersions")
    return (
        <aside className="fixed top-24 hidden md:flex flex-col w-64 p-4  shadow-md">
            {hashLinksArray.map((link, index) => (
                <HashLink
                    key={index}
                    scroll={el => {
                        const yOffset = -150; // adjust this (80px offset)
                        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                    smooth
                    to={link.to}
                    onClick={()=>setActiveLink(link.to)}
                    className={
                        `text-md px-4 py-2 mb-2 rounded-md  transition-colors duration-200 hover:bg-[#88c48c5e] 
            ${activeLink==link.to ? "bg-[var(--tertiary-color)] text-zinc-800" : "text-[var(--acent-color)] hover:text-[var(--tertiary-color)]"}
            `}
                >
                    <strong>
                        {link.name}
                    </strong>
                </HashLink>
            ))}
        </aside>
    );
};

export default DocsSidebar;
