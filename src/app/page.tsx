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
import { RelatedInsights } from "@/components/seo/RelatedInsights";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { SeoTopicCluster } from "@/components/seo/SeoTopicCluster";
import { siteConfig } from "@/config/site";
import { getFeaturedBlogPosts } from "@/config/blog";
import { faqItems } from "@/config/faq";
import { homeContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { faqPageSchema, webPageSchema } from "@/config/schemas";

const homeTitle = "Website, Logo & CRM Experts";
const homeDescription =
  "ZEE Sol Tech is a website development company, logo design agency, and custom CRM development partner — plus SaaS, software, and mobile apps that convert and scale.";

export const metadata: Metadata = createMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  keywords: pageKeywords.home,
});

export default function HomePage() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3);

  return (
    <>
      <SchemaScript
        id="home-jsonld"
        data={[
          webPageSchema({
            path: "/",
            name: homeTitle,
            description: homeDescription,
          }),
          faqPageSchema(faqItems.slice(0, 6), "/"),
        ]}
      />
      <Hero />
      <IndustryMarquee />
      <SeoTopicCluster />
      <PracticesSection />
      <FeaturedWork />
      <CapabilitiesSection />
      <DigitalSolutionsSection />
      <IndustryExpertiseSection />
      <ReceiptsSection />
      <MethodSection />
      <PackagesTeaser />
      <PageContentSection content={homeContent} tone="white" image="/sections/section-studio-collab.jpg" />
      <RelatedInsights
        posts={featuredPosts}
        eyebrow="From the blog"
        title="Practical guides for founders and growing teams"
      />

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
