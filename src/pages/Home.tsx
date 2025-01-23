import React, { useState } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    console.log('Checkbox checked:', checked);
  };

  return (
    <>
      <div className="px-5 py-5 flex gap-5">
        <Button type="primary" text="Schedule a Demo" />
        <Button type="primary" text="Schedule a Demo" disabled={true} />
      </div>

      <div className="bg-secondary-mirage-blue flex gap-5 px-5 py-5">
        <Button type="secondary" text="About Us" />
        <Button type="secondary" text="About Us" disabled={true} />
      </div>

      <div className="flex gap-5 px-5 py-5">
        <Button type="outline" text="Submit Query" />
        <Button type="outline" text="Submit Query" disabled={true} />
      </div>

      <div className="flex gap-5 px-5 py-5">
        <Checkbox
          label="Stay up-to-date with company announcements and updates to our API"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="flex gap-5 px-5 py-5">
        <Checkbox
          label="Disabled State"
          checked={isChecked}
          disabled={true}
          onChange={handleCheckboxChange}
        />
      </div>
    </>
  );
};
export default Home;
