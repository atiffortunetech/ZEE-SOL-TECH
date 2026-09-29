"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type QuestionnaireStepMeta = {
  kicker: string;
  title: string;
  hint?: string;
  valid: boolean;
};

export function QuestionnaireShell({
  eyebrow,
  introTitle,
  introDescription,
  bullets,
  steps,
  step,
  onBack,
  onNext,
  onJump,
  onSubmit,
  submitting,
  success,
  successTitle,
  successBody,
  children,
}: {
  eyebrow: string;
  introTitle: string;
  introDescription: string;
  bullets: string[];
  steps: QuestionnaireStepMeta[];
  step: number;
  onBack: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
  onSubmit: () => void;
  submitting?: boolean;
  success?: boolean;
  successTitle: string;
  successBody: string;
  children: React.ReactNode;
}) {
  const current = steps[step];
  const isLast = step === steps.length - 1;
  const progress = ((step + 1) / steps.length) * 100;

  if (success) {
    return (
      <section className="bg-slate-950 py-24 text-white md:py-32">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">
            Questionnaire received
          </p>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            {successTitle}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">{successBody}</p>
          <Button href="/" variant="light" className="mt-10">
            Back to home
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-background pb-20 pt-28 md:pb-28 md:pt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl">
              {introTitle}
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {introDescription}
            </p>
            <ul className="mt-6 space-y-2">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ol className="mt-10 hidden space-y-2 lg:block">
              {steps.map((item, index) => (
                <li key={item.kicker}>
                  <button
                    type="button"
                    disabled={index > step}
                    onClick={() => index < step && onJump(index)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition focus-ring",
                      index === step
                        ? "border-accent/40 bg-accent-soft"
                        : index < step
                          ? "border-border bg-white hover:border-accent/30"
                          : "cursor-not-allowed border-transparent opacity-45",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-xl text-xs font-semibold",
                        index === step
                          ? "bg-accent text-white"
                          : "bg-surface-elevated text-muted",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{item.kicker}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm">
            <div className="border-b border-border px-5 py-4 md:px-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Step {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")} ·{" "}
                  {current?.kicker}
                </p>
                <p className="text-xs text-muted">{Math.round(progress)}%</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="px-5 py-6 md:px-7 md:py-8">
              <h2 className="font-display text-3xl font-semibold text-foreground">
                {current?.title}
              </h2>
              {current?.hint ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{current.hint}</p>
              ) : null}

              <div className="mt-8">{children}</div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                {step > 0 ? (
                  <Button type="button" variant="outline" onClick={onBack}>
                    Back
                  </Button>
                ) : (
                  <span />
                )}
                {isLast ? (
                  <Button
                    type="button"
                    size="lg"
                    disabled={!current?.valid || submitting}
                    onClick={onSubmit}
                  >
                    {submitting ? "Sending..." : "Submit questionnaire"}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="lg"
                    disabled={!current?.valid}
                    onClick={onNext}
                  >
                    Continue
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs font-semibold text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-slate-200/90 bg-slate-50 px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

export function ChoiceGrid({
  items,
  value,
  onChange,
  columns = 2,
}: {
  items: readonly string[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(
            "rounded-2xl border px-3 py-2.5 text-left text-sm font-medium transition focus-ring",
            value === item
              ? "border-accent bg-accent text-white"
              : "border-border bg-slate-50 text-foreground hover:border-accent/30 hover:bg-accent-soft",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function MultiChoiceGrid({
  items,
  values,
  onToggle,
}: {
  items: readonly string[];
  values: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = values.includes(item);
        return (
          <button
            key={item}
            type="button"
            onClick={() => onToggle(item)}
            className={cn(
              "rounded-full border px-3.5 py-2 text-sm font-medium transition focus-ring",
              active
                ? "border-accent bg-accent text-white"
                : "border-border bg-slate-50 text-foreground hover:border-accent/30 hover:bg-accent-soft",
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export function FileField({
  label,
  hint,
  accept,
  fileName,
  onFile,
}: {
  label: string;
  hint: string;
  accept: string;
  fileName: string;
  onFile: (file: File | null) => void;
}) {
  return (
    <label className="block rounded-2xl border border-dashed border-border bg-slate-50 px-4 py-5 transition hover:border-accent/40 hover:bg-accent-soft/40">
      <span className="block text-sm font-semibold text-foreground">{label}</span>
      <span className="mt-1 block text-xs text-muted">{hint}</span>
      <input
        type="file"
        accept={accept}
        className="mt-3 block w-full text-sm text-muted file:mr-3 file:rounded-xl file:border-0 file:bg-accent file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white"
        onChange={(event) => onFile(event.target.files?.[0] ?? null)}
      />
      {fileName ? (
        <span className="mt-2 block text-xs font-medium text-accent">{fileName}</span>
      ) : null}
    </label>
  );
}
