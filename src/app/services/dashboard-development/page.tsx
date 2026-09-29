import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("dashboard-development");

export default function DashboardDevelopmentPage() {
  return <ServiceRoute slug="dashboard-development" />;
}
