"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { PricingPackage } from "@/config/packages";
import { projectEstimatorOptions } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { formatPriceLabel, cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  timeline: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  timeline: "",
  message: "",
  website: "",
};

export function PackageInquiryModal({
  pkg,
  category,
  open,
  onClose,
}: {
  pkg: PricingPackage | null;
  category?: string;
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open || !pkg) return;
    setStatus("idle");
    setErrors({});
    setForm({
      ...initialState,
      message: `I'm interested in the ${pkg.name} package${category ? ` (${category})` : ""}.`,
    });
  }, [open, pkg, category]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const fieldClass =
    "w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Required";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Valid email required";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.website || !pkg) return;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const { submitLead } = await import("@/lib/submit-lead");
      await submitLead({
        formType: "Package Inquiry",
        replyTo: form.email,
        subject: `[Package] ${pkg?.name || "Package"} — ${form.name}`,
        fields: {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          message: form.message,
          packageId: pkg?.id || "",
          packageName: pkg?.name || "",
          packagePrice: pkg?.startingPrice || "",
          category: category || "",
        },
      });
      setStatus("success");
      window.setTimeout(() => onClose(), 1400);
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && pkg ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-modal-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            className="relative z-10 grid max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="hidden flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white md:flex">
              <div>
                {category ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-200">
                    {category}
                  </p>
                ) : null}
                <h2 id="package-modal-title" className="font-display mt-3 text-3xl font-semibold">
                  {pkg.name}
                </h2>
                <p className="mt-4 text-4xl font-semibold tracking-tight">
                  {formatPriceLabel(pkg.startingPrice, pkg.currency)}
                </p>
                <p className="mt-2 text-sm text-white/65">
                  {pkg.billingNote ??
                    (pkg.billingType === "monthly" ? "Monthly program" : "One-time engagement")}
                </p>
              </div>
              <ul className="mt-8 space-y-2.5">
                {pkg.features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative max-h-[92vh] overflow-y-auto p-5 md:p-7">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:bg-surface-elevated hover:text-foreground focus-ring"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Get started
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold text-foreground md:hidden">
                {pkg.name}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Fill in your details for{" "}
                <span className="font-semibold text-foreground">{pkg.name}</span>
                {category ? (
                  <>
                    {" "}
                    in <span className="font-semibold text-foreground">{category}</span>
                  </>
                ) : null}
                .
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground md:hidden">
                {formatPriceLabel(pkg.startingPrice, pkg.currency)}
              </p>

              <form onSubmit={onSubmit} className="mt-6" noValidate>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pkg-name" className="mb-1.5 block text-xs font-semibold">
                      Name
                    </label>
                    <input
                      id="pkg-name"
                      className={fieldClass}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                    />
                    {errors.name ? <p className="mt-1 text-xs text-danger">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="pkg-email" className="mb-1.5 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      id="pkg-email"
                      type="email"
                      className={fieldClass}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                    />
                    {errors.email ? <p className="mt-1 text-xs text-danger">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="pkg-phone" className="mb-1.5 block text-xs font-semibold">
                      Phone
                    </label>
                    <input
                      id="pkg-phone"
                      className={fieldClass}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="pkg-company" className="mb-1.5 block text-xs font-semibold">
                      Company
                    </label>
                    <input
                      id="pkg-company"
                      className={fieldClass}
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="pkg-timeline" className="mb-1.5 block text-xs font-semibold">
                      Timeline
                    </label>
                    <select
                      id="pkg-timeline"
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
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="pkg-message" className="mb-1.5 block text-xs font-semibold">
                      Message
                    </label>
                    <textarea
                      id="pkg-message"
                      className={cn(fieldClass, "min-h-24 resize-none")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>
                </div>

                <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
                  <label htmlFor="pkg-website">Website</label>
                  <input
                    id="pkg-website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                  />
                </div>

                <input type="hidden" name="packageId" value={pkg.id} />
                <input type="hidden" name="packageName" value={pkg.name} />
                <input type="hidden" name="packagePrice" value={pkg.startingPrice} />

                <Button type="submit" size="lg" className="mt-5 w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Request this package"}
                  {status !== "loading" ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
                </Button>

                {status === "success" ? (
                  <p className="mt-3 text-sm text-success" role="status">
                    Request received. We&apos;ll follow up soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="mt-3 text-sm text-danger" role="alert">
                    Something went wrong. Please try again.
                  </p>
                ) : null}
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
