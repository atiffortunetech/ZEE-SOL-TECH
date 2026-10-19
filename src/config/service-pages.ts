import type { PageContent } from "@/config/page-content";
import {
  brandingContent,
  webContent,
  softwareContent,
  crmContent,
  mobileContent,
  uiuxContent,
  saasContent,
  dashboardContent,
} from "@/config/page-content";
import { pageKeywords } from "@/config/seo";
import {
  brandingOfferings,
  softwareSolutions,
  dashboardTypes,
  mobileServices,
  saasCapabilities,
  uiuxServices,
} from "@/config/services";

export type ServiceFaq = { question: string; answer: string };

export type ServicePageConfig = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  schemaName: string;
  serviceType: string[];
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  contentImage: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  content: PageContent;
  highlights: string[];
  deliverables: { title: string; description: string }[];
  process: { number: string; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  offerings: string[];
  faqs: ServiceFaq[];
  pricingGroupIds?: string[];
  related: { label: string; href: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
  stats: { value: string; label: string }[];
};

const sharedProcess = (
  a: string,
  b: string,
  c: string,
  d: string,
): ServicePageConfig["process"] => [
  {
    number: "01",
    title: "Discover",
    description: a,
  },
  {
    number: "02",
    title: "Design",
    description: b,
  },
  {
    number: "03",
    title: "Build",
    description: c,
  },
  {
    number: "04",
    title: "Launch & grow",
    description: d,
  },
];

export const servicePages: Record<string, ServicePageConfig> = {
  branding: {
    slug: "branding",
    path: "/services/branding",
    metaTitle: "Logo Design Agency",
    metaDescription:
      "Logo design agency for professional marks, brand identity systems, and brand guidelines. Hire ZEE Sol Tech for logos that work on web, packaging, and social.",
    keywords: [
      "logo design agency",
      ...pageKeywords.branding,
      "hire logo designer",
      "brand identity agency",
      "corporate logo design company",
      "visual identity design services",
    ],
    schemaName: "Logo Design Agency",
    serviceType: ["Logo design", "Brand identity design", "Brand guidelines"],
    eyebrow: "Logo Design Agency",
    heroTitle: "Logo design agency for brands that need to be remembered",
    heroDescription:
      "As a logo design agency, we build professional logo systems, color and type, and brand guidelines for websites, packaging, social channels, and product interfaces.",
    heroImage: "/heroes/hero-branding.jpg",
    contentImage: "/sections/section-branding.jpg",
    primaryHref: "/logo-questionnaire",
    primaryLabel: "Start logo questionnaire",
    secondaryHref: "/pricing",
    secondaryLabel: "View branding packages",
    content: brandingContent,
    highlights: [
      "Ownership-ready logo files",
      "Brand guidelines included",
      "Web & print ready systems",
      "SEO-friendly brand consistency",
    ],
    deliverables: [
      {
        title: "Primary & secondary marks",
        description: "Logo concepts refined into a clear system for digital and print surfaces.",
      },
      {
        title: "Color & typography",
        description: "Palette and type rules that keep marketing and product UI on-brand.",
      },
      {
        title: "Brand guidelines",
        description: "Usage rules your team and partners can apply without guessing.",
      },
      {
        title: "Asset delivery",
        description: "SVG, PNG, and formats ready for websites, social, and stationery.",
      },
    ],
    process: sharedProcess(
      "Clarify brand name, audience, competitors, and where the mark must work.",
      "Explore concepts, refine direction, and lock a memorable visual system.",
      "Finalize files, guidelines, and applications across key touchpoints.",
      "Hand off ownership-ready assets and support rollout across web and campaigns.",
    ),
    benefits: [
      {
        title: "Memorable professional branding",
        description: "Stand out with a logo design agency approach built for long-term recognition.",
      },
      {
        title: "Consistent digital presence",
        description: "Identity systems that carry from website favicon to packaging and product UI.",
      },
      {
        title: "Faster marketing execution",
        description: "Guidelines reduce redesign cycles when launching pages, ads, and social assets.",
      },
    ],
    offerings: brandingOfferings,
    faqs: [
      {
        question: "What is included in your logo design packages?",
        answer:
          "Packages typically include concept exploration, a refined primary mark, standard file formats, and brand direction. Higher tiers add expanded identity systems and guidelines.",
      },
      {
        question: "Do I own the final logo?",
        answer:
          "Yes. Ownership rights for approved deliverables transfer as defined in your package or proposal after full payment.",
      },
      {
        question: "Can you redesign an existing brand identity?",
        answer:
          "Yes. We refresh logos and brand systems while protecting equity that still works for your market.",
      },
    ],
    pricingGroupIds: ["logo"],
    related: [
      { label: "Web Development", href: "/services/web-development", description: "Launch your identity on an SEO-ready site" },
      { label: "UI/UX Design", href: "/services/ui-ux", description: "Extend brand into product interfaces" },
      { label: "Logo questionnaire", href: "/logo-questionnaire", description: "Submit a structured brand brief" },
    ],
    ctaTitle: "Ready for a logo and identity system?",
    ctaDescription: "Tell us your brand name, market, and usage needs — we’ll recommend the right branding package.",
    stats: [
      { value: "48h", label: "Initial concepts on select packages" },
      { value: "100%", label: "Ownership on approved work" },
      { value: "Print+", label: "Digital & packaging ready" },
    ],
  },

  "web-development": {
    slug: "web-development",
    path: "/services/web-development",
    metaTitle: "Website Development Company",
    metaDescription:
      "Website development company for SEO-friendly business sites, CMS platforms, and e-commerce stores. ZEE Sol Tech builds fast sites that convert.",
    keywords: [
      "website development company",
      ...pageKeywords.web,
      "hire website developer",
      "best web design company",
      "corporate website development",
      "SEO website design services",
    ],
    schemaName: "Website Development Company",
    serviceType: ["Website design", "Website development", "E-commerce development", "CMS development"],
    eyebrow: "Website Development Company",
    heroTitle: "Website development company for sites that convert",
    heroDescription:
      "As a website development company, we build business websites, landing pages, CMS platforms, and e-commerce stores for performance, mobile UX, and organic search growth.",
    heroImage: "/heroes/hero-websites.jpg",
    contentImage: "/sections/section-websites.jpg",
    primaryHref: "/website-questionnaire",
    primaryLabel: "Start website questionnaire",
    secondaryHref: "/pricing",
    secondaryLabel: "View website packages",
    content: webContent,
    highlights: [
      "Technical SEO foundations",
      "Mobile-first responsive design",
      "CMS & e-commerce ready",
      "Conversion-focused UX",
    ],
    deliverables: [
      {
        title: "Custom website UI",
        description: "Premium layouts aligned to your brand, offer, and conversion goals.",
      },
      {
        title: "SEO page structure",
        description: "Semantic headings, metadata, internal links, and clean URLs.",
      },
      {
        title: "CMS or commerce setup",
        description: "Editable content architecture or catalog/checkout flows as needed.",
      },
      {
        title: "Launch & performance",
        description: "Speed, analytics, forms, and a handoff your team can run.",
      },
    ],
    process: sharedProcess(
      "Map goals, audience, sitemap, and SEO priorities for your market.",
      "Design conversion-focused pages and approve key templates.",
      "Develop a fast, responsive site with CMS/commerce integrations.",
      "Launch with analytics, SEO checks, and iteration support.",
    ),
    benefits: [
      {
        title: "Rank and convert",
        description: "SEO-friendly website development paired with clear CTAs and trust-building design.",
      },
      {
        title: "Built for editors",
        description: "CMS-ready structures so marketing teams update content without breaking the site.",
      },
      {
        title: "Scalable foundation",
        description: "Architecture that supports future landing pages, blogs, and campaign growth.",
      },
    ],
    offerings: [
      "Business websites",
      "Landing pages",
      "E-commerce stores",
      "CMS websites",
      "SEO foundations",
      "Performance optimization",
      "Lead forms & quote funnels",
      "Analytics setup",
    ],
    faqs: [
      {
        question: "Do you build SEO-friendly websites?",
        answer:
          "Yes. We implement semantic structure, metadata, mobile performance, clean URLs, and content architecture that supports organic search.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can refresh design, improve UX, modernize the stack, and strengthen technical SEO while preserving what already works.",
      },
      {
        question: "Do you offer e-commerce development?",
        answer:
          "Yes. We build storefronts with catalogs, carts, checkout, and admin workflows scoped to your products and operations.",
      },
    ],
    pricingGroupIds: ["web", "ecommerce", "cms"],
    related: [
      { label: "Logo & Branding", href: "/services/branding", description: "Pair your site with a strong identity" },
      { label: "UI/UX Design", href: "/services/ui-ux", description: "Research-driven conversion interfaces" },
      { label: "SEO packages", href: "/pricing", description: "Compare website and SEO options" },
    ],
    ctaTitle: "Need a website that ranks and converts?",
    ctaDescription: "Share your goals and pages — we’ll recommend the right website package or custom build.",
    stats: [
      { value: "SEO", label: "On-page foundations included" },
      { value: "CMS", label: "Editor-friendly options" },
      { value: "24/7", label: "Fast mobile experiences" },
    ],
  },

  "software-development": {
    slug: "software-development",
    path: "/services/software-development",
    metaTitle: "Custom Software Development",
    metaDescription:
      "Custom software development for inventory, HR, logistics, automation, and internal platforms. Hire ZEE Sol Tech to build business software around your operations.",
    keywords: [
      ...pageKeywords.software,
      "hire custom software developers",
      "business management software development",
      "workflow automation company",
      "bespoke software agency",
    ],
    schemaName: "Custom Software Development Services",
    serviceType: ["Custom software development", "Business software", "Workflow automation"],
    eyebrow: "Custom Software",
    heroTitle: "Custom software shaped around your operations",
    heroDescription:
      "Replace spreadsheets and rigid tools with tailored business systems — inventory, HR, logistics, accounting workflows, and internal platforms.",
    heroImage: "/heroes/hero-software.jpg",
    contentImage: "/sections/section-software.jpg",
    primaryHref: "/contact?type=Custom%20Software",
    primaryLabel: "Request software quote",
    secondaryHref: "/process",
    secondaryLabel: "See our process",
    content: softwareContent,
    highlights: [
      "Operations-first architecture",
      "Secure roles & permissions",
      "API integrations",
      "Scalable module design",
    ],
    deliverables: [
      {
        title: "Requirements & system map",
        description: "Clear workflows, roles, and constraints before engineering begins.",
      },
      {
        title: "Custom modules",
        description: "Features built for how your teams sell, operate, and report.",
      },
      {
        title: "Integrations",
        description: "Connect CRM, payments, messaging, and existing business tools.",
      },
      {
        title: "Training & handoff",
        description: "Documentation and support so adoption sticks after launch.",
      },
    ],
    process: sharedProcess(
      "Workshop current tools, pain points, and success metrics.",
      "Define information architecture, UX flows, and technical plan.",
      "Develop modules, APIs, and role-based access iteratively.",
      "Deploy, train teams, and expand with new modules as you grow.",
    ),
    benefits: [
      {
        title: "Fit over forced templates",
        description: "Bespoke software development that matches your real processes.",
      },
      {
        title: "Lower operational friction",
        description: "Automation and unified data reduce duplicate work across teams.",
      },
      {
        title: "Room to scale",
        description: "Architecture planned for modules, reporting, and future products.",
      },
    ],
    offerings: softwareSolutions,
    faqs: [
      {
        question: "When should I choose custom software instead of SaaS tools?",
        answer:
          "Choose custom development when off-the-shelf products need expensive workarounds, or when your workflows are a competitive advantage.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. We build APIs and integrations for CRM, accounting, messaging, shipping, and other business tools.",
      },
      {
        question: "How is custom software priced?",
        answer:
          "Pricing depends on features, integrations, and timeline. We provide a tailored proposal after discovery.",
      },
    ],
    related: [
      { label: "CRM Development", href: "/services/crm", description: "Sales pipelines and customer systems" },
      { label: "Dashboards", href: "/services/dashboard-development", description: "KPI visibility for leadership" },
      { label: "SaaS Development", href: "/services/saas-development", description: "Turn systems into products" },
    ],
    ctaTitle: "Ready to build business software that fits?",
    ctaDescription: "Share your workflows and constraints — we’ll outline architecture, timeline, and investment.",
    stats: [
      { value: "API", label: "Integration-first builds" },
      { value: "RBAC", label: "Role-based access" },
      { value: "MVP+", label: "Launch then expand" },
    ],
  },

  crm: {
    slug: "crm",
    path: "/services/crm",
    metaTitle: "Custom CRM Development",
    metaDescription:
      "Custom CRM development for sales pipelines, lead management, and automation. ZEE Sol Tech builds CRM software that matches how your team actually sells.",
    keywords: [
      "custom CRM development",
      ...pageKeywords.crm,
      "hire CRM developer",
      "custom sales CRM",
      "lead management system development",
      "CRM software for SME",
    ],
    schemaName: "Custom CRM Development",
    serviceType: ["CRM development", "Sales pipeline software", "Lead management software"],
    eyebrow: "Custom CRM Development",
    heroTitle: "Custom CRM development for real sales workflows",
    heroDescription:
      "Custom CRM development for leads, deals, follow-ups, reporting, and team roles — without forcing your business into a rigid off-the-shelf template.",
    heroImage: "/heroes/hero-software.jpg",
    contentImage: "/sections/section-software.jpg",
    primaryHref: "/contact?type=CRM",
    primaryLabel: "Request CRM quote",
    secondaryHref: "/pricing",
    secondaryLabel: "View app packages",
    content: crmContent,
    highlights: [
      "Pipeline & deal tracking",
      "Automation & reminders",
      "Team roles & permissions",
      "Reports leadership trusts",
    ],
    deliverables: [
      {
        title: "Pipeline design",
        description: "Stages, fields, and rules mapped to how you actually sell.",
      },
      {
        title: "Contact & activity history",
        description: "A single record of conversations, tasks, and next steps.",
      },
      {
        title: "Automations",
        description: "Notifications, assignments, and follow-up triggers that drive adoption.",
      },
      {
        title: "Manager reporting",
        description: "Dashboards for conversion, velocity, and team performance.",
      },
    ],
    process: sharedProcess(
      "Document pipeline, roles, and tools your sales team already uses.",
      "Prototype CRM screens and confirm the minimum lovable workflow.",
      "Build modules, permissions, and integrations iteratively.",
      "Train the team, measure adoption, and expand with new automations.",
    ),
    benefits: [
      {
        title: "Higher CRM adoption",
        description: "Simple daily workflows beat bloated enterprise tools your team ignores.",
      },
      {
        title: "Cleaner revenue data",
        description: "Forecasts and reports based on a pipeline that reflects reality.",
      },
      {
        title: "Grows with your process",
        description: "Start focused, then add modules as your sales motion matures.",
      },
    ],
    offerings: [
      "Lead & deal pipelines",
      "Contact management",
      "Task & follow-up automation",
      "Team roles",
      "Email / WhatsApp integrations",
      "Sales reporting",
      "Customer service workflows",
      "Website lead capture",
    ],
    faqs: [
      {
        question: "Can you build a CRM for a small business?",
        answer:
          "Yes. We specialize in focused CRM applications for SMEs that have outgrown spreadsheets but do not need enterprise complexity.",
      },
      {
        question: "Will the CRM integrate with our website and email?",
        answer:
          "Yes. We can connect lead forms, email, messaging tools, and other systems your team already uses.",
      },
      {
        question: "How long does CRM development take?",
        answer:
          "Timelines depend on modules and integrations. A focused first release can launch quickly, then expand in phases.",
      },
    ],
    pricingGroupIds: ["apps"],
    related: [
      { label: "Custom Software", href: "/services/software-development", description: "Broader operations systems" },
      { label: "Dashboards", href: "/services/dashboard-development", description: "Executive KPI views" },
      { label: "Web Development", href: "/services/web-development", description: "Capture leads from your site" },
    ],
    ctaTitle: "Ready for a CRM your team will actually use?",
    ctaDescription: "Tell us about your pipeline, roles, and tools — we’ll propose a practical CRM roadmap.",
    stats: [
      { value: "SME+", label: "Built for growing teams" },
      { value: "Auto", label: "Follow-ups & alerts" },
      { value: "1 source", label: "Customer truth" },
    ],
  },

  "dashboard-development": {
    slug: "dashboard-development",
    path: "/services/dashboard-development",
    metaTitle: "Dashboard & KPI Development",
    metaDescription:
      "Custom dashboard development for sales, finance, HR, inventory, and operations. KPI dashboards and admin panels engineered by ZEE Sol Tech.",
    keywords: [
      ...pageKeywords.dashboard,
      "hire dashboard developer",
      "custom analytics dashboard",
      "business intelligence dashboard design",
      "admin panel development company",
    ],
    schemaName: "Dashboard & Analytics Development Services",
    serviceType: ["Dashboard development", "Analytics dashboards", "Admin panel development"],
    eyebrow: "Dashboards",
    heroTitle: "Analytics dashboards that turn data into decisions",
    heroDescription:
      "Role-based KPI dashboards and admin panels for sales, finance, HR, inventory, and operations teams.",
    heroImage: "/heroes/hero-software.jpg",
    contentImage: "/sections/section-software.jpg",
    primaryHref: "/contact?type=Dashboard",
    primaryLabel: "Request dashboard quote",
    secondaryHref: "/services",
    secondaryLabel: "All services",
    content: dashboardContent,
    highlights: [
      "Role-based views",
      "KPI clarity",
      "Data connectors",
      "Secure permissions",
    ],
    deliverables: [
      {
        title: "Metric definition",
        description: "Agree on KPIs, filters, and decision questions before design.",
      },
      {
        title: "Dashboard UX",
        description: "Scannable layouts for executives and detailed views for operators.",
      },
      {
        title: "Data integration",
        description: "Connect CRM, software databases, and APIs into trustworthy views.",
      },
      {
        title: "Admin controls",
        description: "Permissions and configuration so the right people see the right data.",
      },
    ],
    process: sharedProcess(
      "Identify roles, data sources, and the decisions dashboards must support.",
      "Design hierarchy, charts, and empty states for clarity.",
      "Implement connectors, caching, and role-based access.",
      "Validate numbers with stakeholders and iterate on adoption.",
    ),
    benefits: [
      {
        title: "Faster decisions",
        description: "Leadership sees a reliable snapshot without waiting on manual reports.",
      },
      {
        title: "Trusted numbers",
        description: "Shared definitions reduce conflicting spreadsheets across departments.",
      },
      {
        title: "Operational focus",
        description: "Teams get task-level detail while executives stay at KPI altitude.",
      },
    ],
    offerings: dashboardTypes,
    faqs: [
      {
        question: "Can you connect dashboards to our CRM or databases?",
        answer:
          "Yes. We integrate APIs, databases, and business tools so dashboards reflect live operational data.",
      },
      {
        question: "Do you build role-based dashboards?",
        answer:
          "Yes. Different roles can see different KPIs, filters, and permissions based on your org structure.",
      },
      {
        question: "Is this the same as a full BI tool?",
        answer:
          "We build focused dashboards and admin panels tailored to your workflows. For some clients that replaces heavy BI complexity; for others it complements existing tools.",
      },
    ],
    related: [
      { label: "CRM Development", href: "/services/crm", description: "Pipeline data that feeds KPIs" },
      { label: "Custom Software", href: "/services/software-development", description: "Systems that generate clean data" },
      { label: "UI/UX Design", href: "/services/ui-ux", description: "Interfaces people can scan fast" },
    ],
    ctaTitle: "Need dashboards your leadership will trust?",
    ctaDescription: "Share your data sources and KPIs — we’ll propose a clear dashboard roadmap.",
    stats: [
      { value: "KPI", label: "Decision-first design" },
      { value: "Live", label: "Connected data sources" },
      { value: "RBAC", label: "Secure role views" },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    path: "/services/mobile-app-development",
    metaTitle: "Mobile App Development",
    metaDescription:
      "Mobile app development company for iOS, Android, and cross-platform apps. MVP to scalable products with polished UX and reliable backends from ZEE Sol Tech.",
    keywords: [
      ...pageKeywords.mobile,
      "hire mobile app developers",
      "cross platform app development company",
      "business mobile app development",
      "MVP app development agency",
    ],
    schemaName: "Mobile App Development Services",
    serviceType: ["Mobile app development", "iOS app development", "Android app development", "Cross-platform apps"],
    eyebrow: "Mobile Apps",
    heroTitle: "Mobile apps customers and teams actually use",
    heroDescription:
      "iOS, Android, and cross-platform apps with polished UX, authentication, notifications, payments, and scalable backends.",
    heroImage: "/heroes/hero-apps.jpg",
    contentImage: "/sections/section-apps.jpg",
    primaryHref: "/contact?type=Mobile%20App",
    primaryLabel: "Request app quote",
    secondaryHref: "/portfolio",
    secondaryLabel: "See related work",
    content: mobileContent,
    highlights: [
      "MVP to scale roadmaps",
      "Polished mobile UX",
      "Push & payments",
      "API-connected backends",
    ],
    deliverables: [
      {
        title: "Product scope",
        description: "MVP features prioritized around activation and retention goals.",
      },
      {
        title: "Mobile UI/UX",
        description: "Flows designed for thumbs, speed, and trust on small screens.",
      },
      {
        title: "App engineering",
        description: "Cross-platform or native-ready foundations with clean architecture.",
      },
      {
        title: "Backend & admin",
        description: "APIs, auth, notifications, and admin tools to operate the product.",
      },
    ],
    process: sharedProcess(
      "Define users, platform strategy, and MVP success metrics.",
      "Prototype key flows and validate usability before heavy build.",
      "Develop app, APIs, and release pipelines in iterative sprints.",
      "Ship to stores or internal distribution, then improve with analytics.",
    ),
    benefits: [
      {
        title: "Faster MVP validation",
        description: "Launch a credible first release without overbuilding.",
      },
      {
        title: "Retention-minded UX",
        description: "Interfaces designed for clarity, speed, and habit-forming flows.",
      },
      {
        title: "Backend ready to grow",
        description: "APIs and admin tools that support the next feature wave.",
      },
    ],
    offerings: mobileServices,
    faqs: [
      {
        question: "Do you build both iOS and Android apps?",
        answer:
          "Yes. We deliver iOS, Android, and cross-platform apps depending on your audience, timeline, and budget.",
      },
      {
        question: "Can you build an MVP mobile app?",
        answer:
          "Yes. We help scope a focused MVP, ship polished UX, and plan the roadmap for later features.",
      },
      {
        question: "Do you handle push notifications and payments?",
        answer:
          "Yes. Notifications, authentication, payments, and API integrations are common parts of our mobile builds.",
      },
    ],
    pricingGroupIds: ["apps"],
    related: [
      { label: "UI/UX Design", href: "/services/ui-ux", description: "Mobile product design systems" },
      { label: "SaaS Development", href: "/services/saas-development", description: "Backends your app can grow on" },
      { label: "Custom Software", href: "/services/software-development", description: "Internal ops behind the app" },
    ],
    ctaTitle: "Ready to launch a mobile product?",
    ctaDescription: "Tell us your users and must-have features — we’ll map MVP scope and delivery.",
    stats: [
      { value: "iOS+", label: "Android & cross-platform" },
      { value: "MVP", label: "Launch-focused scope" },
      { value: "API", label: "Backend included" },
    ],
  },

  "saas-development": {
    slug: "saas-development",
    path: "/services/saas-development",
    metaTitle: "SaaS Development Company",
    metaDescription:
      "SaaS development company for MVPs and multi-tenant platforms — auth, billing, admin panels, APIs, and analytics engineered by ZEE Sol Tech.",
    keywords: [
      ...pageKeywords.saas,
      "hire SaaS developers",
      "build SaaS product",
      "subscription software development company",
      "SaaS startup development agency",
    ],
    schemaName: "SaaS Development Services",
    serviceType: ["SaaS development", "Multi-tenant SaaS", "Subscription software development"],
    eyebrow: "SaaS Development",
    heroTitle: "SaaS products with foundations that scale",
    heroDescription:
      "From SaaS MVP to growth-ready platforms — authentication, tenancy, billing, admin panels, APIs, and analytics.",
    heroImage: "/heroes/hero-software.jpg",
    contentImage: "/sections/section-software.jpg",
    primaryHref: "/contact?type=SaaS",
    primaryLabel: "Request SaaS quote",
    secondaryHref: "/process",
    secondaryLabel: "Delivery process",
    content: saasContent,
    highlights: [
      "Multi-tenant architecture",
      "Billing & subscriptions",
      "Admin + customer dashboards",
      "API-first delivery",
    ],
    deliverables: [
      {
        title: "MVP roadmap",
        description: "A launchable feature set tied to activation and retention goals.",
      },
      {
        title: "Tenancy & auth",
        description: "Secure account models, roles, and access patterns from day one.",
      },
      {
        title: "Billing hooks",
        description: "Subscription flows and admin tooling for customer management.",
      },
      {
        title: "Observability",
        description: "Analytics and operational visibility to iterate after launch.",
      },
    ],
    process: sharedProcess(
      "Pressure-test the product thesis, users, and monetization model.",
      "Design core journeys and define the technical tenancy approach.",
      "Build MVP modules with clean APIs and admin controls.",
      "Launch, instrument usage, and expand toward product-market fit.",
    ),
    benefits: [
      {
        title: "Avoid rewrite debt",
        description: "Early architecture choices that survive your first growth spike.",
      },
      {
        title: "Ship a credible MVP",
        description: "Founders get a real product — not a disposable demo.",
      },
      {
        title: "Operate with clarity",
        description: "Admin panels and analytics keep support and iteration manageable.",
      },
    ],
    offerings: saasCapabilities,
    faqs: [
      {
        question: "Can you build a SaaS MVP for a startup?",
        answer:
          "Yes. We help define MVP scope, design product UX, and engineer auth, tenancy, billing hooks, and admin tools for launch.",
      },
      {
        question: "Do you build multi-tenant SaaS platforms?",
        answer:
          "Yes. Multi-tenant data models, roles, and subscription systems are core to our SaaS development services.",
      },
      {
        question: "What happens after the MVP launches?",
        answer:
          "We can continue with iteration, performance work, integrations, and roadmap features based on real usage.",
      },
    ],
    related: [
      { label: "UI/UX Design", href: "/services/ui-ux", description: "Product interfaces users adopt" },
      { label: "Mobile Apps", href: "/services/mobile-app-development", description: "Companion apps for your SaaS" },
      { label: "Dashboards", href: "/services/dashboard-development", description: "In-product analytics views" },
    ],
    ctaTitle: "Building a SaaS product?",
    ctaDescription: "Share your MVP vision — we’ll recommend architecture, timeline, and a practical first release.",
    stats: [
      { value: "MVP", label: "Launch-ready scope" },
      { value: "Multi", label: "Tenant-ready design" },
      { value: "Bill", label: "Subscription hooks" },
    ],
  },

  "ui-ux": {
    slug: "ui-ux",
    path: "/services/ui-ux",
    metaTitle: "UI/UX Design Agency",
    metaDescription:
      "UI/UX design agency for websites, SaaS, dashboards, and mobile apps. UX research, wireframes, prototypes, and design systems from ZEE Sol Tech.",
    keywords: [
      ...pageKeywords.uiux,
      "hire UI UX designer",
      "product design agency",
      "design system agency",
      "SaaS UI UX design services",
    ],
    schemaName: "UI/UX Design Agency Services",
    serviceType: ["UI UX design", "Product design", "Design systems", "Wireframing and prototyping"],
    eyebrow: "UI/UX Design",
    heroTitle: "UI/UX design that reduces friction and builds trust",
    heroDescription:
      "Research-driven product design for websites, SaaS platforms, dashboards, and mobile apps — from flows to high-fidelity interfaces.",
    heroImage: "/heroes/hero-apps.jpg",
    contentImage: "/sections/section-uiux.jpg",
    primaryHref: "/contact?type=UI%2FUX",
    primaryLabel: "Book UX consultation",
    secondaryHref: "/portfolio",
    secondaryLabel: "View design work",
    content: uiuxContent,
    highlights: [
      "UX research & flows",
      "Wireframes & prototypes",
      "Design systems",
      "Conversion-focused UI",
    ],
    deliverables: [
      {
        title: "User flows",
        description: "Task-based journeys that expose friction before engineering spend.",
      },
      {
        title: "Wireframes & prototypes",
        description: "Interactive validation for stakeholders and usability testing.",
      },
      {
        title: "High-fidelity UI",
        description: "Polished interfaces aligned to brand and accessibility basics.",
      },
      {
        title: "Design systems",
        description: "Components and rules so product teams ship consistently.",
      },
    ],
    process: sharedProcess(
      "Research users, jobs-to-be-done, and constraints across web or product.",
      "Structure information architecture and prototype critical paths.",
      "Design high-fidelity UI and component libraries.",
      "Support development handoff and iterate after usability feedback.",
    ),
    benefits: [
      {
        title: "Fewer expensive reworks",
        description: "Validate flows in design before code locks them in.",
      },
      {
        title: "Higher conversion & retention",
        description: "Clear hierarchy and interaction patterns that guide action.",
      },
      {
        title: "Shared product language",
        description: "Design systems keep marketing sites and apps visually coherent.",
      },
    ],
    offerings: uiuxServices,
    faqs: [
      {
        question: "Do you design both marketing sites and product UI?",
        answer:
          "Yes. We design conversion-focused websites and product interfaces for SaaS, dashboards, and mobile apps.",
      },
      {
        question: "Can you create a design system?",
        answer:
          "Yes. We deliver component libraries, spacing/typography rules, and handoff-ready specs for engineering teams.",
      },
      {
        question: "Do you work with existing brands?",
        answer:
          "Yes. We extend brand identity into product UI or collaborate with your branding package for a unified look.",
      },
    ],
    related: [
      { label: "Web Development", href: "/services/web-development", description: "Turn UX into a live website" },
      { label: "SaaS Development", href: "/services/saas-development", description: "Ship the product behind the UI" },
      { label: "Branding", href: "/services/branding", description: "Identity systems for every surface" },
    ],
    ctaTitle: "Need a UI/UX partner for your next product?",
    ctaDescription: "Share your product or website goals — we’ll recommend research, design, and handoff scope.",
    stats: [
      { value: "UX", label: "Research to UI" },
      { value: "Sys", label: "Design systems" },
      { value: "Web+", label: "SaaS & mobile" },
    ],
  },
};

export function getServicePage(slug: string) {
  return servicePages[slug];
}
