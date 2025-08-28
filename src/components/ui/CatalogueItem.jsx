import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CatalogueItem = ({ product }) => {
  // Use images array if available, fallback to single image
  const productImages = product.images || [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.1 }}
      className="group max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 relative transform transition-all duration-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Image Container with Carousel */}
      <div className="relative overflow-hidden h-80">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={productImages[currentImageIndex]}
            alt={`${product.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-80 object-cover scale-90 transition-transform duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Carousel Navigation - Only show if multiple images and hovered */}
        {productImages.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <AnimatePresence>
              {isHovered && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Image Indicators */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
              {productImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? "bg-white shadow-lg scale-125"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1} / {productImages.length}
            </div>
          </>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg">
          <span className="text-sm font-semibold">{product.price}</span>
        </div>
      </div>

      {/* Body with Enhanced Typography (unchanged) */}
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

      {/* Enhanced Footer with Animated Bubbles (unchanged) */}
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

      {/* Decorative Elements (unchanged) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-600 to-blue-500"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-bounce"></div>
    </motion.div>
  );
};

export default CatalogueItem;
