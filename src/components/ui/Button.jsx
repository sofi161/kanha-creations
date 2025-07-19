import React from "react";

const button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default button;
