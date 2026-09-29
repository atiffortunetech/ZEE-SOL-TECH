"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { projectEstimatorOptions } from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  website: "",
};

const DELAY_MS = 5000;

export function LeadCaptureModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
    setStatus("idle");
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const fieldClass =
    "w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-accent/50";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
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
        formType: "Lead Capture Modal",
        replyTo: form.email,
        subject: `[Lead Modal] ${form.projectType || "Inquiry"} — ${form.name}`,
        fields: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          message: form.message,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        },
      });
      setStatus("success");
      setForm(initialState);
      window.setTimeout(() => setOpen(false), 1400);
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-5 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close popup"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="relative z-10 grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
          >
            {/* Left: image panel */}
            <div className="relative hidden min-h-[280px] md:block md:min-h-full">
              <Image
                src={sectionImages.studio}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 460px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/20" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                  {siteConfig.name}
                </p>
                <p className="font-display mt-3 text-3xl font-semibold leading-tight">
                  Let&apos;s build something that lasts.
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                  Branding, websites, software, CRM, and apps — tell us what you need and we&apos;ll
                  reply with next steps.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="relative flex max-h-[92vh] flex-col overflow-y-auto">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative h-36 overflow-hidden md:hidden">
                <Image
                  src={sectionImages.studio}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              <div className="px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Quick inquiry
                </p>
                <h2
                  id="lead-modal-title"
                  className="font-display mt-2 text-2xl font-semibold text-foreground md:text-3xl"
                >
                  Start a project
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Share a few details — we&apos;ll follow up shortly.
                </p>

                <form onSubmit={onSubmit} className="mt-6" noValidate>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="modal-name" className="mb-1.5 block text-xs font-medium">
                        Name
                      </label>
                      <input
                        id="modal-name"
                        className={fieldClass}
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        autoComplete="name"
                        required
                      />
                      {errors.name ? (
                        <p className="mt-1 text-xs text-danger">{errors.name}</p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="mb-1.5 block text-xs font-medium">
                        Email
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        className={fieldClass}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        autoComplete="email"
                        required
                      />
                      {errors.email ? (
                        <p className="mt-1 text-xs text-danger">{errors.email}</p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="mb-1.5 block text-xs font-medium">
                        Phone
                      </label>
                      <input
                        id="modal-phone"
                        className={fieldClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-type" className="mb-1.5 block text-xs font-medium">
                        Project type
                      </label>
                      <select
                        id="modal-type"
                        className={fieldClass}
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
                      {errors.projectType ? (
                        <p className="mt-1 text-xs text-danger">{errors.projectType}</p>
                      ) : null}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="modal-message" className="mb-1.5 block text-xs font-medium">
                        Message
                      </label>
                      <textarea
                        id="modal-message"
                        className={cn(fieldClass, "min-h-[88px] resize-y")}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Briefly describe your project"
                      />
                    </div>
                  </div>

                  <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
                    <label htmlFor="modal-website">Website</label>
                    <input
                      id="modal-website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="mt-5 w-full" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Request a quote"}
                  </Button>

                  {status === "success" ? (
                    <p className="mt-3 text-sm text-success" role="status">
                      Request received. We&apos;ll be in touch soon.
                    </p>
                  ) : null}
                  {status === "error" ? (
                    <p className="mt-3 text-sm text-danger" role="alert">
                      Something went wrong. Please try again.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
