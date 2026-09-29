"use client";

import { useMemo, useState } from "react";
import { projectEstimatorOptions } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = ["Project Type", "Business Size", "Features", "Timeline"] as const;

export function ProjectEstimator() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState("");
  const [businessSize, setBusinessSize] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");

  const complete = Boolean(projectType && businessSize && timeline);

  const quoteHref = useMemo(() => {
    const params = new URLSearchParams();
    if (projectType) params.set("type", projectType);
    if (businessSize) params.set("size", businessSize);
    if (features.length) params.set("features", features.join(","));
    if (timeline) params.set("timeline", timeline);
    const qs = params.toString();
    return qs ? `/contact?${qs}` : "/contact";
  }, [projectType, businessSize, features, timeline]);

  function toggleFeature(feature: string) {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature],
    );
  }

  return (
    <section className="py-20 md:py-28" id="estimator">
      <Container>
        <SectionHeading
          eyebrow="Project Estimator"
          title="Scope your next build"
          description="Select your project needs. We don’t invent prices here — you’ll get a custom quote based on real requirements."
        />

        <div className="mt-10 rounded-3xl border border-border bg-surface p-5 md:p-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {steps.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(index)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition focus-ring",
                  step === index
                    ? "border-accent/40 bg-accent-soft text-accent-secondary"
                    : "border-border text-muted hover:text-foreground",
                )}
              >
                {index + 1}. {label}
              </button>
            ))}
          </div>

          {step === 0 ? (
            <OptionGrid
              options={[...projectEstimatorOptions.projectTypes]}
              value={projectType}
              onChange={setProjectType}
            />
          ) : null}
          {step === 1 ? (
            <OptionGrid
              options={[...projectEstimatorOptions.businessSizes]}
              value={businessSize}
              onChange={setBusinessSize}
            />
          ) : null}
          {step === 2 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projectEstimatorOptions.features.map((feature) => {
                const selected = features.includes(feature);
                return (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => toggleFeature(feature)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm transition focus-ring",
                      selected
                        ? "border-accent/40 bg-accent-soft text-foreground"
                        : "border-border text-muted hover:border-border",
                    )}
                    aria-pressed={selected}
                  >
                    {feature}
                  </button>
                );
              })}
            </div>
          ) : null}
          {step === 3 ? (
            <OptionGrid
              options={[...projectEstimatorOptions.timelines]}
              value={timeline}
              onChange={setTimeline}
            />
          ) : null}

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </Button>
              <Button
                variant="secondary"
                disabled={step === steps.length - 1}
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              >
                Next
              </Button>
            </div>
            {complete ? (
              <div className="text-right">
                <p className="text-sm text-muted">Your project requires a custom quote.</p>
                <Button href={quoteHref} className="mt-2">
                  Request Quote
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted">Complete the steps to request a quote.</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-xl border px-4 py-3 text-left text-sm transition focus-ring",
            value === option
              ? "border-accent/40 bg-accent-soft text-foreground"
              : "border-border text-muted hover:border-border",
          )}
          aria-pressed={value === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
