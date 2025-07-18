import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "",
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
      autoComplete={"off"}
      id={id}
      className={`w-full border-b-2 focus:border-black dark:focus:border-white transition-colors duration-300 focus:outline-none peer border-gray-300 text-3xl xl:text-4xl
         dark:border-gray-700 pb-2 outline-none bg-transparent text-black dark:text-white placeholder-gray-500 placeholder:text-3xl xl:placeholder:text-4xl ${className}`}
      {...rest}
    />
  );
};

export default Input;
