"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import hero from "@/assets/images/hero.jpg";
import { EASE_OUT, fadeUp, stagger } from "@/lib/motion";

import styles from "./Hero.module.css";

const line = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_OUT },
    transitionEnd: { filter: "none" },
  },
};

const MAX_TILT = 6; // degrees

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The photo drifts down a little slower than the page as the hero scrolls
  // away, sliding over the caramel drip (it sits above it, as in the design).
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);

  // Gentle 3D tilt that follows the pointer.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(tiltY, { stiffness: 150, damping: 18 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-py * MAX_TILT);
    tiltY.set(px * MAX_TILT);
  }

  function onPointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section id="top" ref={sectionRef} className={styles.hero}>
      <div className={styles.inner}>
        <motion.div className={styles.copy} initial="hidden" animate="show" variants={stagger(0.12, 0.35)}>
          <motion.p className={styles.eyebrow} variants={fadeUp(16)}>
            کافه و کیک، تهران
          </motion.p>
          <motion.h1 className={styles.title} variants={stagger(0.14)}>
            <motion.span className={styles.titleLine} variants={line}>
              یک برش کیک،
            </motion.span>
            <motion.span className={styles.titleLine} variants={line}>
              یک لحظهٔ آرام.
            </motion.span>
          </motion.h1>
          <motion.p className={styles.lead} variants={fadeUp()}>
            از منوی لاوین کیک انتخاب کنید و با یک تماس سفارش دهید.
          </motion.p>
          <motion.div className={styles.actions} variants={fadeUp()}>
            <a href="#menu" className={`btn-gold ${styles.cta}`}>
              دیدن منو
            </a>
          </motion.div>
        </motion.div>

        <motion.div className={styles.media} style={{ y: parallaxY }}>
          <motion.div
            className={styles.frame}
            initial={{ opacity: 0, scale: 0.9, y: 40, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.45 }}
            style={{ rotateX, rotateY, transformPerspective: 1100 }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
          >
            <Image
              src={hero}
              alt="چند کیک و کاپ‌کیک با تزئین خامه و میوه روی پایه‌های کیک"
              className={styles.image}
              sizes="(max-width: 728px) calc(100vw - 48px), 680px"
              quality={90}
              preload
            />
            <span className={styles.sheen} aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
