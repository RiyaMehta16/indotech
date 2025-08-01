"use client";
import { Phone } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import logo from "../../assets/logos/logo.png";
import favicon from "../../assets/logos/favicon2.png";
import { Button } from "./Button";

export const FloatingNav = ({ navItems = [], className }) => {
  return (
    <div className="sticky top-0 z-[5000] min-w-80">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex w-full max-w-4xl items-center justify-between fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-2",
            className
          )}
        >
          {/* Logo section */}
          <div className="flex items-center space-x-2">
            <img className="h-10 hidden sm:block " src={logo} />
            <img className="h-10 block sm:hidden max-sm:h-7" src={favicon} />
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
                <span className="block sm:hidden ">{navItem.icon}</span>
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918196800108&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <span className="hidden sm:block text-sm">Contact Us</span>
                <span className="block sm:hidden max-sm:-m-2">
                  <Phone className="max-sm:w-4" />
                </span>
              </Button>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
