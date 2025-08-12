import React from "react";
import ScrollReveal from "../components/ui/ScrollReveal";
import HeadingForSections from "../components/ui/HeadingForSections";

import CatalogueItem from "../components/ui/CatalogueItem";
// Example: You could import ALL individual product images from /assets/* folders
// later if you want a more detailed listing.
import {
  covers,
  fanblades,
  motorComponents,
  motorRings,
  pedestralFan,
} from "../utils";
const ProductsPage = () => {
  return (
    <div className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 min-w-80">
      <ScrollReveal>
        <HeadingForSections
          className="mt-16 max-lg:mt-12 max-md:mt-10 max-sm:mt-6"
          title="Our Complete Product Catalogue"
        />
      </ScrollReveal>

      <ScrollReveal immediate>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Covers
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {covers.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Fanblades
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fanblades.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Motor Components
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {motorComponents.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Motor Rings
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {motorRings.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Pedestral Fan
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pedestralFan.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProductsPage;
