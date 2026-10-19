import type { BlogPost } from "@/config/blog";
import { faqItems, type FAQItem } from "@/config/faq";
import { pricingGroups } from "@/config/packages";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";
import { services } from "@/config/services";

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function orgId() {
  return `${siteConfig.url}/#organization`;
}

function websiteId() {
  return `${siteConfig.url}/#website`;
}

/** Schema.org / Google expect BCP 47 (en-US), not en_US */
const IN_LANGUAGE = "en-US";

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items.at(-1)?.path ?? "")}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path === "/" ? "" : item.path),
    })),
  };
}

export function faqPageSchema(items: FAQItem[] = faqItems, path = "/faq") {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const wordCount = [
    ...post.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.subsections?.flatMap((sub) => [
        ...sub.paragraphs,
        ...(sub.bullets ?? []),
      ]) ?? []),
    ]),
    ...post.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@id": orgId() },
    publisher: { "@id": orgId() },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount,
    inLanguage: IN_LANGUAGE,
    isPartOf: { "@id": `${absoluteUrl("/blog")}/#blog` },
    about: { "@id": orgId() },
  };
}

export function blogFaqSchema(post: BlogPost) {
  if (!post.faqs.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}/#faq`,
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}/#webpage`,
    url: absoluteUrl(path === "/" ? "" : path),
    name,
    description,
    isPartOf: { "@id": websiteId() },
    about: { "@id": orgId() },
    inLanguage: IN_LANGUAGE,
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  image,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string | string[];
  image?: string;
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}/#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: { "@id": orgId() },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    image: image ? absoluteUrl(image) : absoluteUrl("/heroes/hero-software.jpg"),
  };
}

function parsePrice(price: string) {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return match ? match[1] : undefined;
}

export function offerCatalogSchema(path = "/pricing") {
  return {
    "@type": "OfferCatalog",
    "@id": `${absoluteUrl(path)}/#offers`,
    name: `${siteConfig.name} Packages`,
    description:
      "Transparent packages for logo design, websites, e-commerce, SEO, applications, and corporate solutions.",
    url: absoluteUrl(path),
    itemListElement: pricingGroups.flatMap((group) =>
      group.packages.map((pkg) => {
        const amount = parsePrice(pkg.startingPrice);
        return {
          "@type": "Offer",
          name: `${group.title} — ${pkg.name}`,
          description: pkg.features.slice(0, 4).join(". "),
          url: absoluteUrl("/contact"),
          category: group.title,
          priceCurrency: "USD",
          ...(amount ? { price: amount } : {}),
          availability: "https://schema.org/InStock",
          seller: { "@id": orgId() },
        };
      }),
    ),
  };
}

export function creativeWorkSchema(project: {
  title: string;
  summary: string;
  category: string;
  slug: string;
  image: string;
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/portfolio/${project.slug}`)}/#work`,
    name: project.title,
    description: project.summary,
    image: absoluteUrl(project.image),
    url: absoluteUrl(`/portfolio/${project.slug}`),
    genre: project.category,
    creator: { "@id": orgId() },
    publisher: { "@id": orgId() },
    inLanguage: IN_LANGUAGE,
  };
}

export function itemListSchema(
  name: string,
  path: string,
  items: { name: string; url: string; position: number }[],
) {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}/#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function servicesItemListSchema() {
  const unique = new Map<string, (typeof services)[number]>();
  for (const service of services) {
    if (!unique.has(service.href)) unique.set(service.href, service);
  }
  return itemListSchema(
    `${siteConfig.name} Services`,
    "/services",
    [...unique.values()].map((service, index) => ({
      name: service.title,
      url: service.href,
      position: index + 1,
    })),
  );
}

export function siteGraph() {
  const sameAs = (Object.values(siteConfig.social) as string[]).filter(
    (url) => Boolean(url) && url.startsWith("http"),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId(),
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/icon.png"),
          width: 512,
          height: 512,
        },
        image: absoluteUrl("/brand/icon.png"),
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        description: siteConfig.description,
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
            availableLanguage: ["English"],
            areaServed: "US",
          },
        ],
        ...(sameAs.length ? { sameAs } : {}),
        knowsAbout: [
          "Software development",
          "Website design",
          "Brand identity",
          "CRM development",
          "SaaS development",
          "Mobile app development",
          "UI UX design",
          "Dashboard development",
          "E-commerce development",
        ],
        slogan: siteConfig.slogan ?? siteConfig.tagline,
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: ["ZEE Sol Tech", "zeesoltech", "ZEE SolTech"],
        description: siteConfig.description,
        publisher: { "@id": orgId() },
        inLanguage: IN_LANGUAGE,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professionalservice`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        image: absoluteUrl("/heroes/hero-software.jpg"),
        priceRange: "$$",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: [
          "Logo design",
          "Brand identity design",
          "Website development",
          "Custom software development",
          "CRM development",
          "SaaS development",
          "Mobile app development",
          "Dashboard development",
          "UI UX design",
          "E-commerce development",
        ],
        hasOfferCatalog: {
          "@id": `${absoluteUrl("/pricing")}/#offers`,
        },
        parentOrganization: { "@id": orgId() },
      },
    ],
  };
}
