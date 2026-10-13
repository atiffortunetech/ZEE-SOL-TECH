export type BlogSubsection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: BlogSubsection[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  featured: boolean;
  relatedService: { label: string; href: string };
  sections: BlogSection[];
  faqs: BlogFaq[];
};

export function estimateReadingMinutes(post: Pick<BlogPost, "sections" | "faqs" | "excerpt">) {
  const text = [
    post.excerpt,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.paragraphs,
      ...(s.bullets ?? []),
      ...(s.subsections?.flatMap((sub) => [
        sub.heading,
        ...sub.paragraphs,
        ...(sub.bullets ?? []),
      ]) ?? []),
    ]),
    ...post.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(12, Math.round(words / 220));
}
