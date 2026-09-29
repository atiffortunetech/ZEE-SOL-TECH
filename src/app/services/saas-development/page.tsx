import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("saas-development");

export default function SaaSDevelopmentPage() {
  return <ServiceRoute slug="saas-development" />;
}
