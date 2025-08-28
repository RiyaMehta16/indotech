import React from "react";
import HeadingForSections from "../ui/HeadingForSections";
import { Bolt, ShieldCheck, Globe } from "lucide-react";
import ManufacturingFeaturesCard from "../ManufacturingFeaturesCard";

const features = [
  {
    id: 0,
    title: "Precision Engineering",
    text: "State-of-the-art machinery and expert engineers ensuring precise manufacturing.",
    icon: <Bolt color="#1c3c84" strokeWidth={2} />,
  },
  {
    id: 1,
    title: "Quality Assurance",
    text: "Rigorous quality control processes meeting international standards.",
    icon: <ShieldCheck color="#1c3c84" strokeWidth={2} />,
  },
  {
    id: 2,
    title: "Global Delivery",
    text: "Timely delivery of products to clients worldwide with tracking systems.",
    icon: <Globe color="#1c3c84" strokeWidth={2} />,
  },
];
const ManufacturingSection = () => {
  return (
    <div id="features" className=" ">
      <HeadingForSections
        title="Our Manufacturing Excellence"
        text="We are committed to providing the best manufacturing experience to our vendors and partners across the globe with complete quality standards."
      />
      <ManufacturingFeaturesCard features={features} />
    </div>
  );
};

export default ManufacturingSection;
