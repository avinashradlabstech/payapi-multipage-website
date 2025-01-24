import React, { useState } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import TextBox from "../components/TextBox";
import TextArea from "../components/TextArea";

const Component: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    console.log("Checkbox checked:", checked);
  };

  const required = (value: string) => {
    return value ? undefined : "This field can't be empty";
  };

  const requiredMessage = (value: string) => {
    if (!value) {
      return "This field can't be empty";
    }
    if (value.length < 10) {
      return "The message must be at least 10 characters long";
    }
  };

  return (
    <>
      <div className="flex flex-col px-5 py-5">
      <p className="py-5">Button Primary</p>
        <div className="px-5 py-5 flex gap-5 ">
          <Button type="primary" text="Schedule a Demo" />
          <Button type="primary" text="Schedule a Demo" disabled={true} />
        </div>
        <p className="py-5">Button Secondary</p>
        <div className="bg-secondary-mirage-blue flex gap-5 px-5 py-5 ">
          <Button type="secondary" text="About Us" />
          <Button type="secondary" text="About Us" disabled={true} />
        </div>
        <p className="py-5">Button Outline</p>
        <div className="flex gap-5 px-5 py-5">
          <Button type="outline" text="Submit Query" />
          <Button type="outline" text="Submit Query" disabled={true} />
        </div>
        <p className="py-5">Checkbox</p>
        <div className="flex gap-5 px-5 py-5">
          <Checkbox
            label="Stay up-to-date with company announcements and updates to our API"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <p className="py-5">Checkbox disabled</p>
        <div className="flex gap-5 px-5 py-5">
          <Checkbox
            label="Disabled State"
            checked={isChecked}
            disabled={true}
            onChange={handleCheckboxChange}
          />
        </div>
        <p className="py-5">TextBox</p>
        <div className="flex gap-5 px-5 py-5">
          <TextBox
            placeholder="Name"
            id="name"
            name="name"
            validation={required}
          />
        </div>
        <p className="py-5">TexArea</p>
        <div className="flex gap-5 px-5 py-5 max-w-[12.5rem]">
          <TextArea
            placeholder="Message"
            id="message"
            name="message"
            validation={requiredMessage}
          />
        </div>
      </div>
    </>
  );
};
export default Component;
