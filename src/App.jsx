// src/App.js
import React from "react";
import { HeroParallax } from "./components/sections/HeroParallax";
import { products } from "./utils";
function App() {
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
}

export default App;
