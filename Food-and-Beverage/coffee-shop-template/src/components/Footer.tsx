import React, { useState } from "react";
import bgImage from "../assets/bg-image.jpg";
import { socialLinks } from "../utils/appData";
import type { SocialLink } from "../utils/types";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    alert(`✅ Thanks for subscribing, ${email}`);
    setEmail("");
  };

  return (
    <footer
      className="w-screen top-border-shape py-12 px-2 md:px-10 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#301e1ad7] z-0" />

      <section className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white px-2">
        {/* Contact */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">
            Contact Us
          </h4>
          <p>456 Market Road, Springfield, USA</p>
          <a href="tel:+1002003000">+1 (002) 003 000</a>
          <a href="mailto:support@yourbrand.com" className="m-0">
            support@yourbrand.com
          </a>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">
            Stay Connected
          </h4>
          <p>
            Follow us on social media to keep up with our latest updates and
            offers.
          </p>
          <div className="flex space-x-2 mt-3">
            {socialLinks.map((item: SocialLink, index: number) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white text-white text-lg transition-all duration-300 hover:bg-[var(--primary-bg-color)] hover:text-[var(--primary-dark)]"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">
            Business Hours
          </h4>
          <div>
            <h6 className="uppercase">Monday – Friday</h6>
            <p>9:00 AM – 7:00 PM</p>
            <h6 className="uppercase">Saturday</h6>
            <p>10:00 AM – 6:00 PM</p>
            <h6 className="uppercase">Sunday</h6>
            <p>Closed</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="px-4 md:px-0">
          <h4 className="uppercase mb-4 text-2xl font-semibold tracking-[3px]">
            Newsletter
          </h4>
          <p>
            Join our mailing list to receive exclusive updates, discounts, and
            behind-the-scenes news.
          </p>
          <form onSubmit={handleSubmit} className="flex mt-3 bg-white">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm text-black outline-none"
            />
            <button className="bg-[var(--primary-fair)] font-bold px-4 py-3 text-[var(--primary-dark)]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <hr className="text-white bg-white my-5" />

      <article className="text-center text-white relative z-20">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--primary-fair)]">yourBrand</span>. All
          rights reserved.
        </p>
        <p>
          Crafted with ❤️ by{" "}
          <span className="text-[var(--primary-fair)]">Ali</span>
        </p>
      </article>
    </footer>
  );
};

export default Footer;
