import React from "react";
import { ProductsParallax } from "../components/sections/ProductsParallax";
import { products } from "../constants";
import AboutSection from "../components/sections/AboutSection";
import ManufacturingSection from "../components/sections/ManufacturingSection";
import ProductRangeSection from "../components/sections/ProductRangeSection";
import GetInTouchSection from "../components/sections/GetInTouchSection";
import Footer from "../components/sections/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const Home = () => {
  return (
    <>
      <ProductsParallax products={products} />
      <ScrollReveal>
        <ManufacturingSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProductRangeSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <GetInTouchSection />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
};

export default Home;
