import React from "react";
const ManufacturingFeaturesCard = ({ features }) => {
  return (
    <div className="mx-32 ">
      <div className="mt-8 grid w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="width-fit text-left bg-blue-50 p-4 rounded-lg hover:shadow-black/10 transition-shadow hover:shadow-2xl "
            >
              <div className="mb-2 w-fit rounded-lg  bg-blue-200 p-1 text-center text-white ">
                {feature.icon}
              </div>
              <div className="text-lg mb-1 font-semibold text-gray-900 dark:text-gray-100">
                {feature.title}
              </div>
              <div className="font-regular max-w-sm text-md text-gray-600  dark:text-gray-400">
                {feature.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManufacturingFeaturesCard;
