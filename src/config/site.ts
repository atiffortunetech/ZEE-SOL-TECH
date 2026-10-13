export const siteConfig = {
  name: "ZEE Sol Tech",
  legalName: "ZEE Sol Tech",
  tagline: "Software House & Digital Studio",
  slogan: "Software House & Digital Studio",
  description:
    "ZEE Sol Tech is a software house and digital product studio for logo design, brand identity, website development, custom software, CRM systems, SaaS platforms, dashboards, and mobile apps.",
  url: "https://zeesoltech.com",
  locale: "en_US",
  logo: {
    light: "/brand/logo-horizontal.svg",
    dark: "/brand/logo-horizontal-dark.svg",
    png: "/brand/logo-horizontal.png",
  },

  contact: {
    email: "sales@zeesoltech.com",
    phone: "+1 (346) 419-6303",
    whatsapp: "13464196303",
    location: "United States",
    scheduleUrl: "",
  },

  social: {
    linkedin: "",
    twitter: "",
    github: "",
    instagram: "",
    dribbble: "",
  },

  cta: {
    primary: "Start Your Project",
    secondary: "Explore Our Services",
    quote: "Request a Quote",
    consult: "Book a Consultation",
    whatsappMessage:
      "Hello, I would like to discuss a project with your team.",
  },

  trustLabels: ["Design", "Development", "Software", "Automation"],

  stats: [
    { label: "Projects Delivered", value: 50, suffix: "+" },
    { label: "Businesses Served", value: 30, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
  ],

  audiences: [
    "Clients",
    "Startups",
    "SMEs",
    "Enterprises",
    "Agencies",
    "E-commerce businesses",
  ],

  colors: {
    background: "#f4f6fa",
    surface: "#ffffff",
    accent: "#0f766e",
    accentSecondary: "#115e59",
  },
} as const;

export type SiteConfig = typeof siteConfig;
