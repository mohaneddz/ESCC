"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function Input({
  placeholder,
  value,
  onChange,
  verifier,
  necessary,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verifier?: (value: string) => boolean;
  necessary?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isValid = (verifier ? verifier(value) : true) && !(necessary && value.trim() === '');

  return (
    <motion.div
      layout
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="w-full relative"
    >
      <label
        className={`absolute left-1 transition-all duration-200 pointer-events-none truncate text-nowrap
          ${value || focused ? "top-0 text-[0.5rem] md:text-xs" : "top-5 text-sm md:text-base"}
          ${isValid ? "text-secondary" : "text-red-500"} ${!isValid && !focused ? "text-gray-400" : ""}
        `}
      >
        {placeholder}{necessary ? '*' : ''}
      </label>
      <input
        type="text"
        className="p-2 pt-4 rounded w-full focus:outline-none focus:ring-0 focus:ring-secondary"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className={`h-[2px] ${isValid ? "bg-gradient-to-r from-tertiary to-secondary" : "bg-red-500"}`}></div>
    </motion.div>
  );
}
