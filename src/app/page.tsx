import { DripDivider } from "@/components/DripDivider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div dir="rtl" className="page">
      <Header />
      <Hero />
      <DripDivider />
      <Menu />
      <Location />
    </div>
  );
}
