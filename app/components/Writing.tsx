"use client";

import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { Essay, essays } from "@/content/writing";

export function Writing() {
  const sortedEssays = useMemo(
    () =>
      [...essays].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );
  const [activeEssay, setActiveEssay] = useState<Essay | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = useCallback(() => {
    setActiveEssay(null);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeEssay && !dialog.open) dialog.showModal();
    if (!activeEssay && dialog.open) dialog.close();
  }, [activeEssay]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      closeDialog();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [closeDialog]);

  return (
    <>
      <div className="columns-1 gap-8 md:columns-2 md:[column-rule:1px_solid_var(--border)]">
        {sortedEssays.map((essay) => (
          <article
            key={essay.slug}
            className="mb-8 break-inside-avoid rounded border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              {essay.title}
            </h3>
            <p className="mt-2 font-meta text-[10px] text-[var(--text-muted)]">
              {essay.date}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {essay.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {essay.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {essay.url ? (
              <a
                href={essay.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-2)]"
              >
                Read →
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setActiveEssay(essay)}
                className="mt-4 text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-2)]"
              >
                Read →
              </button>
            )}
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={closeDialog}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        {activeEssay && (
          <div className="p-5 md:p-6">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              {activeEssay.title}
            </h3>
            <p className="mt-1 font-meta text-[10px] text-[var(--text-muted)]">
              {activeEssay.date}
            </p>
            <div className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              <ReactMarkdown>{activeEssay.content ?? ""}</ReactMarkdown>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              className="mt-5 rounded border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
            >
              Close
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
