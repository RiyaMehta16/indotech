import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProductCardForParallax } from "../ui/ProductCardForParallax";
import { Header } from "../ui/Header";
import React from "react";

import { ChevronDown } from "lucide-react";

export const ProductsParallax = ({ products }) => {
  const firstRow = products.slice(0, 14);
  const secondRow = products.slice(4, 19);
  const thirdRow = products.slice(0, 24);
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

  return (
    <div
      ref={ref}
      className="h-[190vh] max-xl:h-[190vh] max-lg:h-[170vh] max-lg:-mb-1 max-md:h-[120vh] max-md:mb-16 max-sm:-mb-28 max-sm:h-[115vh]  -mb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header className="mt-32" />
      <motion.div
        className="max-sm:flex hidden flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
        }}
      >
        <ChevronDown className="text-blue-900 w-6 h-6 mb-2 animate-pulse" />
        <span className="text-white text-sm">Scroll</span>
      </motion.div>
      <motion.div
        style={{ rotateX, rotateY, rotateZ, translateY, opacity }}
        className="flex flex-col items-center space-y-5  bg-blue-900 py-10 px-96 max-sm:px-4 max-sm:py-4 max-sm:-translate-y-28"
      >
        <motion.h2
          className="text-4xl font-bold text-center text-nowrap text-white max-xl:text-4xl   max-lg:text-2xl max-sm:text-md max-sm:text-wrap  max-sm:whitespace-normal max-sm:mb-4"
          style={{ opacity }}
        >
          A Diverse Collection to Choose From
        </motion.h2>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-5 max-sm:space-x-2 max-sm:mb-2">
          {firstRow.map((product) => (
            <ProductCardForParallax
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-5 space-x-5 max-sm:space-x-2 max-sm:mb-2">
          {secondRow.map((product) => (
            <ProductCardForParallax
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 max-sm:space-x-2 max-sm:mb-2">
          {thirdRow.map((product) => (
            <ProductCardForParallax
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
