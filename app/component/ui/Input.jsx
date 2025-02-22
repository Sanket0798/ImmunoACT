import React from "react";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-3 w-full bg-white/20 text-white border-none rounded-lg focus:ring-2 focus:ring-indigo-400 placeholder-gray-300 transition-all duration-300"
    />
  );
};

export default Input;
