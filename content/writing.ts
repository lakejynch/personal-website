export type Essay = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  url?: string;
  content?: string;
  tags: string[];
};

export const essays: Essay[] = [
  {
    slug: "first-essay",
    title: "Your First Essay",
    date: "2026-01-01",
    summary: "A short summary shown in the list.",
    url: "https://mirror.xyz/YOUR_LINK",
    tags: ["crypto", "sports"],
  },
];
