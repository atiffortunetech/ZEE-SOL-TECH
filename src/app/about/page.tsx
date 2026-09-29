import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import {
  CapabilitiesSection,
  DigitalSolutionsSection,
  IndustryExpertiseSection,
} from "@/components/sections/CapabilitiesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "About Our Digital Product Studio";
const description =
  "Learn about ZEE Sol Tech — a digital product studio building brand identities, websites, custom software, CRM platforms, SaaS products, and mobile apps for modern businesses.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/about",
  keywords: pageKeywords.about,
});

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        id="about-jsonld"
        data={[
          webPageSchema({ path: "/about", name: title, description, type: "AboutPage" }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="About"
        title={`${siteConfig.name} builds brands and digital products that perform.`}
        description="We combine design craft with product thinking — helping startups and established companies launch clear identities, websites, and software systems."
        image="/heroes/hero-software.jpg"
        primaryHref="/contact"
        primaryLabel={siteConfig.cta.primary}
        secondaryHref="/portfolio"
        secondaryLabel="View work"
      />
      <PageContentSection content={aboutContent} image="/sections/section-studio-collab.jpg" />
      <CapabilitiesSection />
      <DigitalSolutionsSection />
      <IndustryExpertiseSection />
      <WhyChooseUs />
      <CTASection
        title="Let's talk about your next build"
        description="Share your goals and we'll outline a practical path forward for branding, web, or custom software."
        primaryHref="/contact"
        primaryLabel={siteConfig.cta.primary}
      />
    </>
  );
}
