"use client";

import { useMemo, useState } from "react";
import {
  QuestionnaireShell,
  Field,
  ChoiceGrid,
  MultiChoiceGrid,
  FileField,
  inputClass,
} from "@/components/questionnaire/QuestionnaireShell";
import {
  audiences,
  emptyWebsiteBrief,
  industries,
  toggleValue,
  websiteFeelings,
  websitePages,
  type WebsiteBrief,
} from "@/config/questionnaires";
import { cn } from "@/lib/utils";

export function WebsiteQuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<WebsiteBrief>(emptyWebsiteBrief);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function update(patch: Partial<WebsiteBrief>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  const steps = useMemo(
    () => [
      {
        kicker: "Contact",
        title: "Who should we write back to?",
        hint: "Takes about five minutes. Everything here is treated as confidential.",
        valid:
          form.name.trim().length >= 2 &&
          /.+@.+\..+/.test(form.email) &&
          form.phone.trim().length >= 7 &&
          Boolean(form.industry),
      },
      {
        kicker: "Business",
        title: "Tell us what you do.",
        hint: "A few thoughtful answers now save weeks of back-and-forth later.",
        valid: form.business.trim().length >= 8,
      },
      {
        kicker: "Design",
        title: "What should it feel like?",
        hint: "Color, tone, and the room it should occupy.",
        valid: true,
      },
      {
        kicker: "Structure",
        title: "What must the site hold?",
        hint: "Pages first. Features follow.",
        valid: true,
      },
      {
        kicker: "Notes",
        title: "Anything else we should keep?",
        valid: true,
      },
      {
        kicker: "Files",
        title: "If the contents are ready, send them.",
        hint: "Word, text, PDF for copy. PNG, JPG, SVG or WEBP for a logo.",
        valid: true,
      },
    ],
    [form],
  );

  async function onSubmit() {
    setStatus("loading");
    try {
      const { submitLead } = await import("@/lib/submit-lead");
      await submitLead({
        formType: "Website Questionnaire",
        replyTo: form.email,
        subject: `[Website Questionnaire] ${form.name || "New brief"}`,
        fields: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          business: form.business,
          audience: form.audience,
          competitors: form.competitors,
          colorLike: form.colorLike,
          colorDislike: form.colorDislike,
          feelings: form.feelings,
          domain: form.domain,
          pages: form.pages,
          notes: form.notes,
          example: form.example,
          contentFileName: form.contentFileName,
          logoFileName: form.logoFileName,
        },
        files: {
          contentFile: form.contentFile,
          logoFile: form.logoFile,
        },
      });
      setStatus("success");
    } catch {
      setStatus("idle");
      window.alert("Could not send the questionnaire. Please try again or email sales@zeesoltech.com.");
    }
  }

  return (
    <QuestionnaireShell
      eyebrow="Questionnaire / Website"
      introTitle="Let's build a website that lasts."
      introDescription="Tell us about the business, goals, and design preferences. The more we know, the better the first draft."
      bullets={["Takes ~5 minutes", "100% confidential", "Reply in one business day"]}
      steps={steps}
      step={step}
      onBack={() => setStep((s) => Math.max(0, s - 1))}
      onNext={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
      onJump={setStep}
      onSubmit={onSubmit}
      submitting={status === "loading"}
      success={status === "success"}
      successTitle="The website brief is on the desk."
      successBody="A producer will reply within one working day. Keep an eye on your inbox."
    >
      {step === 0 ? (
        <div className="grid gap-4">
          <Field label="Name">
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => update({ name: e.target.value })}
              required
            />
          </Field>
          <Field label="Email address">
            <input
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => update({ email: e.target.value })}
              required
            />
          </Field>
          <Field label="Phone number">
            <input
              type="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update({ phone: e.target.value })}
              required
            />
          </Field>
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Industry</p>
            <ChoiceGrid
              items={industries}
              value={form.industry}
              onChange={(industry) => update({ industry })}
              columns={3}
            />
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-6">
          <Field label="Description of your business">
            <textarea
              className={cn(inputClass, "min-h-32 resize-none")}
              value={form.business}
              onChange={(e) => update({ business: e.target.value })}
              placeholder="What you sell, who you serve, what should change after this site."
            />
          </Field>
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Target audience</p>
            <MultiChoiceGrid
              items={audiences}
              values={form.audience}
              onToggle={(value) => update({ audience: toggleValue(form.audience, value) })}
            />
          </div>
          <Field label="Competitors — list their website addresses">
            <textarea
              className={cn(inputClass, "min-h-24 resize-none")}
              value={form.competitors}
              onChange={(e) => update({ competitors: e.target.value })}
              placeholder="https://..."
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Colors I like">
              <input
                className={inputClass}
                value={form.colorLike}
                onChange={(e) => update({ colorLike: e.target.value })}
                placeholder="Ink, cream, a sharp red..."
              />
            </Field>
            <Field label="Colors I don't like">
              <input
                className={inputClass}
                value={form.colorDislike}
                onChange={(e) => update({ colorDislike: e.target.value })}
                placeholder="Neons, stock purple..."
              />
            </Field>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Overall feeling</p>
            <MultiChoiceGrid
              items={websiteFeelings}
              values={form.feelings}
              onToggle={(value) => update({ feelings: toggleValue(form.feelings, value) })}
            />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-6">
          <Field label="Existing website or domain to register">
            <input
              className={inputClass}
              value={form.domain}
              onChange={(e) => update({ domain: e.target.value })}
              placeholder="yourbrand.com — or the name we should register"
            />
          </Field>
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Pages you want</p>
            <MultiChoiceGrid
              items={websitePages}
              values={form.pages}
              onToggle={(value) => update({ pages: toggleValue(form.pages, value) })}
            />
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-4">
          <Field label="Project notes">
            <textarea
              className={cn(inputClass, "min-h-28 resize-none")}
              value={form.notes}
              onChange={(e) => update({ notes: e.target.value })}
              placeholder="Constraints, must-haves, people who need to approve."
            />
          </Field>
          <Field label="Example website / resolution notes">
            <input
              className={inputClass}
              value={form.example}
              onChange={(e) => update({ example: e.target.value })}
              placeholder="Paste a site you like"
            />
          </Field>
        </div>
      ) : null}

      {step === 5 ? (
        <div className="grid gap-4">
          <FileField
            label="Website content"
            hint="Word, TXT or PDF"
            accept=".doc,.docx,.txt,.pdf,application/pdf,text/plain"
            fileName={form.contentFileName}
            onFile={(file) =>
              update({
                contentFile: file,
                contentFileName: file?.name ?? "",
              })
            }
          />
          <FileField
            label="Existing logo"
            hint="PNG, JPG, SVG or WEBP"
            accept=".png,.jpg,.jpeg,.svg,.webp,image/*"
            fileName={form.logoFileName}
            onFile={(file) =>
              update({
                logoFile: file,
                logoFileName: file?.name ?? "",
              })
            }
          />
          <p className="text-sm text-muted">
            100% confidential. We reply within one working day.
          </p>
        </div>
      ) : null}
    </QuestionnaireShell>
  );
}
