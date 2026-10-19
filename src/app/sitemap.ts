import { getAllBlogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";

/**
 * Only indexable, internally linked routes.
 * Thin gallery case-study URLs (/portfolio/[slug]) are noindexed and omitted
 * so they do not create hundreds of orphan sitemap entries.
 */
export default function sitemap() {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/branding", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/web-development", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/software-development", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/crm", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/dashboard-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/mobile-app-development", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/saas-development", priority: 0.85, changeFrequency: "monthly" },
    { path: "/services/ui-ux", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/process", priority: 0.65, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/website-questionnaire", priority: 0.5, changeFrequency: "monthly" },
    { path: "/logo-questionnaire", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getAllBlogPosts().map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
