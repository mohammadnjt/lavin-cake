import type { StaticImageData } from "next/image";

import tresLechesCaramel from "@/assets/images/menu/tres-leches-caramel.jpg";
import wetChocolate from "@/assets/images/menu/wet-chocolate.jpg";
import lotusCheesecake from "@/assets/images/menu/lotus-cheesecake.jpg";
import carrotWalnutCreamCheese from "@/assets/images/menu/carrot-walnut-cream-cheese.jpg";
import orange from "@/assets/images/menu/orange.jpg";
import mocha from "@/assets/images/menu/mocha.jpg";
import brookie from "@/assets/images/menu/brookie.jpg";
import snickers from "@/assets/images/menu/snickers.jpg";
import afternoonTea from "@/assets/images/menu/afternoon-tea.jpg";
import frenchAppleTart from "@/assets/images/menu/french-apple-tart.jpg";
import zebra from "@/assets/images/menu/zebra.jpg";
import chocolate from "@/assets/images/menu/chocolate.jpg";
import appleCinnamon from "@/assets/images/menu/apple-cinnamon.jpg";
import carrotWalnut from "@/assets/images/menu/carrot-walnut.jpg";
import lemonCake from "@/assets/images/menu/lemon-cake.jpg";
import brownie from "@/assets/images/menu/brwniw.jpg";
import badome from "@/assets/images/menu/badome.jpg";
import pomegranate from "@/assets/images/menu/pomgrenate.jpg";
import saffron from "@/assets/images/menu/saffron.jpg";
import nescafe from "@/assets/images/menu/nescafe.jpg";
import redVelvet from "@/assets/images/menu/redvelbet.jpg";
import samsepastian from "@/assets/images/menu/samsepastian.jpg";
import kakaoo from "@/assets/images/menu/kakaoo.jpg";
import threeMilkCaramel from "@/assets/images/menu/3milkkaramelnull.jpg";

export const site = {
  name: "لاوین کیک",
  city: "تهران",
  phone: {
    href: "tel:+989025166936",
    label: "۰۹۰۲۵۱۶۶۹۳۶",
  },
  instagram: {
    href: "https://www.instagram.com/lavin_._cake",
    handle: "lavin_._cake",
  },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Marzdaran,+Tehran",
  address: "تهران، مرزداران",
  hours: "هر روز، ۱۰ صبح تا ۱۱ شب",
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
};

export const menu: MenuItem[] = [
  {
    id: "tres-leches-caramel",
    name: "کیک سه شیر کارامل خامه‌ای",
    description: "کیک اسفنجی خیس‌خورده در سه نوع شیر، با رویهٔ کارامل و تزئین خامه.",
    price: "1,700 تومان",
    image: tresLechesCaramel,
  },
  {
    id: "wet-chocolate",
    name: "کیک شکلاتی خیس",
    description: "کیک شکلاتی مرطوب با رویهٔ براق شکلات.",
    price: "1,600 تومان",
    image: wetChocolate,
  },
  {
    id: "lotus-cheesecake",
    name: "چیزکیک لوتوس",
    description: "چیزکیک با رویهٔ کارامل لوتوس و خردهٔ بیسکوییت.",
    price: "1,600 تومان",
    image: lotusCheesecake,
  },
  {
    id: "carrot-walnut-cream-cheese",
    name: "کیک هویج گردو پنیری",
    description: "هویج و گردو با لایهٔ کرم‌پنیر.",
    price: "1,700 تومان",
    image: carrotWalnutCreamCheese,
  },
  {
    id: "orange",
    name: "کیک پرتقالی",
    description: "رویهٔ براق پرتقالی با برش‌های پرتقال.",
    price: "1,500 تومان",
    image: orange,
  },
  {
    id: "mocha",
    name: "کیک موکا",
    description: "ترکیب قهوه و شکلات با تزئین خامه.",
    price: "1,700 تومان",
    image: mocha,
  },
  {
    id: "brookie",
    name: "بروکی",
    description: "ترکیب براونی شکلاتی و کوکی.",
    price: "1,700 تومان",
    image: brookie,
  },
  {
    id: "snickers",
    name: "کیک اسنیکرز",
    description: "رویهٔ شکلاتی با تکه‌های مغز.",
    price: "1,700 تومان",
    image: snickers,
  },
  {
    id: "afternoon-tea",
    name: "کیک Afternoon Tea",
    description: "کیک قالبی با روکش شکلات، خلال بادام و پسته.",
    price: "1,600 تومان",
    image: afternoonTea,
  },
  {
    id: "french-apple-tart",
    name: "تارت سیب فرانسوی",
    description: "تارت سیب با رویهٔ مشبک و پودر قند.",
    price: "1,600 تومان",
    image: frenchAppleTart,
  },
  {
    id: "zebra",
    name: "کیک زبرا",
    description: "بافت مرمری وانیل و کاکائو، با تکه‌های مغز روی آن.",
    price: "1,500 تومان",
    image: zebra,
  },
  {
    id: "chocolate",
    name: "کیک شکلاتی",
    description: "کیک شکلاتی با خطوط براق سس شکلات.",
    price: "1,700 تومان",
    image: chocolate,
  },
  {
    id: "apple-cinnamon",
    name: "کیک سیب دارچینی",
    description: "برش‌های سیب روی کیک، با عطر دارچین و خردهٔ پسته.",
    price: "1,600 تومان",
    image: appleCinnamon,
  },
  {
    id: "carrot-walnut",
    name: "کیک هویج گردو",
    description: "هویج و گردو، با تزئین پودر قند.",
    price: "1,600 تومان",
    image: carrotWalnut,
  },
  { id: "lemon-cake", name: "کیک لیمویی", description: "همراه با زست لیمو", price: "1,600 تومان", image: lemonCake },
  { id: "brownie", name: "کیک براونی", description: "شکلات، کره", price: "1,600 تومان", image: brownie },
  { id: "badome", name: "کیک کارامل بادام", description: "کیک قالبی با رویهٔ کارامل و تکه‌های بادام.", price: "1,700 تومان", image: badome },
  { id: "pomegranate", name: "چیز‌کیک انار", description: "چیزکیک روی پایهٔ بیسکوییت، با رویهٔ ژلهٔ دانه‌های انار.", price: "1,700 تومان", image: pomegranate },
  { id: "saffron", name: "کیک زعفرانی", description: "رویهٔ براق زعفرانی با خلال پسته و گل‌برگ گل محمدی.", price: "1,700 تومان", image: saffron },
  { id: "nescafe", name: "کیک نسکافه‌ای", description: "کیک موس قهوه، با پودر کاکائو و تزئین خامه و گوی شکلاتی.", price: "1,700 تومان", image: nescafe },
  { id: "red-velvet", name: "کیک رد ولوت", description: "کیک قرمز مخملی با پوشش خردهٔ کیک و تزئین پروانه.", price: "1,700 تومان", image: redVelvet },
  { id: "samsepastian", name: "کیک سن سباستین", description: "چیزکیک باسکی با رویهٔ کاراملی‌شده و بافت نرم و کرمی.", price: "1,600 تومان", image: samsepastian },
  { id: "kakaoo", name: "کیک شکلات کاکائو پودری", description: "موس شکلاتی روی پایهٔ کیک کاکائو، با پودر کاکائو و چیپس شکلات.", price: "1,700 تومان", image: kakaoo },
  { id: "3milkkaramelnull", name: "کیک سه شیر کارامل", description: "کیک اسفنجی خیس‌خورده در سه نوع شیر، با رویهٔ کارامل مرمری.", price: "1,600 تومان", image: threeMilkCaramel },
];
