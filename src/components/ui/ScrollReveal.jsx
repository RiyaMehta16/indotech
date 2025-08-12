import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  initialOpacity = 0,
  initialY = 50,
  duration = 0.6,
  delay = 0.2,
  triggerOnce = true,
  threshold = 0.3,
  immediate = false, // new prop
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const animationVariants = {
    hidden: { opacity: initialOpacity, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeInOut", delay },
    },
  };

  return (
    <motion.div
      ref={immediate ? undefined : ref} // no observer if immediate mode
      initial="hidden"
      animate={immediate ? "visible" : inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
