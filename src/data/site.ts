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
    name: "کیک سه شیر کاراملی",
    description: "کیک اسفنجی خیس‌خورده در سه نوع شیر، با رویهٔ کارامل و تزئین خامه.",
    price: "1,600 تومان",
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
    price: "1,500 تومان",
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
];
