import type { Metadata } from "next";
import { LogoQuestionnaireForm } from "@/components/questionnaire/LogoQuestionnaireForm";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { logoQuestionnaireContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbList, webPageSchema } from "@/config/schemas";

const title = "Logo Questionnaire";
const description =
  "Share your brand name, industry, look and feel, colors, and usage needs so ZEE Sol Tech can craft a lasting logo.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/logo-questionnaire",
  keywords: pageKeywords.logoQuestionnaire,
});

export default function LogoQuestionnairePage() {
  return (
    <>
      <SchemaScript
        id="logo-questionnaire-jsonld"
        data={[
          webPageSchema({ path: "/logo-questionnaire", name: title, description }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Logo Questionnaire", path: "/logo-questionnaire" },
          ]),
        ]}
      />
      <LogoQuestionnaireForm />
      <PageContentSection
        content={logoQuestionnaireContent}
        tone="white"
        image="/sections/section-branding.jpg"
      />
    </>
  );
}
