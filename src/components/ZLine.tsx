"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import styles from "./ZLine.module.css";

// The golden thread that zig-zags from one cake to the next.
const PATHS = {
  toLeft: "M910 0C930 140 680 30 520 100S110 70 130 200",
  toRight: "M130 0C110 140 360 30 520 100S930 70 910 200",
} as const;

type Props = { direction: keyof typeof PATHS };

export function ZLine({ direction }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The thread draws itself as you scroll down to it, and stays drawn when
  // you scroll back up.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });
  const drawn = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p > drawn.get()) drawn.set(p);
  });
  const progress = useSpring(drawn, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const pathLength = useTransform(progress, (p) => (reduce ? 1 : Math.min(1, p * 1.02)));
  const dotScale = useTransform(progress, [0.42, 0.56], reduce ? [1, 1] : [0, 1]);

  return (
    <div ref={ref} className={styles.line} aria-hidden="true">
      <svg viewBox="0 0 1040 200" preserveAspectRatio="none" fill="none" className={styles.svg}>
        <motion.path
          d={PATHS[direction]}
          stroke="#D8B676"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
        <motion.circle cx={520} cy={100} r={5} fill="#E4C78F" style={{ scale: dotScale }} />
      </svg>
    </div>
  );
}
