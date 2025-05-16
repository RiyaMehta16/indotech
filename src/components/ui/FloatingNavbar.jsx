"use client";
import { Phone } from "lucide-react";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import logo from "../../assets/logos/logo.png";

export const FloatingNav = ({ navItems = [], className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof latest === "number") {
      const direction = latest - lastY;

      if (latest < 100) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }

      setLastY(latest);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex w-full max-w-4xl items-center justify-between fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2",
          className
        )}
      >
        {/* Logo section */}
        <div className="flex items-center space-x-2">
          <img className="h-10" src={logo} />
        </div>

        {/* Nav links */}
        <div className="flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              <span className="block sm:hidden">{navItem.icon}</span>
            </a>
          ))}
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span className="hidden sm:block text-sm">Contact Us</span>
            <span className="block sm:hidden">
              <Phone />
            </span>

            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
