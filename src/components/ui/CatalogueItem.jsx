import React from "react";

/**
 * product = {
 *   image: "url",
 *   title: "Product Name",
 *   description: "Short description",
 *   price: "$450",
 *   sizes: ["S", "M", "L", "XL"]
 * }
 */
const CatalogueItem = ({ product }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 ">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-72 object-cover hover:scale-105 "
      />

      {/* Body */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-2xl font-medium tracking-tight mt-2">
          {product.price}
        </p>
      </div>

      {/* Footer (Sizes as bubbles) */}
      <div className="flex flex-wrap gap-2 px-4 pb-4">
        {product.sizes && product.sizes.length > 0 ? (
          product.sizes.map((size, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 border border-blue-300"
            >
              {size}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm">No sizes available</span>
        )}
      </div>
    </div>
  );
};

export default CatalogueItem;
