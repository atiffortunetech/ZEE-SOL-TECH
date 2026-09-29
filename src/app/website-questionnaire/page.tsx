import type { Metadata } from "next";
import { WebsiteQuestionnaireForm } from "@/components/questionnaire/WebsiteQuestionnaireForm";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { websiteQuestionnaireContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbList, webPageSchema } from "@/config/schemas";

const title = "Website Questionnaire";
const description =
  "Tell ZEE Sol Tech about your business, goals, design preferences, and site structure so we can prepare a strong website brief.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/website-questionnaire",
  keywords: pageKeywords.websiteQuestionnaire,
});

export default function WebsiteQuestionnairePage() {
  return (
    <>
      <SchemaScript
        id="website-questionnaire-jsonld"
        data={[
          webPageSchema({ path: "/website-questionnaire", name: title, description }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Website Questionnaire", path: "/website-questionnaire" },
          ]),
        ]}
      />
      <WebsiteQuestionnaireForm />
      <PageContentSection
        content={websiteQuestionnaireContent}
        tone="white"
        image="/sections/section-websites.jpg"
      />
    </>
  );
}
