"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <section className="pb-12 pt-20 md:pt-28">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="meta-label mb-6"
      >
        THE LEDGER // DOSSIER 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="hero-texture font-display text-5xl font-bold italic leading-[1.02] md:text-7xl lg:text-8xl"
      >
        {siteConfig.name}
      </motion.h1>

      <p className="mt-5 max-w-3xl font-mono text-lg text-[var(--text-primary)] md:text-xl">
        {typed}
        <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[var(--accent)] align-middle" />
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 max-w-2xl font-mono text-sm text-[var(--text-muted)]"
      >
        {siteConfig.tagline}
      </motion.p>
    </section>
  );
}
