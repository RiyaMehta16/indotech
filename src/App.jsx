// src/App.js
import React from "react";
import { ProductsParallax } from "./components/sections/ProductsParallax";
import { products } from "./utils";
import AboutSection from "./components/sections/AboutSection";
import ManufacturingSection from "./components/sections/ManufacturingSection";
import ProductRangeSection from "./components/sections/ProductRangeSection";
import GetInTouchSection from "./components/sections/GetInTouchSection";
import Footer from "./components/sections/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";
import { FloatingNav } from "./components/ui/FloatingNavbar";

import { House, Info, Factory } from "lucide-react";
function App() {
  const navItems = [
    { name: "Home", link: "#", icon: <House className="max-sm:w-4" /> },
    { name: "About", link: "#about", icon: <Info className="max-sm:w-4" /> },
    {
      name: "Our Products",
      link: "#products",
      icon: <Factory className="max-sm:w-4" />,
    },
  ];
  return (
    <div id="" className="min-w-80">
      <FloatingNav navItems={navItems} />

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
    </div>
  );
}

export default App;
