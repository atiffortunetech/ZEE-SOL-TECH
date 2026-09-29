export type PageContentBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type RelatedTopic = {
  label: string;
  href: string;
  description: string;
};

export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: PageContentBlock[];
  relatedTopics?: RelatedTopic[];
};

export const homeContent: PageContent = {
  eyebrow: "Digital product studio",
  title: "A full-service software house for brand, web, and custom systems",
  intro:
    "ZEE Sol Tech helps startups, SMEs, and growing brands design memorable identities, launch high-performing websites, and build custom software, CRMs, dashboards, SaaS platforms, and mobile apps that support real business operations.",
  blocks: [
    {
      heading: "What we build for modern businesses",
      paragraphs: [
        "Whether you need a logo system, a conversion-focused website, an e-commerce storefront, or a tailored CRM, our team combines design craft with practical engineering. Every engagement starts with clarity — goals, users, constraints — then moves into structured delivery.",
        "We work as a long-term digital partner: brand foundations, product UI/UX, frontend and backend development, integrations, launch support, and ongoing improvement after go-live.",
      ],
      bullets: [
        "Logo design, brand identity, and visual systems",
        "Website design, CMS, and e-commerce development",
        "Custom software, CRM, and workflow automation",
        "SaaS platforms, dashboards, and mobile apps",
      ],
    },
    {
      heading: "Why companies choose a dedicated software house",
      paragraphs: [
        "Fragmented freelancers and one-off tools often create inconsistent brand experiences and fragile systems. A focused studio keeps strategy, design, and development aligned — so your website, CRM, and product UI feel like one coherent business.",
        "From discovery to launch, ZEE Sol Tech emphasizes transparent packages, clear milestones, and SEO-ready foundations so your digital presence can grow with your company.",
      ],
    },
    {
      heading: "SEO-ready websites and searchable brand presence",
      paragraphs: [
        "Strong SEO starts with clear positioning, fast pages, and content structure search engines can understand. Our website development and digital product work includes semantic headings, metadata, internal linking, and performance practices that support long-term organic visibility.",
        "Pair that technical foundation with consistent branding and conversion-focused UX, and your business becomes easier to find, trust, and contact — across Google, social channels, and referral traffic.",
      ],
      bullets: [
        "Technical SEO foundations on every business website",
        "Keyword-aligned service pages and package content",
        "Fast, mobile-first experiences that reduce bounce",
        "Clear CTAs for quotes, demos, and consultations",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Website development",
      href: "/services/web-development",
      description: "SEO-friendly business websites and e-commerce stores",
    },
    {
      label: "Logo & branding",
      href: "/services/branding",
      description: "Logo design and brand identity systems",
    },
    {
      label: "Custom software",
      href: "/services/software-development",
      description: "Business software built around your workflows",
    },
    {
      label: "Packages & pricing",
      href: "/pricing",
      description: "Transparent packages for web, branding, and apps",
    },
  ],
};

export const aboutContent: PageContent = {
  eyebrow: "Our studio",
  title: "Designers and engineers building brands and products that perform",
  intro:
    "ZEE Sol Tech is a digital product studio and software house focused on brand identity, websites, custom software, CRM platforms, SaaS products, and mobile experiences for businesses that need more than a template.",
  blocks: [
    {
      heading: "Our approach",
      paragraphs: [
        "We believe strong digital products start with clear positioning and usable design. That means research, thoughtful information architecture, and interfaces that reduce friction for customers and internal teams alike.",
        "On the engineering side, we prioritize maintainable architecture, secure integrations, and performance — so your investment continues to deliver value after launch day.",
      ],
      bullets: [
        "Brand-first thinking for every digital touchpoint",
        "Product-minded UI/UX and conversion design",
        "Custom development for operations that off-the-shelf tools cannot cover",
        "Transparent communication, milestones, and documentation",
      ],
    },
    {
      heading: "Who we work with",
      paragraphs: [
        "Startups use ZEE Sol Tech to validate ideas quickly with polished MVPs. Established SMEs and enterprises engage us to modernize websites, replace spreadsheets with CRMs, and launch dashboards that make decision-making faster.",
        "Agencies and e-commerce brands partner with us for specialized branding, web, and application builds when quality and speed both matter.",
      ],
    },
    {
      heading: "A software house built for growth-stage brands",
      paragraphs: [
        "Hiring ZEE Sol Tech means working with a team that understands both creative brand systems and full-stack product engineering. We help founders, marketing leads, and operations managers ship websites, mobile apps, SaaS platforms, and CRM tools without juggling five disconnected vendors.",
        "If you are searching for a digital agency, web design company, or custom software development partner that can own the whole journey — from logo to launch — you are in the right place.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Our process",
      href: "/process",
      description: "Discover, design, develop, launch, and grow",
    },
    {
      label: "Services",
      href: "/services",
      description: "Branding, web, software, CRM, SaaS, and apps",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      description: "Selected brand, web, and product work",
    },
  ],
};

export const servicesContent: PageContent = {
  eyebrow: "Capabilities",
  title: "End-to-end digital and software services under one roof",
  intro:
    "From logo design and UI/UX to websites, custom software, CRM systems, SaaS platforms, dashboards, and mobile apps — ZEE Sol Tech delivers connected services so your brand and product stack stay consistent.",
  blocks: [
    {
      heading: "Brand, design, and digital presence",
      paragraphs: [
        "Your brand should look intentional everywhere customers meet you. We create logo systems, brand guidelines, website experiences, and product interfaces that reinforce trust and clarity.",
      ],
      bullets: [
        "Logo & brand identity packages",
        "UI/UX design, wireframes, and design systems",
        "Business websites, landing pages, and e-commerce stores",
      ],
    },
    {
      heading: "Software, CRM, and product engineering",
      paragraphs: [
        "When spreadsheets and generic tools slow your team down, custom software unlocks speed. We build CRMs, admin dashboards, SaaS products, and mobile apps mapped to how your organization actually works.",
      ],
      bullets: [
        "Custom software and workflow automation",
        "CRM and sales pipeline platforms",
        "SaaS MVP and multi-tenant product development",
        "Analytics dashboards and mobile applications",
      ],
    },
    {
      heading: "Popular digital services clients search for",
      paragraphs: [
        "Businesses often find ZEE Sol Tech while looking for a website development company, logo design agency, CRM development partner, or SaaS product engineering team. Our service catalog is organized so you can start with branding, web, or software — then expand as your roadmap grows.",
        "Every service page includes clear deliverables, package options where relevant, and a direct path to request a quote for custom scope.",
      ],
      bullets: [
        "Website design and SEO-friendly web development",
        "Professional logo design and corporate branding",
        "Custom CRM and business software development",
        "Mobile app, dashboard, and SaaS development",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Web development",
      href: "/services/web-development",
      description: "Business websites and e-commerce",
    },
    {
      label: "Branding",
      href: "/services/branding",
      description: "Logo and identity systems",
    },
    {
      label: "CRM development",
      href: "/services/crm",
      description: "Sales pipelines and customer systems",
    },
    {
      label: "SaaS development",
      href: "/services/saas-development",
      description: "Multi-tenant product engineering",
    },
  ],
};

export const brandingContent: PageContent = {
  eyebrow: "Branding services",
  title: "Logo and brand identity systems that make your business memorable",
  intro:
    "ZEE Sol Tech designs logo systems, visual identities, and brand guidelines for companies that need a professional presence across websites, packaging, social channels, and product interfaces.",
  blocks: [
    {
      heading: "What a strong brand identity includes",
      paragraphs: [
        "A logo alone is not a brand. We define typography, color, spacing, iconography, and usage rules so every designer, marketer, and developer can apply your identity consistently.",
        "Our branding packages range from focused logo foundations to complete identity systems with guidelines ready for print, digital, and product UI.",
      ],
      bullets: [
        "Primary and secondary logo marks",
        "Color palette and typography systems",
        "Brand guidelines and asset delivery",
        "Visual direction for websites and apps",
      ],
    },
    {
      heading: "Professional logo design for startups and growing brands",
      paragraphs: [
        "Searching for a logo design agency or corporate branding partner usually means you need more than a quick mark — you need ownership-ready files, clear usage rules, and an identity that still looks sharp on a favicon, packaging label, or truck wrap.",
        "ZEE Sol Tech logo packages are structured for emerging brands and established companies alike, with options for essential identity, refined systems, and full brand books.",
      ],
      bullets: [
        "Affordable logo design packages with clear deliverables",
        "Brand identity design for websites and product UI",
        "Visual systems that scale across marketing channels",
      ],
    },
    {
      heading: "SEO value of clear branding",
      paragraphs: [
        "Consistent naming, messaging, and visual identity support brand search demand over time. When your website, social profiles, and product UI look and sound the same, customers recognize you faster — and search engines associate your brand with quality digital experiences.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Logo questionnaire",
      href: "/logo-questionnaire",
      description: "Start your logo brief in five minutes",
    },
    {
      label: "Website design",
      href: "/services/web-development",
      description: "Turn your identity into a conversion-focused site",
    },
    {
      label: "Branding packages",
      href: "/pricing",
      description: "Compare logo and identity package tiers",
    },
  ],
};

export const webContent: PageContent = {
  eyebrow: "Web development",
  title: "Business websites and e-commerce experiences built to convert",
  intro:
    "We design and develop fast, responsive, SEO-ready websites for service businesses, startups, and online stores — with clear messaging, strong visuals, and lead paths that support growth.",
  blocks: [
    {
      heading: "Website design and development services",
      paragraphs: [
        "Every site we ship balances brand storytelling with practical conversion: clear CTAs, readable structure, mobile performance, and technical SEO foundations like semantic headings, metadata, and clean URLs.",
        "Choose from starter and business packages or commission a custom build with CMS, e-commerce, booking flows, and marketing integrations.",
      ],
      bullets: [
        "Custom UI and responsive layouts",
        "CMS-ready content architecture",
        "E-commerce catalogs, carts, and checkout",
        "Performance, accessibility, and SEO best practices",
      ],
    },
    {
      heading: "SEO-friendly website development for business growth",
      paragraphs: [
        "If you are looking for a website development company that understands organic search, ZEE Sol Tech builds pages around real commercial intent — service pages, location and offer clarity, internal links, and content blocks that answer buyer questions.",
        "That includes conversion-focused web design, fast Core Web Vitals habits, schema-ready structure, and CMS setups your team can update without breaking SEO foundations.",
      ],
      bullets: [
        "Keyword-aware page structure and headings",
        "On-page SEO for service and landing pages",
        "E-commerce SEO readiness for product catalogs",
        "Lead forms, quote funnels, and contact paths",
      ],
    },
    {
      heading: "Who these websites are for",
      paragraphs: [
        "Local service companies, B2B firms, agencies, and product startups all need websites that look premium and load quickly. We tailor information architecture and page templates to your offer, audience, and sales process.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Website questionnaire",
      href: "/website-questionnaire",
      description: "Share goals, pages, and design preferences",
    },
    {
      label: "UI/UX design",
      href: "/services/ui-ux",
      description: "Research-driven interfaces that convert",
    },
    {
      label: "Website packages",
      href: "/pricing",
      description: "Compare website and e-commerce packages",
    },
  ],
};

export const softwareContent: PageContent = {
  eyebrow: "Custom software",
  title: "Business software designed around your operations",
  intro:
    "ZEE Sol Tech builds custom software platforms for inventory, HR, logistics, accounting workflows, project management, and internal tools — so your team stops forcing processes into generic software.",
  blocks: [
    {
      heading: "From messy workflows to reliable systems",
      paragraphs: [
        "We map your current tools, handoffs, and pain points, then design architecture that fits. Integrations, roles, permissions, and audit trails are planned early so the product scales with your organization.",
      ],
      bullets: [
        "Discovery workshops and system mapping",
        "Custom modules and role-based access",
        "API integrations with existing tools",
        "Training, documentation, and post-launch support",
      ],
    },
    {
      heading: "Custom software development for SMEs and enterprises",
      paragraphs: [
        "Companies searching for bespoke software development, workflow automation, or internal tools often need a partner who can translate operations into product requirements. ZEE Sol Tech delivers business software solutions that replace fragile spreadsheets and disconnected apps.",
        "Typical builds include inventory systems, HR portals, logistics trackers, project management platforms, and department-specific admin tools with reporting.",
      ],
      bullets: [
        "Enterprise-ready architecture with room to grow",
        "Integrations with CRM, accounting, and messaging tools",
        "Secure auth, roles, and audit-friendly workflows",
      ],
    },
    {
      heading: "When to choose custom software development",
      paragraphs: [
        "If off-the-shelf products require expensive workarounds, or if competitive advantage depends on how your data and workflows operate, custom development is usually the clearer long-term investment.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "CRM development",
      href: "/services/crm",
      description: "Customer pipelines built for your team",
    },
    {
      label: "Dashboard development",
      href: "/services/dashboard-development",
      description: "KPI and operations dashboards",
    },
    {
      label: "SaaS development",
      href: "/services/saas-development",
      description: "Turn internal tools into products",
    },
  ],
};

export const crmContent: PageContent = {
  eyebrow: "CRM development",
  title: "Custom CRM systems that match your sales and service pipeline",
  intro:
    "Build a customer relationship management platform around your leads, deals, follow-ups, and team roles — instead of adapting your business to a rigid CRM template.",
  blocks: [
    {
      heading: "CRM features that drive adoption",
      paragraphs: [
        "Successful CRMs are simple enough for daily use and powerful enough for managers. We design pipelines, contact records, task reminders, reporting, and automations that sales and support teams actually open every day.",
      ],
      bullets: [
        "Lead and deal pipeline management",
        "Contact history and activity tracking",
        "Team roles, permissions, and assignments",
        "Automations, notifications, and reporting",
      ],
    },
    {
      heading: "Custom CRM software for small business and growing teams",
      paragraphs: [
        "If you have outgrown spreadsheets but find enterprise CRM platforms too heavy, a custom CRM development project can capture your exact sales stages, follow-up rules, and reporting needs.",
        "ZEE Sol Tech builds CRM for small business teams and mid-market organizations — including lead management software, sales pipeline tools, and customer service workflows.",
      ],
      bullets: [
        "Sales CRM development tailored to your process",
        "Customer relationship management without unused bloat",
        "Integrations with email, WhatsApp, and websites",
      ],
    },
    {
      heading: "CRM for SMEs and growing sales teams",
      paragraphs: [
        "Small and mid-size businesses often outgrow spreadsheets before they are ready for enterprise CRM complexity. ZEE Sol Tech delivers focused CRM applications that capture the essentials first, then expand with modules as your process matures.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Custom software",
      href: "/services/software-development",
      description: "Broader business systems and automation",
    },
    {
      label: "Mobile apps",
      href: "/services/mobile-app-development",
      description: "Field and sales apps connected to CRM",
    },
    {
      label: "Request a CRM quote",
      href: "/contact?type=CRM",
      description: "Tell us about your pipeline and tools",
    },
  ],
};

export const mobileContent: PageContent = {
  eyebrow: "Mobile apps",
  title: "iOS, Android, and cross-platform apps with polished UX",
  intro:
    "Launch customer-facing or internal mobile products with ZEE Sol Tech — from MVP validation to feature-rich applications with notifications, auth, and scalable backends.",
  blocks: [
    {
      heading: "Mobile product development services",
      paragraphs: [
        "We help you choose the right platform strategy, design intuitive mobile flows, and engineer apps that feel fast and trustworthy. Integrations with APIs, payments, analytics, and push notifications are planned as part of delivery.",
      ],
      bullets: [
        "MVP scoping and roadmap planning",
        "UI/UX for mobile conversion and retention",
        "Cross-platform and native-ready foundations",
        "Backend APIs, auth, and admin tools",
      ],
    },
    {
      heading: "Mobile app development company for startups and product teams",
      paragraphs: [
        "Founders searching for iOS app development, Android app development, or cross-platform app development need a partner who can ship an MVP without painting the product into a corner.",
        "ZEE Sol Tech mobile app development covers consumer apps, internal field tools, loyalty experiences, and SaaS companion apps with reliable sync and polished UX.",
      ],
      bullets: [
        "MVP mobile app development with clear milestones",
        "Push notifications, payments, and authentication",
        "Admin panels and APIs that support growth",
      ],
    },
    {
      heading: "Apps that support real business goals",
      paragraphs: [
        "Whether you are shipping a consumer product, a field-service tool, or a loyalty experience, we align features to measurable outcomes: activation, retention, bookings, or operational efficiency.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "UI/UX design",
      href: "/services/ui-ux",
      description: "Mobile flows and product interfaces",
    },
    {
      label: "SaaS development",
      href: "/services/saas-development",
      description: "Backend platforms your app can grow on",
    },
    {
      label: "Contact us",
      href: "/contact?type=Mobile%20App",
      description: "Request a mobile app estimate",
    },
  ],
};

export const uiuxContent: PageContent = {
  eyebrow: "UI/UX design",
  title: "Interfaces people understand instantly and trust quickly",
  intro:
    "ZEE Sol Tech provides UX research, wireframes, prototypes, design systems, and high-fidelity UI for websites, dashboards, SaaS products, and mobile apps.",
  blocks: [
    {
      heading: "Design that reduces friction",
      paragraphs: [
        "Great UI is not decoration — it is decision-making made easier. We clarify user journeys, hierarchy, and interaction patterns so customers and staff can complete tasks without confusion.",
      ],
      bullets: [
        "User flows and information architecture",
        "Wireframes and interactive prototypes",
        "Design systems and component libraries",
        "Usability-focused visual design",
      ],
    },
    {
      heading: "UI UX design agency services for product and marketing teams",
      paragraphs: [
        "Teams looking for product design services, wireframing and prototyping, or design system development need a partner who can connect research to shipped interface quality.",
        "Our UI/UX design agency work covers marketing websites, SaaS dashboards, mobile apps, and admin tools — always with accessibility, hierarchy, and conversion in mind.",
      ],
      bullets: [
        "User experience design grounded in real tasks",
        "Interface design systems for consistent shipping",
        "Prototype validation before expensive development",
      ],
    },
    {
      heading: "UI/UX for product and marketing teams",
      paragraphs: [
        "Marketing sites need conversion clarity. Product interfaces need efficiency and consistency. We design both with shared brand language so your company feels coherent from first click to daily use.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Web development",
      href: "/services/web-development",
      description: "Turn UX into a live website",
    },
    {
      label: "Dashboard design",
      href: "/services/dashboard-development",
      description: "Analytics interfaces with role clarity",
    },
    {
      label: "Branding",
      href: "/services/branding",
      description: "Visual identity that supports product UI",
    },
  ],
};

export const saasContent: PageContent = {
  eyebrow: "SaaS development",
  title: "Subscription products with solid multi-tenant foundations",
  intro:
    "From SaaS MVP to growth-ready platforms, ZEE Sol Tech builds authentication, tenancy, billing, admin panels, APIs, and analytics so you can launch and iterate with confidence.",
  blocks: [
    {
      heading: "What we engineer into SaaS platforms",
      paragraphs: [
        "SaaS success depends on architecture choices made early. We plan tenancy models, role systems, billing hooks, and observability so your product can onboard customers without rewriting the core every quarter.",
      ],
      bullets: [
        "MVP definition and technical roadmap",
        "Auth, roles, and multi-tenant data models",
        "Billing, subscriptions, and admin tooling",
        "APIs, dashboards, and growth analytics",
      ],
    },
    {
      heading: "SaaS development company for founders and product teams",
      paragraphs: [
        "If you are searching for a SaaS development company, multi-tenant SaaS engineering, or SaaS MVP development, ZEE Sol Tech helps you move from concept to paying customers with a maintainable stack.",
        "We build subscription software with onboarding flows, admin panels, APIs, and analytics — so your SaaS startup can iterate after launch instead of freezing the architecture.",
      ],
      bullets: [
        "SaaS product engineering with clear milestones",
        "Subscription billing and customer admin tools",
        "Scalable APIs for web and mobile clients",
      ],
    },
    {
      heading: "Ideal for founders validating product-market fit",
      paragraphs: [
        "If you need a credible SaaS product quickly without sacrificing maintainability, our team balances speed and structure — shipping a focused first release while leaving room to scale.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Custom software",
      href: "/services/software-development",
      description: "Internal platforms and automation",
    },
    {
      label: "UI/UX design",
      href: "/services/ui-ux",
      description: "Product interfaces users adopt",
    },
    {
      label: "Request a SaaS quote",
      href: "/contact?type=SaaS",
      description: "Share your MVP and roadmap",
    },
  ],
};

export const dashboardContent: PageContent = {
  eyebrow: "Dashboards",
  title: "Analytics and operations dashboards that turn data into action",
  intro:
    "We design and develop role-based dashboards for sales, finance, HR, inventory, and operations teams — with KPI clarity and interfaces built for everyday decision-making.",
  blocks: [
    {
      heading: "Dashboard development capabilities",
      paragraphs: [
        "Raw data is not useful until it is structured around roles and questions. We define metrics, filters, alerts, and views that help managers and specialists see what matters without drowning in tables.",
      ],
      bullets: [
        "KPI and reporting dashboard design",
        "Role-based views and permissions",
        "Data connectors and API integrations",
        "Admin panels for internal operations",
      ],
    },
    {
      heading: "Business intelligence dashboards and admin panel development",
      paragraphs: [
        "Leaders searching for dashboard development, analytics dashboard design, or KPI dashboard software need more than charts — they need trustworthy numbers, filters that match real workflows, and permissions that protect sensitive data.",
        "ZEE Sol Tech builds business intelligence dashboards and operational admin panels connected to your CRM, software, or data sources.",
      ],
      bullets: [
        "Sales, finance, HR, and inventory dashboards",
        "Data visualization for decision-makers",
        "Secure role-based access for teams",
      ],
    },
    {
      heading: "Better visibility across the business",
      paragraphs: [
        "Leadership gets a reliable snapshot. Teams get task-level detail. ZEE Sol Tech dashboards bridge both so organizations move from reactive firefighting to proactive management.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "CRM development",
      href: "/services/crm",
      description: "Pipeline data that feeds your KPIs",
    },
    {
      label: "Custom software",
      href: "/services/software-development",
      description: "Systems that generate clean operational data",
    },
    {
      label: "UI/UX design",
      href: "/services/ui-ux",
      description: "Interfaces people can scan in seconds",
    },
  ],
};

export const portfolioContent: PageContent = {
  eyebrow: "Selected work",
  title: "Brand, web, and product projects across industries",
  intro:
    "Explore ZEE Sol Tech logos, brand systems, websites, apps, banners, and digital campaigns. Each project reflects our focus on clarity, craft, and commercial usefulness.",
  blocks: [
    {
      heading: "What to look for in our portfolio",
      paragraphs: [
        "Browse by category to see how we approach identity, layout, and product UI. Use these examples as a starting point for conversation — then tell us about your market, audience, and goals so we can tailor the next engagement.",
      ],
      bullets: [
        "Logo and brand identity systems",
        "Website and digital product interfaces",
        "Application and dashboard visuals",
        "Marketing creatives and campaign assets",
      ],
    },
    {
      heading: "Case studies for branding, websites, and digital products",
      paragraphs: [
        "Our portfolio is organized to help buyers compare logo design work, website design examples, app interfaces, and campaign creatives. Looking through real deliverables is often the fastest way to decide whether our software house and digital agency style fits your brand.",
        "When you are ready, share a similar brief — or start with our logo or website questionnaire so we can scope the right package.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Branding services",
      href: "/services/branding",
      description: "Logo and identity systems",
    },
    {
      label: "Web development",
      href: "/services/web-development",
      description: "Business websites and stores",
    },
    {
      label: "Start a project",
      href: "/contact",
      description: "Request a quote for similar work",
    },
  ],
};

export const pricingContent: PageContent = {
  eyebrow: "Packages",
  title: "Transparent packages for branding, websites, apps, and more",
  intro:
    "Compare ZEE Sol Tech packages across logo design, websites, e-commerce, CMS, animation, print, SEO, social, applications, and corporate combos — then request a custom quote when your scope needs a tailored proposal.",
  blocks: [
    {
      heading: "How to choose the right package",
      paragraphs: [
        "Start with the practice that matches your immediate goal. If you need a complete identity plus website, combo packages can reduce coordination overhead. For software, CRM, or SaaS builds, we usually recommend a scoped proposal after a short discovery call.",
      ],
      bullets: [
        "Clear feature lists for each package tier",
        "Upgrade paths as your needs grow",
        "Custom quotes for complex or multi-workstream projects",
      ],
    },
    {
      heading: "Website packages, logo design packages, and software pricing",
      paragraphs: [
        "Transparent agency pricing helps teams compare website design cost, branding package options, and application development budgets without endless email back-and-forth.",
        "Use the tabs above to review logo design packages, website packages, e-commerce plans, SEO retainers, and corporate combos — then request a custom quote for CRM, SaaS, or mobile work.",
      ],
      bullets: [
        "Affordable branding packages for emerging brands",
        "Business website and CMS package tiers",
        "Custom software and CRM pricing via proposal",
      ],
    },
    {
      heading: "Pricing that supports planning",
      paragraphs: [
        "Transparent ranges help founders and marketing leads budget early. Final proposals still account for unique content, integrations, and timeline requirements so there are no surprises mid-project.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Website questionnaire",
      href: "/website-questionnaire",
      description: "Brief your website project",
    },
    {
      label: "Logo questionnaire",
      href: "/logo-questionnaire",
      description: "Brief your logo and identity needs",
    },
    {
      label: "Contact sales",
      href: "/contact",
      description: "Ask for a custom proposal",
    },
  ],
};

export const processContent: PageContent = {
  eyebrow: "How we work",
  title: "A clear path from brief to launch and beyond",
  intro:
    "ZEE Sol Tech follows a structured delivery process — discover, define, design, develop, launch, and grow — so stakeholders always know what happens next and how decisions are made.",
  blocks: [
    {
      heading: "Why process matters for digital projects",
      paragraphs: [
        "Ambiguous scopes create delays and rework. Our methodology keeps discovery insights connected to design decisions and engineering tickets, with review checkpoints that protect quality without slowing momentum.",
      ],
      bullets: [
        "Discovery workshops and requirements clarity",
        "Design reviews and prototype feedback loops",
        "Iterative development with transparent progress",
        "Launch checklists and post-go-live support",
      ],
    },
    {
      heading: "Software development process and agency workflow",
      paragraphs: [
        "Clients comparing agency project workflows want a product delivery methodology that is predictable: discovery, definition, design, development, launch, and growth. That is the ZEE Sol Tech software development process.",
        "Whether the engagement is logo design, website development, CRM build, or SaaS MVP, the same cadence keeps stakeholders aligned and SEO, content, and engineering decisions connected.",
      ],
    },
    {
      heading: "Collaboration style",
      paragraphs: [
        "You get a dedicated communication rhythm, shared documentation, and practical recommendations — not black-box delivery. We adapt ceremony to your team size while keeping accountability clear.",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Services",
      href: "/services",
      description: "See what we can deliver",
    },
    {
      label: "FAQ",
      href: "/faq",
      description: "Timelines, pricing, and collaboration answers",
    },
    {
      label: "Start discovery",
      href: "/contact",
      description: "Book a project conversation",
    },
  ],
};

export const contactContent: PageContent = {
  eyebrow: "Get in touch",
  title: "Request a quote for your next brand, website, or software project",
  intro:
    "Share your goals, timeline, and constraints. ZEE Sol Tech responds with clarifying questions and a practical path toward proposal — whether you need branding, a website, CRM, SaaS, dashboard, or mobile app.",
  blocks: [
    {
      heading: "What to include in your brief",
      paragraphs: [
        "The more context you provide, the faster we can recommend a package or custom approach. Helpful details include your industry, target users, must-have features, references you like, and whether you need ongoing support after launch.",
      ],
      bullets: [
        "Project type and primary business goal",
        "Approximate budget range and timeline",
        "Existing brand assets or starting from scratch",
        "Integrations, CMS, or compliance requirements",
      ],
    },
    {
      heading: "Hire a digital agency or software house with a clear next step",
      paragraphs: [
        "Contact ZEE Sol Tech when you are ready to hire a digital agency, get a website estimate, or start a software project. We help with logo design quotes, website development proposals, CRM scoping, SaaS MVP planning, and mobile app estimates.",
        "Prefer a structured brief? Use our website questionnaire or logo questionnaire, then we will follow up with clarifying questions and a practical proposal path.",
      ],
      bullets: [
        "Request a project quote in one form",
        "Website and logo intake questionnaires",
        "Custom proposals for software, CRM, and SaaS",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Website questionnaire",
      href: "/website-questionnaire",
      description: "Detailed website brief",
    },
    {
      label: "Logo questionnaire",
      href: "/logo-questionnaire",
      description: "Detailed logo and brand brief",
    },
    {
      label: "Packages",
      href: "/pricing",
      description: "Compare starting package options",
    },
  ],
};

export const faqContent: PageContent = {
  eyebrow: "Answers",
  title: "Common questions about working with a software house",
  intro:
    "Find clear answers about timelines, pricing, hosting, NDAs, website projects, CRM builds, and how ZEE Sol Tech collaborates with startups and established companies.",
  blocks: [
    {
      heading: "Still deciding how to start?",
      paragraphs: [
        "If your scope is unclear, begin with a discovery conversation or a starter package that establishes brand and web foundations. Complex software, CRM, and SaaS work usually benefits from a short scoping phase before full production.",
        "Browse the questions below, then contact us with any remaining details — we will help you choose the most efficient next step.",
      ],
    },
    {
      heading: "Software development FAQ topics we cover",
      paragraphs: [
        "This FAQ answers the searches teams make before hiring a software development company or digital agency: website project timelines, CRM pricing, hosting and deployment, NDA comfort, revision rounds, and technology choices.",
        "If you need deeper detail on website design cost, mobile app MVP scope, or SaaS architecture, send a short brief and we will map the right package or custom proposal.",
      ],
      bullets: [
        "Website design and development timelines",
        "Custom software and CRM cost drivers",
        "Hosting, deployment, and maintenance options",
        "Collaboration, NDAs, and revision process",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Process",
      href: "/process",
      description: "How delivery works end to end",
    },
    {
      label: "Pricing",
      href: "/pricing",
      description: "Package options and starting prices",
    },
    {
      label: "Contact",
      href: "/contact",
      description: "Ask a question or request a quote",
    },
  ],
};

export const websiteQuestionnaireContent: PageContent = {
  eyebrow: "Website brief",
  title: "Website questionnaire for a clearer first draft",
  intro:
    "Tell ZEE Sol Tech about your business, goals, design preferences, and site structure. A complete website questionnaire helps us prepare SEO-ready page recommendations and a stronger website proposal.",
  blocks: [
    {
      heading: "Why a website project intake form matters",
      paragraphs: [
        "A structured website brief reduces back-and-forth and surfaces must-have pages, audience details, and brand direction early. That means faster wireframes, better keyword targeting on service pages, and clearer package recommendations.",
      ],
      bullets: [
        "Business goals and target audience",
        "Preferred look, feel, and reference sites",
        "Required pages and content readiness",
        "Domain, hosting, and timeline notes",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Web development",
      href: "/services/web-development",
      description: "Explore website services",
    },
    {
      label: "Website packages",
      href: "/pricing",
      description: "Compare package tiers",
    },
  ],
};

export const logoQuestionnaireContent: PageContent = {
  eyebrow: "Logo brief",
  title: "Logo questionnaire for a lasting brand mark",
  intro:
    "Share your exact brand name, industry, look and feel, colors, and usage needs. Our logo questionnaire helps ZEE Sol Tech craft a professional logo design brief before concepts begin.",
  blocks: [
    {
      heading: "What makes a strong logo design brief",
      paragraphs: [
        "Great logo design starts with clarity: name spelling, competitors to avoid, feelings the mark should communicate, and where it will appear — website favicon, packaging, social, or signage.",
        "Completing this brand intake form helps us recommend the right logo package and deliver ownership-ready files that scale across every channel.",
      ],
      bullets: [
        "Exact name and industry context",
        "Style direction and color preferences",
        "Usage surfaces from web to print",
        "Inspiration and constraints",
      ],
    },
  ],
  relatedTopics: [
    {
      label: "Branding services",
      href: "/services/branding",
      description: "Logo and identity systems",
    },
    {
      label: "Logo packages",
      href: "/pricing",
      description: "Compare identity package options",
    },
  ],
};
