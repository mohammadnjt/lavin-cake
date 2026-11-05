import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";

import { MotionProvider } from "@/components/MotionProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "لاوین کیک، تهران",
  description: "کافه و کیک لاوین در تهران. از منوی لاوین کیک انتخاب کنید و با یک تماس سفارش دهید.",
};

export const viewport: Viewport = {
  themeColor: "#4E0E1B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The Arabic subsets render the first screen, so fetch them right away.
  preload("/fonts/vazirmatn-arabic.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/noto-naskh-arabic-arabic.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
