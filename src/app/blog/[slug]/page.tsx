import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  formatBlogDate,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/config/blog";
import { articleSchema, breadcrumbList } from "@/config/schemas";
import { createMetadata, defaultKeywords } from "@/config/seo";
import { siteConfig } from "@/config/site";

type BlogParams = { slug: string };

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [...defaultKeywords, ...post.keywords, ...post.tags],
    image: post.image,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<BlogParams>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(post.slug, 3);

  return (
    <>
      <SchemaScript
        id={`blog-${post.slug}-jsonld`}
        data={[
          articleSchema(post),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="relative overflow-hidden bg-slate-950 pt-24 text-white md:pt-28">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover opacity-45"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/75 to-slate-950" />
          </div>

          <Container className="relative py-12 md:py-16">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-100/90 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
              <span className="rounded-full border border-teal-200/30 bg-teal-400/10 px-3 py-1">
                {post.category}
              </span>
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-white/70">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>

            <h1 className="font-display max-w-4xl text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </header>

        <div className="border-b border-border bg-background py-10 md:py-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
              <div>
                <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 720px"
                    priority
                  />
                </div>
                <BlogPostContent post={post} />
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    Related service
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold">{post.relatedService.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    See how {siteConfig.name} delivers this for growing teams.
                  </p>
                  <Button href={post.relatedService.href} className="mt-4 w-full" size="sm">
                    Explore service
                  </Button>
                </div>

                <div className="rounded-2xl border border-border bg-slate-950 p-5 text-white">
                  <p className="font-display text-lg font-semibold">Have a project in mind?</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    We’ll reply within one business day with next steps.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-200 hover:text-white"
                  >
                    Contact sales
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    On this page
                  </p>
                  <nav className="mt-3 space-y-2" aria-label="Article sections">
                    {post.sections.map((section) => (
                      <a
                        key={section.heading}
                        href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                        className="block text-sm text-foreground/75 transition hover:text-accent"
                      >
                        {section.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            </div>
          </Container>
        </div>

        {related.length ? (
          <section className="py-14 md:py-16">
            <Container>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="section-label text-accent">Keep reading</p>
                  <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                    Related articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden text-sm font-semibold text-accent-secondary sm:inline-flex sm:items-center sm:gap-1"
                >
                  All posts
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </article>

      <CTASection
        title="Let’s build what’s next"
        description="From brand systems to websites, CRM, SaaS, and custom software — one studio, clear delivery."
        primaryHref="/contact"
        primaryLabel={siteConfig.cta.primary}
        secondaryHref="/pricing"
        secondaryLabel="View packages"
      />
    </>
  );
}
