import React, { useState } from "react";
import Button from "./Button";

interface ScheduleDemoData {
  additionalDivCss?: string;
  heading?: string;
  additionalHeadingCss?: string;
  email: string;
  additionalEmailCss?: string;
  placeholder: string;
  buttonLabel: string;
  autoComplete?: string;
  additionalButtonCss?: string;
  subHeading?: string;
  contactTxt?: string;
  errorDivCss?: string;
}

const ScheduleDemo: React.FC<ScheduleDemoData> = ({
  additionalDivCss = "",
  heading,
  additionalHeadingCss = "",
  email,
  additionalEmailCss = "",
  placeholder,
  buttonLabel,
  additionalButtonCss = "",
  autoComplete = "off",
  subHeading,
  contactTxt,
  errorDivCss = "",
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(""); // Initialize with empty string
  const [error, setError] = useState<string | undefined>("");

  // Email Validation Function
  const requiredEmail = (value: string) => {
    if (!value.trim()) {
      return "Please enter your email address";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address";
    }

    return undefined; // No errors
  };

  // Handle input change and validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Validate input on change
    const validateError = requiredEmail(newValue);
    setError(validateError);
  };

  // Handle Submit and validate before proceeding
  const handleSubmit = () => {
    const validateError = requiredEmail(inputValue);
    if (validateError) {
      setError(validateError);
    } else {
      setError("");
    }
  };

  const isDisabled = Boolean(error) || inputValue.trim() === "";

  return (
    <div className={`flex flex-col items-center ${additionalDivCss}`}>
      {heading && (
        <div
          className={`font-serif text-center text-secondary-san-juan-blue 
            text-32 font-normal leading-36 tracking-[-0.246px] 
            sm:text-48 sm:leading-56 
            ${additionalHeadingCss}`}
        >
          {heading}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 ">
        <div className="flex flex-col justify-center w-full sm:w-auto">
          <input
            type="email"
            placeholder={placeholder}
            className={` pl-[1.25rem] py-[0.625rem] border-none focus:outline-none  shadow-primary
               text-sans text-[0.9375rem] text-secondary-san-juan-blue font-normal leading-[1.5625rem] tracking-[0.03em] rounded-[1.5rem]  bg-primary-link-water-white
               xs:min-w-[20.4375rem] min-h-[3rem] 
               sm:min-w-[27.8125rem] sm:relative sm:right-[-100px] sm:font-bold
              
              ${additionalEmailCss}
              ${isFocused ? "opacity-100 " : ""}  
              ${error ? " text-red" : "text-secondary-san-juan-blue"} `}
            id={email}
            name={email}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            autoComplete={autoComplete}
          />

          {/* Error message */}
          <div className="">
            {error && (
              <p
                className={`text-sans text-11 text-red tracking-wider font-thin opacity-50 sm:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>

        <Button
          type="primary"
          additionalButtonCss={`sm:relative sm:right-[72px] ${additionalButtonCss} ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          text={buttonLabel}
          onClick={handleSubmit}
          disabled={isDisabled}
        />
      </div>

      {subHeading && (
        <div className="font-sans text-15 font-normal text-secondary-light-san-juan-blue pt-4">
          {subHeading}
          {contactTxt && (
            <span className="font-sans text-15 font-bold text-secondary-light-san-juan-blue ">
              <a href="/contact"> {contactTxt}</a>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ScheduleDemo;
