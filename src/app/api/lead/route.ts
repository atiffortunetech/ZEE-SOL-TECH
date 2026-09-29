import { NextResponse } from "next/server";
import { sendLeadEmail, type LeadPayload, type MailAttachment } from "@/lib/mail";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB per file
const MAX_FILES = 5;

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

async function parseJsonBody(request: Request): Promise<{
  payload: LeadPayload;
  attachments: MailAttachment[];
}> {
  const body = (await request.json()) as LeadPayload & { website?: string };
  if (body.website) {
    return {
      payload: { formType: "Spam", fields: {} },
      attachments: [],
    };
  }
  if (!body?.formType || !body?.fields || typeof body.fields !== "object") {
    throw new Error("Invalid lead payload");
  }
  return {
    payload: {
      formType: String(body.formType),
      fields: body.fields,
      replyTo: body.replyTo ? String(body.replyTo) : undefined,
      subject: body.subject ? String(body.subject) : undefined,
    },
    attachments: [],
  };
}

async function parseFormDataBody(request: Request): Promise<{
  payload: LeadPayload;
  attachments: MailAttachment[];
  honeypot?: string;
}> {
  const formData = await request.formData();
  const honeypot = String(formData.get("website") || "");
  const formType = String(formData.get("formType") || "Website lead");
  const replyTo = String(formData.get("replyTo") || formData.get("email") || "");
  const subject = String(formData.get("subject") || "");

  const fields: LeadPayload["fields"] = {};
  const attachments: MailAttachment[] = [];

  for (const [key, value] of formData.entries()) {
    if (["formType", "replyTo", "subject", "website"].includes(key)) continue;

    if (value instanceof File) {
      if (!value.name || value.size === 0) continue;
      if (attachments.length >= MAX_FILES) {
        throw new Error(`Too many attachments (max ${MAX_FILES})`);
      }
      if (value.size > MAX_FILE_BYTES) {
        throw new Error(`File "${value.name}" exceeds 8MB limit`);
      }
      const buffer = Buffer.from(await value.arrayBuffer());
      attachments.push({
        filename: value.name,
        content: buffer,
        contentType: value.type || undefined,
      });
      const listKey = `${key}Files`;
      const existing = fields[listKey];
      fields[listKey] = existing
        ? `${formatExisting(existing)}, ${value.name}`
        : value.name;
      continue;
    }

    const text = String(value);
    if (key.endsWith("[]")) {
      const clean = key.slice(0, -2);
      const prev = fields[clean];
      if (Array.isArray(prev)) prev.push(text);
      else if (prev) fields[clean] = [String(prev), text];
      else fields[clean] = [text];
    } else if (fields[key] != null) {
      const prev = fields[key];
      fields[key] = Array.isArray(prev) ? [...prev, text] : [String(prev), text];
    } else {
      fields[key] = text;
    }
  }

  return {
    payload: {
      formType,
      fields,
      replyTo: replyTo || undefined,
      subject: subject || undefined,
    },
    attachments,
    honeypot,
  };
}

function formatExisting(value: LeadPayload["fields"][string]) {
  if (Array.isArray(value)) return value.join(", ");
  return String(value ?? "");
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload: LeadPayload;
    let attachments: MailAttachment[] = [];

    if (contentType.includes("multipart/form-data")) {
      const parsed = await parseFormDataBody(request);
      if (parsed.honeypot) {
        return NextResponse.json({ ok: true, skipped: true });
      }
      payload = parsed.payload;
      attachments = parsed.attachments;
    } else {
      const parsed = await parseJsonBody(request);
      if (parsed.payload.formType === "Spam") {
        return NextResponse.json({ ok: true, skipped: true });
      }
      payload = parsed.payload;
      attachments = parsed.attachments;
    }

    if (!payload.fields || Object.keys(payload.fields).length === 0) {
      return jsonError("No form fields received");
    }

    const info = await sendLeadEmail(payload, attachments);
    return NextResponse.json({
      ok: true,
      messageId: info.messageId,
      to: process.env.LEAD_TO_EMAIL || "sales@zeesoltech.com",
    });
  } catch (error) {
    console.error("[api/lead]", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    const status = message.includes("SMTP") || message.includes("Missing SMTP") ? 500 : 400;
    return jsonError(message, status);
  }
}
