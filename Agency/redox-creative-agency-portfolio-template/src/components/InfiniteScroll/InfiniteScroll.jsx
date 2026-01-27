import React from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = ({ children, speed = 20, direction = "left" }) => {
  const slides = [...children, ...children];

  return (
    <div className="infinite-slider w-full overflow-hidden">
      <div
        className="infinite-track flex"
        style={{
          animationDuration: `${speed}s`,
          animationName: direction === "left" ? "scroll-left" : "scroll-right",
        }}
      >
        {slides.map((child, index) =>
          React.cloneElement(child, {
            key: index,
            className: `infinite-slide ${child.props.className || ""}`,
          })
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
