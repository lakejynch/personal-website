"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/content/config";

function FarcasterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8M8 13h8M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SocialLinks() {
  const links = [
    { href: siteConfig.social.twitter, icon: <FaXTwitter className="h-6 w-6" />, label: "Twitter" },
    { href: siteConfig.social.github, icon: <FaGithub className="h-6 w-6" />, label: "GitHub" },
    { href: siteConfig.social.linkedin, icon: <FaLinkedin className="h-6 w-6" />, label: "LinkedIn" },
    { href: siteConfig.social.farcaster, icon: <FarcasterIcon />, label: "Farcaster" },
  ];

  return (
    <div className="flex flex-wrap gap-5 py-2">
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.16 }}
          className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
