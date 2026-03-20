"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/config";

type Props = {
  sectionKey: keyof typeof siteConfig.sections;
  index: string;
  title: string;
  children: React.ReactNode;
};

export function SectionWrapper({ sectionKey, index, title, children }: Props) {
  if (!siteConfig.sections[sectionKey]) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12"
    >
      <hr />
      <div className="flex items-center gap-4 pb-6 pt-4">
        <span className="font-meta text-xs text-[var(--text-muted)]">
          {index}
        </span>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
