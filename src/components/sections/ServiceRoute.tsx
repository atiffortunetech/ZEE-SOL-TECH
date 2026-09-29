import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/config/seo";
import { getServicePage } from "@/config/service-pages";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

function page(slug: string) {
  const service = getServicePage(slug);
  if (!service) notFound();
  return service;
}

export function createServiceMetadata(slug: string): Metadata {
  const service = page(slug);
  return createMetadata({
    title: service.metaTitle.replace(/\s*\|\s*ZEE Sol Tech$/, ""),
    description: service.metaDescription,
    path: service.path,
    keywords: service.keywords,
    image: service.heroImage,
  });
}

export function ServiceRoute({ slug }: { slug: string }) {
  return <ServicePageTemplate service={page(slug)} />;
}
