"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ProjectPanel, { type Project } from "./ProjectPanel";

const projects: Project[] = [
  {
    id: 1,
    title: "Mobilityways App",
    category: "Cross-platform · React Native",
    description:
      "Architected a UK-wide sustainable commuting app, delivering customer-facing features and defining team-wide agentic workflows via Cursor & Claude Code.",
    longDescription:
      "As lead developer at Mobilityways, I took ownership of a cross-platform React Native app aimed at reducing carbon emissions from commuting across the UK. The role spanned architecture, feature delivery, stakeholder coordination, and the introduction of agentic AI tooling to accelerate the whole team's output.",
    highlights: [
      "Led end-to-end development of a new cross-platform commuting app from architecture to production.",
      "Introduced agentic AI workflows using Cursor and Claude Code for coding assistance, data analysis, and customer-facing AI features.",
      "Coordinated with stakeholders and a distributed development team to plan and deliver new features to market.",
      "Defined coding standards and architecture patterns adopted across the engineering team.",
    ],
    tags: ["React Native", "TypeScript", "Agentic AI"],
    year: "2022 – Present",
    accent: "#2563EB",
  },
  {
    id: 2,
    title: "What The Plate",
    category: "B2C AI App · Independent",
    description:
      "Designed and built a meal tracker app end-to-end. Leveraged Gemini for AI image analysis, Supabase for backend infrastructure, and RevenueCat for cross-platform subscriptions.",
    longDescription:
      "A personal project built entirely independently — from product concept to App Store. What The Plate lets users photograph their meals and get instant nutritional analysis via Google Gemini's vision model. I handled everything: UX design, frontend, backend, and monetisation infrastructure.",
    highlights: [
      "Designed and shipped a full-stack AI-powered iOS and Android app as a solo developer.",
      "Integrated Google Gemini vision API for real-time meal recognition and nutritional breakdown.",
      "Built backend infrastructure on Supabase including auth, database, and edge functions.",
      "Implemented cross-platform subscription billing via RevenueCat with free tier and paywall logic.",
    ],
    tags: ["React Native", "Supabase", "RevenueCat", "Gemini AI", "TypeScript"],
    year: "2024",
    accent: "#7C3AED",
  },
  {
    id: 3,
    title: "GetRegistered",
    category: "iOS App · Freelance",
    description:
      "Designed and built an iOS event-arrivals and e-ticketing app from Figma prototype to App Store. OAuth2-secured REST API integration via React Query.",
    longDescription:
      "A freelance engagement to design and build an iOS app for GetRegistered, a platform managing event arrivals and e-ticketing. I worked with their in-house product team via workshops to define the architecture and UX, then took the product from Figma prototype all the way through to App Store submission.",
    highlights: [
      "Ran product workshops with the in-house team to define application architecture and process flow.",
      "Designed a complete Figma prototype covering all app screens and interaction states.",
      "Built the final React Native application in TypeScript, submitted to and approved by the App Store.",
      "Integrated with an OAuth2-secured REST API using React Query for data fetching and cache management.",
    ],
    tags: ["React Native", "TypeScript", "React Query", "OAuth2", "Figma"],
    year: "2022",
    accent: "#059669",
  },
  {
    id: 4,
    title: "B2B Sales & Billing Suite",
    category: "Enterprise · React",
    description:
      "Built React front ends for large telco customers including Vodafone and Daisy Group. Introduced TDD, E2E testing, and Micro Front End architecture to the business.",
    longDescription:
      "At Digital Wholesale Solutions (acquired by Aurora), I worked on a suite of B2B sales and billing tools for the communications sector. I introduced a number of foundational technologies and practices that transformed the engineering culture, including a Lerna-based Micro Front End architecture and a full testing strategy.",
    highlights: [
      "Developed React-based front ends for major enterprise clients including Vodafone and Daisy Group.",
      "Designed a Lerna monorepo and Micro Front End architecture, introducing TypeScript, GraphQL, Apollo, and OpenAPI client generation.",
      "Introduced TDD practices and end-to-end testing via Cypress, significantly improving release confidence.",
      "Built a Design System using Storybook, following atomic design principles, working across both UX and dev teams.",
      "Mentored junior and placement developers through code reviews and discussion of SOLID and KISS principles.",
    ],
    tags: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Cypress",
      "Storybook",
      "Lerna",
    ],
    year: "2019 – 2022",
    accent: "#D97706",
  },
  {
    id: 5,
    title: "CPQ Tool",
    category: "SaaS · Assure24",
    description:
      "Took over the lead front-end role for a React & Redux Configure-Price-Quote system used by major UK connectivity resellers.",
    longDescription:
      "At Assure24, I inherited and then led the front-end of a React and Redux-based CPQ (Configure, Price, Quote) tool that became a primary system for multiple large connectivity resellers across the UK. Over eight years I shaped the codebase, introduced modern tooling, and built a wide range of features and marketing properties.",
    highlights: [
      "Took lead responsibility for a React/Redux CPQ system that grew to serve multiple major UK resellers.",
      "Implemented unit testing suites with Jest and Enzyme, establishing a culture of test coverage.",
      "Introduced key front-end tooling including Git, GitLab CI pipelines, Webpack, Yarn, ESLint, and Prettier.",
      "Designed and developed B2B marketing websites using HTML5, SCSS, JavaScript, WordPress, and PHP.",
      "Deployed and managed websites via AWS S3, CloudFront, and Route 53.",
    ],
    tags: ["React", "Redux", "Jest", "Enzyme", "WordPress", "AWS", "CI/CD"],
    year: "2011 – 2019",
    accent: "#DB2777",
  },
  {
    id: 6,
    title: "NHS Touch Screen System",
    category: "Public Sector · Kiosk",
    description:
      "Designed and built an interactive information point system for an NHS hospital, with a custom locally-hosted CMS on a Linux distribution.",
    longDescription:
      "As part of my work at Accelerate 4 / M-Logic, I led the design and development of a touch screen information kiosk system for an NHS hospital — one of the more unusual and rewarding projects of my early career. The system ran a custom CMS on a locally-hosted Linux distribution, driven by bespoke client hardware.",
    highlights: [
      "Designed and built a touch screen information point UI from scratch for a live NHS hospital environment.",
      "Developed a custom locally-hosted CMS to allow hospital staff to manage content without technical knowledge.",
      "Worked with other developers to roll out the system across multiple client terminals on a custom Linux distribution.",
      "Handled the full project lifecycle from UX design through to on-site installation.",
    ],
    tags: ["HTML/CSS", "JavaScript", "Linux", "CMS", "UX Design"],
    year: "2004 – 2011",
    accent: "#0891B2",
  },
];

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
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
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
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
        className="font-heading font-semibold text-xl mb-3 leading-snug"
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
        {project.tags.slice(0, 3).map((tag) => (
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
        {project.tags.length > 3 && (
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "var(--color-muted)",
              color: "var(--color-text-muted)",
            }}
          >
            +{project.tags.length - 3}
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, isVisible } = useInView();
  const gridRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !isVisible) return;
    grid.classList.add("visible");
  }, [isVisible]);

  return (
    <>
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
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProjectPanel project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
