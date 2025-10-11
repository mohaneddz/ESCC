"use client";

import { motion, MotionProps } from "motion/react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionAnimation =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out";

type MotionBaseProps<T extends ElementType> = {
  as?: T;
  animation?: MotionAnimation;
  children: ReactNode;
  /** Delay in milliseconds */
  delay?: number;
  /** Duration in milliseconds */
  duration?: number;
  easing?: string;
  offset?: number;
  className?: string;
};

export type AOSProps<T extends ElementType> = MotionBaseProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "className"> &
  MotionProps;

const getVariants = (animation: MotionAnimation) => {
  const base = { opacity: 0 };

  switch (animation) {
    case "fade":
      return { hidden: base, visible: { opacity: 1 } };
    case "fade-up":
      return { hidden: { ...base, y: 30 }, visible: { opacity: 1, y: 0 } };
    case "fade-down":
      return { hidden: { ...base, y: -30 }, visible: { opacity: 1, y: 0 } };
    case "fade-left":
      return { hidden: { ...base, x: -30 }, visible: { opacity: 1, x: 0 } };
    case "fade-right":
      return { hidden: { ...base, x: 30 }, visible: { opacity: 1, x: 0 } };
    case "zoom-in":
      return { hidden: { ...base, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
    case "zoom-out":
      return { hidden: { ...base, scale: 1.2 }, visible: { opacity: 1, scale: 1 } };
    default:
      return { hidden: base, visible: { opacity: 1 } };
  }
};

export default function AOS<T extends ElementType = "div">({
  as,
  animation = "fade-up",
  children,
  className,
  delay = 0,
  duration = 400,
  easing = "easeInOut",
  offset = 120,
  ...rest
}: AOSProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const variants = getVariants(animation);

  return (
    <motion.div
      as={Component as any}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: `0px 0px -${offset}px 0px` }}
      transition={{ delay: delay / 1000, duration: duration / 1000, ease: easing }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
