"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

const easingMap: Record<string, string> = {
  ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
  "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
  linear: "linear",
};

const animationPresets: Record<
  string,
  {
    initial: CSSProperties;
    final: CSSProperties;
    transitionProperty?: string;
  }
> = {
  fade: {
    initial: { opacity: 0 },
    final: { opacity: 1 },
  },
  "fade-up": {
    initial: { opacity: 0, transform: "translateY(48px)" },
    final: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    initial: { opacity: 0, transform: "translateY(-48px)" },
    final: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    initial: { opacity: 0, transform: "translateX(-48px)" },
    final: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    initial: { opacity: 0, transform: "translateX(48px)" },
    final: { opacity: 1, transform: "translateX(0)" },
  },
  "zoom-in": {
    initial: { opacity: 0, transform: "scale(0.95)" },
    final: { opacity: 1, transform: "scale(1)" },
  },
  "zoom-out": {
    initial: { opacity: 0, transform: "scale(1.05)" },
    final: { opacity: 1, transform: "scale(1)" },
  },
};

const setStyles = (element: HTMLElement, styles: CSSProperties) => {
  Object.entries(styles).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    (element.style as unknown as Record<string, string | number>)[key] = value as string;
  });
};

const resolveEasing = (value?: string) => {
  if (!value) return easingMap.ease;
  if (value in easingMap) return easingMap[value];
  if (value.startsWith("cubic-bezier") || value.startsWith("steps")) return value;
  return value;
};

const parseBoolean = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return value === "true";
};

const parseNumber = (value: string | undefined, fallback: number) => {
  if (value === undefined) return fallback;
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

const initElement = (
  element: HTMLElement,
  preset: (typeof animationPresets)[string],
  transition: { duration: number; delay: number; easing: string },
) => {
  element.style.willChange = preset.transitionProperty ?? "opacity, transform";
  element.style.transitionProperty = preset.transitionProperty ?? "opacity, transform";
  element.style.transitionDuration = `${transition.duration}ms`;
  element.style.transitionTimingFunction = transition.easing;
  element.style.transitionDelay = `${transition.delay}ms`;
  setStyles(element, preset.initial);
};

const enterElement = (element: HTMLElement, preset: (typeof animationPresets)[string]) => {
  requestAnimationFrame(() => {
    element.style.willChange = "auto";
    setStyles(element, preset.final);
  });
};

const leaveElement = (element: HTMLElement, preset: (typeof animationPresets)[string]) => {
  setStyles(element, preset.initial);
};

export default function AOSObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-aos]:not([data-aos=""])'),
    );

    if (elements.length === 0) {
      return;
    }

    const observers: Array<{ observer: IntersectionObserver; element: HTMLElement }> = [];

    elements.forEach((element) => {
      const animationKey = element.dataset.aos ?? "fade-up";
      const preset = animationPresets[animationKey] ?? animationPresets["fade-up"];

      const duration = parseNumber(element.dataset.aosDuration, 400);
      const delay = parseNumber(element.dataset.aosDelay, 0);
      const easing = resolveEasing(element.dataset.aosEasing);
      const offset = parseNumber(element.dataset.aosOffset, 120);
      const once = parseBoolean(element.dataset.aosOnce, true);
      const mirror = parseBoolean(element.dataset.aosMirror, false);

      if (prefersReducedMotion) {
        element.style.transition = "none";
        element.style.willChange = "auto";
        setStyles(element, preset.final);
        return;
      }

      initElement(element, preset, { duration, delay, easing });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              enterElement(element, preset);
              if (once) {
                observer.unobserve(element);
              }
            } else if (mirror) {
              leaveElement(element, preset);
            }
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: `0px 0px -${Math.max(offset, 0)}px 0px`,
        },
      );

      observer.observe(element);
      observers.push({ observer, element });
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
        observer.disconnect();
        element.style.willChange = "auto";
      });
    };
  }, [pathname]);

  return null;
}
