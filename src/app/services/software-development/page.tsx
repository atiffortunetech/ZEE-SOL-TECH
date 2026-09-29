import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("software-development");

export default function SoftwareDevelopmentPage() {
  return <ServiceRoute slug="software-development" />;
}
