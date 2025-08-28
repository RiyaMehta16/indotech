import React from "react";
import HeadingForSections from "../ui/HeadingForSections";
import aboutus from "../../assets/about.png";
import List from "../ui/List";
import { Button } from "../ui/Button";
import { BackgroundGradient } from "../ui/BackgroundGradient";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const listItems = [
    "Best Fan Motors",
    "Quality Cooler Parts",
    "Hardware Accessories",
    "Global Delivery",
  ];

  return (
    <div className="my-20 px-4 md:px-12 lg:px-32" id="about">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={aboutus}
          alt="people in factory"
          className="w-full max-w-md h-auto lg:h-[30rem] rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center items-center text-left w-full">
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 md:text-4xl lg:text-5xl">
            About Indotech Engineering
          </h2>

          <p className="py-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Indotech Engineering Products was established in 2009 with a clear
            vision: to engineer world-class fan blades and sheet metal
            components with precision that speaks for itself. Managed by a team
            of engineers with a hardcore engineering mindset, our company has
            grown to become the No. 1 manufacturer of metal fan blades in India.
          </p>
          <p className="py-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            At Indotech, precision isn’t just a buzzword — we deal in microns.
            Every blade we produce is a result of in-depth research, advanced
            design, and rigorous testing. Our in-house R&D team ensures that our
            fan blades deliver maximum air throw at minimum wattage and current,
            optimizing RPM and motor life.
          </p>
          <p className="py-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            With innovation, precision, and engineering at our core, we continue
            to set benchmarks in the industry
          </p>

          <List listItems={listItems} className="mt-5" />
          <Button className="mt-10 z-50" onClick={() => navigate("/aboutus")}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
