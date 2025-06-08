import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  styles = "bg-blue-500 text-white",
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  return (
    <button className={`${styles} ${sizeClasses[size]} ${shape}`}>
      {title}
    </button>
  );
};

export default Button;
