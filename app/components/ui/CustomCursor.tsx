"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      id="cursor"
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[10000] text-base text-[var(--accent)] transition-transform duration-75 ease-out"
      style={{ transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)` }}
    >
      +
    </div>
  );
}
