import React from "react";
import ProductCard from "../ProductRangeCards";
import HeadingForSections from "../ui/HeadingForSections";
import metalSheetRings from "../../assets/metalSheetRings.png";
import acMotorCovers from "../../assets/acMotorCovers.png";
import fanBlades from "../../assets/fanBlades.png";
import ScrollReveal from "../ui/ScrollReveal";

const ProductRangeSection = () => {
  const products = [
    {
      id: 1,
      image: metalSheetRings,
      title: "Metal Sheet Ring",
      description: "Precision-engineered rings for industrial applications",
    },
    {
      id: 2,
      image: acMotorCovers,
      title: "AC Motor Cover",
      description: "Durable motor covers with perfect finishing",
    },
    {
      id: 3,
      image: fanBlades,
      title: "Other Products",
      description: "High-performance equipment for various applications",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-12" id="products">
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
