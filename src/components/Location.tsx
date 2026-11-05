"use client";

import { motion, type Variants } from "motion/react";

import { site } from "@/data/site";
import { EASE_OUT, fadeUp, inViewOnce, stagger } from "@/lib/motion";

import { InstagramIcon, PhoneIcon, PinIcon } from "./icons";
import styles from "./Location.module.css";

// Contact pills slide in from the left edge, one after another.
const pill: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function Location() {
  return (
    <section id="location" className={styles.location}>
      <div className={styles.inner}>
        <motion.div
          className={styles.info}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.1)}
        >
          <motion.p className={styles.eyebrow} variants={fadeUp(16)}>
            آدرس
          </motion.p>
          <motion.h2 className={styles.title} variants={fadeUp()}>
            {site.city}
          </motion.h2>
          <motion.p className={styles.detail} variants={fadeUp(16)}>
            {site.address}
          </motion.p>
          <motion.p className={`${styles.detail} ${styles.detailLast}`} variants={fadeUp(16)}>
            {site.hours}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.links}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.12, 0.15)}
        >
          <motion.a href={site.mapsHref} target="_blank" rel="noopener" className={styles.pill} variants={pill}>
            <PinIcon className={styles.icon} />
            مسیریابی روی نقشه
          </motion.a>
          <motion.a href={site.instagram.href} target="_blank" rel="noopener" className={styles.pill} variants={pill}>
            <InstagramIcon className={styles.icon} />
            <span dir="ltr">{site.instagram.handle}</span>
          </motion.a>
          <motion.a href={site.phone.href} className={styles.pill} variants={pill}>
            <PhoneIcon className={styles.icon} />
            <span dir="ltr">{site.phone.label}</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.p
        className={styles.footer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeUp(12)}
      >
        {/* The divider draws itself from right to left. */}
        <motion.span
          className={styles.rule}
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 1.4, ease: EASE_OUT } },
          }}
        />
        {site.name}، {site.city}
      </motion.p>
    </section>
  );
}
