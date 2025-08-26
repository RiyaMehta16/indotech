// src/components/sections/AboutIntroduction.jsx
import React from "react";
import { MotionScrollReveal } from "../../utils/MotionUtils";

const AboutIntroduction = () => {
  return (
    <MotionScrollReveal>
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Indotech Engineering Products was established in 2009 with a clear
          vision: to engineer world-class fan blades and sheet metal components.
          Managed by a team of engineers with a hardcore engineering mindset,
          our company has grown to become the{" "}
          <strong className="text-blue-600">
            No. 1 manufacturer of metal fan blades in India
          </strong>
          .
        </p>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          At Indotech, precision isn't just a buzzword —{" "}
          <strong className="text-blue-600">we deal in microns</strong>. Every
          blade we produce is a result of in-depth research, advanced design,
          and rigorous testing. With innovation, precision, and engineering at
          our core, we continue to set benchmarks in the industry.
        </p>
      </div>
    </MotionScrollReveal>
  );
};

export default AboutIntroduction;
