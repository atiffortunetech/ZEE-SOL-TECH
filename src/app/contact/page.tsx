import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { contactContent } from "@/config/page-content";
import { sectionImages } from "@/config/images";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "Contact Us";
const description =
  "Contact ZEE Sol Tech to request a quote for logo design, website development, custom software, CRM, SaaS, dashboards, or mobile app projects.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/contact",
  keywords: pageKeywords.contact,
});

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialPackage =
    typeof params.package === "string" ? params.package : undefined;
  const initialType = typeof params.type === "string" ? params.type : undefined;
  const initialTimeline =
    typeof params.timeline === "string" ? params.timeline : undefined;

  return (
    <>
      <SchemaScript
        id="contact-jsonld"
        data={[
          webPageSchema({
            path: "/contact",
            name: title,
            description,
            type: "ContactPage",
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's build something that matters"
        description="Share a few details about your project. We'll follow up with next steps and a practical proposal path."
        image="/heroes/hero-apps.jpg"
      />
      <section className="bg-background py-14 md:py-20">
        <Container>
          <ContactForm
            initialPackage={initialPackage}
            initialType={initialType}
            initialTimeline={initialTimeline}
          />
        </Container>
      </section>
      <PageContentSection content={contactContent} image={sectionImages.studio} />
    </>
  );
}
