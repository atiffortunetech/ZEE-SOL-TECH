export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  features: string[];
  href: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "branding",
    slug: "branding",
    title: "Logo & Brand Identity",
    shortDescription:
      "Memorable brand systems that give your business a clear visual voice.",
    features: ["Logo system", "Brand guidelines", "Visual identity"],
    href: "/services/branding",
    icon: "Palette",
  },
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "UI/UX Design",
    shortDescription:
      "Research-driven interfaces that feel intuitive and convert with clarity.",
    features: ["User flows", "Wireframes", "Design systems"],
    href: "/services/ui-ux",
    icon: "PenTool",
  },
  {
    id: "website-design",
    slug: "web-development",
    title: "Website Design",
    shortDescription:
      "Premium layouts crafted for trust, clarity, and brand presence.",
    features: ["Custom UI", "Responsive layouts", "Conversion-focused"],
    href: "/services/web-development",
    icon: "Layout",
  },
  {
    id: "website-dev",
    slug: "web-development",
    title: "Website Development",
    shortDescription:
      "Fast, secure, and SEO-ready websites built for real business outcomes.",
    features: ["Next.js / modern stack", "CMS", "Performance"],
    href: "/services/web-development",
    icon: "Code2",
  },
  {
    id: "ecommerce",
    slug: "web-development",
    title: "E-Commerce Development",
    shortDescription:
      "Storefronts and commerce systems built to sell, scale, and operate smoothly.",
    features: ["Catalogs", "Checkout", "Admin panels"],
    href: "/services/web-development",
    icon: "ShoppingBag",
  },
  {
    id: "custom-software",
    slug: "software-development",
    title: "Custom Software",
    shortDescription:
      "Business systems designed around how your operations actually work.",
    features: ["Tailored workflows", "Integrations", "Scalable architecture"],
    href: "/services/software-development",
    icon: "Cpu",
  },
  {
    id: "crm",
    slug: "crm",
    title: "CRM Development",
    shortDescription:
      "Customer platforms that organize leads, sales, and ongoing relationships.",
    features: ["Pipelines", "Automation", "Team roles"],
    href: "/services/crm",
    icon: "Users",
  },
  {
    id: "erp",
    slug: "software-development",
    title: "ERP Development",
    shortDescription:
      "Operational platforms that connect departments into one reliable system.",
    features: ["Modules", "Reporting", "Process control"],
    href: "/services/software-development",
    icon: "Network",
  },
  {
    id: "dashboard",
    slug: "dashboard-development",
    title: "Dashboard Development",
    shortDescription:
      "Clear analytics interfaces that turn complex data into decisions.",
    features: ["Charts", "KPIs", "Role-based views"],
    href: "/services/dashboard-development",
    icon: "BarChart3",
  },
  {
    id: "saas",
    slug: "saas-development",
    title: "SaaS Development",
    shortDescription:
      "Multi-tenant products with billing, auth, admin panels, and growth-ready foundations.",
    features: ["MVP to scale", "Subscriptions", "APIs"],
    href: "/services/saas-development",
    icon: "Cloud",
  },
  {
    id: "mobile",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "iOS, Android, and cross-platform apps built for customers and internal teams.",
    features: ["MVP apps", "Push notifications", "Payments"],
    href: "/services/mobile-app-development",
    icon: "Smartphone",
  },
  {
    id: "api",
    slug: "software-development",
    title: "API & Backend Development",
    shortDescription:
      "Secure APIs, data models, and services that keep products reliable.",
    features: ["REST / integrations", "Auth", "Databases"],
    href: "/services/software-development",
    icon: "Server",
  },
  {
    id: "automation",
    slug: "software-development",
    title: "Business Automation",
    shortDescription:
      "Workflows that remove repetitive work and keep teams focused on growth.",
    features: ["Triggers", "Integrations", "Notifications"],
    href: "/services/software-development",
    icon: "Workflow",
  },
  {
    id: "support",
    slug: "web-development",
    title: "Maintenance & Support",
    shortDescription:
      "Ongoing improvements, monitoring, and reliable post-launch support.",
    features: ["Updates", "Security", "Performance"],
    href: "/contact",
    icon: "LifeBuoy",
  },
];

export const brandingOfferings = [
  "Logo Design",
  "Brand Identity",
  "Brand Guidelines",
  "Color Systems",
  "Typography",
  "Business Cards",
  "Social Media Branding",
  "Marketing Materials",
  "Packaging Design",
];

export const softwareSolutions = [
  "Business Management Systems",
  "Inventory Systems",
  "POS Systems",
  "HR Management",
  "School Management",
  "Hospital Management",
  "Real Estate Management",
  "Restaurant Management",
  "Logistics Systems",
  "Accounting Systems",
  "Project Management",
  "Customer Management",
  "Workflow Automation",
  "Custom SaaS",
];

export const dashboardTypes = [
  "Business Analytics",
  "Sales Dashboard",
  "CRM Dashboard",
  "Finance Dashboard",
  "HR Dashboard",
  "Inventory Dashboard",
  "Project Dashboard",
  "Marketing Dashboard",
  "Operations Dashboard",
];

export const mobileServices = [
  "iOS Apps",
  "Android Apps",
  "Cross-platform Apps",
  "Business Apps",
  "Customer Apps",
  "Admin Apps",
  "SaaS Mobile Apps",
  "API Integration",
  "Push Notifications",
  "Payment Integration",
];

export const saasCapabilities = [
  "SaaS MVP",
  "Multi-Tenant Platforms",
  "Subscription Systems",
  "Admin Panels",
  "User Dashboards",
  "Billing",
  "Authentication",
  "APIs",
  "Integrations",
  "Analytics",
  "Notifications",
];

export const uiuxServices = [
  "UX Research",
  "User Flows",
  "Wireframes",
  "UI Design",
  "Design Systems",
  "Prototypes",
  "Web Design",
  "Mobile Design",
  "Dashboard Design",
  "SaaS UX",
];

export const architectureLayers = [
  "Frontend",
  "Backend",
  "API",
  "Database",
  "Integrations",
  "Analytics",
];
