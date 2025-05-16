import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const ProductCard = ({ product }) => {
  return (
    <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 min-h-[34rem] sm:p-6 bg-white dark:bg-zinc-900">
      <img
        src={product.image}
        alt={product.title}
        height="400"
        width="400"
        className="object-contain rounded-lg border border-neutral-600/10"
      />
      <p className="text-base  sm:text-xl text-neutral-600 font-semibold mt-4 mb-2 dark:text-neutral-200">
        {product.title}
      </p>

      <p className="text-md text-neutral-600 dark:text-neutral-400">
        {product.description}
      </p>
      <button className="rounded-full pl-4 pr-1 py-1 text-blue-800 hover:text-blue-900 hover:cursor-pointer flex items-center space-x-1 mt-4 text-md font-bold dark:bg-zinc-800">
        <span>See More &rarr;</span>
      </button>
    </BackgroundGradient>
  );
};

export default ProductCard;
