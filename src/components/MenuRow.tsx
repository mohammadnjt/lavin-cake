"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

import type { MenuItem } from "@/data/site";
import { EASE_OUT, inViewOnce, springPop, springSoft } from "@/lib/motion";

import styles from "./MenuRow.module.css";

type Props = {
  item: MenuItem;
  /** Image on the left instead of the right. */
  reversed: boolean;
};

export function MenuRow({ item, reversed }: Props) {
  // +1 when the image is on the right (RTL start), -1 when it is on the left.
  const side = reversed ? -1 : 1;

  // The cake spins in like it's set down on a turntable.
  const plate: Variants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -70 * side },
    show: { opacity: 1, scale: 1, rotate: 0, transition: springSoft },
  };

  // On hover the cake turns a little, like a cake stand.
  const photo: Variants = {
    show: { rotate: 0, scale: 1, transition: springSoft },
    hover: { rotate: 14 * side, scale: 1.04, transition: springSoft },
  };

  const price: Variants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { ...springPop, delay: 0.45 } },
    hover: { scale: 1.08, transition: springPop },
  };

  // The card unrolls out from behind the cake.
  const card: Variants = {
    hidden: { clipPath: reversed ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.9, ease: EASE_OUT, delay: 0.15, staggerChildren: 0.1, delayChildren: 0.4 },
      transitionEnd: { clipPath: "none" },
    },
  };

  const text: Variants = {
    hidden: { opacity: 0, x: 24 * side },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  };

  return (
    <motion.article
      className={`${styles.row} ${reversed ? styles.reversed : ""}`}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={inViewOnce}
    >
      <motion.div className={styles.plate} variants={plate}>
        <motion.div className={styles.photoWrap} variants={photo}>
          <Image
            src={item.image}
            alt={item.name}
            className={styles.photo}
            sizes="260px"
            quality={90}
            placeholder="blur"
          />
        </motion.div>
        <motion.span className={styles.price} variants={price} style={{ y: "-50%" }}>
          {item.price}
        </motion.span>
      </motion.div>

      <motion.div className={styles.card} variants={card}>
        <motion.h3 className={styles.name} variants={text}>
          {item.name}
        </motion.h3>
        {item.description && (
          <motion.p className={styles.description} variants={text}>
            {item.description}
          </motion.p>
        )}
      </motion.div>
    </motion.article>
  );
}
