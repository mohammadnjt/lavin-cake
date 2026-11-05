import type { Transition, Variants } from "motion/react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/** Parent variant that only staggers its children. */
export function stagger(staggerChildren = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

/** Rise + un-blur. The blur is dropped at the end so text renders crisp. */
export function fadeUp(distance = 24, duration = 0.8): Variants {
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: EASE_OUT },
      transitionEnd: { filter: "none" },
    },
  };
}

export const springSoft: Transition = { type: "spring", stiffness: 140, damping: 20, mass: 0.9 };
export const springPop: Transition = { type: "spring", stiffness: 420, damping: 18 };

/** Reveal once, when a good part of the element is on screen. */
export const inViewOnce = { once: true, amount: 0.35 } as const;
