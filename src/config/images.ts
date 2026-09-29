export const sectionImages = {
  studio: "/sections/section-studio-collab.jpg",
  branding: "/sections/section-branding.jpg",
  websites: "/sections/section-websites.jpg",
  software: "/sections/section-software.jpg",
  apps: "/sections/section-apps.jpg",
  process: "/sections/section-process.jpg",
  cta: "/sections/section-cta.jpg",
  seo: "/sections/section-seo.jpg",
  illustration: "/sections/section-illustration.jpg",
  uiux: "/sections/section-uiux.jpg",
} as const;

export const serviceImages: Record<string, string> = {
  branding: sectionImages.branding,
  "ui-ux": sectionImages.uiux,
  "website-design": sectionImages.websites,
  "website-dev": sectionImages.websites,
  ecommerce: sectionImages.websites,
  "custom-software": sectionImages.software,
  crm: sectionImages.software,
  erp: sectionImages.software,
  dashboard: sectionImages.software,
  saas: sectionImages.software,
  mobile: sectionImages.apps,
  api: sectionImages.software,
  automation: sectionImages.process,
  support: sectionImages.studio,
};
