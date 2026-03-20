"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/config";

const heroLine = "A ledger of work, wagers, and sharp edges.";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTyped(heroLine.slice(0, index));
      if (index >= heroLine.length) {
        window.clearInterval(interval);
      }
    }, 34);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="pb-10 pt-20 md:pt-24">
      <p className="meta-label mb-6">THE LEDGER // DOSSIER 2026</p>
      <h1 className="hero-texture font-display text-5xl font-bold italic leading-[1.02] md:text-8xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-3xl font-mono text-lg text-[var(--text-primary)] md:text-xl">
        {typed}
        <span className="ml-1 inline-block h-5 w-[1px] animate-pulse bg-[var(--accent)] align-middle" />
      </p>
      <p className="mt-4 max-w-2xl font-mono text-sm text-[var(--text-muted)]">{siteConfig.tagline}</p>
    </section>
  );
}
