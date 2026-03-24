import React from "react";

const Breadcrumb = ({ title, subtitle, image }) => {
    return (
        <section
            className="relative w-full md:h-[80vh] h-[60vh] flex items-center text-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Content */}
            <div className="relative z-10  text-left px-4">
                <h1 className="text-4xl md:text-7xl font-bold mb-3 meow-script-regular text-[var(--primary)] ">{title}</h1>
                <p className="text-sm md:text-base max-w-xl mx-auto text-gray-900">
                    {subtitle}
                </p>

               
            </div>
        </section>
    );
};

export default Breadcrumb;
