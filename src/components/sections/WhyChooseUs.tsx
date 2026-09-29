import Image from "next/image";
import { whyChooseUs } from "@/config/navigation";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why us"
              title="Reasons teams choose to build here"
              description="Clear ownership, practical systems, and partnership beyond launch."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {whyChooseUs.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-6"
                >
                  <p className="font-mono text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface-elevated">
            <Image
              src={sectionImages.uiux}
              alt="Product design and interface craft"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
