import React from "react";

interface ButtonData {
  type?: "primary" | "secondary" | "outline";
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonData> = ({
  type = "primary",
  text,
  disabled = false,
}) => {

  // Define dynamic className based on type
  const typeClasses = {
    primary: disabled
      ? "text-primary-link-water-white bg-primary-dark-pink cursor-not-allowed shadow-primaryBtn opacity-50"
      : "text-primary-link-water-white bg-primary-dark-pink hover:bg-secondary-charm-pink ",
    secondary: disabled
      ? "text-primary-link-water-white align-center bg-secondary-mirage-blue cursor-not-allowed border-1 border-primary-link-water-white opacity-50"
      : "text-primary-link-water-white align-center bg-secondary-mirage-blue hover:bg-primary-link-water-white hover:text-secondary-mirage-blue border-1",
    outline: disabled
      ? "bg-transparent text-san-juan-blue border border-1 border-secondary-san-juan-blue cursor-not-allowed opacity-50"
      : "bg-transparent text-san-juan-blue border border-1 border-secondary-san-juan-blue  hover:bg-secondary-san-juan-blue hover:text-white",
  };

  // Use the class for the given type
  const appliedTypeClass = typeClasses[type] || ""; 

  return (
    <>
      <button
        className={`font-sans text-15 font-bold tracking-custom min-w-[10.1825rem] min-h-[3rem] flex-shrink-0 rounded-24
          ${appliedTypeClass}               
          `}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
