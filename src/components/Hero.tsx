"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-dvh flex flex-col justify-center px-6">
      <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "100ms",
          }}
        >
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
            style={{ color: "var(--color-accent)" }}
          >
            Manchester, UK · Open to opportunities
          </span>
        </div>

        <h1
          className="font-heading font-bold leading-[1.05] tracking-tight mb-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "var(--color-foreground)",
          }}
        >
          <span
            className="block transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "200ms",
            }}
          >
            Kane Clover.
          </span>
          <span
            className="block transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "320ms",
              color: "var(--color-text-muted)",
            }}
          >
            Senior Product
          </span>
          <span
            className="block transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "440ms",
              color: "var(--color-text-muted)",
            }}
          >
            Engineer.
          </span>
        </h1>

        <p
          className="max-w-xl text-lg leading-relaxed mb-12 transition-all duration-700 ease-out"
          style={{
            color: "var(--color-text-muted)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "560ms",
          }}
        >
          20+ years crafting beautiful user interfaces, scalable architectures
          and modern applications. Passionate about the ever-evolving digital
          platform.
        </p>

        <div
          className="flex flex-wrap gap-4 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "680ms",
          }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
            style={{
              background: "var(--color-foreground)",
              color: "var(--color-background)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
            style={{
              background: "transparent",
              color: "var(--color-foreground)",
              border: "1.5px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{
          opacity: mounted ? 0.4 : 0,
          transitionDelay: "900ms",
          animation: mounted ? "bounce 2s ease-in-out infinite" : "none",
          animationDelay: "1.2s",
        }}
      >
        <ArrowDown size={20} style={{ color: "var(--color-foreground)" }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } }
        }
      `}</style>
    </section>
  );
}
