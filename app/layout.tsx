import type { Metadata } from "next";
import { DM_Mono, Playfair_Display, Space_Mono } from "next/font/google";
import { siteConfig } from "@/content/config";
import "./globals.css";
import { CustomCursor } from "./components/ui/CustomCursor";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Jake Lynch",
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmMono.variable} ${spaceMono.variable}`}
    >
      <body>
        <aside className="fixed left-0 top-0 hidden h-screen w-[60px] items-center justify-center border-r border-[var(--border)] md:flex">
          <span className="font-meta text-[10px] uppercase tracking-[0.28em] text-[var(--text-muted)] [transform:rotate(-90deg)]">
            JAKE LYNCH
          </span>
        </aside>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
