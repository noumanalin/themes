import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"


const MyButton = ({ href, text, size = 170 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center overflow-hidden font-['Inter'] rounded-full group transition-all duration-300"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div
        className={`absolute inset-0 bg-white rounded-full transition-transform duration-500 ease-in-out ${
          isHovered ? 'scale-100' : 'scale-0'
        }`}
      ></div>

      <div className="relative z-10 flex items-center justify-center p-4">
        <span
          className={`text-sm font-semibold transition-colors duration-300 ${
            isHovered ? 'text-gray-900' : 'text-white'
          }`}
        >
          {text}
        </span>
          <ArrowUpRight size={16}
            className={`transition-colors duration-300 ${
              isHovered ? 'text-gray-900' : 'text-white'
            }`}
          />
      </div>
    </Link>
  );
};

export default MyButton;