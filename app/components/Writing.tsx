"use client";

import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Essay, essays } from "@/content/writing";

export function Writing() {
  const sortedEssays = useMemo(
    () => [...essays].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );
  const [activeEssay, setActiveEssay] = useState<Essay | null>(null);

  return (
    <>
      <div className="columns-1 gap-8 md:columns-2 md:[column-rule:1px_solid_var(--border)]">
        {sortedEssays.map((essay) => (
          <article
            key={essay.slug}
            className="mb-8 break-inside-avoid rounded border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">{essay.title}</h3>
            <p className="mt-2 font-meta text-[10px] text-[var(--text-muted)]">{essay.date}</p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">{essay.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {essay.tags.map((tag) => (
                <span key={tag} className="rounded border border-[var(--border)] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {tag}
                </span>
              ))}
            </div>
            {essay.url ? (
              <a
                href={essay.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[var(--accent)]"
              >
                Read →
              </a>
            ) : (
              <button type="button" onClick={() => setActiveEssay(essay)} className="mt-4 text-sm text-[var(--accent)]">
                Read →
              </button>
            )}
          </article>
        ))}
      </div>

      <dialog
        open={Boolean(activeEssay)}
        className={activeEssay ? "" : "hidden"}
        onClose={() => setActiveEssay(null)}
        onClick={(event) => {
          if (event.target instanceof HTMLDialogElement) setActiveEssay(null);
        }}
      >
        {activeEssay ? (
          <div className="p-4 md:p-6">
            <h3 className="font-display text-3xl font-bold">{activeEssay.title}</h3>
            <div className="prose prose-invert mt-4 max-w-none prose-p:font-mono prose-p:text-sm prose-p:text-[var(--text-muted)]">
              <ReactMarkdown>{activeEssay.content ?? ""}</ReactMarkdown>
            </div>
            <button
              type="button"
              onClick={() => setActiveEssay(null)}
              className="mt-5 border border-[var(--border)] px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] hover:bg-[var(--surface-hover)]"
            >
              Close
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
