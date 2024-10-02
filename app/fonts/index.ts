import localFont from "next/font/local";
import { Outfit as SansFont, Ubuntu_Mono as MonoFont } from "next/font/google";

export const sansFontLocal = localFont({
  src: "./GeistVF.woff",
  variable: "--font-local-sans",
  weight: "100 900",
});

export const monoFontLocal = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-local-mono",
  weight: "100 900",
});

export const sansFont = SansFont({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const monoFont = MonoFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-mono",
});
