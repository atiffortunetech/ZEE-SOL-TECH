import type { Metadata } from "next";
import {
  createServiceMetadata,
  ServiceRoute,
} from "@/components/sections/ServiceRoute";

export const metadata: Metadata = createServiceMetadata("crm");

export default function CRMPage() {
  return <ServiceRoute slug="crm" />;
}
