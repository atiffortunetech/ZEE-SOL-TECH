import type { Metadata } from "next";
import { faqItems } from "@/config/faq";
import { faqContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, faqPageSchema, webPageSchema } from "@/config/schemas";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "FAQ — Software, Websites & Project Questions";
const description =
  "Answers about ZEE Sol Tech software development, websites, CRMs, timelines, pricing, hosting, NDAs, and how our digital agency collaborates with clients.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/faq",
  keywords: pageKeywords.faq,
});

export default function FAQPage() {
  return (
    <>
      <SchemaScript
        id="faq-jsonld"
        data={[
          webPageSchema({ path: "/faq", name: title, description }),
          faqPageSchema(faqItems, "/faq"),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers to help you decide how to start your branding, website, or software project."
        image="/heroes/hero-websites.jpg"
        primaryHref="/contact"
        primaryLabel="Ask a question"
      />
      <PageContentSection content={faqContent} image="/sections/section-studio-collab.jpg" />
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>
      <CTASection
        title="Still have questions?"
        description="Send a project request and we'll clarify scope, timeline, and approach."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
      />
    </>
  );
}
