import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { getFeaturedBlogPosts } from "@/config/blog";
import { portfolioItems } from "@/config/portfolio";
import { portfolioContent } from "@/config/page-content";
import { createMetadata, pageKeywords } from "@/config/seo";
import { breadcrumbList, webPageSchema } from "@/config/schemas";
import { SchemaScript } from "@/components/seo/SchemaScript";

const title = "Portfolio: Branding, Web & Apps";
const description =
  "Browse ZEE Sol Tech portfolio work across logos, brand systems, websites, apps, banners, and digital campaigns for startups and growing brands.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/portfolio",
  keywords: pageKeywords.portfolio,
});

export default function PortfolioPage() {
  const blogPosts = getFeaturedBlogPosts().slice(0, 3);

  return (
    <>
      <SchemaScript
        id="portfolio-jsonld"
        data={[
          webPageSchema({
            path: "/portfolio",
            name: title,
            description,
            type: "CollectionPage",
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Work across brand, web, and product"
        description={`Browse ${portfolioItems.length}+ projects across logos, websites, apps, and more.`}
        image="/heroes/hero-branding.jpg"
        primaryHref="/contact"
        primaryLabel="Start a project"
      />
      <section className="bg-background py-16 md:py-24">
        <Container>
          <PortfolioGrid showHero={false} />
        </Container>
      </section>
      <PageContentSection content={portfolioContent} tone="white" image="/sections/section-branding.jpg" />

      {blogPosts.length ? (
        <section className="border-t border-border bg-white py-14 md:py-20">
          <Container>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label text-accent">From the blog</p>
                <h2 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                  Guides behind the work
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary"
              >
                View all articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title="Ready to start your project?"
        description="Tell us about your next brief and we'll outline the right branding, website, or software approach."
        primaryHref="/contact"
        primaryLabel="Get an estimate"
        secondaryHref="/pricing"
        secondaryLabel="View packages"
      />
    </>
  );
}
