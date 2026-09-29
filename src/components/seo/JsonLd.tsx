import { siteGraph } from "@/config/schemas";
import { SchemaScript } from "@/components/seo/SchemaScript";

export function JsonLd() {
  return <SchemaScript id="site-jsonld" data={siteGraph()} />;
}
