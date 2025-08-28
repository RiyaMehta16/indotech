// src/components/sections/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/MotionUtils";
import aboutHeroImage2 from "../../assets/hero3.png";

const AboutHero = () => {
  return (
    <motion.section
      className="relative bg-cover bg-center text-white py-32 md:py-48 px-4"
      style={{ backgroundImage: `url(${aboutHeroImage2})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          About Indotech Engineering
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Engineering world-class components with precision that speaks for
          itself.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutHero;
