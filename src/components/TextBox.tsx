import React, { useState } from "react";

interface TextBoxData {
  type?: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  className?: string;
  validation?: (value: string) => string | undefined;
}

const TextBox: React.FC<TextBoxData> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  className,
  validation,
}) => {
  const [isFocused, setIsFocused] = useState(Boolean);
  const [inputValue, setInputValue] = useState(value);
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
    <div className='flex flex-col'>
      <input
        type={type}
        placeholder={placeholder}
        className={`border-b outline-none px-2 py-1 
            text-sans text-15 font-normal leading-25 tracking-custom pl-[1.25rem] pb-[1.062rem]
            ${isFocused ? " " : "opacity-50"}            
            ${className}
            ${error ? "border-red text-red opacity-50" : " border-secondary-san-juan-blue text-secondary-san-juan-blue"} `}
            
        id={id}
        name={name}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />

      {/* Error message */}
      {error && <p className="text-sans text-11 text-red tracking-wider font-thin opacity-50  pl-[1.25rem] mt-[0.875rem]">{error}</p>}

       {/* Inline styles for placeholder */}
      <style>{`
        input::placeholder {
          color: ${error ? "#F00" : "#36536b"};
        }
      `}</style>
    </div>
  );
};

export default TextBox;
