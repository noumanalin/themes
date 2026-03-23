/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Used in <div className="text-[#1F2937]">
                bodyText: "#1F2937",

                // Used in <button className="bg-[#B4916C] hover:bg-[#a37c58]">
                primary: "#B4916C",

                sectionbg: "#303030",
            },
        },
    },
    plugins: [],
}