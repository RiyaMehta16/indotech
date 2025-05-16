import React from "react";
import HeadingForSections from "../ui/HeadingForSections";
import aboutus from "../../assets/about.png";
import List from "../ui/List";
import { Button } from "../ui/Button";

const AboutSection = () => {
  const listItems = [
    "Best Fan Motors",
    "Quality Cooler Parts",
    "Hardware Accessories",
    "Global Delivery",
  ];
  return (
    <div className="my-20 mx-32">
      <div className="flex justify-items-center">
        <img
          src={aboutus}
          alt="people in factory"
          className="h-[30rem]  rounded-xl object-bottom"
        />
        <div className="flex flex-col items-center justify-center align-middle ml-20">
          <HeadingForSections
            title="About Indotech Engineering"
            text="Established in India, Indotech Engineering Products has grown to become a leading manufacturer of industrial components, serving clients globally."
          />
          <List listItems={listItems} className="-mt-10" />
          <Button className="mt-10">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
