import React from "react";

const TransparentButton = ({
  children,
  bgColor = "bg-blue-900",
  textColor = "text-white",
  className = "",
  hoverClass = "",
}) => {
  return (
    <button
      className={`z-50 ${bgColor} ${textColor} ${hoverClass} ${className} rounded-3xl py-2 px-4 border transition-color duration-300 font-bold `}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
