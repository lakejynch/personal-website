"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import { Dish } from "@/content/cooking";

type Props = {
  dish: Dish | null;
  open: boolean;
  onClose: () => void;
};

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1)
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(160deg, hsl(${hue} 55% 22%), hsl(${(hue + 50) % 360} 50% 14%))`;
}

export function CookingModal({ dish, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const hasImage = dish && dish.slug !== "placeholder-dish";

  const stableOnClose = useCallback(onClose, [onClose]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      stableOnClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [stableOnClose]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {dish && (
        <div className="p-5 md:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded border border-[var(--border)]">
            {hasImage ? (
              <Image
                src={`/cooking/${dish.slug}.${dish.imageExt}`}
                alt={dish.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="h-full w-full"
                style={{ background: gradientFromSlug(dish.slug) }}
              />
            )}
          </div>

          <h3 className="mt-4 font-display text-2xl italic md:text-3xl">
            {dish.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            {dish.description}
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <p className="meta-label mb-3">Ingredients</p>
              <ul className="space-y-1.5 text-sm text-[var(--text-muted)]">
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex gap-2">
                    <span className="text-[var(--accent)] opacity-50">—</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta-label mb-3">Steps</p>
              <ol className="space-y-2 text-sm text-[var(--text-muted)]">
                {dish.steps.map((step, index) => (
                  <li key={step} className="flex gap-2">
                    <span className="font-meta text-[10px] text-[var(--accent)] opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-5 rounded border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
          >
            Close
          </button>
        </div>
      )}
    </dialog>
  );
}
