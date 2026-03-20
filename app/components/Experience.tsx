"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/content/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  return (
    <div ref={ref} className="relative pb-2">
      <svg className="pointer-events-none absolute left-3 top-0 h-full w-4" viewBox="0 0 8 1000" preserveAspectRatio="none">
        <motion.line
          x1="4"
          y1="0"
          x2="4"
          y2="1000"
          stroke="var(--accent)"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="1000"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      <div className="space-y-8">
        {experience.map((item) => (
          <article key={`${item.company}-${item.years}`} className="relative grid gap-3 pl-10 md:grid-cols-[220px_1fr] md:gap-6">
            <div>
              <p className="font-meta text-[11px] text-[var(--text-muted)]">{item.years}</p>
              {item.logoFile ? (
                <div className="relative mt-2 h-8 w-36 opacity-90">
                  <Image src={`/logos/${item.logoFile}`} alt={`${item.company} logo`} fill className="object-contain object-left" />
                </div>
              ) : null}
              <div className="mt-2 flex items-center gap-2">
                {item.current ? <span className="pulse-dot" /> : null}
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-[var(--text-primary)] underline-offset-4 hover:underline">
                    {item.company}
                  </a>
                ) : (
                  <span className="text-sm text-[var(--text-primary)]">{item.company}</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl italic md:text-3xl">{item.role}</h3>
              <ul className="mt-2 space-y-1 text-sm text-[var(--text-muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
