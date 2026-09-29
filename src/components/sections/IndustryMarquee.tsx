import { Container } from "@/components/ui/Container";

const industries = [
  "E-commerce",
  "Healthcare",
  "Technology",
  "Hospitality",
  "Real Estate",
  "Finance",
  "Education",
  "Retail",
  "SaaS",
  "Media",
];

export function IndustryMarquee() {
  const loop = [...industries, ...industries];

  return (
    <section className="overflow-hidden border-y border-border bg-white py-6">
      <Container className="mb-3">
        <p className="section-label">Industries we support</p>
      </Container>
      <div className="marquee-track gap-8 px-4">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-xl font-semibold text-foreground/70 md:text-2xl"
          >
            {item}
            <span className="mx-8 text-accent/50" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
