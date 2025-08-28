import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";
import HeadingForSections from "../components/ui/HeadingForSections";
import CatalogueItem from "../components/ui/CatalogueItem";
import { PRODUCT_CATEGORIES } from "../constants";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryData = PRODUCT_CATEGORIES[category];

  if (!categoryData) {
    return (
      <div className="min-w-80 py-20 px-4 text-center mt-20">
        <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group mt-10"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 min-w-80">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mt-10 mb-8">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to All Products</span>
        </Link>
      </div>

      {/* Category Header */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <HeadingForSections title={categoryData.name} />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto -mt-10">
            Browse our complete collection of {categoryData.name.toLowerCase()}
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <span className="font-medium">
              {categoryData.products.length} Products Available
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* All Products Grid */}
      <ScrollReveal immediate>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
            {categoryData.products.map((product, index) => (
              <CatalogueItem key={index} product={product} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default CategoryPage;
