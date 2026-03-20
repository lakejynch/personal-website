import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import "./globals.css";
import { CustomCursor } from "./components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Jake Lynch",
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[60px] items-center justify-center border-r border-[var(--border)] bg-[var(--bg)] md:flex">
          <span
            className="whitespace-nowrap font-meta text-[10px] uppercase tracking-[0.28em] text-[var(--text-muted)]"
            style={{ transform: "rotate(-90deg)" }}
          >
            JAKE LYNCH
          </span>
        </aside>
        <div className="md:ml-[60px]">{children}</div>
        <CustomCursor />
      </body>
    </html>
  );
}
