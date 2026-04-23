"use client";

import { useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Figma", "TailwindCSS", "AWS",
];

const experience = [
  { role: "Senior Frontend Engineer", company: "Vercel", period: "2023 – Present" },
  { role: "Full-stack Developer", company: "Linear", period: "2021 – 2023" },
  { role: "UI Engineer", company: "Stripe", period: "2019 – 2021" },
];

export default function About() {
  const { ref: headingRef, isVisible: headingVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();

  return (
    <section id="about" className="py-32 px-6">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-8 py-14 md:px-16 md:py-20"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className="animate-in-left"
            data-visible={headingVisible}
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <span
              className="inline-block text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              About
            </span>
            <h2
              className="font-heading font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "var(--color-foreground)" }}
            >
              I care about the&nbsp;details.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
              I&apos;m a full-stack developer with 6 years of experience building products people
              actually enjoy using. My background spans engineering and design — I&apos;m comfortable
              equally in Figma and a terminal.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              I&apos;m drawn to the hard problems: performance at scale, nuanced interaction design,
              systems that stay maintainable as teams grow. Currently based in London.
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
                Core skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg font-medium"
                    style={{ background: "var(--color-muted)", color: "var(--color-secondary)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-text-muted)" }}>
              Experience
            </p>
            <div className="flex flex-col gap-px" style={{ borderLeft: "2px solid var(--color-border)" }}>
              {experience.map((item, i) => (
                <div key={i} className="pl-6 pb-8 relative">
                  <div
                    className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>
                    {item.period}
                  </p>
                  <p className="font-heading font-semibold text-base mb-0.5" style={{ color: "var(--color-foreground)" }}>
                    {item.role}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
