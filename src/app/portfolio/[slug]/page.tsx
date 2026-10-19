import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/config/seo";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/config/portfolio";
import { breadcrumbList } from "@/config/schemas";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SchemaScript } from "@/components/seo/SchemaScript";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return createMetadata({ title: "Case Study" });
  return createMetadata({
    title: `${project.title} Case Study`,
    description: `${project.summary} Explore this ${project.category.toLowerCase()} project from ZEE Sol Tech.`,
    path: `/portfolio/${project.slug}`,
    image: project.image,
    type: "article",
    // Gallery detail pages are thin templates and unused by the portfolio grid
    // (lightbox). Keep them reachable but out of the index / sitemap.
    noIndex: true,
    keywords: [
      project.title,
      project.category,
      "case study",
      "ZEE Sol Tech portfolio",
    ],
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { title: "Challenge", body: project.challenge },
    { title: "Objectives", body: project.objectives.join(" · ") },
    { title: "Research", body: project.research },
    { title: "Design Process", body: project.designProcess },
    { title: "Development", body: project.development },
    { title: "Results", body: project.results },
  ];

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <>
      <SchemaScript
        id="case-study-jsonld"
        data={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${project.category} · Case Study`}
        title={project.title}
        description={project.summary}
        image={project.image}
        primaryHref="/contact"
        primaryLabel="Start a similar project"
        secondaryHref="/portfolio"
        secondaryLabel="All work"
      />

      <section className="py-14 md:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {section.body}
                </p>
              </div>
            ))}

            <div>
              <h2 className="font-display text-2xl font-semibold">Features</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {gallery.length > 1 ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">Screenshots</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {gallery.map((src) => (
                    <div
                      key={src}
                      className="relative h-48 overflow-hidden rounded-2xl border border-border"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="h-fit rounded-3xl border border-border bg-surface p-6">
            <h2 className="font-display text-xl font-semibold">Technology</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.testimonial ? (
              <blockquote className="mt-8 border-t border-border pt-6 text-sm text-muted">
                “{project.testimonial.quote}”
                <footer className="mt-3 text-foreground">
                  {project.testimonial.name} · {project.testimonial.role}
                </footer>
              </blockquote>
            ) : null}
            <Button href="/contact" className="mt-6 w-full">
              Start a Similar Project
            </Button>
          </aside>
        </Container>
      </section>

      <CTASection
        title="Let's build your next case study"
        description="Share your challenge and we'll outline a practical delivery path."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/portfolio"
        secondaryLabel="Back to Portfolio"
      />
    </>
  );
}
