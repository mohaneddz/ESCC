"use client";

import React from 'react';
import { motion } from 'motion/react';
import type { Transition } from 'motion';

type LegacyEase = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
type MotionEase = NonNullable<Transition['ease']>;

const legacyEasingMap: Record<LegacyEase, MotionEase> = {
  ease: [0.25, 0.1, 0.25, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1],
};

const resolveEasing = (ease?: MotionEase | LegacyEase): Transition['ease'] => {
  if (!ease) return undefined;
  if (Array.isArray(ease)) return ease as MotionEase;
  if (typeof ease === 'string') {
    return (legacyEasingMap[ease as LegacyEase] ?? ease) as MotionEase;
  }
  return ease;
};

interface AOSProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  easing?: MotionEase | LegacyEase;
  offset?: number;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
  className?: string;
}

export default function AOS({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 400,
  easing = 'ease',
  offset = 120,
  once = true,
  mirror = false,
  anchorPlacement = 'top-bottom',
  className = '',
}: AOSProps) {
  // Helper to get animate object based on animation string
  const getAnimate = (anim: string) => {
    switch (anim) {
      case 'fade-up':
        return { opacity: 1, y: 0 };
      case 'fade-down':
        return { opacity: 1, y: 0 };
      case 'fade-left':
        return { opacity: 1, x: 0 };
      case 'fade-right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1 };
    }
  };

  // Helper to get initial state
  const getInitial = (anim: string) => {
    switch (anim) {
      case 'fade-up':
        return { opacity: 0, y: 50 };
      case 'fade-down':
        return { opacity: 0, y: -50 };
      case 'fade-left':
        return { opacity: 0, x: -50 };
      case 'fade-right':
        return { opacity: 0, x: 50 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial(animation)}
      whileInView={getAnimate(animation)}
      transition={{
        delay: delay / 1000, // Convert to seconds
        duration: duration / 1000,
        ease: resolveEasing(easing),
      }}
      viewport={{
        amount: offset / 100, // Approximate offset as fraction
        once,
        // anchorPlacement simplified; adjust if needed
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
