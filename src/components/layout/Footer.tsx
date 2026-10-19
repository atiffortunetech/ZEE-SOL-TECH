import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerLinks, navigation } from "@/config/navigation";
import { footerSeoLinks } from "@/config/seo-topics";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/Container";

function isConfigured(value: string) {
  return Boolean(value) && !value.startsWith("[") && !value.endsWith("]");
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-100">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo solid />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-5 space-y-1 text-sm text-muted">
              <p>
                {isConfigured(siteConfig.contact.email)
                  ? siteConfig.contact.email
                  : "Email in /config/site.ts"}
              </p>
              <p>
                {isConfigured(siteConfig.contact.phone)
                  ? siteConfig.contact.phone
                  : "Phone in /config/site.ts"}
              </p>
              <p>{siteConfig.contact.location}</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Explore</p>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Services</p>
            <ul className="space-y-2">
              {footerLinks.services.slice(0, 6).map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Resources</p>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="mb-4 text-sm font-semibold">Popular searches</p>
          <ul className="flex flex-wrap gap-2">
            {footerSeoLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted transition hover:border-accent/40 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted md:flex-row md:justify-between">
          <p>
            © {year} {siteConfig.legalName}
          </p>
          <p>Brand · Web · Product · Software House</p>
        </div>
      </Container>
    </footer>
  );
}
