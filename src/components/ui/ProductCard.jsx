import { motion } from "framer-motion";

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
        borderRadius: "0.5rem", // 8px base
        overflow: "hidden", // ensure children respect rounded corners
      }}
      whileHover={{
        y: -5,
        borderRadius: "1rem", // 16px on hover
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      key={product.title}
      className="group/product h-72 w-72 relative shrink-0 max-md:max-h-40 max-md:max-w-40 max-sm:max-h-36 max-sm:max-w-36"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl  ">
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
