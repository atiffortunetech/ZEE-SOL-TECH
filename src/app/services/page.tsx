import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import {
  DigitalSolutionsSection,
  IndustryExpertiseSection,
} from "@/components/sections/CapabilitiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { servicesContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import {
  breadcrumbList,
  servicesItemListSchema,
  webPageSchema,
} from "@/config/schemas";

const title = "Digital & Software Development Services";
const description =
  "Explore ZEE Sol Tech services: logo design, brand identity, UI/UX, website development, e-commerce, custom software, CRM, SaaS, dashboards, and mobile apps.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/services",
  keywords: [
    ...pageKeywords.services,
    "hire software development company",
    "full service digital agency services",
    "website and CRM development services",
  ],
  image: "/heroes/hero-software.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <SchemaScript
        id="services-jsonld"
        data={[
          webPageSchema({
            path: "/services",
            name: title,
            description,
            type: "CollectionPage",
          }),
          servicesItemListSchema(),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Complete digital and software solutions"
        description="One partner for brand identity, UI/UX, SEO-ready websites, custom software, CRM, SaaS, dashboards, and mobile apps."
        image="/heroes/hero-software.jpg"
        primaryHref="/contact"
        primaryLabel="Request a quote"
        secondaryHref="/pricing"
        secondaryLabel="View packages"
      />
      <ServicesGrid showHeading={false} />
      <DigitalSolutionsSection />
      <PageContentSection content={servicesContent} tone="white" image="/sections/section-websites.jpg" />
      <IndustryExpertiseSection />
      <CTASection
        title="Not sure where to start?"
        description="Share your goals and we'll recommend the right package or custom approach for branding, web, CRM, or software."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/pricing"
        secondaryLabel="View Packages"
      />
    </>
  );
}
