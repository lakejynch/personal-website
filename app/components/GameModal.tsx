"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useCallback } from "react";
import { Game } from "@/content/games";

type Props = {
  game: Game | null;
  open: boolean;
  onClose: () => void;
};

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1)
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(130deg, hsl(${hue} 60% 20%), hsl(${(hue + 70) % 360} 55% 14%))`;
}

export function GameModal({ game, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const showImage = game && game.slug !== "placeholder-game";

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
      {game && (
        <div className="p-5 md:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded border border-[var(--border)]">
            {showImage ? (
              <Image
                src={`/games/${game.slug}.${game.imageExt}`}
                alt={game.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="h-full w-full"
                style={{ background: gradientFromSlug(game.slug) }}
              />
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl italic md:text-3xl">
              {game.title}
            </h3>
            <span className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {game.genre}
            </span>
            <span className="font-meta text-sm font-bold text-[var(--accent)]">
              {game.rating}/10
            </span>
            <span className="font-meta text-[10px] text-[var(--text-muted)]">
              Played {game.played}
            </span>
          </div>

          <div className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            <ReactMarkdown>{game.notes}</ReactMarkdown>
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
