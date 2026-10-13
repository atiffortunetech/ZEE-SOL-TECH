import type { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultKeywords = [
  "ZEE Sol Tech",
  "zeesoltech",
  "zeesoltech.com",
  "software house",
  "digital agency",
  "custom software development",
  "CRM development company",
  "website design and development",
  "UI UX design agency",
  "SaaS development company",
  "mobile app development",
  "dashboard development",
  "brand identity design",
  "logo design agency",
  "e-commerce website development",
  "digital product studio",
  "business automation software",
  "Next.js website development",
  "hire software developers",
  "full stack development company",
  "web design company USA",
  "custom web application development",
] as const;

export const pageKeywords = {
  home: [
    ...defaultKeywords,
    "hire software development company",
    "full service digital agency",
    "startup product development",
    "SME digital transformation",
    "end to end product design and development",
    "best software house for startups",
  ],
  about: [
    ...defaultKeywords,
    "about ZEE Sol Tech",
    "digital product studio",
    "software house team",
    "brand and product agency",
    "custom development partner",
    "trusted software development partner",
  ],
  services: [
    ...defaultKeywords,
    "digital services",
    "software development services",
    "web design services",
    "branding services",
    "CRM and SaaS services",
    "UI UX design services",
    "complete digital solutions",
  ],
  branding: [
    ...defaultKeywords,
    "logo design",
    "brand identity design",
    "brand guidelines",
    "visual identity system",
    "logo package",
    "corporate branding agency",
    "professional logo design services",
    "brand book design",
  ],
  web: [
    ...defaultKeywords,
    "website development company",
    "business website design",
    "e-commerce development",
    "CMS website",
    "SEO friendly website",
    "conversion focused web design",
    "responsive website development",
    "corporate website design",
  ],
  software: [
    ...defaultKeywords,
    "custom software development",
    "business software solutions",
    "workflow automation",
    "enterprise software company",
    "bespoke software development",
    "internal tools development",
    "operations software",
  ],
  crm: [
    ...defaultKeywords,
    "CRM development",
    "custom CRM software",
    "sales pipeline software",
    "customer relationship management system",
    "CRM for small business",
    "lead management software",
    "sales CRM development",
  ],
  mobile: [
    ...defaultKeywords,
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "cross platform app development",
    "MVP mobile app",
    "React Native app development",
    "flutter app development company",
  ],
  uiux: [
    ...defaultKeywords,
    "UI UX design agency",
    "product design services",
    "wireframing and prototyping",
    "design system development",
    "user experience design",
    "interface design company",
    "UX research and design",
  ],
  saas: [
    ...defaultKeywords,
    "SaaS development company",
    "multi tenant SaaS",
    "SaaS MVP development",
    "subscription software development",
    "SaaS product engineering",
    "build a SaaS product",
    "SaaS startup development",
  ],
  dashboard: [
    ...defaultKeywords,
    "dashboard development",
    "analytics dashboard design",
    "business intelligence dashboards",
    "admin panel development",
    "KPI dashboard software",
    "data visualization dashboards",
  ],
  portfolio: [
    ...defaultKeywords,
    "design portfolio",
    "web design case studies",
    "branding portfolio",
    "software project showcase",
    "agency work examples",
    "ZEE Sol Tech portfolio",
  ],
  pricing: [
    ...defaultKeywords,
    "website packages",
    "logo design packages",
    "software development pricing",
    "CRM package cost",
    "transparent agency pricing",
    "website design cost",
    "affordable branding packages",
  ],
  process: [
    ...defaultKeywords,
    "software development process",
    "agency project workflow",
    "discovery design develop launch",
    "product delivery methodology",
    "agile software delivery",
  ],
  contact: [
    ...defaultKeywords,
    "request a project quote",
    "hire digital agency",
    "contact software house",
    "get website estimate",
    "contact ZEE Sol Tech",
    "start a software project",
  ],
  faq: [
    ...defaultKeywords,
    "software development FAQ",
    "website project questions",
    "CRM timeline and pricing FAQ",
    "agency collaboration questions",
    "ZEE Sol Tech FAQ",
  ],
  websiteQuestionnaire: [
    ...defaultKeywords,
    "website questionnaire",
    "website brief form",
    "website project intake",
    "website requirements form",
  ],
  logoQuestionnaire: [
    ...defaultKeywords,
    "logo questionnaire",
    "logo design brief",
    "brand intake form",
    "logo project questionnaire",
  ],
  blog: [
    ...defaultKeywords,
    "ZEE Sol Tech blog",
    "software development blog",
    "website development tips",
    "CRM and SaaS insights",
    "UI UX design articles",
    "branding and logo design tips",
    "mobile app MVP guide",
    "SEO friendly website checklist",
    "custom software development advice",
    "hire digital agency insights",
  ],
} as const;

export const seoConfig = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} | Software House, Web Design & Custom Development`,
  description: siteConfig.description,
  keywords: [...defaultKeywords],
  defaultOgImage: "/heroes/hero-software.jpg",
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image" as const,
  },
};

export function absoluteUrl(path = "") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path) return base;
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  image,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: readonly string[] | string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : seoConfig.defaultTitle;
  const desc = description ?? seoConfig.description;
  const url = absoluteUrl(path === "/" ? "" : path);
  const keywordList = [...(keywords?.length ? keywords : seoConfig.keywords)];
  const ogImage = absoluteUrl(image ?? seoConfig.defaultOgImage);

  return {
    title: fullTitle,
    description: desc,
    keywords: keywordList,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Technology",
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
      shortcut: ["/favicon.png"],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...seoConfig.openGraph,
      type,
      title: fullTitle,
      description: desc,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title ?? siteConfig.tagline}`,
        },
      ],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [siteConfig.name],
          }
        : {}),
    },
    twitter: {
      ...seoConfig.twitter,
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
