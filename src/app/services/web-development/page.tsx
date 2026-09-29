import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("web-development");

export default function WebDevelopmentPage() {
  return <ServiceRoute slug="web-development" />;
}
