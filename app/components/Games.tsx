"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GameModal } from "./GameModal";
import { Game, games } from "@/content/games";

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1)
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(140deg, hsl(${hue} 60% 20%), hsl(${(hue + 90) % 360} 55% 12%))`;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
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
          const usePlaceholder =
            game.slug === "placeholder-game" || errored[key];

          return (
            <motion.button
              key={key}
              variants={item}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px rgba(232, 255, 71, 0.15)",
              }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(game)}
              className="group overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)] text-left transition-colors hover:border-[var(--accent)]/30"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {usePlaceholder ? (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{ background: gradientFromSlug(game.slug) }}
                  >
                    <span className="font-display text-3xl italic opacity-20">
                      ?
                    </span>
                  </div>
                ) : (
                  <Image
                    src={`/games/${game.slug}.${game.imageExt}`}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() =>
                      setErrored((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                )}
              </div>

              <div className="space-y-2 p-4">
                <h3 className="font-display text-xl italic leading-tight">
                  {game.title}
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {game.genre}
                  </span>
                  <span className="font-meta text-sm font-bold text-[var(--accent)]">
                    {game.rating}/10
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <GameModal
        game={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
