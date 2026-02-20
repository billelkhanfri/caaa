"use client";
import { usePathname } from "next/navigation";
import HeroVideo from "../components/HeroVideo";
import AcronymCAAA from "./AcronymCAAA";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  return (
    <>
    <AcronymCAAA />
      {/* Hero seulement sur la home */}
      {pathname === "/" && <HeroVideo />}
      {children}
    </>
  );
}
