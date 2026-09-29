import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "ZEE Sol Tech",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.colors.background,
    theme_color: siteConfig.colors.accent,
    lang: "en",
    categories: ["business", "productivity", "developer"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
