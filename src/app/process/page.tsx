import type { Metadata } from "next";
import { MethodSection } from "@/components/sections/MethodSection";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { processContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "Our Process: Design & Delivery";
const description =
  "See how ZEE Sol Tech delivers digital projects: discovery, definition, design, development, launch, and growth support for websites and custom software.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/process",
  keywords: pageKeywords.process,
});

export default function ProcessPage() {
  return (
    <>
      <SchemaScript
        id="process-jsonld"
        data={[
          webPageSchema({ path: "/process", name: title, description }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Process"
        title="A clear path from brief to launch"
        description="Transparent stages, structured feedback, and support after go-live."
        image="/heroes/hero-software.jpg"
        primaryHref="/contact"
        primaryLabel="Start discovery"
      />
      <PageContentSection content={processContent} image="/sections/section-process.jpg" />
      <MethodSection />
      <CTASection
        title="Ready to begin?"
        description="We'll start by understanding your goals, constraints, and users for branding, web, or software work."
        primaryHref="/contact"
        primaryLabel="Request a quote"
      />
    </>
  );
}
