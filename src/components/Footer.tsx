export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading font-semibold text-sm" style={{ color: "var(--color-foreground)" }}>
          Alex Chen
        </span>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          Built with Next.js &amp; Tailwind — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
