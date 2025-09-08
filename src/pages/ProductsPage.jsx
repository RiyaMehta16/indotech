import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import HeadingForSections from "../components/ui/HeadingForSections";
import CatalogueItem from "../components/ui/CatalogueItem";
import { ChevronRight, ArrowRight } from "lucide-react";

import {
  FANBLADES,
  COOLER_ACCESSORIES,
  PEDESTAL_FANS,
  COOLERS,
  STANDS,
  MOTOR_COMPONENTS,
} from "../constants";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import { CardsSkeleton } from "../components/ui/LoadingSkeletons";
import Footer from "../components/sections/Footer";
/* 
      { name: "Coolers", link: "/products/coolers" },
       */
const categories = [
  {
    title: " Fan Blades",
    products: FANBLADES,
    route: "/products/fan-blades",
    description: "High-efficiency blades for maximum airflow",
  },
  {
    title: "Pedestal Fans",
    products: PEDESTAL_FANS,
    route: "/products/pedestral-fans",
    description: "Commercial-grade pedestal fans for every need",
  },
  {
    title: "Cooler Fans",
    products: COOLERS,
    route: "/products/coolers",
    description: "Commercial-grade Cooler fans for every need",
  },
  {
    title: "Cooler Accessories",
    products: COOLER_ACCESSORIES,
    route: "/products/cooler-accessories",
    description: "Essential accessories for optimal cooler performance",
  },

  {
    title: "Stands",
    products: STANDS,
    route: "/products/stands",
    description: "Stands for cooler durability and safety",
  },

  {
    title: "Cooler Motor Components/Parts",
    products: MOTOR_COMPONENTS,
    route: "/products/motor-components",
    description: "Precision-engineered components for reliable operation",
  },
];
const ProductsPage = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 min-w-80 relative">
      <ScrollReveal>
        <HeadingForSections
          className="mt-16 max-lg:mt-12 max-md:mt-10 max-sm:mt-6"
          title="Our Complete Product Catalogue"
        />
      </ScrollReveal>

      {categories.map((category, categoryIndex) => (
        <ScrollReveal key={categoryIndex} threshold={0.05}>
          <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center">
            {/* Category Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl text-blue-950 font-bold mb-3">
                {category.title}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid - Show first 3 only */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.slice(0, 3).map((product, index) => (
                <CatalogueItem key={index} product={product} />
              ))}
            </div>

            {/* Explore More Button */}
            {category.products.length > 3 && (
              <div className="flex justify-center mt-12">
                <Link
                  to={category.route}
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore All {category.title}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm opacity-75">
                      ({category.products.length} items)
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
      <ErrorBoundary>
        <Suspense fallback={<CardsSkeleton />}>
          <Footer className="-mb-20" />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProductsPage;
