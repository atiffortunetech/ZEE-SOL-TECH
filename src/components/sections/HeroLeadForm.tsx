"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { projectEstimatorOptions } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type HeroFormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  website: string;
};

const initialState: HeroFormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  website: "",
};

export function HeroLeadForm({ className }: { className?: string }) {
  const [form, setForm] = useState<HeroFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof HeroFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fieldClass =
    "w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

  function update<K extends keyof HeroFormState>(key: K, value: HeroFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: HeroFormState) {
    const next: Partial<Record<keyof HeroFormState, string>> = {};
    if (!values.name.trim()) next.name = "Required";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Valid email required";
    }
    if (!values.projectType) next.projectType = "Select a type";
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.website) return;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const { submitLead } = await import("@/lib/submit-lead");
      await submitLead({
        formType: "Hero Lead Form",
        replyTo: form.email,
        subject: `[Hero Form] ${form.projectType || "Inquiry"} — ${form.name}`,
        fields: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          message: form.message,
        },
      });
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-white shadow-[0_24px_80px_-20px_rgba(15,23,42,0.55)]",
        className,
      )}
      noValidate
    >
      <div className="border-b border-slate-100 bg-gradient-to-br from-accent-soft via-white to-white px-5 py-5 md:px-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Free consultation
            </p>
            <p className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-foreground">
              Start a project
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Tell us what you need — we&apos;ll follow up quickly.
            </p>
          </div>
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-white sm:inline-flex">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
      </div>

      <div className="px-5 py-5 md:px-6 md:pb-6">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="hero-name" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              Name
            </label>
            <input
              id="hero-name"
              className={fieldClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            {errors.name ? <p className="mt-1 text-xs text-danger">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="hero-email" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              Email
            </label>
            <input
              id="hero-email"
              type="email"
              className={fieldClass}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
            {errors.email ? <p className="mt-1 text-xs text-danger">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="hero-phone" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              Phone
            </label>
            <input
              id="hero-phone"
              className={fieldClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="Optional"
              autoComplete="tel"
            />
          </div>

          <div>
            <label
              htmlFor="hero-project-type"
              className="mb-1.5 block text-xs font-semibold text-foreground/80"
            >
              Project type
            </label>
            <select
              id="hero-project-type"
              className={cn(fieldClass, "appearance-none")}
              value={form.projectType}
              onChange={(e) => update("projectType", e.target.value)}
              required
            >
              <option value="">Select type</option>
              {projectEstimatorOptions.projectTypes.map((type) => (
                <option key={type} value={type} className="bg-white">
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType ? (
              <p className="mt-1 text-xs text-danger">{errors.projectType}</p>
            ) : null}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="hero-message"
              className="mb-1.5 block text-xs font-semibold text-foreground/80"
            >
              Message
            </label>
            <textarea
              id="hero-message"
              className={cn(fieldClass, "min-h-[84px] resize-none")}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Briefly describe your project"
            />
          </div>
        </div>

        <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor="hero-website">Website</label>
          <input
            id="hero-website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </div>

        <Button type="submit" size="lg" className="mt-5 w-full" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Request a quote"}
          {status !== "loading" ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
        </Button>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
          No spam. We reply within one business day.
        </p>

        {status === "success" ? (
          <p className="mt-3 text-center text-sm text-success" role="status">
            Request received. We&apos;ll be in touch soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-center text-sm text-danger" role="alert">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
