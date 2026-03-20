import { Cooking } from "./components/Cooking";
import { Experience } from "./components/Experience";
import { Games } from "./components/Games";
import { Hero } from "./components/Hero";
import { SocialLinks } from "./components/SocialLinks";
import { WorkingOnNow } from "./components/WorkingOnNow";
import { Writing } from "./components/Writing";
import { SectionWrapper } from "./components/ui/SectionWrapper";

export default function HomePage() {
  return (
    <main className="max-w-5xl px-6 md:mx-auto md:pl-20">
      <Hero />
      <SectionWrapper sectionKey="workingOnNow" index="01" title="Now">
        <WorkingOnNow />
      </SectionWrapper>
      <SectionWrapper sectionKey="experience" index="02" title="Experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper sectionKey="social" index="03" title="Links">
        <SocialLinks />
      </SectionWrapper>
      <SectionWrapper sectionKey="games" index="04" title="Games">
        <Games />
      </SectionWrapper>
      <SectionWrapper sectionKey="cooking" index="05" title="Cooking">
        <Cooking />
      </SectionWrapper>
      <SectionWrapper sectionKey="writing" index="06" title="Writing">
        <Writing />
      </SectionWrapper>
      <footer className="py-16">
        <div className="mx-auto max-w-3xl border border-[rgba(255,50,50,0.3)] px-4 py-3 text-center font-meta text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          UNCLASSIFIED // FOR PUBLIC RELEASE — JAKE LYNCH — 2026
        </div>
      </footer>
    </main>
  );
}
