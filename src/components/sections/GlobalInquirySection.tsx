"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { projectEstimatorOptions } from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

const trustPoints = [
  "Reply within one business day",
  "Clear packages or custom proposals",
  "NDA-friendly discovery calls",
];

export function GlobalInquirySection() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (pathname === "/contact") return null;

  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-teal-300/50 focus:bg-white/10 focus:ring-4 focus:ring-teal-400/10";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Valid email is required";
    }
    if (!values.projectType) next.projectType = "Select a project type";
    if (!values.message.trim()) next.message = "Tell us a bit about the project";
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
        formType: "Global Inquiry Section",
        replyTo: form.email,
        subject: `[Site Inquiry] ${form.projectType || "Project"} — ${form.name}`,
        fields: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        },
      });
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden py-20 text-white md:py-28">
      <Image
        src={sectionImages.cta}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/96 via-slate-950/90 to-teal-950/85" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <Container className="relative">
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Start a project
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.08] md:text-4xl lg:text-5xl">
              Tell us what you want to build — we’ll map the next step
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Branding, SEO-ready websites, custom software, CRM, SaaS, dashboards, or mobile apps.
              Share a short brief and {siteConfig.name} will follow up with a practical path toward
              a proposal.
            </p>

            <ul className="mt-8 space-y-3">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/55">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-teal-300" aria-hidden />
                Confidential by default
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition hover:text-white focus-ring rounded"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md md:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Message received
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold">
                  Thanks — we’ll be in touch shortly.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  Your inquiry is in. Prefer WhatsApp or a full contact form? You can continue from
                  there anytime.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </Button>
                  <Button href="/contact" variant="onDark">
                    Open contact page
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div>
                  <h3 className="font-display text-2xl font-semibold">Project inquiry</h3>
                  <p className="mt-1.5 text-sm text-white/60">
                    Takes about a minute. No spam — just a useful follow-up.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name}>
                    <input
                      className={cn(fieldClass, errors.name && "border-red-400/50")}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Alex Morgan"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      className={cn(fieldClass, errors.email && "border-red-400/50")}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" error={errors.phone}>
                    <input
                      className={fieldClass}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+1 ..."
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Project type" error={errors.projectType}>
                    <select
                      className={cn(fieldClass, errors.projectType && "border-red-400/50")}
                      value={form.projectType}
                      onChange={(e) => update("projectType", e.target.value)}
                    >
                      <option value="" className="bg-slate-900 text-white">
                        Select type
                      </option>
                      {projectEstimatorOptions.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Budget range (optional)">
                  <select
                    className={fieldClass}
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  >
                    <option value="" className="bg-slate-900 text-white">
                      Prefer not to say
                    </option>
                    {projectEstimatorOptions.budgetRanges.map((budget) => (
                      <option key={budget} value={budget} className="bg-slate-900 text-white">
                        {budget}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Project details" error={errors.message}>
                  <textarea
                    rows={4}
                    className={cn(fieldClass, "resize-none", errors.message && "border-red-400/50")}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Goals, timeline, and anything we should know..."
                  />
                </Field>

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                {status === "error" ? (
                  <p className="text-sm text-red-300">
                    Something went wrong. Please try again or email {siteConfig.contact.email}.
                  </p>
                ) : null}

                <Button type="submit" variant="light" size="lg" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Request a quote"}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
