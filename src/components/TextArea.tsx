import React, { useState } from "react";

interface TextAreaData {
  rows?: number;
  cols?: number;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  className?: string;
  validation?: (value: string) => string | undefined;
}

const TextArea: React.FC<TextAreaData> = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  value,
  className,
  validation,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false); 
  const [inputValue, setInputValue] = useState<string | undefined>(value); 
  const [error, setError] = useState<string | undefined>("");

  // Handle input change & validation
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (validation) {
      const validateError = validation(newValue);
      setError(validateError);
    }
  };

  return (
    <div className="flex flex-col">
      <textarea
        rows={rows || 5} 
        cols={cols || 25} 
        placeholder={placeholder}
        className={`border-b outline-none px-2 py-1 resize-none
            text-sans text-[0.9375rem] text-secondary-san-juan-blue font-normal leading-[1.5625rem] tracking-[0.03em] pl-[1.25rem] pb-[1.062rem]
            ${className}
            ${isFocused ? "opacity-1" : "opacity-50"}    
            ${error ? "border-red text-red" : "border-secondary-san-juan-blue text-secondary-san-juan-blue"}`}
        id={id}
        name={name}
        value={inputValue}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />      
      {/* Error message */}
      {error && (
        <p className="text-sans text-11 text-red tracking-wide font-thin opacity-50 pl-[1.25rem] mt-[0.875rem]">
          {error}
        </p>
      )}

      {/* Custom placeholder color based on error */}
      <style>{`
        textarea::placeholder {
          color: ${error ? "#F00" : "#36536B"};          
        }
      `}</style>
    </div>
  );
};

export default TextArea;
