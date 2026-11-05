"use client";

import { Fragment } from "react";
import { motion } from "motion/react";

import { menu } from "@/data/site";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

import { MenuRow } from "./MenuRow";
import { ZLine } from "./ZLine";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.inner}>
        <motion.div
          className={styles.heading}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          variants={stagger(0.12)}
        >
          <motion.p className={styles.eyebrow} variants={fadeUp(16)}>
            لاوین کیک
          </motion.p>
          <motion.h2
            className={styles.title}
            variants={{
              hidden: { opacity: 0, scale: 0.85, filter: "blur(12px)" },
              show: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                transitionEnd: { filter: "none" },
              },
            }}
          >
            منو
          </motion.h2>
        </motion.div>

        <div>
          {menu.map((item, i) => (
            <Fragment key={item.id}>
              <MenuRow item={item} reversed={i % 2 === 1} />
              {i < menu.length - 1 && <ZLine direction={i % 2 === 0 ? "toLeft" : "toRight"} />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
