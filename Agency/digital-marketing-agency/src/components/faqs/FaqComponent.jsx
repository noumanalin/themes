import { Plus, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import YearlyCard from "./YearlyCard";
import MonthlyCard from "./MonthlyCard";
import MyButton from "../my-button/MyButton";
import { fadeIn } from "../../utils/framer-motion";

const faqs = [
  { q: "How does the subscription work?", a: "You can choose between monthly or yearly billing. Cancel anytime without hidden charges." },
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your account settings." },
  { q: "Do you offer a free trial?", a: "Absolutely! Try our service for free before committing to a paid plan." },
  { q: "What kind of support is included?", a: "Our support team is available 24/7 to assist with setup, technical issues, and product guidance." },
  { q: "Is my payment information secure?", a: "Yes. All transactions are encrypted and processed through trusted payment providers." },
];

const FaqComponent = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-dark py-20">
      <div className="container-sm text-light">
        {/* Section Label */}
        <motion.h2
          variants={fadeIn("up", "tween", 0.3, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-[18px] font-medium mb-12 tracking-wide text-primary"
        >
          Flexible Pricing
        </motion.h2>

        <section className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Content - FAQ Section */}
          <motion.article
            variants={fadeIn("up", "tween", 0.4, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[635px]"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.4, 2)}
              className="text-5xl md:text-6xl font-bold mb-10 leading-tight"
            >
              Everything You Need to Know
            </motion.h1>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.5 + index * 0.1, 2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  className="border-b border-gray-700 pb-6"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg md:text-xl font-medium">{faq.q}</span>
                    <Plus
                      className={`transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <p className="mt-4 text-gray-400">{faq.a}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.article>

          {/* Right Content - Pricing Cards Section */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 space-y-6"
          >
            <YearlyCard />
            <MonthlyCard />
            <MyButton size="200px" url={"/"}>
              <span className="relative z-10 text-md text-light mix-blend-difference pointer-events-none center-center gap-2 px-3">
                <span>Start Your <br /> Free Trial</span>
                <ArrowUpRight />
              </span>
            </MyButton>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default FaqComponent;
