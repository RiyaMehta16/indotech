// src/App.js
import React from "react";
import { ProductsParallax } from "./components/sections/ProductsParallax";
import { products } from "./utils";
import AboutSection from "./components/sections/AboutSection";
function App() {
  return (
    <div>
      <ProductsParallax products={products} />
      <AboutSection />
    </div>
  );
}

export default App;
