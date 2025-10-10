"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";

export default function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  async function goToRegister() {
    window.location.href = "/register";
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        // TypeScript now knows this is a valid Easing string
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // 3. Explicitly type this object as 'Variants' too
  const mobileMenuContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Add variants for the burger/X animation
  const topLineVariants: Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
  };

  const middleLineVariants: Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants: Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 },
  };

  return (
    <nav className="navbar w-screen py-4 flex justify-between items-center px-8 fixed top-0 bg-background/70 backdrop-blur-sm z-50">
      <div className="logo text-2xl font-bold colored">ESCC CLUB</div>

      {/* Desktop Navigation */}
      <ul className="flex-1 hidden md:flex justify-center items-center gap-8">
        <li className="text-lg nav-item cursor-pointer hover:text-primary transition-colors duration-300">
          Home
        </li>
        <li className="text-lg nav-item cursor-pointer hover:text-primary transition-colors duration-300">
          Events
        </li>
        <li className="text-lg nav-item cursor-pointer hover:text-primary transition-colors duration-300">
          Contacts
        </li>
      </ul>

      <div className="hidden md:block">
        <Button variant="primary" className="click" onClick={goToRegister}>
          Register
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-2xl z-100 relative text-foreground">
          {/* Animated SVG burger to X */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isMobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            <motion.line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              variants={topLineVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              variants={middleLineVariants}
              transition={{ duration: 0.3 }}
            />
            <motion.line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              variants={bottomLineVariants}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 top-0 left-0 bg-black/97 backdrop-blur-2xl z-50 screen center"
            onClick={toggleMobileMenu}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full flex flex-col items-center md:hidden text-white shadow-lg pb-8 rounded-b-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="w-full text-center">
                <li className="select-none text-3xl nav-item py-4 hover:bg-accent/50 transition-colors">Home</li>
                <li className="select-none text-3xl nav-item py-4 hover:bg-accent/50 transition-colors">Events</li>
                <li className="select-none text-3xl nav-item py-4 hover:bg-accent/50 transition-colors">Contacts</li>
              </ul>
              <Button variant="primary" className="click mt-4 w-3/4" onClick={goToRegister}>
                Register
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}