import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // 👈 Import close icon

const LoginForm = ({ onClose }) => {
  const [signup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleSignup = () => setSignup(!signup);

  const gradientAnimation = {
    backgroundImage: "linear-gradient(to right, white, #80808010, white)",
    backgroundSize: "200% 200%",
    animation: "gradientMove 4s infinite",
  };

  const buttonAnimation = {
    
     // 🔵 Tailwind primary
    backgroundSize: "150% 150%",
    animation: "gradientMove 5s infinite",
  };

  const textShadowStyle = {
    textShadow: "-2px -2px 3px #ffffff, 2px 2px 3px #bababa",
  };

  const keyframes = `
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup) {
      alert("Signup logic here (Name, Email, Password)");
    } else {
      alert("Login logic here (Name, Password)");
    }
  };

  return (
    <>
      <style>{keyframes}</style>

      <div className="fixed top-0 left-0 w-full h-screen bg-white/50 z-[100] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="relative max-w-md w-full gap-5 p-6 rounded-2xl bg-gray-200 shadow-[12px_12px_18px_#bababa,-12px_-12px_18px_#ffffff] flex flex-col justify-evenly"
        >
          {/* Close Button */}
          <IoClose
            onClick={onClose}
            className="absolute top-3 right-3 h-8 w-8 text-2xl text-primary cursor-pointer"
          />

          <span
            className="text-center text-[34px] font-semibold tracking-[3px] relative -top-3"
            style={textShadowStyle}
          >
            {signup ? "Sign Up" : "Login"}
          </span>

          <input
            type="text"
            placeholder="UserName"
            required
            className="h-12 px-2 py-1 rounded-lg text-base tracking-wider shadow-inner focus:outline-none focus:bg-gray-100"
            style={gradientAnimation}
          />

          {signup && (
            <input
              type="email"
              placeholder="Email"
              required
              className="h-12 px-2 py-1 rounded-lg text-base tracking-wider shadow-inner focus:outline-none focus:bg-gray-100"
              style={gradientAnimation}
            />
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              minLength={8}
              maxLength={15}
              required
              className="h-12 w-full px-2 py-1 rounded-lg text-base tracking-wider shadow-inner focus:outline-none focus:bg-gray-100"
              style={gradientAnimation}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-sm"
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          <button
            type="submit"
            className="h-[18%] bg-primary text-white text-xl font-bold tracking-wider rounded-lg border-none shadow-md transition-all duration-300 hover:bg-primary/90 p-3"
            style={buttonAnimation}
          >
            {signup ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-sm mt-2 text-gray-700">
            {signup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-primary font-semibold cursor-pointer hover:underline"
              onClick={toggleSignup}
            >
              {signup ? "Login here" : "Sign up"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
