// src/App.js
import React from "react";
import { ProductsParallax } from "./components/sections/ProductsParallax";
import { products } from "./utils";
import AboutSection from "./components/sections/AboutSection";
import ManufacturingSection from "./components/sections/ManufacturingSection";
import ProductRangeSection from "./components/sections/ProductRangeSection";
import GetInTouchSection from "./components/sections/GetInTouchSection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div>
      <ProductsParallax products={products} />
      <ManufacturingSection />
      <ProductRangeSection />
      <AboutSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}

export default App;
