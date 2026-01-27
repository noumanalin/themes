import { useState } from "react";
import { Plus } from "lucide-react";

const faqArray = [
  {
    id: 0,
    q: "What is included with this package?",
    a: "You receive the complete front-end source files, including HTML, CSS, and JavaScript, along with starter layouts and clear setup documentation."
  },
  {
    id: 1,
    q: "Do I need extra tools or extensions to use it?",
    a: "No. Everything runs using standard web technologies, so you can start working immediately without installing additional plugins."
  },
  {
    id: 2,
    q: "Are the preview images part of the download?",
    a: "Images shown in previews are for demonstration only and are not included. You are free to replace them with your own assets or royalty-free alternatives."
  },
  {
    id: 3,
    q: "Can this be used for more than one project?",
    a: "Usage is limited to a single project per license. If you plan to use it for multiple projects, separate licenses are required."
  },
  {
    id: 4,
    q: "Where can I access this product?",
    a: "It is available through established digital platforms that distribute web design and development resources."
  },
  {
    id: 5,
    q: "How do I get technical assistance?",
    a: "Support is provided through the official help channel after purchase verification, where you can submit questions or issues."
  },
  {
    id: 6,
    q: "How are updates delivered?",
    a: "Updates are provided on an ongoing basis and can be downloaded directly from your account whenever a new version is released."
  },
  {
    id: 7,
    q: "Why choose a professionally built solution?",
    a: "Professionally crafted solutions focus on clean structure, performance, maintainability, and ease of customization, saving time during development."
  },
];

const Faq = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="mt-15 md:columns-2 gap-4">
      {faqArray.map((faq) => {
        const isOpen = openIds.includes(faq.id);

        return (
          <article
            key={faq.id}
            onClick={() => toggleFaq(faq.id)}
            className="rounded-3xl bg-white text-zinc-600 mb-4 overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <div className="w-full p-5 text-left flex justify-between items-center">
              <p className="font-medium text-zinc-800 pr-4 text-sm md:text-base">
                {faq.q}
              </p>

              <Plus
                size={20}
                className={`text-zinc-600 transform transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-zinc-600 text-sm md:text-base">
                {faq.a}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Faq;
