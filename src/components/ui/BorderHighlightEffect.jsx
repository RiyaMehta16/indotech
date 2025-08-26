import { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

const BorderHighlightEffect = ({
  children,
  className,
  colors = [
    "rgba(30, 136, 229, 0.5)", // default Blue
    "rgba(254, 0, 0, 0.5)", // default Pink
    "rgba(30, 136, 229, 0.5)", // default Purple
    "rgba(255, 255, 255, 0)", // transparent
  ],
}) => {
  const containerRef = useRef(null);
  const [gradientPosition, setGradientPosition] = useState({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      setGradientPosition({ x: `${x}%`, y: `${y}%` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradient = `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y},
    ${colors[0]} 0%,
    ${colors[1]} 40%,
    ${colors[2]} 80%,
    ${colors[3]} 100%)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-2xl shadow-sm shadow-gray-300/20 p-[2px] max-sm:p-[1.5px]",
        className
      )}
      style={{
        background: gradient,
        transition: "background 0.1s ease",
        height: "fit-content",
      }}
    >
      <div className="relative rounded-2xl border border-transparent bg-blue-100/85 p-4 max-lg:p-3 max-sm:p-2">
        {children}
      </div>
    </div>
  );
};

export default BorderHighlightEffect;
