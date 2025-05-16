import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const ProductCard = ({ product }) => {
  return (
    <BackgroundGradient
      className={`rounded-2xl p-4 sm:p-6 bg-white dark:bg-zinc-900 w-full max-w-sm min-h-[30rem] sm:min-h-[28rem] max-md:max-w-72 max-lg:max-w-80  max-sm:min-h-60 max-sm:max-w-80   ${
        product.id === 2 ? "max-lg:col-span-2 max-lg:mx-auto" : ""
      }`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 sm:h-64 object-contain max-md:object-cover rounded-lg border border-neutral-600/10"
      />

      <p className="text-lg sm:text-xl text-neutral-600 font-semibold mt-4 mb-2 dark:text-neutral-200">
        {product.title}
      </p>

      <p className="text-sm sm:text-md text-neutral-600 dark:text-neutral-400">
        {product.description}
      </p>

      <button className="rounded-full pl-4 pr-2 py-2 text-blue-800 hover:text-blue-900 hover:cursor-pointer flex items-center space-x-1 mt-4 text-sm sm:text-md font-bold dark:bg-zinc-800">
        <span>See More &rarr;</span>
      </button>
    </BackgroundGradient>
  );
};

export default ProductCard;
