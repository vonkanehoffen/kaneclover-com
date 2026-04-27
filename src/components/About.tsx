"use client";

import { useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const skills = [
  "Cursor",
  "Claude Code",
  "Product Architecture",

  // 2. The Core Stack
  "TypeScript",
  "React / React Native",
  "Next.js",
  "HTML / CSS",
  "Node.js",

  // 3. Distinct Data Architectures
  "REST / OpenAPI",
  "GraphQL",
  "Supabase",
  "PostgreSQL",

  // 4. Engineering & Design
  "Automated Testing (Jest · Cypress · Maestro)",
  "CI / CD",
  "UI / UX Design (Figma)",
];

const experience = [
  {
    role: "Senior Front End Developer",
    company: "Mobilityways",
    period: "Oct 2022 – Present",
  },
  {
    role: "Lead Front End Developer",
    company: "GetRegistered (Freelance)",
    period: "Apr – Oct 2022",
  },
  {
    role: "Senior Front End Developer",
    company: "Digital Wholesale Solutions",
    period: "Jun 2019 – Oct 2022",
  },
  {
    role: "Senior Web Developer",
    company: "Assure24 Limited",
    period: "Feb 2011 – Jun 2019",
  },
  {
    role: "Advanced Web Design Tutor",
    company: "Manchester College (Part time)",
    period: "Apr 2012 – July 2012",
  },
  {
    role: "Web & Graphic Designer",
    company: "Accelerate 4 / M-Logic",
    period: "Mar 2004 – Feb 2011",
  },
];

export default function About() {
  const { ref: headingRef, isVisible: headingVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();

  return (
    <section id="about" className="py-32 px-6">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-8 py-14 md:px-16 md:py-20"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
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
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "var(--color-foreground)",
              }}
            >
              20+ years, still&nbsp;learning.
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              I&apos;m a life long designer & developer based in Manchester with two
              decades of professional experience spanning startups, enterprise, and
              high-growth SaaS. With a background in Graphic Design, I occupy
              the space where high-fidelity UX meets deep technical architecture
              — ensuring the user experience is as robust as the code behind it.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              I specialize in building scalable TypeScript ecosystems and robust
              application architectures. Currently, I&apos;m focused on
              orchestrating agentic AI patterns to supercharge both development
              velocity and customer-facing functionality. I thrive at the
              intersection of UX design, coding and shipping 0-to-1
              products.
            </p>

            <div className="mt-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                Core skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg font-medium"
                    style={{
                      background: "var(--color-muted)",
                      color: "var(--color-secondary)",
                    }}
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
              transition:
                "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Experience
            </p>
            <div
              className="flex flex-col gap-px"
              style={{ borderLeft: "2px solid var(--color-border)" }}
            >
              {experience.map((item, i) => (
                <div key={i} className="pl-6 pb-8 relative">
                  <div
                    className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.period}
                  </p>
                  <p
                    className="font-heading font-semibold text-base mb-0.5"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {item.role}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.company}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 pl-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                Education
              </p>
              <p
                className="font-heading font-semibold text-base"
                style={{ color: "var(--color-foreground)" }}
              >
                BA Graphic Design
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Salford University, Greater Manchester
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
