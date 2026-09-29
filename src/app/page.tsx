import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { IndustryMarquee } from "@/components/sections/IndustryMarquee";
import { PracticesSection } from "@/components/sections/PracticesSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import {
  CapabilitiesSection,
  DigitalSolutionsSection,
  IndustryExpertiseSection,
  ReceiptsSection,
} from "@/components/sections/CapabilitiesSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PackagesTeaser } from "@/components/sections/PackagesTeaser";
import { CTASection } from "@/components/sections/CTASection";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/config/faq";
import { homeContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { faqPageSchema, webPageSchema } from "@/config/schemas";

const homeTitle = "Software House, Web Design & Custom Development";
const homeDescription =
  "ZEE Sol Tech builds brand identities, conversion-focused websites, custom software, CRM systems, SaaS platforms, dashboards, and mobile apps for startups and growing businesses.";

export const metadata: Metadata = createMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  keywords: pageKeywords.home,
});

export default function HomePage() {
  return (
    <>
      <SchemaScript
        id="home-jsonld"
        data={[
          webPageSchema({
            path: "/",
            name: `${homeTitle} | ${siteConfig.name}`,
            description: homeDescription,
          }),
          faqPageSchema(faqItems.slice(0, 6), "/"),
        ]}
      />
      <Hero />
      <IndustryMarquee />
      <PracticesSection />
      <FeaturedWork />
      <CapabilitiesSection />
      <DigitalSolutionsSection />
      <IndustryExpertiseSection />
      <ReceiptsSection />
      <MethodSection />
      <PackagesTeaser />
      <PageContentSection content={homeContent} tone="white" image="/sections/section-studio-collab.jpg" />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about digital projects"
            description="Quick answers on scope, timelines, websites, software, and collaboration with our software house."
          />
          <div className="mt-10 max-w-3xl">
            <FAQAccordion items={faqItems.slice(0, 6)} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start your project?"
        description={`Tell ${siteConfig.name} what you need — brand, website, app, CRM, or a full digital system.`}
        primaryHref="/contact"
        primaryLabel={siteConfig.cta.primary}
        secondaryHref="/pricing"
        secondaryLabel="View packages"
      />
    </>
  );
}
