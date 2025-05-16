// src/App.js
import React from "react";
import { ProductsParallax } from "./components/sections/ProductsParallax";
import { products } from "./utils";
function App() {
  return (
    <div>
      <ProductsParallax products={products} />
    </div>
  );
}

export default App;
