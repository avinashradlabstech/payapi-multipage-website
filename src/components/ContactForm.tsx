import React, { useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

interface ContactFormData {
  additionalDivCss?: string;
  heading?: string;
  headingCss?: string;
  additionalHeadingCss?: string;
  email?: string;
  additionalEmailCss?: string;
  placeholder?: string;
  buttonLabel: string;
  autoComplete?: string;
  additionalButtonCss?: string;
  subHeading?: string;
  subHeadingCss?: string;
  contactTxt?: string;
  errorDivCss?: string;
}

const ContactForm: React.FC<ContactFormData> = ({
  additionalDivCss = "",
  heading,
  headingCss = "",
  additionalHeadingCss = "",
  additionalEmailCss = "",
  buttonLabel,
  additionalButtonCss = "",
  autoComplete = "off",
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

  const requiredMessage = (value: string) => {
    if (!value) {
      return "This field can't be empty";
    }
    if (value.length < 10) {
      return "The message must be at least 10 characters long";
    }
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
    <div
      className={`flex flex-col justify-center items-center sm:mx-0 ${additionalDivCss}`}
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
      <div className="flex flex-col w-[327px] lg:w-[445px] gap-[25px] pt-10 ">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className={` pl-[1.25rem] py-[0.625rem]  focus:outline-none border-b border-secondary-san-juan-blue
               font-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 opacity-75 bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold 
             lg:font-normal
              ${additionalEmailCss}
              ${isFocused ? "opacity-100 " : ""}  
              ${error ? " text-red" : "text-secondary-san-juan-blue"} `}
            id="name"
            name="name"
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            autoComplete={autoComplete}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className={` pl-[1.25rem] py-[0.625rem]  focus:outline-none border-b border-secondary-san-juan-blue
                   font-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 opacity-75 bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold 
             lg:font-normal
              ${additionalEmailCss}
              ${isFocused ? "opacity-100 " : ""}  
              ${error ? " text-red" : "text-secondary-san-juan-blue"} `}
            id="emailAddress"
            name="emailAddress"
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            autoComplete={autoComplete}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Company"
            className={` pl-[1.25rem] py-[0.625rem]  focus:outline-none border-b border-secondary-san-juan-blue
                  font-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 opacity-75 bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold 
             lg:font-normal
              ${additionalEmailCss}
              ${isFocused ? "opacity-100 " : ""}  
              ${error ? " text-red" : "text-secondary-san-juan-blue"} `}
            id="company"
            name="company"
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            autoComplete={autoComplete}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Title"
            className={` pl-[1.25rem] py-[0.625rem]  focus:outline-none border-b border-secondary-san-juan-blue
                 font-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 opacity-75 bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold 
             lg:font-normal
              ${additionalEmailCss}
              ${isFocused ? "opacity-100 " : ""}  
              ${error ? " text-red" : "text-secondary-san-juan-blue"} `}
            id="emailAddress"
            name="emailAddress"
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            autoComplete={autoComplete}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <TextArea
            placeholder="Message"
            className=" border-secondary-san-juan-blue  bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] 
             sm:relative sm:font-bold
             lg:font-normal"
            id="message"
            name="message"
            validation={requiredMessage}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl ${errorDivCss}`}
              >
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <Checkbox
            label="Stay up-to-date with company announcements and updates to our API"
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />

          {/* Error message */}
          <div className="error-msg">
            {error && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 sm:cform-error-lbl lg:error-lbl relative`}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="justify-start flex pt-[24px]">
        <Button
          type="outline"
          additionalButtonCss={`sm:relative  ${additionalButtonCss} ${
            isDisabled ? "cursor-not-allowed" : ""
          }`}
          text={buttonLabel}
          onClick={handleSubmit}
          // disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default ContactForm;
