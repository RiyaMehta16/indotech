"use client";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import logo from "../../assets/logos/logo.png";
import favicon from "../../assets/logos/favicon2.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const FloatingNav = ({ navItems = [], className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // for mobile expand

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
          {/* Logo */}
          <Link
            className="flex items-center space-x-2 hover:cursor-pointer"
            to={"/"}
          >
            <img className="h-10 hidden sm:block" src={logo} alt="Logo" />
            <img
              className="h-10 block sm:hidden max-sm:h-7"
              src={favicon}
              alt="Logo"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center space-x-4 relative">
            {navItems.map((navItem, idx) => (
              <div className="relative group" key={idx}>
                <a
                  href={navItem.link}
                  className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
                >
                  <span className="text-sm">{navItem.name}</span>
                  {navItem.submenu && <ChevronDown size={14} />}
                </a>

                {/* Desktop dropdown */}
                {navItem.submenu && (
                  <div
                    className="absolute top-full left-0 bg-blue-700 text-neutral-100 dark:bg-black rounded-lg shadow-lg  dark:border-white/[0.1] 
                     py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                     transition-opacity duration-200 z-[999]"
                  >
                    {navItem.submenu.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.link}
                        className="block px-4 py-2 text-sm  hover:bg-neutral-100 hover:text-blue-800
                         dark:text-neutral-200 dark:hover:bg-neutral-800"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="https://api.whatsapp.com/send/?phone=%2B918196800108&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <span className="text-sm">Contact Us</span>
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden fixed top-[4.5rem] right-3 w-1/2 max-w-2xl rounded-b-2xl bg-blue-700 dark:bg-black shadow-md px-4 py-4 z-[4999]"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((navItem, idx) => (
                <div key={idx}>
                  <button
                    onClick={() =>
                      navItem.submenu
                        ? setActiveSubmenu(activeSubmenu === idx ? null : idx)
                        : setIsMenuOpen(false)
                    }
                    className="w-full flex justify-between items-center py-2 px-2 text-neutral-100 hover:bg-neutral-100/20 rounded"
                  >
                    <span>{navItem.name}</span>
                    {navItem.submenu && (
                      <ChevronDown
                        size={14}
                        className={`${
                          activeSubmenu === idx ? "rotate-180" : ""
                        } transition-transform`}
                      />
                    )}
                  </button>

                  {/* Mobile submenu */}
                  {navItem.submenu && activeSubmenu === idx && (
                    <div className="ml-4 mt-1 flex flex-col space-y-1">
                      {navItem.submenu.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1 px-2 text-sm text-neutral-200 hover:bg-neutral-100/20 rounded"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
