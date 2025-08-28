import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { House, Info, Factory } from "lucide-react";

import Home from "./pages/HomePage";

import NotFound from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import AboutPage from "./pages/AboutPage";
const navItems = [
  // { name: "Contact", link: "/#contact", icon: <Info className="max-sm:w-4" /> },
  { name: "About Us", link: "/aboutus", icon: <Info className="max-sm:w-4" /> },
  {
    name: "Our Products",
    link: "/products",
    icon: <Factory className="max-sm:w-4" />,
    submenu: [
      { name: "AC Motor Covers", link: "/products/ac-motor-covers" },
      { name: "Fan Blades", link: "/products/fan-blades" },
      { name: "Coolers", link: "/products/coolers" },
      { name: "Cooler Accessories", link: "/products/cooler-accessories" },
      { name: "Motor Components", link: "/products/motor-components" },
      { name: "Metal Sheet Rings", link: "/products/metal-sheet-rings" },
      { name: "Pedestral Fans", link: "/products/pedestral-fans" },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-w-80">
        <FloatingNav navItems={navItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<CategoryPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
