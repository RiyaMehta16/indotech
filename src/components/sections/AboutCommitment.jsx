// src/components/sections/AboutCommitment.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { MotionScrollReveal } from "../../utils/MotionUtils";
import HeadingForSections from "../ui/HeadingForSections";

const AboutCommitment = () => {
  return (
    <MotionScrollReveal>
      <section className="mb-20" id="precision">
        <HeadingForSections title="  Our Commitment to Excellence" text="" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Precision Engineering */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Precision Engineering
            </h3>
            <p className="mb-4 text-base leading-relaxed">
              At Indotech, precision is at the heart of everything we do. We
              manufacture within tolerances as fine as{" "}
              <strong className="font-bold">20 to 100 microns</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    Advanced Facilities:
                  </strong>{" "}
                  80 power presses, specialized hydraulic presses, and CNC
                  machining.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    In-House Capabilities:
                  </strong>{" "}
                  Complete tool room, fabrication, stamping, welding, and powder
                  coating.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    Optimized Performance:
                  </strong>{" "}
                  Ensuring every component enhances efficiency and product life
                  for our customers.
                </span>
              </li>
            </ul>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Quality Assurance
            </h3>
            <p className="mb-4 text-base leading-relaxed">
              Quality is not just a process at Indotech — it is a commitment. We
              stand by our promise of delivering products that meet
              international benchmarks.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    Equipped Inspection Lab:
                  </strong>{" "}
                  Featuring modern instruments like Air Gauges, Height Gauges,
                  and Surface Plates.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    In-House Powder Coating:
                  </strong>{" "}
                  Fuel-efficient ovens and eco-friendly guns for long-lasting
                  finishes.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>
                  <strong className="font-semibold">
                    Proven Track Record:
                  </strong>{" "}
                  Over{" "}
                  <strong className="font-bold">
                    200 satisfied customers globally
                  </strong>{" "}
                  vouch for our quality and service.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MotionScrollReveal>
  );
};

export default AboutCommitment;
