"use client";

import Image from "next/image";
import { useState } from "react";
import { CookingModal } from "./CookingModal";
import { Dish, dishes } from "@/content/cooking";

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(160deg, hsl(${hue} 62% 24%), hsl(${(hue + 40) % 360} 62% 15%))`;
}

export function Cooking() {
  const [selected, setSelected] = useState<Dish | null>(null);
  const [errored, setErrored] = useState<Record<string, boolean>>({});

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {dishes.map((dish) => {
          const key = `${dish.slug}.${dish.imageExt}`;
          const usePlaceholder = dish.slug === "placeholder-dish" || errored[key];
          return (
            <button
              key={key}
              onClick={() => setSelected(dish)}
              className="mb-5 w-full break-inside-avoid overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)] text-left"
            >
              <div className="relative h-44 w-full">
                {usePlaceholder ? (
                  <div className="h-full w-full" style={{ background: gradientFromSlug(dish.slug) }} />
                ) : (
                  <Image
                    src={`/cooking/${dish.slug}.${dish.imageExt}`}
                    alt={dish.title}
                    fill
                    className="object-cover"
                    onError={() => setErrored((prev) => ({ ...prev, [key]: true }))}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-2xl italic">{dish.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {dish.tags.map((tag) => (
                    <span key={tag} className="rounded border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <CookingModal dish={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}
