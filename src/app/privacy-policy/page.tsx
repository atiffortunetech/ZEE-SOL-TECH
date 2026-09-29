import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { PageHero } from "@/components/sections/PageHero";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  LegalContactCard,
  LegalMeta,
  LegalSection,
  LegalShell,
} from "@/components/legal/LegalContent";

const title = "Privacy Policy";
const description = `Read the ${siteConfig.name} privacy policy covering contact forms, questionnaires, cookies, project inquiries, and how we protect personal information.`;

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "ZEE Sol Tech privacy policy",
    "data protection",
    "website privacy",
    "contact form privacy",
    "cookie policy",
  ],
});

const effectiveDate = "September 29, 2026";
const updatedDate = "September 29, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaScript
        id="privacy-jsonld"
        data={[
          webPageSchema({ path: "/privacy-policy", name: title, description }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${siteConfig.name} collects, uses, and protects information when you use zeesoltech.com or contact our team.`}
        image="/heroes/hero-software.jpg"
      />
      <LegalShell>
        <LegalMeta effectiveDate={effectiveDate} updatedDate={updatedDate} />

        <div className="space-y-12">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {siteConfig.legalName} (“{siteConfig.name}”, “we”, “us”, or “our”) operates{" "}
            <a className="text-accent underline-offset-2 hover:underline" href={siteConfig.url}>
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </a>{" "}
            and related intake forms. This Privacy Policy explains what information we collect,
            why we collect it, and the choices you have. By using our website or submitting a form,
            you agree to this policy.
          </p>

          <LegalSection id="scope" title="1. Scope">
            <p>
              This policy applies to visitors and prospective clients who browse our website,
              request a quote, complete a website or logo questionnaire, subscribe to updates, or
              otherwise communicate with us. Project work may involve additional confidentiality
              terms in a proposal, statement of work, or NDA.
            </p>
          </LegalSection>

          <LegalSection id="information-we-collect" title="2. Information we collect">
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Contact details:</strong> name, email address,
                phone number, company name, and job title.
              </li>
              <li>
                <strong className="text-foreground">Project details:</strong> service interests
                (branding, website development, custom software, CRM, SaaS, dashboards, mobile
                apps), budgets, timelines, business descriptions, design preferences, file uploads,
                and messages you send.
              </li>
              <li>
                <strong className="text-foreground">Technical data:</strong> IP address, browser
                type, device information, pages visited, referring URL, and approximate location
                derived from IP (when analytics or server logs are enabled).
              </li>
              <li>
                <strong className="text-foreground">Communication records:</strong> emails, form
                submissions, and related correspondence needed to respond to your inquiry.
              </li>
            </ul>
            <p>
              Please do not submit passwords, payment card numbers, government ID numbers, or other
              highly sensitive credentials through public website forms.
            </p>
          </LegalSection>

          <LegalSection id="how-we-use" title="3. How we use information">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to inquiries and prepare proposals or package recommendations</li>
              <li>Operate, maintain, and improve our website and intake experience</li>
              <li>Send project-related follow-ups you request</li>
              <li>Analyze aggregate traffic and performance (when analytics are used)</li>
              <li>Protect against abuse, spam, and security incidents</li>
              <li>Comply with legal obligations and enforce our Terms &amp; Conditions</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </LegalSection>

          <LegalSection id="legal-bases" title="4. Legal bases (where applicable)">
            <p>
              Depending on your location, we may process information based on legitimate interests
              (responding to business inquiries and improving our services), your consent (where
              required for cookies or marketing), performance of pre-contract steps you request, or
              compliance with law.
            </p>
          </LegalSection>

          <LegalSection id="cookies" title="5. Cookies and similar technologies">
            <p>
              Our site may use essential cookies to keep pages working and optional analytics or
              preference cookies to understand usage. You can control cookies through your browser
              settings. Blocking some cookies may affect site functionality.
            </p>
          </LegalSection>

          <LegalSection id="sharing" title="6. Sharing and processors">
            <p>
              We may share information with trusted service providers who help us operate the
              business — for example hosting, email delivery, form processing, analytics, or
              customer communication tools — under appropriate confidentiality and security
              expectations. We may also disclose information if required by law, to protect rights
              and safety, or in connection with a business transfer.
            </p>
          </LegalSection>

          <LegalSection id="retention" title="7. Data retention">
            <p>
              We keep inquiry and project-related information for as long as needed to respond to
              you, manage a potential or active engagement, meet legal/accounting requirements, and
              resolve disputes. When information is no longer needed, we delete or anonymize it
              where reasonably practical.
            </p>
          </LegalSection>

          <LegalSection id="security" title="8. Security">
            <p>
              We use reasonable administrative and technical measures to protect personal
              information. No method of transmission or storage is 100% secure, so we cannot
              guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection id="your-rights" title="9. Your rights and choices">
            <p>
              Depending on applicable law, you may request access, correction, deletion, or
              restriction of certain personal information, or object to certain processing. To make
              a request, email{" "}
              <a
                className="text-accent underline-offset-2 hover:underline"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              . We may need to verify your identity before fulfilling a request.
            </p>
          </LegalSection>

          <LegalSection id="children" title="10. Children’s privacy">
            <p>
              Our services are directed to businesses and adults. We do not knowingly collect
              personal information from children under 16. If you believe a child has provided
              information, contact us and we will take appropriate steps to delete it.
            </p>
          </LegalSection>

          <LegalSection id="international" title="11. International transfers">
            <p>
              We are based in {siteConfig.contact.location} and may process information in other
              countries where our providers operate. Where required, we take steps to protect
              transferred information consistent with applicable law.
            </p>
          </LegalSection>

          <LegalSection id="third-party" title="12. Third-party links">
            <p>
              Our website may link to third-party sites or tools. Their privacy practices are
              governed by their own policies. We encourage you to review those policies before
              sharing information.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="13. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date at the
              top will change when we post revisions. Continued use of the website after updates
              means you accept the revised policy.
            </p>
          </LegalSection>

          <LegalSection id="related" title="14. Related documents">
            <p>
              Website use is also governed by our{" "}
              <Link className="text-accent underline-offset-2 hover:underline" href="/terms">
                Terms &amp; Conditions
              </Link>
              . Project engagements may include separate proposals, statements of work, and NDAs.
            </p>
          </LegalSection>

          <LegalContactCard />
        </div>
      </LegalShell>
    </>
  );
}
