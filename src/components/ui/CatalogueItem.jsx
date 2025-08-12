import React from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.1 }}
      className="group max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 relative transform transition-all duration-100"
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover scale-90 group-hover:scale-110 transition-transform duration-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100" />

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm font-semibold">{product.price}</span>
        </div>
      </div>

      {/* Body with Enhanced Typography */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-100">
            {product.title}
          </h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">In Stock</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-2">(4.8)</span>
        </div>
      </div>

      {/* Enhanced Footer with Animated Bubbles */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes && product.sizes.length > 0 ? (
            product.sizes.map((size, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 cursor-pointer transition-all duration-100 shadow-sm hover:shadow-md"
              >
                {size}
              </motion.span>
            ))
          ) : (
            <span className="text-gray-400 text-sm italic"></span>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-600 to-blue-500"></div>

      {/* Floating Decoration */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-bounce"></div>
    </motion.div>
  );
};

export default CatalogueItem;
