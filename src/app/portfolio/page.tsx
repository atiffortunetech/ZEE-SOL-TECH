import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { portfolioItems } from "@/config/portfolio";
import { portfolioContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "Portfolio — Branding, Websites & Digital Projects";
const description =
  "Browse ZEE Sol Tech portfolio work across logos, brand systems, websites, apps, banners, and digital campaigns for startups and growing brands.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/portfolio",
  keywords: pageKeywords.portfolio,
});

export default function PortfolioPage() {
  return (
    <>
      <SchemaScript
        id="portfolio-jsonld"
        data={[
          webPageSchema({
            path: "/portfolio",
            name: title,
            description,
            type: "CollectionPage",
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Work across brand, web, and product"
        description={`Browse ${portfolioItems.length}+ projects across logos, websites, apps, and more.`}
        image="/heroes/hero-branding.jpg"
        primaryHref="/contact"
        primaryLabel="Start a project"
      />
      <section className="bg-background py-16 md:py-24">
        <Container>
          <PortfolioGrid showHero={false} />
        </Container>
      </section>
      <PageContentSection content={portfolioContent} tone="white" image="/sections/section-branding.jpg" />
      <CTASection
        title="Ready to start your project?"
        description="Tell us about your next brief and we'll outline the right branding, website, or software approach."
        primaryHref="/contact"
        primaryLabel="Get an estimate"
        secondaryHref="/pricing"
        secondaryLabel="View packages"
      />
    </>
  );
}
