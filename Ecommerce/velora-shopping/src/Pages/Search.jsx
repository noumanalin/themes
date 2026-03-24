import React, { useRef, useEffect } from "react";

const Search = ({ onClose }) => {
    const formRef = useRef(null);

    // Close on click outside
    const handleClickOutside = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Optional: close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = formRef.current.querySelector("input").value.trim();
        if (!query) return;
        console.log("Searching for:", query);
        // Optionally close overlay after search
        // onClose();
    };

    return (
        <div className="fixed inset-0 z-[1000] flex justify-center items-center bg-[#e7e7e7]">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full justify-center md:w-1/2 gap-2  p-4 "
            >
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="md:w-4/5 h-[8%] px-8 py-4 text-gray-700 bg-white shadow-md border-none outline-none font-light rounded-none box-border"
                />

                {/* Submit Button */}
                <input
                    type="submit"
                    value="Search"
                    className="md:w-1/5  text-white font-light px-3 cursor-pointer transition-all duration-500 bg-primary hover:bg-primary/80 rounded-none"
                />
            </form>
        </div>
    );
};

export default Search;
