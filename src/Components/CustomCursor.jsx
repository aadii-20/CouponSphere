import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-5), { x: e.clientX, y: e.clientY }]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.querySelectorAll(".hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Trails */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className={`fixed w-2 h-2 rounded-full pointer-events-none
            mix-blend-difference z-[49] opacity-30
            ${isClicking ? "bg-pink-600" : "bg-pink-400"}
            ${isHovering ? "bg-cyan-400" : ""}`}
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s ease-out",
          }}
        />
      ))}

      {/* Outer Ring */}
      <div
        className={`fixed w-12 h-12 border-2 rounded-full 
          transition-all duration-300 ease-out pointer-events-none 
          mix-blend-difference z-[50] backdrop-blur-sm
          ${
            isClicking
              ? "scale-150 border-pink-600 rotate-45"
              : "border-pink-400 rotate-0"
          }
          ${isHovering ? "scale-200 border-cyan-400 rotate-90" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Middle Ring */}
      <div
        className={`fixed w-8 h-8 border border-opacity-50 rounded-full 
          transition-all duration-200 ease-out pointer-events-none
          mix-blend-difference z-[50]
          ${
            isClicking
              ? "scale-125 border-pink-600 rotate-90"
              : "border-pink-400 rotate-0"
          }
          ${isHovering ? "scale-150 border-cyan-400 -rotate-45" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner Dot */}
      <div
        className={`fixed w-3 h-3 rounded-full 
          transition-all duration-150 ease-out pointer-events-none
          mix-blend-difference z-[50]
          ${isClicking ? "scale-75 bg-pink-600" : "bg-pink-400"}
          ${isHovering ? "scale-125 bg-cyan-400" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
