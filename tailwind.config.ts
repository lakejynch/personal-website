import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
        meta: ["var(--font-meta)"],
      },
    },
  },
  plugins: [],
};

export default config;
