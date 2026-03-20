export type Experience = {
  company: string;
  url: string | null;
  role: string;
  years: string;
  bullets: string[];
  logoFile: string | null;
  current: boolean;
};

export const experience: Experience[] = [
  {
    company: "WeLikeSports",
    url: "https://welikesports.com",
    role: "Founder",
    years: "2026 – Present",
    bullets: [
      "On-chain social sports pools using parimutuel betting structures.",
      "Yield-based revenue model that eliminates the house edge.",
    ],
    logoFile: "welikesports.svg",
    current: true,
  },
  {
    company: "Spearbit & Cantina",
    url: "https://cantina.xyz",
    role: "Co-founder",
    years: "2021 – 2025",
    bullets: [
      "Led growth, marketing, brand, and business development.",
      "Built the leading web3 security marketplace.",
    ],
    logoFile: "cantina.svg",
    current: false,
  },
  {
    company: "L1D",
    url: "https://l1d.com",
    role: "Investment Partner",
    years: "2021 – 2025",
    bullets: ["DeFi, consumer, and liquid fund investments."],
    logoFile: "l1d.svg",
    current: false,
  },
  {
    company: "Trading & Research",
    url: null,
    role: "Independent",
    years: "2017 – 2021",
    bullets: ["Crypto market making, yield farming, and quantitative research."],
    logoFile: null,
    current: false,
  },
];
