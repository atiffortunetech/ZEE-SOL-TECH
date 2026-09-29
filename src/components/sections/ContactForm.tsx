"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { projectEstimatorOptions } from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

export function ContactForm({
  initialPackage,
  initialType,
  initialTimeline,
}: {
  initialPackage?: string;
  initialType?: string;
  initialTimeline?: string;
}) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    projectType: initialType ?? "",
    timeline: initialTimeline ?? "",
    message: initialPackage
      ? `I'm interested in the ${initialPackage} package.`
      : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fieldClass =
    "w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

  const whatsappHref = siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.cta.whatsappMessage)}`
    : null;

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Valid email is required";
    }
    if (!values.projectType) next.projectType = "Select a project type";
    if (!values.message.trim()) next.message = "Please describe your project";
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
        formType: "Contact Form",
        replyTo: form.email,
        subject: `[Contact] ${form.projectType || "Project"} — ${form.name}`,
        fields: {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          packageInterest: initialPackage || "",
        },
      });
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:gap-8 lg:items-start">
      <form
        onSubmit={onSubmit}
        className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm"
        noValidate
      >
        <div className="border-b border-slate-100 bg-gradient-to-br from-accent-soft via-white to-white px-5 py-5 md:px-8 md:py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Project brief
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-foreground md:text-3xl">
            Tell us about your project
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Share goals, timeline, and constraints. We&apos;ll reply with clarifying questions and a
            practical next step.
          </p>
        </div>

        <div className="px-5 py-6 md:px-8 md:pb-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" htmlFor="name" error={errors.name}>
              <input
                id="name"
                className={fieldClass}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </Field>
            <Field label="Company" htmlFor="company">
              <input
                id="company"
                className={fieldClass}
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Optional"
                autoComplete="organization"
              />
            </Field>
            <Field label="Email" htmlFor="email" error={errors.email}>
              <input
                id="email"
                type="email"
                className={fieldClass}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input
                id="phone"
                className={fieldClass}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Optional"
                autoComplete="tel"
              />
            </Field>
            <Field label="Project type" htmlFor="projectType" error={errors.projectType}>
              <select
                id="projectType"
                className={cn(fieldClass, "appearance-none")}
                value={form.projectType}
                onChange={(e) => update("projectType", e.target.value)}
                required
              >
                <option value="">Select type</option>
                {projectEstimatorOptions.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Budget range" htmlFor="budget">
              <select
                id="budget"
                className={cn(fieldClass, "appearance-none")}
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
              >
                <option value="">Select budget</option>
                {projectEstimatorOptions.budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Timeline" htmlFor="timeline" className="md:col-span-2">
              <select
                id="timeline"
                className={cn(fieldClass, "appearance-none")}
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
              >
                <option value="">Select timeline</option>
                {projectEstimatorOptions.timelines.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field
              label="Message"
              htmlFor="message"
              error={errors.message}
              className="md:col-span-2"
            >
              <textarea
                id="message"
                className={cn(fieldClass, "min-h-32 resize-none")}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Goals, must-haves, and any links that help"
                required
              />
            </Field>
          </div>

          <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button type="submit" size="lg" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send project request"}
              {status !== "loading" ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
            </Button>
            {status === "success" ? (
              <p className="text-sm text-success" role="status">
                Request received. We&apos;ll follow up soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-danger" role="alert">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </div>
        </div>
      </form>

      <aside className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm lg:sticky lg:top-28">
        <div className="relative h-44 md:h-52">
          <Image
            src={sectionImages.cta}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-200">
              Direct contact
            </p>
            <p className="font-display mt-1 text-xl font-semibold">Other ways to reach us</p>
          </div>
        </div>

        <div className="space-y-3 p-5 md:p-6">
          <ContactLink
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
          <ContactLink
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
            value={siteConfig.contact.phone}
            href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
          />
          {whatsappHref ? (
            <ContactLink
              icon={<MessageCircle className="h-4 w-4" />}
              label="WhatsApp"
              value={siteConfig.contact.phone}
              href={whatsappHref}
            />
          ) : null}

          {siteConfig.contact.scheduleUrl ? (
            <Button href={siteConfig.contact.scheduleUrl} className="mt-2 w-full" variant="outline">
              Schedule a call
            </Button>
          ) : whatsappHref ? (
            <Button href={whatsappHref} className="mt-2 w-full" variant="outline">
              Chat on WhatsApp
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          ) : null}

          <p className="pt-2 text-xs leading-relaxed text-muted">
            Based in {siteConfig.contact.location}. Typical reply within one business day.
          </p>
        </div>
      </aside>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 px-4 py-3 transition hover:border-accent/30 hover:bg-accent-soft focus-ring"
    >
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
        {icon}
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-foreground">{value}</span>
      </span>
    </a>
  );
}

function Field({
  label,
  htmlFor,
  children,
  error,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-foreground/80">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
