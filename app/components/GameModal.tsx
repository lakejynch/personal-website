"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import { Game } from "@/content/games";

type Props = {
  game: Game | null;
  open: boolean;
  onClose: () => void;
};

function gradientFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `linear-gradient(130deg, hsl(${hue} 70% 22%), hsl(${(hue + 70) % 360} 75% 16%))`;
}

export function GameModal({ game, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const showImage = game && game.slug !== "placeholder-game";

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
      {game ? (
        <div className="p-4 md:p-6">
          <div className="relative h-64 w-full overflow-hidden rounded border border-[var(--border)] md:h-80">
            {showImage ? (
              <Image src={`/games/${game.slug}.${game.imageExt}`} alt={game.title} fill className="object-cover" />
            ) : (
              <div className="h-full w-full" style={{ background: gradientFromSlug(game.slug) }} />
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-3xl italic">{game.title}</h3>
            <span className="rounded border border-[var(--border)] px-2 py-1 text-xs text-[var(--text-muted)]">
              {game.genre}
            </span>
            <span className="text-sm text-[var(--accent)]">{game.rating}/10</span>
            <span className="font-meta text-[10px] text-[var(--text-muted)]">{game.played}</span>
          </div>
          <div className="prose prose-invert mt-4 max-w-none prose-p:font-mono prose-p:text-sm prose-p:text-[var(--text-muted)]">
            <ReactMarkdown>{game.notes}</ReactMarkdown>
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
