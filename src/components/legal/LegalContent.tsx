import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">{children}</div>
    </section>
  );
}

export function LegalMeta({
  effectiveDate,
  updatedDate,
}: {
  effectiveDate: string;
  updatedDate: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-2 border-b border-border pb-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        Effective date: <span className="font-medium text-foreground">{effectiveDate}</span>
      </p>
      <p>
        Last updated: <span className="font-medium text-foreground">{updatedDate}</span>
      </p>
    </div>
  );
}

export function LegalContactCard() {
  return (
    <div className="rounded-3xl border border-border bg-slate-50 p-6 md:p-8">
      <h3 className="font-display text-xl font-semibold text-foreground">Contact</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        For questions about these legal pages, contact {siteConfig.legalName}:
      </p>
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        <li>
          Email:{" "}
          <a className="text-accent underline-offset-2 hover:underline" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </li>
        <li>Phone: {siteConfig.contact.phone}</li>
        <li>Location: {siteConfig.contact.location}</li>
        <li>
          Website:{" "}
          <Link className="text-accent underline-offset-2 hover:underline" href="/contact">
            Contact form
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function LegalShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="max-w-3xl">{children}</Container>
    </section>
  );
}
