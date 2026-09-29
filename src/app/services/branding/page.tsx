import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("branding");

export default function BrandingPage() {
  return <ServiceRoute slug="branding" />;
}
