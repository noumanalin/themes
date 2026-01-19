
import logo from '../assets/axtra-logo-light.png';
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "FACEBOOK", url: "https://facebook.com" },
  { name: "TWITTER", url: "https://twitter.com" },
  { name: "LINKEDIN", url: "https://linkedin.com" },
  { name: "INSTAGRAM", url: "https://instagram.com" },
];

const links = [
  { name: "ABOUT", url: "" },
  { name: "SERVICES", url: "" },
  { name: "CAREERS", url: "" },
  { name: "SUPPORT", url: "" },
];

const lastLink = socialLinks.length - 1;

const Footer = () => {
  return (
    <footer className="w-full bg-dark mt-12">
      <section className="container-lg">
        {/* Upper Footer Section */}
        <article className="flex-bc flex-col md:flex-row gap-10 py-10 md:py-0 text-center">
          {/* 1. Logo + Short text */}
          <figure className="w-full md:max-w-[375px]">
            <img src={logo} alt="Company logo" />
            <p className="py-5 text-gray">
              Building meaningful digital experiences with passion and purpose. 
              We focus on clarity, creativity, and collaboration to make every 
              project impactful.
            </p>
          </figure>

          {/* 2. Social Links */}
          <ul className="h-full flex flex-col justify-between">
            {socialLinks.map((link, index) => (
              <>
                <li
                  key={index}
                  className={`${index === lastLink ? "border-b-0" : ""} w-full md:w-auto social-link border py-[50px] px-5 center-center md:border-t-0 border-b-0 border-gray-500 hover:bg-gray-500 transition-colors duration-500 ease-in text-light`}
                >
                  <Link to={link.url}>{link.name}</Link>
                </li>
                <hr className="w-full h-0.5 bg-gray-500" />
              </>
            ))}
          </ul>

          {/* 3. Big Call-to-Action Text */}
          <h1 className="flex-1 uppercase flex justify-end text-light text-[150px]">
            <strong>Let’s talk</strong>
          </h1>
        </article>

        <hr className="w-full h-[1px] text-zinc-700 mb-10" />

        {/* Lower Footer Section */}
        <article className="flex-bc flex-col-reverse md:flex-row gap-10 text-light py-10">
          <p>
            <strong>© 2022 - 2025 | All rights reserved by YourBrand</strong>
          </p>

          {/* Links */}
          <ul className="flex-bc gap-15">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:text-gray-600 transition-colors duration-300 ease-in-out font-semibold"
              >
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
