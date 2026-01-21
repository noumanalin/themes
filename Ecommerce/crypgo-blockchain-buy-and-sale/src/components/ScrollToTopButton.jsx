import { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp, SquareArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          className="bg-[#102C46] text-white p-2 rounded-xl "
          aria-label="Scroll to top"
        >
            <ChevronUp
             />
          {/* <ArrowUp size={24} /> */}
        </button>
    </div>
  );
};

export default ScrollToTopButton;
