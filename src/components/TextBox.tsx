import React, { useState } from "react";

interface TextBoxData {
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  className?: string;
  autoComplete?: string;
  validation?: (value: string) => string | undefined;
}

const TextBox: React.FC<TextBoxData> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  className,
  autoComplete,
  validation,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(value);
  const [error, setError] = useState<string | undefined>("");

  // Handle input change and validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Perform validation if the validation function is provided
    if (validation) {
      const validateError = validation(newValue);
      setError(validateError);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <input
        type={type}
        placeholder={placeholder}
        className={` pl-[1.25rem]            
            ${className}
            ${isFocused ? "opacity-1" : ""}    
            ${error ? "border-red text-red " : "border-secondary-san-juan-blue text-secondary-san-juan-blue"} `}
        id={id}
        name={name}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        autoComplete={autoComplete}
      />

      {/* Error message */}
      {error && (
        <p className="text-sans text-11 text-red tracking-wider font-thin opacity-50 pl-[1.25rem] mt-[0.875rem]">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextBox;
