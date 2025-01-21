import React, { useState, useEffect } from "react";
import "./MouseShadow.css"; // Import your CSS

const MouseShadow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX + window.scrollX, // Account for horizontal scroll
        y: event.clientY + window.scrollY, // Account for vertical scroll
      });
    };

    // Attach mousemove event listener to the document
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-shadow"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
};

export default MouseShadow;
