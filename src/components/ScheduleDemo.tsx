import React, { useState } from "react";
import Button from "./Button";
//import PatternCircle from "../data/svg/background/PatternCircle";

interface ScheduleDemoData {
  additionalDivCss?: string;
  heading?: string;
  headingCss?: string;
  additionalHeadingCss?: string;
  email: string;
  additionalEmailCss?: string;
  placeholder: string;
  buttonLabel: string;
  autoComplete?: string;
  additionalButtonCss?: string;
  subHeading?: string;
  subHeadingCss?: string;
  contactTxt?: string;
  errorDivCss?: string;
}

const ScheduleDemo: React.FC<ScheduleDemoData> = ({
  additionalDivCss = "",
  heading,
  headingCss = "",
  additionalHeadingCss = "",
  email,
  additionalEmailCss = "",
  placeholder,
  buttonLabel,
  additionalButtonCss = "",
  autoComplete = "off",
  subHeading,
  subHeadingCss = "",
  contactTxt,
  errorDivCss = "",
}) => {
  const [btnText, setBtnText] = useState<string>("Schedule a Demo");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
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
  const handleSubmit = async () => {
    const validateError = requiredEmail(inputValue);

    if (validateError) {
      setError(validateError);
      return;
    }

    try {
      setBtnText("Wait..");

      const response = await fetch(
        "https://api-h580.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputValue
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmissionSuccess(true);
        setInputValue("");
        setBtnText("Schedule ad Demo");
      } else {
        console.error("Email sending failed:", data);
        setBtnText("Schedule ad Demo");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setBtnText("Schedule ad Demo");
    }
  };

  const isDisabled = Boolean(error) || inputValue.trim() === "";

  return (
    <div
      className={`flex flex-col justify-center items-center ${additionalDivCss}`}
    >
      {heading && (
        <div
          className={` 
            ${additionalHeadingCss}`}
        >
          <div
            className={`font-serif text-center text-secondary-san-juan-blue 
            text-32 font-normal leading-36 -tracking-0.246 
            sm:text-48 sm:leading-56 lg:-tracking-0.369px 
           
            ${headingCss}`}
          >
            {heading}
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:w-auto w-327 lg:max-w-445">
        {/* Error message */}
        <div className="error-msg hidden sm:block">
          {error && (
            <p
              className={`text-sans text-11 text-red tracking-wider font-thin opacity-50 error-lbl ${errorDivCss}`}
            >
              {error}
            </p>
          )}
        </div>

        <input
          type="email"
          placeholder={placeholder}
          className={` pl-[1.25rem] py-[0.625rem] border-none focus:outline-none  shadow-primary
               text-sans text-[0.9375rem] text-secondary-san-juan-blue font-normal leading-[1.5625rem] tracking-[0.03em] rounded-[1.5rem]  bg-primary-link-water-white
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold 
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
        <div className="error-msg sm:hidden">
          {error && (
            <p
              className={`text-sans text-11 text-red tracking-wider font-thin opacity-50 text-center ${errorDivCss}`}
            >
              {error}
            </p>
          )}
        </div>
        <Button
          type="primary"
          additionalButtonCss={`sm:relative ${additionalButtonCss} ${
            isDisabled ? "cursor-not-allowed" : ""
          }`}
          text={btnText}
          onClick={handleSubmit}
          // disabled={isDisabled}
        />
      </div>

      {submissionSuccess && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-green-600 text-lg font-semibold">Success!</h2>
            <p className="text-sans text-15 text-secondary-san-juan-blue font-normal leading-25">
              Your message has been submitted successfully.
            </p>
            <button
              className="mt-4 bg-primary-dark-pink text-white px-4 py-2 rounded-md"
              onClick={() => setSubmissionSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {subHeading && (
        <div
          className={`font-sans text-15 font-normal text-secondary-light-san-juan-blue pt-4 lg:pt-0 ${subHeadingCss}`}
        >
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
