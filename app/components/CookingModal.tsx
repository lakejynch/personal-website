"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Dish } from "@/content/cooking";

type Props = {
  dish: Dish | null;
  open: boolean;
  onClose: () => void;
};

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(160deg, hsl(${hue} 70% 24%), hsl(${(hue + 50) % 360} 65% 14%))`;
}

export function CookingModal({ dish, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const hasImage = dish && dish.slug !== "placeholder-dish";

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
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {dish ? (
        <div className="p-4 md:p-6">
          <div className="relative h-64 w-full overflow-hidden rounded border border-[var(--border)] md:h-80">
            {hasImage ? (
              <Image src={`/cooking/${dish.slug}.${dish.imageExt}`} alt={dish.title} fill className="object-cover" />
            ) : (
              <div className="h-full w-full" style={{ background: gradientFromSlug(dish.slug) }} />
            )}
          </div>
          <h3 className="mt-4 font-display text-3xl italic">{dish.title}</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{dish.description}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="meta-label mb-2">Ingredients</p>
              <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient}>- {ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="meta-label mb-2">Steps</p>
              <ol className="space-y-1 text-sm text-[var(--text-muted)]">
                {dish.steps.map((step, index) => (
                  <li key={step}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-5 border border-[var(--border)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] hover:bg-[var(--surface-hover)]"
          >
            Close
          </button>
        </div>
      ) : null}
    </dialog>
  );
}
