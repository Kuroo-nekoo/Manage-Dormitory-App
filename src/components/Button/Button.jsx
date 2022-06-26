import * as React from "react";

const Button = ({ children, textColor, bgColor, type }) => {
  return (
    <button
      className="block bg-neutral-500 text-neutral-100 h-12 rounded-md hover:bg-neutral-800 duration-400 transition"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
