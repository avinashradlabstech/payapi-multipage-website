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
  const [isFocused, setIsFocused] = useState(Boolean);
  const [inputValue, setInputValue] = useState(value);
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
        rows={rows ? rows : 5}
        cols={cols ? cols : 25}
        placeholder={placeholder}
        className={`border-b outline-none px-2 py-1 resize-none
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

      {error && (
        <p className="text-sans text-11 text-red tracking-wider font-thin opacity-50  pl-[1.25rem] mt-[0.875rem]">
          {error}
        </p>
      )}

      {/* Inline styles for placeholder */}
      <style>{`
        input::placeholder {
          color: ${error ? "#F00" : "#36536b"};
        }
      `}</style>
    </div>
  );
};

export default TextArea;
