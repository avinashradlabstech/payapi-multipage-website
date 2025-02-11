import React, { useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

interface ContactFormData {
  additionalDivCss?: string;
  heading?: string;
  headingCss?: string;
  additionalHeadingCss?: string;
  buttonLabel: string;
  autoComplete?: string;
  additionalButtonCss?: string;
  errorDivCss?: string;
}

const ContactForm: React.FC<ContactFormData> = ({
  additionalDivCss = "",
  heading,
  headingCss = "",
  additionalHeadingCss = "",
  buttonLabel,
  additionalButtonCss = "",
  autoComplete = "off",
  errorDivCss = "",
}) => {
  const [focusedFields, setFocusedFields] = useState<{
    [key: string]: boolean;
  }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<{
    name: string;
    company: string;
    email: string;
    title: string;
    message: string;
    agreeToUpdates: boolean;
  }>({
    name: "",
    company: "",
    email: "",
    title: "",
    message: "",
    agreeToUpdates: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  // Email validation function
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Please enter your email address";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  };

  // Message validation function
  const validateMessage = (value: string) => {
    if (!value) {
      return "This field can't be empty";
    }
    if (value.length < 10) {
      return "The message must be at least 10 characters long";
    }
    return null;
  };

  // Message validation
  const requiredMessage = (value: string) => {
    if (!value) {
      return "This field can't be empty";
    }
    if (value.length < 10) {
      return "The message must be at least 10 characters long";
    }
    return undefined;
  };

  // Letters only validation
  const validateLettersOnly = (value: string, fieldName: string) => {
    if (!value.trim()) {
      return `Please enter your ${fieldName.toLowerCase()}`;
    }
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(value)) {
      return `${fieldName} can only contain letters and spaces`;
    }
    return null;
  };

  // Handle input change and reset validation error
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null, // Reset the error for the current field
    }));
  };

  // Handle field blur for validation
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let validationError = null;

    // Validate based on field
    if (name === "email") {
      validationError = validateEmail(value);
    } else if (name === "message") {
      validationError = validateMessage(value);
    } else if (name === "name" || name === "company" || name === "title") {
      validationError = validateLettersOnly(
        value,
        name.charAt(0).toUpperCase() + name.slice(1)
      );
    } else if (name === "agreeToUpdates" && !value) {
      validationError = "You must agree to continue.";
    }

    setErrors({ ...errors, [name]: validationError });
    console.log(errors?.length)
    setFocusedFields({ ...focusedFields, [name]: false });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string | null } = {};

    // Validate all fields
    Object.keys(formValues).forEach((field) => {
      const value = formValues[field as keyof typeof formValues];
      let error = null;
      if (field === "email") {
        error = validateEmail(value as string);
      } else if (field === "message") {
        error = validateMessage(value as string);
      } else if (field === "name" || field === "company" || field === "title") {
        error = validateLettersOnly(
          value as string,
          field.charAt(0).toUpperCase() + field.slice(1)
        );
      }
      if (error) validationErrors[field] = error;
    });

    if (!formValues.agreeToUpdates) {
      validationErrors.agreeToUpdates = "You must agree to continue.";
    }

    setErrors(validationErrors);
    console.log(Object.keys(validationErrors).length);
    if (Object.keys(validationErrors).length === 0) {
      console.log("No error");
      console.log("Form submitted successfully!", formValues);
      setSubmissionSuccess(true);
      setFormValues({
        name: "",
        company: "",
        email: "",
        title: "",
        message: "",
        agreeToUpdates: false,
      });
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center sm:mx-0 ${additionalDivCss}`}
    >
      {heading && (
        <div className={`text-center ${headingCss}`}>
          <h1
            className={`font-serif text-secondary-san-juan-blue text-32 ${additionalHeadingCss}`}
          >
            {heading}
          </h1>
        </div>
      )}
      <form
        className="flex flex-col w-[327px] lg:w-[445px] gap-[25px] pt-10"
        onSubmit={handleSubmit}
      >
        {["name", "email", "company", "title"].map((field) => (
          <div key={field} className="flex flex-col">
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={
                typeof formValues[field as keyof typeof formValues] ===
                "boolean"
                  ? ""
                  : (formValues[field as keyof typeof formValues] as string)
              }
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() =>
                setFocusedFields({ ...focusedFields, [field]: true })
              }
              className={`pl-[1.25rem] py-[0.625rem] focus:outline-none border-b border-secondary-san-juan-blue
               font-sans text-15 text-secondary-san-juan-blue font-normal leading-25 -tracking-0.115 opacity-75 bg-alice-blue
               xs:min-w-[20.4375rem] min-h-[3rem] sm:relative sm:font-bold lg:font-normal 
               ${focusedFields[field] ? "opacity-100" : ""} ${errors[field] ? "text-red" : "text-secondary-san-juan-blue"}`}
              autoComplete={autoComplete}
            />
            {errors[field] && (
              <p
                className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 ${errorDivCss}`}
              >
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        <div className="flex flex-col">
          <TextArea
            id="message"
            name="message"
            placeholder="Message"
            value={formValues.message}
            className="border-secondary-san-juan-blue bg-alice-blue xs:min-w-[20.4375rem] min-h-[3rem] sm:relative sm:font-bold lg:font-normal"
            validation={requiredMessage}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && (
            <p
              className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 ${errorDivCss}`}
            >
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <Checkbox
            label="Stay up-to-date with company announcements and updates to our API"
            onChange={(checked) => {
              setFormValues((prev) => ({ ...prev, agreeToUpdates: checked }));
              if (checked) {
                setErrors((prev) => ({ ...prev, agreeToUpdates: null }));
              }
            }}
            checked={formValues.agreeToUpdates}
            
          />
          {errors.agreeToUpdates && (
            <p
              className={`font-sans text-11 text-red tracking-wider font-thin opacity-50 ${errorDivCss}`}
            >
              {errors.agreeToUpdates}
            </p>
          )}
        </div>

        <div className="justify-start flex pt-[24px]">
          <Button
            type="outline"
            additionalButtonCss={`${additionalButtonCss}`}
            text={buttonLabel}
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
      </form>
    </div>
  );
};

export default ContactForm;
