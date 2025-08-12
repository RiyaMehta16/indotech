import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { House, Info, Factory } from "lucide-react";

import Home from "./pages/HomePage";

import NotFound from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const navItems = [
    { name: "Home", link: "/#", icon: <House className="max-sm:w-4" /> },
    {
      name: "Contact",
      link: "/#contact",
      icon: <Info className="max-sm:w-4" />,
    },
    {
      name: "Our Products",
      link: "/#products",
      icon: <Factory className="max-sm:w-4" />,
    },
  ];

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
