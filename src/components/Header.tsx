"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import logo from "@/assets/images/logo.png";
import { site } from "@/data/site";
import { EASE_OUT, springPop, springSoft } from "@/lib/motion";

import styles from "./Header.module.css";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// How far the page scrolls before the header turns to glass.
const GLASS_AFTER = 24;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > GLASS_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <div className={styles.inner}>
        <a href="#top" aria-label="لاوین کیک، صفحهٔ اصلی" className={styles.brand}>
          <motion.span
            className={styles.logoWrap}
            variants={{
              hidden: { opacity: 0, scale: 0.4, rotate: -140 },
              show: { opacity: 1, scale: 1, rotate: 0, transition: springSoft },
            }}
            whileHover={{ rotate: 12, scale: 1.06, transition: springPop }}
          >
            <Image src={logo} alt="" width={72} height={72} className={styles.logo} preload />
          </motion.span>
          <motion.span className={styles.brandName} variants={navItem}>
            {site.name}
          </motion.span>
        </a>

        <nav aria-label="بخش‌های سایت" className={styles.nav}>
          <motion.a href="#menu" className={styles.navLink} variants={navItem}>
            منو
          </motion.a>
          <motion.a href="#location" className={styles.navLink} variants={navItem}>
            آدرس
          </motion.a>
        </nav>

        <motion.a
          href={site.phone.href}
          className={`btn-gold ${styles.cta}`}
          variants={{
            hidden: { opacity: 0, scale: 0.6 },
            show: { opacity: 1, scale: 1, transition: springPop },
          }}
        >
          سفارش تلفنی
        </motion.a>
      </div>
    </motion.header>
  );
}
