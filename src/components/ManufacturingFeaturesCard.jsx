import React from "react";
import { useNavigate } from "react-router-dom";

const ManufacturingFeaturesCard = ({ features }) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-full text-left bg-blue-50 p-6 rounded-xl hover:shadow-2xl hover:shadow-black/10 transition-shadow hover:cursor-pointer"
            onClick={() => navigate(feature.link)}
          >
            <div className="mb-3 w-fit rounded-lg bg-blue-200 p-2 text-white">
              {feature.icon}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {feature.title}
            </div>
            <div className="text-md text-gray-600 dark:text-gray-400">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturingFeaturesCard;
