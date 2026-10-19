import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/config/blog";
import { Container } from "@/components/ui/Container";

export function RelatedInsights({
  posts,
  eyebrow = "Related insights",
  title = "Guides that support this service",
}: {
  posts: BlogPost[];
  eyebrow?: string;
  title?: string;
}) {
  if (!posts.length) return null;

  return (
    <section className="border-t border-border bg-background py-14 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label text-accent">{eyebrow}</p>
            <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary"
          >
            All articles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
