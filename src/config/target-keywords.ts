/**
 * Primary SEO targets for ZEE Sol Tech.
 * Content, meta, and internal links should reinforce these first.
 */
export const primaryKeywords = [
  {
    keyword: "website development company",
    path: "/services/web-development",
    intent: "Hire a team to design and build a business / SEO website",
    supporting: [
      "website design and development",
      "SEO friendly website",
      "business website development",
      "e-commerce website development",
    ],
  },
  {
    keyword: "logo design agency",
    path: "/services/branding",
    intent: "Hire professionals for logo + brand identity",
    supporting: [
      "brand identity design",
      "professional logo design",
      "corporate branding agency",
      "visual identity system",
    ],
  },
  {
    keyword: "custom CRM development",
    path: "/services/crm",
    intent: "Build sales CRM / pipeline software tailored to the business",
    supporting: [
      "CRM development company",
      "sales pipeline software",
      "lead management software",
      "CRM for small business",
    ],
  },
] as const;

export const primaryKeywordList = primaryKeywords.map((item) => item.keyword);
