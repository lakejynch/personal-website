"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GameModal } from "./GameModal";
import { Game, games } from "@/content/games";

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(140deg, hsl(${hue} 75% 24%), hsl(${(hue + 90) % 360} 70% 14%))`;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function Games() {
  const [selected, setSelected] = useState<Game | null>(null);
  const [errored, setErrored] = useState<Record<string, boolean>>({});

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {games.map((game) => {
          const key = `${game.slug}.${game.imageExt}`;
          const usePlaceholder = game.slug === "placeholder-game" || errored[key];
          return (
            <motion.button
              key={key}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 0 30px rgba(232, 255, 71, 0.2)" }}
              onClick={() => setSelected(game)}
              className="group overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)] text-left"
            >
              <div className="relative h-52 w-full">
                {usePlaceholder ? (
                  <div className="h-full w-full" style={{ background: gradientFromSlug(game.slug) }} />
                ) : (
                  <Image
                    src={`/games/${game.slug}.${game.imageExt}`}
                    alt={game.title}
                    fill
                    className="object-cover"
                    onError={() => setErrored((prev) => ({ ...prev, [key]: true }))}
                  />
                )}
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-display text-2xl italic">{game.title}</h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {game.genre}
                  </span>
                  <span className="text-sm text-[var(--accent)]">{game.rating}/10</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
      <GameModal game={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}
