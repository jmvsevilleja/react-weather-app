import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ text, onClick, className }) => (
  <button
    className={`inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-800 rounded hover:bg-gray-700 text-white ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
