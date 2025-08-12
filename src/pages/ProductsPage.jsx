import React from "react";
import ScrollReveal from "../components/ui/ScrollReveal";
import HeadingForSections from "../components/ui/HeadingForSections";
import ProductCard from "../components/ProductRangeCards";
import { allProductsItems } from "../utils";
// Example: You could import ALL individual product images from /assets/* folders
// later if you want a more detailed listing.

const ProductsPage = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 min-w-80">
      <ScrollReveal>
        <HeadingForSections
          className="mt-16 max-lg:mt-12 max-md:mt-10 max-sm:mt-6"
          title="Our Complete Product Catalogue"
        />
      </ScrollReveal>

      <div className="w-full max-w-screen-xl mx-auto mt-10">
        <ScrollReveal immediate>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 place-items-center">
            {allProductsItems.map((product) => (
              <div
                key={product.id}
                className="flex justify-center w-full max-w-80"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProductsPage;
