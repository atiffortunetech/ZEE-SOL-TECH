import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbList, serviceSchema, webPageSchema } from "@/config/schemas";

export function ServicePageSchema({
  name,
  description,
  path,
  serviceType,
  image,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string | string[];
  image?: string;
}) {
  return (
    <SchemaScript
      id="service-jsonld"
      data={[
        webPageSchema({ path, name, description }),
        serviceSchema({ name, description, path, serviceType, image }),
        breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: name, path },
        ]),
      ]}
    />
  );
}
