"use client";

import { motion } from "motion/react";
import type { ChangeEventHandler } from "react";

type SelectOption = { title: string; value: string };
type InputSelectProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: SelectOption[];
    placeholder?: string;
};

function InputSelect({ value, onChange, options, placeholder }: InputSelectProps) {
    return (
        <motion.div
            layout
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="w-full"
        >
            <select
                className="p-2 rounded border-none w-full focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                value={value}
                onChange={onChange}
            >
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
            <div className="h-[2px] bg-gradient-to-r from-tertiary to-secondary" />
        </motion.div>
    );
}

export default InputSelect;