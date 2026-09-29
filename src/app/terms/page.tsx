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

const title = "Terms & Conditions";
const description = `Review ${siteConfig.name} terms and conditions for website use, packages, proposals, intellectual property, and digital service engagements.`;

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/terms",
  keywords: [
    "terms and conditions",
    "terms of service",
    "ZEE Sol Tech terms",
    "website terms",
    "software house terms",
    "agency terms and conditions",
  ],
});

const effectiveDate = "September 29, 2026";
const updatedDate = "September 29, 2026";

export default function TermsPage() {
  return (
    <>
      <SchemaScript
        id="terms-jsonld"
        data={[
          webPageSchema({ path: "/terms", name: title, description }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Rules for using the ${siteConfig.name} website and engaging our software house for branding, web, and custom development services.`}
        image="/heroes/hero-websites.jpg"
      />
      <LegalShell>
        <LegalMeta effectiveDate={effectiveDate} updatedDate={updatedDate} />

        <div className="space-y-12">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            These Terms &amp; Conditions (“Terms”) govern your access to and use of{" "}
            <a className="text-accent underline-offset-2 hover:underline" href={siteConfig.url}>
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </a>{" "}
            and related communications with {siteConfig.legalName} (“{siteConfig.name}”, “we”,
            “us”). By using the site or requesting services, you agree to these Terms. If you do
            not agree, do not use the website.
          </p>

          <LegalSection id="agreement" title="1. Agreement overview">
            <p>
              Website content is for general information about our digital product studio services,
              including logo design, brand identity, website development, custom software, CRM
              systems, SaaS platforms, dashboards, UI/UX, and mobile apps. Paid project work is
              governed by a separate proposal, statement of work, order form, or contract
              (collectively, “Project Agreement”). If a Project Agreement conflicts with these
              Terms, the Project Agreement controls for that engagement.
            </p>
          </LegalSection>

          <LegalSection id="eligibility" title="2. Eligibility">
            <p>
              You represent that you are at least 18 years old and have authority to bind yourself
              or the business you represent when requesting quotes or entering a Project Agreement.
            </p>
          </LegalSection>

          <LegalSection id="website-use" title="3. Website use">
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the site for unlawful, harmful, or fraudulent purposes</li>
              <li>Attempt to disrupt, scrape abusively, or reverse engineer the site</li>
              <li>Submit malware, spam, or misleading inquiry content</li>
              <li>Impersonate another person or misrepresent your affiliation</li>
            </ul>
            <p>
              We may suspend or restrict access if we reasonably believe these Terms have been
              violated.
            </p>
          </LegalSection>

          <LegalSection id="services-packages" title="4. Services, packages, and quotes">
            <p>
              Service descriptions, package features, timelines, and prices shown on the website
              are illustrative and may change. Published package prices are starting points or
              estimates unless confirmed in a Project Agreement. A submitted questionnaire or
              contact form is a request for information — not a binding order until both parties
              accept a written Project Agreement and any required deposit is received.
            </p>
          </LegalSection>

          <LegalSection id="client-responsibilities" title="5. Client responsibilities">
            <p>For project work, you agree to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide accurate requirements, content, brand assets, and timely feedback</li>
              <li>Ensure you have rights to materials you supply (copy, images, logos, data)</li>
              <li>Designate a decision-maker for approvals and revision rounds</li>
              <li>Make payments according to the Project Agreement schedule</li>
            </ul>
            <p>
              Delays in feedback, content, or access may extend timelines without liability for
              resulting schedule shifts.
            </p>
          </LegalSection>

          <LegalSection id="payments" title="6. Payments and taxes">
            <p>
              Fees, payment milestones, refund rules, and late-payment terms are defined in the
              applicable Project Agreement. Unless stated otherwise, fees exclude applicable taxes.
              Work may pause if invoices remain unpaid beyond agreed terms.
            </p>
          </LegalSection>

          <LegalSection id="revisions" title="7. Revisions and scope changes">
            <p>
              Included revision rounds are defined per package or proposal. Requests outside agreed
              scope may require a change order and additional fees. Satisfaction guarantees, when
              offered on specific packages, apply only as written in that package or Project
              Agreement.
            </p>
          </LegalSection>

          <LegalSection id="ip" title="8. Intellectual property">
            <p>
              <strong className="text-foreground">Website materials:</strong> Design, text, graphics,
              logos, and code on this website remain the property of {siteConfig.legalName} or its
              licensors and may not be copied for commercial use without permission.
            </p>
            <p>
              <strong className="text-foreground">Project deliverables:</strong> Ownership and
              license terms for logos, websites, software, and other deliverables transfer or grant
              as specified in the Project Agreement — often after full payment. Third-party fonts,
              stock assets, plugins, and open-source components remain subject to their own
              licenses.
            </p>
            <p>
              Portfolio and promotional use: Unless a Project Agreement or NDA says otherwise, we
              may display non-confidential work in our portfolio, case studies, and marketing.
            </p>
          </LegalSection>

          <LegalSection id="confidentiality" title="9. Confidentiality">
            <p>
              Both parties should protect non-public business information shared for a potential or
              active project. Formal NDAs can be signed on request before detailed discovery.
            </p>
          </LegalSection>

          <LegalSection id="third-party" title="10. Third-party services">
            <p>
              Projects may rely on third-party hosting, domains, payment processors, APIs, CMS
              platforms, or app stores. Those services have separate terms. We are not responsible
              for outages, policy changes, or fees charged by third parties unless expressly agreed
              in writing.
            </p>
          </LegalSection>

          <LegalSection id="warranties" title="11. Disclaimers">
            <p>
              The website and its content are provided “as is” without warranties of any kind,
              express or implied, including merchantability, fitness for a particular purpose, or
              non-infringement. We do not guarantee uninterrupted site availability or that website
              content is error-free. Project warranties, if any, are limited to those stated in the
              Project Agreement.
            </p>
          </LegalSection>

          <LegalSection id="liability" title="12. Limitation of liability">
            <p>
              To the fullest extent permitted by law, {siteConfig.legalName} and its team will not
              be liable for indirect, incidental, special, consequential, or punitive damages, or
              for lost profits, revenue, data, or business opportunities arising from website use
              or services. Our total liability related to website use is limited to one hundred U.S.
              dollars (USD $100). Liability for paid project work is limited as stated in the
              Project Agreement (or, if silent, to the fees paid for the specific services giving
              rise to the claim in the three months before the claim).
            </p>
          </LegalSection>

          <LegalSection id="indemnity" title="13. Indemnification">
            <p>
              You agree to defend and indemnify {siteConfig.legalName} against claims arising from
              your misuse of the website, your breach of these Terms, or materials you provide that
              infringe third-party rights — except to the extent caused by our willful misconduct.
            </p>
          </LegalSection>

          <LegalSection id="governing-law" title="14. Governing law">
            <p>
              These Terms are governed by the laws of {siteConfig.contact.location}, without regard
              to conflict-of-law rules. Courts located in {siteConfig.contact.location} shall have
              exclusive jurisdiction over disputes arising from website use, unless a Project
              Agreement specifies otherwise.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="15. Changes">
            <p>
              We may update these Terms periodically. The “Last updated” date will change when
              revisions are posted. Continued use of the website after changes constitutes
              acceptance of the updated Terms.
            </p>
          </LegalSection>

          <LegalSection id="privacy" title="16. Privacy">
            <p>
              Personal information is handled as described in our{" "}
              <Link className="text-accent underline-offset-2 hover:underline" href="/privacy-policy">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection id="contact" title="17. Contact">
            <p>
              Questions about these Terms &amp; Conditions can be sent using the details below or
              through our{" "}
              <Link className="text-accent underline-offset-2 hover:underline" href="/contact">
                contact page
              </Link>
              .
            </p>
          </LegalSection>

          <LegalContactCard />
        </div>
      </LegalShell>
    </>
  );
}
