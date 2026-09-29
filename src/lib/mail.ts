import nodemailer from "nodemailer";

export const LEAD_INBOX = process.env.LEAD_TO_EMAIL || "sales@zeesoltech.com";

function smtpPort() {
  return Number(process.env.SMTP_PORT || 465);
}

export function createMailTransport() {
  const user = process.env.SMTP_USER || process.env.EMAIL_USER || "";
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || "";
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = smtpPort();
  const secure =
    process.env.SMTP_SECURE != null
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  if (!user || !pass) {
    throw new Error(
      "Missing SMTP credentials. Set SMTP_USER and SMTP_PASS in .env.local (Hostinger email password for sales@zeesoltech.com).",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export type LeadPayload = {
  formType: string;
  fields: Record<string, string | string[] | number | boolean | null | undefined>;
  replyTo?: string;
  subject?: string;
};

export type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatValue(value: LeadPayload["fields"][string]) {
  if (value == null || value === "") return "—";
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
  return String(value);
}

export function buildLeadEmailHtml(payload: LeadPayload) {
  const rows = Object.entries(payload.fields)
    .filter(([key]) => key !== "website")
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;vertical-align:top;width:34%;text-transform:capitalize;">
          ${escapeHtml(key.replaceAll(/([A-Z])/g, " $1").replaceAll("_", " ").trim())}
        </td>
        <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#334155;white-space:pre-wrap;">
          ${escapeHtml(formatValue(value))}
        </td>
      </tr>`,
    )
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0f766e,#115e59);padding:20px 24px;color:#ffffff;">
        <p style="margin:0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.85;">ZEE Sol Tech</p>
        <h1 style="margin:8px 0 0;font-size:22px;">${escapeHtml(payload.formType)}</h1>
      </div>
      <div style="padding:8px 12px 20px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
      </div>
      <div style="padding:16px 24px;background:#f1f5f9;color:#64748b;font-size:12px;">
        Sent from zeesoltech.com · Delivered to ${escapeHtml(LEAD_INBOX)}
      </div>
    </div>
  </div>`;
}

export async function sendLeadEmail(
  payload: LeadPayload,
  attachments: MailAttachment[] = [],
) {
  const transporter = createMailTransport();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || LEAD_INBOX;
  const subject =
    payload.subject ||
    `[${payload.formType}] New lead from ${formatValue(payload.fields.name) || "website"}`;

  const info = await transporter.sendMail({
    from: `"ZEE Sol Tech Website" <${from}>`,
    to: LEAD_INBOX,
    replyTo: payload.replyTo || undefined,
    subject,
    text: Object.entries(payload.fields)
      .filter(([key]) => key !== "website")
      .map(([key, value]) => `${key}: ${formatValue(value)}`)
      .join("\n"),
    html: buildLeadEmailHtml(payload),
    attachments: attachments.map((file) => ({
      filename: file.filename,
      content: file.content,
      contentType: file.contentType,
    })),
  });

  return info;
}
