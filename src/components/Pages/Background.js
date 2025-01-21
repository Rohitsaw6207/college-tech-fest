// FloatingCircle.js
import React, { useState, useEffect } from "react";
import "./css/Background.css"; // Make sure styles are applied here

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveringText, setHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Floating Circle */}
      <div
        className="floating-circle"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          borderColor: hoveringText ? "#76b041" : "#2b2d42",
          transform: hoveringText ? "scale(2)" : "scale(1)",
        }}
      ></div>

      {/* Circles Animation Following Mouse */}
      <ul className="circles">
        {[...Array(10)].map((_, index) => {
          const scale = 1 + Math.min(0.3, 1 / Math.sqrt(Math.pow(mousePosition.x - 150, 2) + Math.pow(mousePosition.y - 150, 2)));
          return (
            <li
              key={index}
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) scale(${scale})`,
                backgroundColor: `rgba(255, 255, 255, ${scale})`,
              }}
            ></li>
          );
        })}
      </ul>
    </>
  );
};

export default Background;
