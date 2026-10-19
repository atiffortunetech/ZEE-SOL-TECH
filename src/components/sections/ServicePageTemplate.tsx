import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServicePageConfig } from "@/config/service-pages";
import { getBlogPostsForService } from "@/config/blog";
import { getPricingGroup } from "@/config/packages";
import { faqPageSchema } from "@/config/schemas";
import { PageHero } from "@/components/sections/PageHero";
import { PageContentSection } from "@/components/sections/PageContentSection";
import { CTASection } from "@/components/sections/CTASection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedInsights } from "@/components/seo/RelatedInsights";
import { ServicePageSchema } from "@/components/seo/ServicePageSchema";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingSection } from "@/components/ui/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export function ServicePageTemplate({ service }: { service: ServicePageConfig }) {
  const pricingGroups = (service.pricingGroupIds ?? [])
    .map((id) => getPricingGroup(id))
    .filter(Boolean);

  const faqItems = service.faqs.map((item, index) => ({
    id: `${service.slug}-faq-${index + 1}`,
    question: item.question,
    answer: item.answer,
  }));

  const relatedPosts = getBlogPostsForService(service.path, 3);

  return (
    <>
      <ServicePageSchema
        name={service.schemaName}
        description={service.metaDescription}
        path={service.path}
        serviceType={service.serviceType}
        image={service.heroImage}
      />
      <SchemaScript
        id={`${service.slug}-faq-jsonld`}
        data={[faqPageSchema(faqItems, service.path)]}
      />

      <Breadcrumbs
        className="pt-20 md:pt-24"
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.eyebrow },
        ]}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.heroDescription}
        image={service.heroImage}
        primaryHref={service.primaryHref}
        primaryLabel={service.primaryLabel}
        secondaryHref={service.secondaryHref}
        secondaryLabel={service.secondaryLabel}
        flushTop
      />

      <section className="border-b border-border bg-white py-8 md:py-10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-4">
                <p className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PageContentSection content={service.content} image={service.contentImage} />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Deliverables"
            title={`What you get with our ${service.eyebrow.toLowerCase()} services`}
            description="Clear outcomes scoped for quality, adoption, and long-term maintainability."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-border bg-white p-6 md:p-8"
              >
                <p className="font-mono text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Delivery process"
                title="A professional path from brief to launch"
                description="Structured stages keep stakeholders aligned while we design and engineer."
              />
              <Button href={service.primaryHref} className="mt-8">
                {service.primaryLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
            <ol className="space-y-0 divide-y divide-border border-y border-border">
              {service.process.map((step) => (
                <li key={step.number} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr]">
                  <p className="font-mono text-sm font-semibold text-accent">{step.number}</p>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src={service.contentImage}
          alt={`${service.schemaName} — professional digital delivery`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/88 to-teal-950/75" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Why ZEE Sol Tech
            </p>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] md:text-4xl lg:text-5xl">
              Benefits of choosing our {service.eyebrow.toLowerCase()} team
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              A software house that connects strategy, design, and engineering under one roof.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.benefits.map((item, index) => (
              <article key={item.title} className="border-t border-white/15 pt-5">
                <p className="font-mono text-xs font-semibold text-teal-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Included skills and focus areas"
            description="Specialized offerings inside this service line."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {service.offerings.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-border bg-white px-3.5 py-2 text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {pricingGroups.length ? (
        <section className="bg-white py-14 md:py-20">
          <Container className="space-y-16">
            {pricingGroups.map((group) =>
              group ? (
                <PricingSection
                  key={group.id}
                  title={group.title}
                  subtitle={group.subtitle}
                  packages={group.packages}
                />
              ) : null,
            )}
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.eyebrow} questions we hear most`}
            description="Straight answers to help you evaluate scope, timeline, and fit."
          />
          <div className="mt-10 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related services"
            title="Continue exploring our digital capabilities"
            description="Connect branding, web, software, and product work for a cohesive stack."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[1.5rem] border border-border bg-white p-6 transition hover:border-accent/40 hover:bg-accent-soft/30 focus-ring"
              >
                <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <RelatedInsights
        posts={relatedPosts}
        title={`Guides related to ${service.eyebrow.toLowerCase()}`}
      />

      <CTASection
        title={service.ctaTitle}
        description={service.ctaDescription}
        primaryHref={service.primaryHref}
        primaryLabel={service.primaryLabel}
        secondaryHref="/contact"
        secondaryLabel="Talk to us"
      />
    </>
  );
}
