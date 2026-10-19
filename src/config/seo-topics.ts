import { primaryKeywords } from "./target-keywords";

/**
 * Homepage / footer topic cluster — keyword-rich internal links that
 * reinforce money pages without stuffing a single URL.
 */
export const seoTopicCluster = [
  {
    title: "Website development company",
    description:
      "ZEE Sol Tech builds SEO-friendly business websites, landing pages, and e-commerce stores that convert visitors into leads.",
    href: "/services/web-development",
    keywords: ["website development company", "SEO friendly website", "business website design"],
  },
  {
    title: "Logo design agency",
    description:
      "Professional logo design and brand identity systems that look sharp on web, packaging, social, and product UI.",
    href: "/services/branding",
    keywords: ["logo design agency", "brand identity design", "professional logo design"],
  },
  {
    title: "Custom CRM development",
    description:
      "Custom CRM software for pipelines, lead follow-ups, automation, and reporting — built around how your team sells.",
    href: "/services/crm",
    keywords: ["custom CRM development", "CRM development company", "sales pipeline software"],
  },
  {
    title: "Custom software & SaaS",
    description:
      "Workflow software, multi-tenant SaaS MVPs, and internal tools shaped for real operations.",
    href: "/services/software-development",
    keywords: ["custom software development", "SaaS development company", "business automation"],
  },
  {
    title: "UI/UX & dashboards",
    description:
      "Interfaces and analytics views designed for clarity, speed, and real decisions.",
    href: "/services/ui-ux",
    keywords: ["UI UX design agency", "dashboard development", "product design"],
  },
  {
    title: "Pricing & process",
    description:
      "Transparent packages and a clear discovery → design → build → launch workflow.",
    href: "/pricing",
    keywords: ["website packages", "software development pricing", "agency process"],
  },
] as const;

/** Footer “Popular searches” — primary keywords first */
export const footerSeoLinks = [
  ...primaryKeywords.map((item) => ({
    label: item.keyword,
    href: item.path,
  })),
  { label: "SaaS MVP development", href: "/services/saas-development" },
  { label: "Mobile app development", href: "/services/mobile-app-development" },
  { label: "UI UX design services", href: "/services/ui-ux" },
  { label: "SEO-friendly websites", href: "/blog/seo-friendly-website-checklist" },
  { label: "Hire a software house", href: "/contact" },
  { label: "View packages", href: "/pricing" },
  { label: "Read the blog", href: "/blog" },
] as const;
