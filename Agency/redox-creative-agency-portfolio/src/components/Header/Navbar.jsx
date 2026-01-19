import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// User-defined components for dropdown content
import Home from './_components/Home';
import Portfolio from './_components/Portfolio';
import Pages from './_components/Pages';
import Help from './_components/Help';

// Helper components for the shifting dropdown
const Tab = ({ children, tab, handleSetSelected, selected, handleMouseEnter }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onClick={() => handleSetSelected(tab)}
      onMouseEnter={() => handleMouseEnter(tab)}
      className={`relative z-10 flex items-center gap-1 rounded-full px-2 md:px-3 py-1.5 text-sm transition-colors group `}
    >
      <span className={`group-hover:text-orange-500 ${selected === tab ? 'text-orange-500' : 'text-neutral-100'}`}>
        {children}
      </span>
      <ChevronDown size={15}
        className={`transition-transform ${
          selected === tab ? "rotate-180 text-orange-500" : ""
        }`}
      />
    </button>
  );
};

 const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="
        absolute z-50 top-[calc(100%_+_24px)] 
        left-[42%] md:left-1/2 -translate-x-1/2 
        w-[95vw] max-w-[96vw]  md:w-auto
        rounded-lg border border-neutral-600 
        bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 
        p-4 shadow-xl
      "
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div key={t.id} className="overflow-hidden">
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* Each dropdown controls its own size */}
              <div className="w-fit h-fit">
                <t.Component />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};


const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900 hidden md:block"
    />
  );
};

const TABS = [
  { title: "Home", Component: Home },
  { title: "Portfolio", Component: Portfolio },
  { title: "Pages", Component: Pages },
  { title: "Help", Component: Help },
].map((n, idx) => ({ ...n, id: idx + 1 }));

const Navbar = ({className}) => {
  const [selected, setSelected] = useState(null); // Default to first tab
  const [dir, setDir] = useState(null);
  const navbarRef = useRef(null);

  const handleSetSelected = (val) => {
    // Toggles the dropdown on click
    if (selected === val) {
      setSelected(null);
    } else {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      }
      setSelected(val);
    }
  };

  const handleMouseEnter = (val) => {
    // For desktop, show dropdown on hover.
    if (window.innerWidth >= 768) {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      }
      setSelected(val);
    }
  };

  // Closes the dropdown when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <nav 
      ref={navbarRef} 
      className={`relative flex h-fit gap-0 md:gap-2 ${className}`}
      onMouseLeave={() => setSelected(null)}
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          handleMouseEnter={handleMouseEnter}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
