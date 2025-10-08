"use client";

import { motion } from 'motion/react';

interface FloatProps {
	delay?: number;
	children: React.ReactNode;
	speed?: number;
}

export function Float({ delay = 0, children, speed = 2 }: FloatProps) {
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
		>
			{children}
		</motion.div>
	);
}
