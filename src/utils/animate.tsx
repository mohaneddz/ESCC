"use client";

import { motion } from 'motion/react';

interface FloatProps {
	delay?: number;
	children: React.ReactNode;
	speed?: number;
	className?: string;
}

export function Float({ delay = 0, children, speed = 2, className }: FloatProps) {
	return (
		<motion.div
			animate={{
				y: [0, -20, 0],
			}}
			transition={{
				duration: speed,
				ease: 'easeInOut',
				repeat: Infinity,
				delay,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
