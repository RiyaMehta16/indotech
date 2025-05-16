import React from "react";
import ProductRangeCards from "../ProductRangeCards";
import HeadingForSections from "../ui/HeadingForSections";
import metalSheetRings from "../../assets/metalSheetRings.png";
import acMotorCovers from "../../assets/acMotorCovers.png";
import fanBlades from "../../assets/fanBlades.png";
import ProductCard from "../ProductRangeCards";
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
    <div className="bg-blue-50 py-20">
      <HeadingForSections title="Our Product Range" />
      <div className="flex space-x-10 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRangeSection;
