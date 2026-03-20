"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer (mouse)
    const hasFineCursor = window.matchMedia("(pointer: fine)").matches;
    if (!hasFineCursor) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[10000] font-mono text-sm font-bold text-[var(--accent)] mix-blend-difference"
      style={{
        transform: `translate3d(${position.x - 6}px, ${position.y - 8}px, 0)`,
      }}
    >
      +
    </div>
  );
}
