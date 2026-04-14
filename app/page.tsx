"use client";

import { useState } from "react";

const colors = {
  R: "#ff3333",
  O: "#ff8c00",
  Y: "#ffd700",
  G: "#33cc33",
  B: "#3399ff",
  I: "#8b5cf6",
  V: "#ee82ee",
};

export default function HomePage() {
  const [activeColor, setActiveColor] = useState<keyof typeof colors>("R");

  const handleColorChange = (letter: keyof typeof colors) => {
    setActiveColor(letter);
    document.documentElement.style.setProperty("--border", colors[letter]);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl">
        {/* Profile Section */}
        <div className="terminal-box p-6">
          <span className="terminal-box-label">profile</span>

          <div className="flex items-start gap-6">
            {/* Avatar */}
            <img
              src="/pfp/pfp.jpg"
              alt="Jake Lynch"
              className="avatar object-cover"
            />

            {/* Name and Bio */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-normal">Jake Lynch</h1>
              <p className="text-[var(--text-muted)]">
                Aspiring chef. Terrible writer. Optimistic founder. Boston sports fan.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="https://x.com/jakelynch" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">x</a>
                <a href="https://github.com/lakejynch" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">github</a>
                <a href="https://www.linkedin.com/in/jake-lynch/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">linkedin</a>
              </div>
            </div>
          </div>
        </div>

        {/* Color Picker */}
        <div className="flex justify-center gap-4 my-6 text-xs">
          {(Object.keys(colors) as Array<keyof typeof colors>).map((letter) => (
            <button
              key={letter}
              onClick={() => handleColorChange(letter)}
              className={`hover:opacity-80 ${activeColor === letter ? "text-[var(--border)]" : "text-[var(--text-muted)]"}`}
              style={activeColor === letter ? { color: colors[letter] } : undefined}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Work Section */}
        <div className="terminal-box p-6">
          <span className="terminal-box-label">work</span>

          <div className="flex flex-col gap-4">
            {/* Work Item */}
            <a
              href="https://x.com/jakelynch/status/2034036890840797290"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:opacity-80"
            >
              <img src="/logos/welikesports.png" alt="WeLikeSports" className="work-logo" />
              <div>
                <h2 className="font-normal">Founder @ WeLikeSports *</h2>
                <p className="text-[var(--text-muted)] text-sm">Building the future of sports and finance.</p>
              </div>
            </a>

            {/* Work Item */}
            <div className="flex items-start gap-4">
              <img src="/logos/l1d.svg" alt="L1D" className="work-logo" />
              <div>
                <h2 className="font-normal">Investment Partner @ L1D</h2>
                <p className="text-[var(--text-muted)] text-sm">Invested in consumer, defi and funds.</p>
              </div>
            </div>

            {/* Work Item */}
            <div className="flex items-start gap-4">
              <img src="/logos/cantina.svg" alt="Cantina" className="work-logo" />
              <div>
                <h2 className="font-normal">Cofounder @ Spearbit (Cantina)</h2>
                <p className="text-[var(--text-muted)] text-sm">Building scalable security solutions for crypto and beyond.</p>
              </div>
            </div>
          </div>

          <p className="text-[var(--text-muted)] text-xs mt-4">* current</p>
        </div>

        {/* Games Section */}
        <div className="terminal-box p-6 mt-6">
          <span className="terminal-box-label">games</span>

          <ul className="space-y-1 text-sm">
            <li><span className="text-[var(--text-muted)]">1999</span> Age of Empires 2</li>
            <li><span className="text-[var(--text-muted)]">2002</span> Warcraft 3</li>
            <li><span className="text-[var(--text-muted)]">2004</span> Halo 2</li>
            <li><span className="text-[var(--text-muted)]">2004</span> World of Warcraft</li>
            <li><span className="text-[var(--text-muted)]">2006</span> Gears of War</li>
            <li><span className="text-[var(--text-muted)]">2008</span> GTA 4</li>
            <li><span className="text-[var(--text-muted)]">2008</span> Fable 2</li>
            <li><span className="text-[var(--text-muted)]">2012</span> CoD Black Ops 2</li>
            <li><span className="text-[var(--text-muted)]">2016</span> Overwatch</li>
            <li><span className="text-[var(--text-muted)]">2017</span> Zelda Breath of the Wild</li>
            <li><span className="text-[var(--text-muted)]">2017</span> Fortnite</li>
            <li><span className="text-[var(--text-muted)]">2018</span> Super Smash Bros Ultimate</li>
            <li><span className="text-[var(--text-muted)]">2021</span> Valheim</li>
            <li><span className="text-[var(--text-muted)]">2023</span> Dark and Darker</li>
          </ul>
        </div>

        {/* Writing Section */}
        <div className="terminal-box p-6 mt-6">
          <span className="terminal-box-label">writing</span>

          <ul className="space-y-2 text-sm">
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://linkedin.com/pulse/building-something-new-jake-lynch-fbkue/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">Building something new</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1993195362996436999" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">Late Night Thoughts on the Future of DeFi</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1980987850842644740" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">TVL: Total Value Lost</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1929531670471839987" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">The Right Way to TGE</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1890352598835724382" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">These violent delights do indeed have violent ends</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1866203097921675423" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">On raising capital from VCs</a></li>
            <li><span className="text-[var(--text-muted)]">&gt; </span><a href="https://x.com/jakelynch/status/1851634307049062685" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--border)]">My Solana Checklist</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
