"use client";

import { MotionConfig } from "motion/react";

// Visitors who ask their OS for reduced motion get the page without movement.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
