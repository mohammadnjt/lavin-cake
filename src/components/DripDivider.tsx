"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import drip from "@/assets/images/drip.png";
import { EASE_IN_OUT } from "@/lib/motion";

import styles from "./DripDivider.module.css";

export function DripDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Once the drip reaches the top of the screen, the caramel stretches a
  // little further down, as if it is still running.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  return (
    <div ref={ref} className={styles.wrap} aria-hidden="true">
      {/* Pours in from the top on load. */}
      <motion.div
        className={styles.pour}
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.8, ease: EASE_IN_OUT, delay: 0.7 }}
        style={{ scaleY, originY: 0 }}
      >
        <Image src={drip} alt="" className={styles.image} sizes="100vw" quality={90} preload />
      </motion.div>
    </div>
  );
}
