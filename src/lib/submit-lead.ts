export type LeadSubmitInput = {
  formType: string;
  fields: Record<string, string | string[] | number | boolean | null | undefined>;
  replyTo?: string;
  subject?: string;
  files?: Record<string, File | null | undefined>;
};

export async function submitLead(input: LeadSubmitInput) {
  const hasFiles = input.files
    ? Object.values(input.files).some((file) => file instanceof File && file.size > 0)
    : false;

  if (hasFiles && input.files) {
    const formData = new FormData();
    formData.set("formType", input.formType);
    if (input.replyTo) formData.set("replyTo", input.replyTo);
    if (input.subject) formData.set("subject", input.subject);

    for (const [key, value] of Object.entries(input.fields)) {
      if (value == null) continue;
      if (Array.isArray(value)) {
        for (const item of value) formData.append(`${key}[]`, String(item));
      } else {
        formData.set(key, String(value));
      }
    }

    for (const [key, file] of Object.entries(input.files)) {
      if (file instanceof File && file.size > 0) {
        formData.append(key, file, file.name);
      }
    }

    const response = await fetch("/api/lead", {
      method: "POST",
      body: formData,
    });
    const data = (await response.json()) as { ok?: boolean; error?: string };
    if (!response.ok || !data.ok) {
      throw new Error(data.error || "Failed to send your message");
    }
    return data;
  }

  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType: input.formType,
      fields: input.fields,
      replyTo: input.replyTo,
      subject: input.subject,
    }),
  });
  const data = (await response.json()) as { ok?: boolean; error?: string };
  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Failed to send your message");
  }
  return data;
}
