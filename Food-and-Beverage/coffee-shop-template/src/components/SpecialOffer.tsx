import { useState } from "react";
import bgImage from "../assets/bg-image.jpg";

const SpecialOffer = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    console.log("Form submitted with:", email);
    setEmail(""); // clear input after submission
  };

  return (
    <section
      aria-label="Special Sunday Offer"
      className="w-screen block-border-shape py-32 relative special-offer"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#301e1ad7] z-10" />

      {/* Content Container */}
      <article className="relative z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h3 className="text-4xl text-fair font-light">
          <strong>50% OFF</strong>
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Sunday Special Offer
        </h2>
        <p className="mt-4 text-sm md:text-base">
          Only on Sundays from 1st Jan to 30 Jan 2026
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="bg-white pl-4 flex mt-8 w-full max-w-sm overflow-hidden shadow"
          noValidate
        >
          <label htmlFor="email" className="sr-only">
            Enter your email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="flex-1 border-none outline-none text-dark bg-transparent px-2 py-3"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 text-fair bg-[var(--primary-dark)] font-bold hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
        </form>

        {error && (
          <p
            className="text-red-400 mt-2 text-sm"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </article>
    </section>
  );
};

export default SpecialOffer;
