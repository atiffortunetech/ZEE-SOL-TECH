import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PackageTabs } from "@/components/sections/PackageTabs";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pricingContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, offerCatalogSchema, webPageSchema } from "@/config/schemas";

const title = "Packages & Pricing";
const description =
  "Compare ZEE Sol Tech packages for logo design, websites, e-commerce, CMS, animation, SEO, social, applications, and corporate combo solutions.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/pricing",
  keywords: pageKeywords.pricing,
});

export default function PricingPage() {
  return (
    <>
      <SchemaScript
        id="pricing-jsonld"
        data={[
          webPageSchema({ path: "/pricing", name: title, description }),
          offerCatalogSchema("/pricing"),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Packages", path: "/pricing" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Packages"
        title="Clear packages for every practice"
        description="Switch the tab, compare features, and start with a transparent package."
        image="/heroes/hero-websites.jpg"
        primaryHref="/contact"
        primaryLabel="Request a custom quote"
      />
      <section className="py-14 md:py-20">
        <Container>
          <PackageTabs />
        </Container>
      </section>
      <PageContentSection content={pricingContent} tone="white" image="/sections/section-websites.jpg" />
      <CTASection
        title="Need something custom?"
        description="We'll match the right package — or build a proposal around your exact branding, website, or software scope."
        primaryHref="/contact"
        primaryLabel="Start a project"
      />
    </>
  );
}
