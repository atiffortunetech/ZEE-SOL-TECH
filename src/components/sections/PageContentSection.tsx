import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageContent } from "@/config/page-content";
import { sectionImages } from "@/config/images";

export function PageContentSection({
  content,
  tone = "muted",
  image,
}: {
  content: PageContent;
  tone?: "muted" | "white";
  image?: string;
}) {
  const visual = image ?? sectionImages.studio;

  return (
    <section className={tone === "white" ? "bg-white py-16 md:py-24" : "bg-background py-16 md:py-24"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface-elevated lg:sticky lg:top-28 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={visual}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.intro}
            />

            <div className="mt-12 space-y-12">
              {content.blocks.map((block) => (
                <article key={block.heading} className="max-w-3xl">
                  <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {block.heading}
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                  {block.bullets?.length ? (
                    <ul className="mt-5 space-y-2.5">
                      {block.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>

            {content.relatedTopics?.length ? (
              <div className="mt-14 max-w-3xl">
                <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                  Related services & next steps
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  Explore connected pages to compare packages, services, and intake forms.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {content.relatedTopics.map((topic) => (
                    <li key={topic.href + topic.label}>
                      <Link
                        href={topic.href}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-white/70 p-4 transition hover:border-accent/40 hover:bg-accent-soft/40 focus-ring"
                      >
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                          {topic.label}
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        <span className="mt-1.5 text-xs leading-relaxed text-muted md:text-sm">
                          {topic.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
