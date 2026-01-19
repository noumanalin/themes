import { useState } from "react";
import { Plus } from "lucide-react";

const faqArray = [
  { id: 0, q: "What components are included in my purchase?", a: "You'll receive complete HTML, CSS, JavaScript files, initial demo materials, and comprehensive documentation." },
  { id: 1, q: "Are additional plugins necessary for website construction?", a: "No additional plugins needed. All functionality operates with standard HTML, CSS, and JavaScript—fully operational immediately." },
  { id: 2, q: "Can I utilize the demonstration images?", a: "Preview images are for demonstration purposes only and aren't included due to licensing restrictions. You may substitute them with your own images or use license-free alternatives." },
  { id: 3, q: "Can I implement the template across multiple websites?", a: "Each license permits use on a single website only. For multiple websites, additional licenses must be acquired according to standard marketplace policies." },
  { id: 4, q: "Where can I acquire this HTML template?", a: "You can obtain it from popular digital marketplaces by searching for modern HTML templates." },
  { id: 5, q: "How can I access support services?", a: "Visit our support platform with your purchase verification for technical assistance." },
  { id: 6, q: "How do I obtain updates?", a: "Lifetime updates are accessible through your marketplace account. Simply download the newest version from your account section." },
  { id: 7, q: "Why select premium templates?", a: "We provide clean, contemporary, optimized templates with quality code, straightforward customization, and dedicated technical support." },
];

const Faq = () => {
  const [openIds, setOpenIds] = useState([]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
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
            <div className="w-full p-5 text-left flex justify-between items-center" >
              <p className="font-medium text-zinc-800 pr-4 text-sm md:text-base">
                {faq.q}
              </p>
              <Plus
                size={20}
                className={`text-zinc-600 transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                  }`}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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