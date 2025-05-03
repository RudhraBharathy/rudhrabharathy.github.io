import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={`w-full border-b border-gray-300 dark:border-gray-700 pb-2 outline-none bg-transparent text-black dark:text-white placeholder-gray-500 ${className}`}
      {...rest}
    />
  );
};

export default Input;
