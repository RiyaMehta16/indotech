import React from "react";
import { CircleCheckBig } from "lucide-react";

const List = ({ className, listItems = [] }) => {
  return (
    <div className={`mx-auto max-w-4xl  ${className}`}>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-28">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CircleCheckBig color="green" className="mt-1 shrink-0" />
            <span className="text-lg font-normal text-nowrap text-neutral-600 dark:text-neutral-400">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
