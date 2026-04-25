"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Mobilityways App",
    category: "Cross-platform · React Native",
    description:
      "Architected a UK-wide sustainable commuting app, delivering customer-facing AI features and defining team-wide agentic workflows via Cursor & Claude Code.",
    tags: ["React Native", "TypeScript", "Agentic AI"],
    year: "2026",
    accent: "#2563EB",
  },
  {
    id: 2,
    title: "GetRegistered",
    category: "iOS App · Freelance",
    description:
      "Designed and built an iOS event-arrivals and e-ticketing app from Figma prototype to App Store. OAuth2-secured REST API integration via React Query.",
    tags: ["React Native", "TypeScript", "React Query"],
    year: "2022",
    accent: "#059669",
  },
  {
    id: 3,
    title: "Micro Front End Platform",
    category: "Architecture · DWS",
    description:
      "Designed a Lerna-based monorepo and MFE architecture that introduced TypeScript, GraphQL, Apollo and OpenAPI client generation to the business.",
    tags: ["TypeScript", "GraphQL", "Apollo", "Lerna"],
    year: "2021",
    accent: "#7C3AED",
  },
  {
    id: 4,
    title: "B2B Sales & Billing Suite",
    category: "Enterprise · React",
    description:
      "Built React front ends for large telco customers including Vodafone and Daisy Group. Introduced TDD practices and E2E testing via Cypress.",
    tags: ["React", "GraphQL", "Cypress", "SCSS"],
    year: "2020",
    accent: "#D97706",
  },
  {
    id: 5,
    title: "CPQ Tool",
    category: "SaaS · Assure24",
    description:
      "Took over lead front-end role for a React & Redux Configure-Price-Quote system used by major connectivity resellers across the UK.",
    tags: ["React", "Redux", "Jest", "Enzyme"],
    year: "2015",
    accent: "#DB2777",
  },
  {
    id: 6,
    title: "NHS Touch Screen System",
    category: "Public Sector · Kiosk",
    description:
      "Designed and built an interactive information point system for an NHS hospital, with a custom locally-hosted CMS on a Linux distribution.",
    tags: ["HTML/CSS", "JavaScript", "Linux", "CMS"],
    year: "2009",
    accent: "#0891B2",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative rounded-2xl p-7 cursor-pointer transition-all duration-300"
      style={{
        background: hovered
          ? "var(--color-surface-hover)"
          : "var(--color-surface)",
        border: "1px solid var(--color-border)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px -8px rgba(0,0,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      tabIndex={0}
      aria-label={`${project.title}: ${project.description}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl transition-all duration-300"
          style={{
            background: project.accent + "18",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
          aria-hidden="true"
        />
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.year}
          </span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? "var(--color-foreground)"
                : "var(--color-muted)",
              transform: hovered
                ? "rotate(-45deg) scale(1.1)"
                : "rotate(0deg) scale(1)",
            }}
            aria-hidden="true"
          >
            <ArrowUpRight
              size={14}
              style={{
                color: hovered
                  ? "var(--color-background)"
                  : "var(--color-text-muted)",
              }}
            />
          </div>
        </div>
      </div>

      <p
        className="text-xs font-medium uppercase tracking-wider mb-2"
        style={{ color: project.accent }}
      >
        {project.category}
      </p>

      <h3
        className="font-heading font-semibold text-xl mb-3 leading-snug transition-colors duration-200"
        style={{ color: "var(--color-foreground)" }}
      >
        {project.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--color-text-muted)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "var(--color-muted)",
              color: "var(--color-secondary)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, isVisible } = useInView();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !isVisible) return;
    grid.classList.add("visible");
  }, [isVisible]);

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Selected work
          </span>
          <h2
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--color-foreground)",
            }}
          >
            Things I&apos;ve built
          </h2>
        </div>

        <div
          ref={gridRef}
          className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
