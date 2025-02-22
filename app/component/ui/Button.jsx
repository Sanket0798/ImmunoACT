import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 bg-indigo-500 text-white rounded-full text-lg font-semibold hover:bg-indigo-600 transition-all duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
