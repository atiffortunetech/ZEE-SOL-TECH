import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("mobile-app-development");

export default function MobileAppDevelopmentPage() {
  return <ServiceRoute slug="mobile-app-development" />;
}
