import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProductCard } from "../ui/ProductCard";
import { Header } from "../ui/Header";
import React from "react";
import { FloatingNav } from "../ui/FloatingNavbar";

import { House, Info, Factory } from "lucide-react";

export const ProductsParallax = ({ products }) => {
  const firstRow = products.slice(0, 8);
  const secondRow = products.slice(8, 16);
  const thirdRow = products.slice(16, 24);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [48, 0]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  const navItems = [
    { name: "Home", link: "/", icon: <House /> },
    { name: "About", link: "/about", icon: <Info /> },
    { name: "We Manufacture", link: "/products", icon: <Factory /> },
  ];

  return (
    <div
      ref={ref}
      className="h-[260vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <FloatingNav navItems={navItems} />
      <Header />
      <motion.div
        style={{ rotateX, rotateY, rotateZ, translateY, opacity }}
        className="flex flex-col items-center space-y-12  bg-blue-900 py-20 px-96"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-white"
          style={{ opacity }}
        >
          A Diverse Collection to Choose From
        </motion.h2>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
