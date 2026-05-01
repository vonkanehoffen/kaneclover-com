"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  year: string;
  accent: string;
  link?: string;
};

export default function ProjectPanel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 320);
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: "rgba(0,0,0,0.25)", opacity: visible ? 1 : 0 }}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-lg overflow-y-auto"
        style={{
          background: project.accent,
          transform: visible ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32, 0, 0.15, 1)",
          boxShadow: `-24px 0 60px -12px ${project.accent}88`,
        }}
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-8 py-5"
          style={{ background: project.accent, borderBottom: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
            {project.category}
          </p>
          <button
            ref={closeRef}
            onClick={handleClose}
            aria-label="Close panel"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-10">
          <div className="flex items-center gap-3 mb-7">
            <div
              className="w-12 h-12 rounded-xl"
              style={{ background: "rgba(255,255,255,0.2)" }}
              aria-hidden="true"
            />
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              {project.year}
            </span>
          </div>

          <h2
            className="font-heading font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#ffffff" }}
          >
            {project.title}
          </h2>

          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
            {project.longDescription}
          </p>

          <div className="mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Key highlights
            </p>
            <ul className="flex flex-col gap-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span
                    className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.6)" }}
                    aria-hidden="true"
                  />
                  <span style={{ color: "#ffffff" }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
            >
              View project
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </>
  );
}
