/**
 * Homepage / footer topic cluster — keyword-rich internal links that
 * reinforce money pages without stuffing a single URL.
 */
export const seoTopicCluster = [
  {
    title: "Website design & development",
    description:
      "Conversion-focused business websites, e-commerce builds, and SEO-ready page structure.",
    href: "/services/web-development",
    keywords: ["website development company", "SEO friendly website", "business website design"],
  },
  {
    title: "Logo & brand identity",
    description:
      "Memorable marks, brand systems, and guidelines that stay consistent everywhere.",
    href: "/services/branding",
    keywords: ["logo design agency", "brand identity design", "visual identity"],
  },
  {
    title: "Custom software & CRM",
    description:
      "Workflow software, sales pipelines, and internal tools shaped around how you operate.",
    href: "/services/software-development",
    keywords: ["custom software development", "CRM development", "business automation"],
  },
  {
    title: "SaaS & mobile products",
    description:
      "MVP-to-scale product engineering for multi-tenant SaaS and iOS/Android apps.",
    href: "/services/saas-development",
    keywords: ["SaaS development company", "mobile app development", "product MVP"],
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

export const footerSeoLinks = [
  { label: "Website development company", href: "/services/web-development" },
  { label: "Logo design agency", href: "/services/branding" },
  { label: "Custom CRM software", href: "/services/crm" },
  { label: "SaaS MVP development", href: "/services/saas-development" },
  { label: "Mobile app development", href: "/services/mobile-app-development" },
  { label: "UI UX design services", href: "/services/ui-ux" },
  { label: "SEO-friendly websites", href: "/blog/seo-friendly-website-checklist" },
  { label: "Hire a software house", href: "/contact" },
  { label: "View packages", href: "/pricing" },
  { label: "Read the blog", href: "/blog" },
] as const;
