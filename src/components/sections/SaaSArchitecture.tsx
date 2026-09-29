import Image from "next/image";
import { saasCapabilities } from "@/config/services";
import { sectionImages } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const layers = [
  "Auth & Billing",
  "Multi-tenant App",
  "Admin Panel",
  "APIs & Integrations",
  "Analytics & Notifications",
];

export function SaaSArchitecture() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="SaaS"
              title="Have a SaaS idea?"
              description="From MVP to multi-tenant platforms — we help you design, build, and launch subscription products with solid foundations."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {saasCapabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <Button href="/services/saas-development" className="mt-8">
              Build My SaaS
            </Button>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
              <Image
                src={sectionImages.software}
                alt="SaaS product interface"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-accent-secondary">
                SaaS Architecture
              </p>
              <div className="space-y-3">
                {layers.map((layer, index) => (
                  <div
                    key={layer}
                    className="rounded-xl border border-border bg-gradient-to-r from-accent-secondary/10 to-transparent px-4 py-3"
                    style={{ marginLeft: `${index * 8}px` }}
                  >
                    <p className="text-sm font-medium text-foreground">{layer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
