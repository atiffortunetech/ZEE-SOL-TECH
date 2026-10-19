import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { seoTopicCluster } from "@/config/seo-topics";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SeoTopicCluster() {
  return (
    <section className="border-y border-border bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we rank for — and build"
          title="Explore the services buyers search for"
          description="Clear paths into website development, branding, custom software, CRM, SaaS, and product design — the topics our clients hire us for."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoTopicCluster.map((topic) => (
            <Link
              key={topic.href + topic.title}
              href={topic.href}
              className="group rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-md hover:shadow-teal-900/5 focus-ring"
            >
              <span className="inline-flex items-center gap-1.5 font-display text-lg font-semibold text-foreground">
                {topic.title}
                <ArrowUpRight className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-accent/80">
                {topic.keywords[0]}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
