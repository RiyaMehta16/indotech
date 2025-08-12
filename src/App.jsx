import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { House, Info, Factory } from "lucide-react";

import Home from "./pages/HomePage";

import NotFound from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
const navItems = [
  { name: "Home", link: "/#", icon: <House className="max-sm:w-4" /> },
  { name: "Contact", link: "/#contact", icon: <Info className="max-sm:w-4" /> },
  {
    name: "Our Products",
    link: "/products",
    icon: <Factory className="max-sm:w-4" />,
    submenu: [
      { name: "Metal Sheet Rings", link: "/products/metal-sheet-rings" },
      { name: "AC Motor Covers", link: "/products/ac-motor-covers" },
      { name: "Fan Blades", link: "/products/fan-blades" },
    ],
  },
];

// const navItems = [
//   { name: "Home", link: "/#", icon: <House className="max-sm:w-4" /> },
//   {
//     name: "Contact",
//     link: "/#contact",
//     icon: <Info className="max-sm:w-4" />,
//   },
//   {
//     name: "Our Products >",
//     link: "/products",
//     icon: <Factory className="max-sm:w-4" />,
//   },
// ];
function App() {
  return (
    <BrowserRouter>
      <div className="min-w-80">
        <FloatingNav navItems={navItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
