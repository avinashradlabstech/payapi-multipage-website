import React, { useState, useEffect } from "react";

interface CheckboxData {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
  required?: boolean;
}

const Checkbox: React.FC<CheckboxData> = ({
  label,
  checked = false,  
  disabled,
  className,
  onChange,
}) => {
  
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <label className="flex items-center gap-[26px]">
      <input
        type="checkbox"
        checked={isChecked} 
        onChange={handleChange}
        disabled={disabled}
        className="appearance-none w-6 h-6 hidden"
      />
      <span
        className={`w-6 h-6 flex-shrink-0 flex justify-center items-center 
          ${isChecked ? "bg-primary-dark-pink" : "bg-secondary-san-juan-blue opacity-25"}
          ${disabled ? "bg-secondary-san-juan-blue opacity-5" : ""}
        `}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 w-[277px] lg:w-[395px] ${className ? className : ""}`}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
