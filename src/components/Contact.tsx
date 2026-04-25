"use client";

import { useState } from "react";
import { Send, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kane-clover" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Contact() {
  const { ref, isVisible } = useInView();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
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
            Contact
          </span>
          <h2
            className="font-heading font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--color-foreground)",
            }}
          >
            Let&apos;s build something.
          </h2>
          <p
            className="max-w-lg text-lg mb-14"
            style={{ color: "var(--color-text-muted)" }}
          >
            Whether it&apos;s a full-time role, a contract, or just a
            conversation — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            {status === "sent" ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#059669" + "18" }}
                  aria-hidden="true"
                >
                  <Send size={20} style={{ color: "#059669" }} />
                </div>
                <p
                  className="font-heading font-semibold text-lg mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Message sent!
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Thanks for reaching out — I&apos;ll be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <Field label="Name" id="name" required error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Your name"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--color-surface)",
                      border: `1.5px solid ${errors.name ? "var(--color-destructive)" : "var(--color-border)"}`,
                      color: "var(--color-foreground)",
                    }}
                    onFocus={(e) => {
                      if (!errors.name)
                        e.target.style.borderColor = "var(--color-accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.name)
                        e.target.style.borderColor = "var(--color-border)";
                    }}
                  />
                </Field>

                <Field label="Email" id="email" required error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--color-surface)",
                      border: `1.5px solid ${errors.email ? "var(--color-destructive)" : "var(--color-border)"}`,
                      color: "var(--color-foreground)",
                    }}
                    onFocus={(e) => {
                      if (!errors.email)
                        e.target.style.borderColor = "var(--color-accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.email)
                        e.target.style.borderColor = "var(--color-border)";
                    }}
                  />
                </Field>

                <Field
                  label="Message"
                  id="message"
                  required
                  error={errors.message}
                >
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="What are you working on?"
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    aria-invalid={!!errors.message}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "var(--color-surface)",
                      border: `1.5px solid ${errors.message ? "var(--color-destructive)" : "var(--color-border)"}`,
                      color: "var(--color-foreground)",
                    }}
                    onFocus={(e) => {
                      if (!errors.message)
                        e.target.style.borderColor = "var(--color-accent)";
                    }}
                    onBlur={(e) => {
                      if (!errors.message)
                        e.target.style.borderColor = "var(--color-border)";
                    }}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer mt-1"
                  style={{
                    background:
                      status === "sending"
                        ? "var(--color-secondary)"
                        : "var(--color-foreground)",
                    color: "var(--color-background)",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                        style={{
                          borderColor: "var(--color-background)",
                          borderTopColor: "transparent",
                        }}
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            )}
          </form>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              Prefer a more direct route? Email me at{" "}
              <a
                href="mailto:kane.clover@gmail.com"
                className="font-medium transition-colors duration-200"
                style={{ color: "var(--color-foreground)" }}
              >
                kane.clover@gmail.com
              </a>
            </p>

            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Find me online
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    background: "var(--color-muted)",
                    color: "var(--color-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--color-foreground)";
                    e.currentTarget.style.color = "var(--color-background)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--color-muted)";
                    e.currentTarget.style.color = "var(--color-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {label}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: "var(--color-foreground)" }}
      >
        {label}
        {required && (
          <span
            className="ml-1"
            style={{ color: "var(--color-destructive)" }}
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs"
          style={{ color: "var(--color-destructive)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
