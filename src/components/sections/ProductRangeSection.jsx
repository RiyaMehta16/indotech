import React from "react";
import ProductCard from "../ProductRangeCards";
import HeadingForSections from "../ui/HeadingForSections";
import { farattafanblade2, coolerMotor1, cooler3 } from "../../assets";
import ScrollReveal from "../ui/ScrollReveal";

const products = [
  {
    id: 1,
    image: farattafanblade2,
    title: "Fan Blades",
    description: "Precision-engineered fan blades for industrial applications",
    link: "/products/fan-blades",
  },
  {
    id: 2,
    image: coolerMotor1,
    title: "Cooler Motors",
    description: "Durable cooler motors with perfect finishing",
    link: "/products/ac-motor-covers",
  },
  {
    id: 3,
    image: cooler3,
    title: "Other Products",
    description: "High-performance equipment for various applications",
    link: "/products",
  },
];
const ProductRangeSection = () => {
  return (
    <section
      id="products"
      className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12 max-sm:-mt-20"
    >
      <ScrollReveal>
        <HeadingForSections title="Our Product Range" />

        <div className="w-full max-w-screen-xl mx-auto mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 place-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className={`flex justify-center w-full max-w-80 `}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProductRangeSection;
