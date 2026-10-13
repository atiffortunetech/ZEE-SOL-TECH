import type { BlogPost } from "./blog/types";
import { estimateReadingMinutes } from "./blog/types";
import { post as businessDashboards } from "./blog/posts/business-dashboards";
import { post as chooseWebAgency } from "./blog/posts/choose-web-agency";
import { post as customCrm } from "./blog/posts/custom-crm";
import { post as customSoftware } from "./blog/posts/custom-software";
import { post as ecommerceFeatures } from "./blog/posts/ecommerce-features";
import { post as logoMistakes } from "./blog/posts/logo-mistakes";
import { post as mobileMvp } from "./blog/posts/mobile-mvp";
import { post as saasMvp } from "./blog/posts/saas-mvp";
import { post as seoWebsite } from "./blog/posts/seo-website";
import { post as uiuxConverts } from "./blog/posts/uiux-converts";

export type { BlogFaq, BlogPost, BlogSection, BlogSubsection } from "./blog/types";

const rawPosts: BlogPost[] = [
  chooseWebAgency,
  logoMistakes,
  customCrm,
  saasMvp,
  uiuxConverts,
  mobileMvp,
  businessDashboards,
  customSoftware,
  seoWebsite,
  ecommerceFeatures,
];

export const blogPosts: BlogPost[] = rawPosts.map((post) => ({
  ...post,
  readingMinutes: estimateReadingMinutes(post),
}));

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedBlogPosts() {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return getAllBlogPosts().slice(0, limit);
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aScore =
        a.category === current.category
          ? 2
          : a.tags.some((t) => current.tags.includes(t))
            ? 1
            : 0;
      const bScore =
        b.category === current.category
          ? 2
          : b.tags.some((t) => current.tags.includes(t))
            ? 1
            : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function formatBlogDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
