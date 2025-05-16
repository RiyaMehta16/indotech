import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  const sharedBackground =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]";

  const motionProps = animate
    ? {
        variants,
        initial: "initial",
        animate: "animate",
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        },
        style: {
          backgroundSize: "400% 400%",
        },
      }
    : {};

  return (
    <div
      className={`relative p-[4px] w-fit h-full group ${containerClassName}`}
    >
      <motion.div
        {...motionProps}
        className={`absolute inset-0 rounded-3xl z-[1] opacity-0 group-hover:opacity-60 blur-2xl transition duration-500 will-change-transform ${sharedBackground}`}
      />
      <motion.div
        {...motionProps}
        className={`absolute inset-0 rounded-3xl z-[1] will-change-transform ${sharedBackground}`}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
