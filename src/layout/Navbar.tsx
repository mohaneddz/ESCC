"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "cubic-bezier(0.42, 0, 0.58, 1)",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "cubic-bezier(0.42, 0, 0.58, 1)",
      },
    },
  };

  const mobileMenuContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
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
        <Button variant="primary" className="click">
          Register
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-2xl z-50">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMobileMenu}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-16 left-0 w-full bg-background/90 backdrop-blur-sm flex flex-col items-center md:hidden text-black shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="w-full text-center">
                <li className="text-lg nav-item py-4 border-b">Home</li>
                <li className="text-lg nav-item py-4 border-b">Events</li>
                <li className="text-lg nav-item py-4">Contacts</li>
              </ul>
              <Button variant="primary" className="click my-4">
                Register
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}