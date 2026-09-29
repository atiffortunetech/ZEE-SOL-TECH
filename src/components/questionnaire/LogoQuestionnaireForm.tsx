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
  emptyLogoBrief,
  industries,
  logoFeelings,
  logoUsages,
  toggleValue,
  type LogoBrief,
} from "@/config/questionnaires";
import { cn } from "@/lib/utils";

export function LogoQuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<LogoBrief>(emptyLogoBrief);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function update(patch: Partial<LogoBrief>) {
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
          form.phone.trim().length >= 7,
      },
      {
        kicker: "Brand",
        title: "What goes on the mark?",
        hint: "The exact name, and the line under it if there is one.",
        valid: form.logoName.trim().length >= 2 && form.business.trim().length >= 8,
      },
      {
        kicker: "Design",
        title: "How should the mark behave?",
        hint: "Look, audience, color. Reduction comes after.",
        valid: true,
      },
      {
        kicker: "Usage",
        title: "Where does it have to live?",
        hint: "A mark that only works on a poster is unfinished.",
        valid: true,
      },
      {
        kicker: "Submit",
        title: "A last note for the designers.",
        hint: "100% confidential. We reply within one working day.",
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
        formType: "Logo Questionnaire",
        replyTo: form.email,
        subject: `[Logo Questionnaire] ${form.logoName || form.name || "New brief"}`,
        fields: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          logoName: form.logoName,
          slogan: form.slogan,
          industry: form.industry,
          business: form.business,
          feelings: form.feelings,
          audience: form.audience,
          colorLike: form.colorLike,
          colorDislike: form.colorDislike,
          uses: form.uses,
          ideas: form.ideas,
          referenceFileName: form.referenceFileName,
          message: form.message,
        },
        files: {
          referenceFile: form.referenceFile,
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
      eyebrow="Questionnaire / Logo"
      introTitle="Let's craft a logo that lasts."
      introDescription="Tell us about the business, the exact name, and how the mark should behave at 16 pixels and on a truck."
      bullets={["Takes ~5 minutes", "100% confidential", "Reply in one business day"]}
      steps={steps}
      step={step}
      onBack={() => setStep((s) => Math.max(0, s - 1))}
      onNext={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
      onJump={setStep}
      onSubmit={onSubmit}
      submitting={status === "loading"}
      success={status === "success"}
      successTitle="The logo brief is on the desk."
      successBody="A designer will reply within one working day. Keep an eye on your inbox."
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
          <Field label="Email">
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
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4">
          <Field label="Exact name to appear on the logo">
            <input
              className={inputClass}
              value={form.logoName}
              onChange={(e) => update({ logoName: e.target.value })}
              required
            />
          </Field>
          <Field label="Slogan or tagline">
            <input
              className={inputClass}
              value={form.slogan}
              onChange={(e) => update({ slogan: e.target.value })}
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
          <Field label="A brief description of your business">
            <textarea
              className={cn(inputClass, "min-h-28 resize-none")}
              value={form.business}
              onChange={(e) => update({ business: e.target.value })}
              placeholder="What the company does, and who the mark has to convince."
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Overall look and feel</p>
            <MultiChoiceGrid
              items={logoFeelings}
              values={form.feelings}
              onToggle={(value) => update({ feelings: toggleValue(form.feelings, value) })}
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">Target audience</p>
            <MultiChoiceGrid
              items={audiences}
              values={form.audience}
              onToggle={(value) => update({ audience: toggleValue(form.audience, value) })}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Colors / fonts I like">
              <input
                className={inputClass}
                value={form.colorLike}
                onChange={(e) => update({ colorLike: e.target.value })}
              />
            </Field>
            <Field label="Colors / fonts I don't like">
              <input
                className={inputClass}
                value={form.colorDislike}
                onChange={(e) => update({ colorDislike: e.target.value })}
              />
            </Field>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold text-foreground/80">
              Where the logo will be used
            </p>
            <MultiChoiceGrid
              items={logoUsages}
              values={form.uses}
              onToggle={(value) => update({ uses: toggleValue(form.uses, value) })}
            />
          </div>
          <Field label="Ideas, likes, dislikes, competitors">
            <textarea
              className={cn(inputClass, "min-h-28 resize-none")}
              value={form.ideas}
              onChange={(e) => update({ ideas: e.target.value })}
              placeholder="Dos, don'ts, references, competitor artwork."
            />
          </Field>
          <FileField
            label="Reference files"
            hint="Images, PDF, Word or TXT"
            accept=".png,.jpg,.jpeg,.webp,.pdf,.doc,.docx,.txt,image/*,application/pdf"
            fileName={form.referenceFileName}
            onFile={(file) =>
              update({
                referenceFile: file,
                referenceFileName: file?.name ?? "",
              })
            }
          />
        </div>
      ) : null}

      {step === 4 ? (
        <Field label="Message / instructions">
          <textarea
            className={cn(inputClass, "min-h-36 resize-none")}
            value={form.message}
            onChange={(e) => update({ message: e.target.value })}
            placeholder="Anything the desk should know before we start."
          />
        </Field>
      ) : null}
    </QuestionnaireShell>
  );
}
