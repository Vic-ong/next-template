import type { Metadata } from "next";

import { sansFont, sansFontLocal, monoFont, monoFontLocal } from "./fonts";
import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Next + Shadcn",
  description: "Next + Shadcn Project Template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        sansFont.variable,
        sansFontLocal.variable,
        monoFont.variable,
        monoFontLocal.variable,
      )}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
