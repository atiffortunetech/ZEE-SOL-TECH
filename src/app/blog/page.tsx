import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Container } from "@/components/ui/Container";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/config/blog";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { createMetadata, pageKeywords } from "@/config/seo";
import { siteConfig } from "@/config/site";

const title = "Insights on Software, Web Design & Digital Growth";
const description =
  "Practical articles from ZEE Sol Tech on website development, branding, CRM, SaaS, UI/UX, mobile apps, SEO, and custom software — written for founders and growing teams.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/blog",
  keywords: pageKeywords.blog,
  image: "/blog/blog-choose-web-agency.jpg",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featured = getFeaturedBlogPosts();
  const heroPost = featured[0] ?? posts[0];
  const remainingFeatured = featured.slice(1);
  const gridPosts = posts.filter(
    (post) => post.slug !== heroPost?.slug && !remainingFeatured.some((f) => f.slug === post.slug),
  );

  return (
    <>
      <SchemaScript
        id="blog-jsonld"
        data={[
          webPageSchema({
            path: "/blog",
            name: title,
            description,
            type: "CollectionPage",
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@type": "Blog",
            "@id": `${siteConfig.url}/blog/#blog`,
            name: `${siteConfig.name} Blog`,
            description,
            url: `${siteConfig.url}/blog`,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${siteConfig.url}/blog/${post.slug}`,
              datePublished: post.publishedAt,
              image: `${siteConfig.url}${post.image}`,
            })),
          },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border bg-slate-950 pt-24 text-white md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,118,110,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(17,94,89,0.25),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

        <Container className="relative py-14 md:py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            Blog · Insights
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                Practical notes on building brands, websites, and software that work.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                No fluff — just clear guidance for founders and teams hiring for web development,
                branding, CRM, SaaS, and custom software.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
              <p className="text-sm text-white/70">Looking for a build partner?</p>
              <p className="mt-2 font-display text-xl font-semibold">
                Tell us what you’re shipping next.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-200 transition hover:text-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          {heroPost ? (
            <div className="mb-12 md:mb-16">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold md:text-3xl">Featured</h2>
                <p className="text-sm text-muted">{posts.length} articles</p>
              </div>
              <BlogCard post={heroPost} featured />
            </div>
          ) : null}

          {remainingFeatured.length ? (
            <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 lg:grid-cols-3">
              {remainingFeatured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}

          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="section-label text-accent">All articles</p>
              <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                Latest from the studio
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to turn insights into a live product?"
        description="Share your goals and we’ll outline a practical path for branding, web, CRM, SaaS, or custom software."
        primaryHref="/contact"
        primaryLabel={siteConfig.cta.primary}
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
