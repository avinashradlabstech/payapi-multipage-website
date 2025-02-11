import React, { useState } from "react";
interface TextAreaData {
  id: string;
  name: string;
  rows?: number;
  cols?: number;
  placeholder: string;
  value: string;
  className?: string;
  validation?: (value: string) => string | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
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
  onChange,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");

  
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (validation) {
      setError(validation(e.target.value));
    }
    setIsFocused(false);
    onBlur(e); 
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
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={onChange} 
      />

    </div>
  );
};

export default TextArea;
