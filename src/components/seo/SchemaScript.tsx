import { serializeJsonLd } from "@/config/schemas";

export function SchemaScript({
  id,
  data,
}: {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data["@context"]
      ? data
      : { "@context": "https://schema.org", ...data };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(payload) }}
    />
  );
}
