import React from "react";
import ScrollReveal from "../components/ui/ScrollReveal";
import HeadingForSections from "../components/ui/HeadingForSections";

import CatalogueItem from "../components/ui/CatalogueItem";

import {
  COOLERS,
  COVERS,
  FANBLADES,
  ALL_PRODUCTS,
  PRODUCT_CATEGORIES,
  COOLER_ACCESSORIES,
  MOTOR_COMPONENTS,
  MOTOR_RINGS,
  PEDESTAL_FANS,
} from "../constants";
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
            ALL_PRODUCTS
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_PRODUCTS.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Cooler Stands & Motors
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COOLER_ACCESSORIES.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Cooler Motor Covers
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COVERS.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Cooler Fan Blades
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FANBLADES.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Cooler Motor Components/Parts
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MOTOR_COMPONENTS.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal threshold={0.05}>
        <div className="min-w-80 py-10 px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl text-center text-blue-950 font-bold my-5">
            Cooler Metal Sheet Rings
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MOTOR_RINGS.map((p, index) => (
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
            {PEDESTAL_FANS.map((p, index) => (
              <CatalogueItem key={index} product={p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProductsPage;
