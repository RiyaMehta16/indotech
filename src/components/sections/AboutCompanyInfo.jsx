// src/components/sections/AboutCompanyInfo.jsx
import React from "react";
import { MotionScrollReveal } from "../../utils/MotionUtils";
import company from "../../assets/company.png";

const AboutCompanyInfo = () => {
  return (
    <MotionScrollReveal>
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Company
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-lg leading-relaxed max-md:mx-16 max-md:text-center max-sm:mx-12">
            <p>
              Indotech Engineering Products is a trusted name in precision sheet
              metal manufacturing, specializing in high-performance fan blades
              for cooling and ventilation applications. Our commitment to
              precision, innovation, and customer satisfaction enables us to
              serve both domestic and global markets with reliability and
              confidence.
            </p>
            <p>
              Over the years, we have consistently invested in technology,
              automation, and design capabilities to stay ahead of industry
              needs. From conceptual design to production, every stage is backed
              by engineering discipline and attention to detail.
            </p>
            <p>
              This ability to integrate customer needs with in-house innovation
              has positioned Indotech as a preferred partner for companies
              seeking dependable, high-precision engineered products.
            </p>
          </div>
          <div className="p-4">
            <img
              src={company}
              alt="Indotech Facility"
              className="rounded-lg shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </section>
    </MotionScrollReveal>
  );
};

export default AboutCompanyInfo;
