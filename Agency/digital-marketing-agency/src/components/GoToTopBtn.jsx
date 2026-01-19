import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const GoToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;

    setScrollPercent(scrolled);
    setIsVisible(scrollTop > window.innerHeight); // show after 100vh
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={goToTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 "
      title="Go To Top"
      style={{
        background: `conic-gradient(#facc15 ${scrollPercent}%, #111 ${scrollPercent}%)`,
      }}
    >
      <div className="w-[41px] h-[41px] rounded-full bg-[#111] flex items-center justify-center">
        <ArrowUp className="text-white" size={20} />
      </div>
    </button>
  );
};

export default GoToTopBtn;
