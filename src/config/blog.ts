export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  tags: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  featured: boolean;
  relatedService: { label: string; href: string };
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-website-development-company",
    title: "How to Choose a Website Development Company That Actually Delivers",
    excerpt:
      "Most agencies sound great on a sales call. Here’s what to check before you sign — so your site ships on time and actually helps you get customers.",
    description:
      "Learn how to choose a website development company with a simple checklist for portfolio quality, SEO, timelines, and communication — from ZEE Sol Tech.",
    category: "Web Development",
    tags: ["website development", "agency hiring", "business website"],
    keywords: [
      "how to choose a website development company",
      "best website development company",
      "hire web developers",
      "website design and development agency",
      "SEO friendly website company",
      "business website development",
    ],
    image: "/blog/blog-choose-web-agency.jpg",
    imageAlt: "Laptop on a studio desk showing a business website layout",
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-04",
    readingMinutes: 8,
    featured: true,
    relatedService: { label: "Web Development", href: "/services/web-development" },
    sections: [
      {
        heading: "Start with the problem, not the tech stack",
        paragraphs: [
          "If you’re shopping for a website development company, it’s easy to get lost in buzzwords — Next.js, WordPress, headless CMS, animations. Those matter later. First, write down what the site needs to do for your business in plain English.",
          "Are you trying to book more consultations? Sell products online? Explain a complex service so people trust you enough to inquire? A good partner will ask about that before they pitch a stack. If they jump straight to templates, slow down.",
        ],
      },
      {
        heading: "Look for proof that matches your industry",
        paragraphs: [
          "Portfolio screenshots are nice. Case-style detail is better. You want to see sites that feel similar in complexity to yours — forms that work, clear service pages, mobile layouts that don’t fall apart.",
          "Ask who wrote the copy, who owned SEO basics (titles, headings, speed), and what happened after launch. Agencies that only show pretty mockups often struggle when content and search enter the picture.",
        ],
        bullets: [
          "Ask for 2–3 live URLs, not just Figma boards",
          "Check mobile page speed on a real phone",
          "Confirm who maintains the site after go-live",
        ],
      },
      {
        heading: "Clarity on process beats a cheap quote",
        paragraphs: [
          "The lowest bid often skips discovery, revisions, or SEO foundations. That cost shows up later as rebuilds. Look for a process you can follow: discovery, structure, design, build, launch, handoff.",
          "At ZEE Sol Tech we treat website development as a business tool — not a brochure. If you want a partner who ties design, development, and search into one plan, start with a short project brief and we’ll map the right scope.",
        ],
      },
    ],
  },
  {
    slug: "logo-design-mistakes-that-hurt-your-brand",
    title: "7 Logo Design Mistakes That Quietly Hurt Your Brand",
    excerpt:
      "A logo isn’t just a cute mark. These common mistakes make brands look amateur — and cost more to fix later than getting it right the first time.",
    description:
      "Avoid common logo design mistakes that weaken brand trust. Practical tips on simplicity, scalability, and identity systems from ZEE Sol Tech.",
    category: "Branding",
    tags: ["logo design", "brand identity", "visual branding"],
    keywords: [
      "logo design mistakes",
      "professional logo design",
      "brand identity design",
      "logo design agency",
      "corporate branding tips",
      "visual identity system",
    ],
    image: "/blog/blog-logo-mistakes.jpg",
    imageAlt: "Brand designer desk with logo sketches and color swatches",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    readingMinutes: 7,
    featured: true,
    relatedService: { label: "Logo & Branding", href: "/services/branding" },
    sections: [
      {
        heading: "Too many ideas in one mark",
        paragraphs: [
          "When a logo tries to say everything — industry icons, initials, taglines, gradients — it becomes hard to remember. Strong brands usually win with one clear idea you can sketch from memory.",
          "If your current mark needs a paragraph of explanation, that’s a signal. Simplify until the core shape still feels like you.",
        ],
      },
      {
        heading: "It only works on a white background",
        paragraphs: [
          "Your logo will live on websites, social avatars, dark footers, packaging, and tiny favicons. If it disappears on dark UI or turns to mush at 32px, it’s unfinished.",
        ],
        bullets: [
          "Test black, white, and single-color versions",
          "Check the mark as an app icon / favicon",
          "Avoid ultra-thin lines that vanish on mobile",
        ],
      },
      {
        heading: "No system around the logo",
        paragraphs: [
          "A logo without spacing rules, type pairing, and color guidance leads to inconsistent marketing. That’s when a brand starts looking accidental.",
          "A proper brand identity package — logo suite, fonts, colors, usage rules — keeps every new page and ad on-brand. That’s the difference between a file and a system.",
        ],
      },
    ],
  },
  {
    slug: "custom-crm-vs-off-the-shelf",
    title: "Custom CRM vs Off-the-Shelf: Which One Fits Your Team?",
    excerpt:
      "Salesforce and HubSpot are powerful — until your team spends half the day fighting the tool. Here’s how to decide if custom CRM development is worth it.",
    description:
      "Compare custom CRM software vs off-the-shelf platforms. Learn when custom CRM development helps sales teams and SMEs grow without tool chaos.",
    category: "CRM",
    tags: ["CRM development", "sales software", "automation"],
    keywords: [
      "custom CRM vs off the shelf",
      "custom CRM development",
      "CRM for small business",
      "sales pipeline software",
      "lead management software",
      "CRM development company",
    ],
    image: "/blog/blog-custom-crm.jpg",
    imageAlt: "Sales CRM pipeline dashboard on a widescreen office monitor",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    readingMinutes: 9,
    featured: false,
    relatedService: { label: "CRM Development", href: "/services/crm" },
    sections: [
      {
        heading: "When off-the-shelf CRM is enough",
        paragraphs: [
          "If your sales process is straightforward — leads in, follow-ups, closed deals — a popular CRM can get you moving fast. You get mobile apps, integrations, and a support ecosystem without building from scratch.",
          "The catch shows up when your workflows are unique: multi-step approvals, industry-specific fields, or reporting that never quite matches how you actually sell.",
        ],
      },
      {
        heading: "Signs you’ve outgrown generic tools",
        paragraphs: [
          "Teams usually feel the pain before leadership does. Spreadsheets appear next to the CRM. People refuse to update fields. Managers don’t trust the dashboards.",
        ],
        bullets: [
          "You’re paying for seats and features nobody uses",
          "Critical steps still happen in WhatsApp or Excel",
          "Reporting needs a developer every month",
          "Onboarding new reps takes weeks because the tool is confusing",
        ],
      },
      {
        heading: "What custom CRM development should include",
        paragraphs: [
          "A custom CRM isn’t about reinventing email. It’s about shaping pipeline stages, permissions, and automation around how your business already works — then making the UI simple enough that people actually use it.",
          "ZEE Sol Tech builds CRM systems with clear lead ownership, follow-up reminders, and reporting your managers can open without a training manual. If that sounds like the gap you’re in, talk to us about scope before you renew another bloated subscription.",
        ],
      },
    ],
  },
  {
    slug: "build-a-saas-mvp-without-wasting-budget",
    title: "How to Build a SaaS MVP Without Burning Your Budget",
    excerpt:
      "Founders don’t fail because they lack ideas — they fail because the first version tries to do everything. Here’s a calmer way to ship a SaaS MVP.",
    description:
      "Practical guide to SaaS MVP development: scope, architecture, and launch priorities so startups build a multi-tenant product without wasting budget.",
    category: "SaaS",
    tags: ["SaaS MVP", "startup product", "product engineering"],
    keywords: [
      "SaaS MVP development",
      "build a SaaS product",
      "SaaS development company",
      "multi tenant SaaS",
      "SaaS startup development",
      "subscription software development",
    ],
    image: "/blog/blog-saas-mvp.jpg",
    imageAlt: "Founders reviewing a SaaS product roadmap with sticky notes and a laptop",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    readingMinutes: 10,
    featured: true,
    relatedService: { label: "SaaS Development", href: "/services/saas-development" },
    sections: [
      {
        heading: "Define the one job your product must nail",
        paragraphs: [
          "Write the sentence: “Our product helps [user] do [job] so they can [outcome].” If you can’t finish that sentence cleanly, you’re not ready to build features — you’re still clarifying the product.",
          "Every “nice to have” you cut from v1 buys you time to improve onboarding, billing, and reliability — the boring stuff that keeps customers.",
        ],
      },
      {
        heading: "Build for tenancy early, not everything else",
        paragraphs: [
          "Multi-tenant thinking (accounts, roles, data separation) is hard to retrofit. Fancy charts can wait. Auth, billing hooks, and a clean data model should not.",
        ],
        bullets: [
          "One core workflow end-to-end",
          "Basic roles (owner / member)",
          "Usage or plan limits you can change later",
          "Analytics enough to see activation",
        ],
      },
      {
        heading: "Partner with builders who’ve shipped products",
        paragraphs: [
          "A marketing site agency and a SaaS engineering partner are different animals. You want people who talk about retention, permissions, and deploy pipelines — not only homepage animations.",
          "If you’re validating a SaaS idea and need a disciplined MVP build, ZEE Sol Tech can help you scope a lean first release that still looks credible to early customers.",
        ],
      },
    ],
  },
  {
    slug: "ui-ux-design-that-actually-converts",
    title: "UI/UX Design That Actually Converts (Not Just Looks Pretty)",
    excerpt:
      "Pretty interfaces don’t pay the bills. Conversion-focused UI/UX clarifies the path, reduces friction, and makes every screen earn its place.",
    description:
      "Learn UI/UX design practices that improve conversions — clearer hierarchy, fewer steps, stronger CTAs — from ZEE Sol Tech’s product design team.",
    category: "UI/UX",
    tags: ["UI UX design", "conversion design", "product design"],
    keywords: [
      "UI UX design that converts",
      "conversion focused web design",
      "UI UX design agency",
      "product design services",
      "user experience design",
      "interface design company",
    ],
    image: "/blog/blog-uiux-converts.jpg",
    imageAlt: "Designer reviewing mobile and desktop interface mockups on a studio screen",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-01",
    readingMinutes: 8,
    featured: false,
    relatedService: { label: "UI/UX Design", href: "/services/ui-ux" },
    sections: [
      {
        heading: "Conversion starts with clarity",
        paragraphs: [
          "Users shouldn’t need a map to find your primary action. If your homepage has five competing buttons, you’ve created a committee — not a funnel.",
          "Good UI/UX design makes the next step obvious: what you offer, who it’s for, and what happens when someone clicks.",
        ],
      },
      {
        heading: "Reduce cognitive load on forms and flows",
        paragraphs: [
          "Long forms with unclear labels kill leads. Break complex intake into steps, show progress, and only ask for what you need to respond well.",
        ],
        bullets: [
          "One primary CTA above the fold",
          "Consistent button language (“Request a quote” beats “Submit”)",
          "Error states that explain how to fix the issue",
          "Mobile-first tap targets and spacing",
        ],
      },
      {
        heading: "Design systems keep conversions consistent",
        paragraphs: [
          "When every landing page invents its own buttons and spacing, trust drops. A lightweight design system — type, color, components — keeps new pages converting like the ones that already work.",
          "We design interfaces for websites, SaaS, CRM, and dashboards with the same principle: beauty is useful only when it helps people finish the job.",
        ],
      },
    ],
  },
  {
    slug: "mobile-app-mvp-checklist-for-founders",
    title: "Mobile App MVP Checklist for Founders Who Want to Ship",
    excerpt:
      "Before you hire developers, run this checklist. It keeps your mobile app MVP focused, fundable, and realistic for iOS and Android.",
    description:
      "A practical mobile app MVP checklist covering scope, platforms, UX, and launch must-haves for founders hiring a mobile app development company.",
    category: "Mobile Apps",
    tags: ["mobile app MVP", "iOS Android", "product launch"],
    keywords: [
      "mobile app MVP checklist",
      "mobile app development company",
      "MVP mobile app",
      "iOS Android app development",
      "cross platform app development",
      "hire mobile app developers",
    ],
    image: "/blog/blog-mobile-mvp.jpg",
    imageAlt: "Hands holding a smartphone with a modern mobile app interface",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    readingMinutes: 9,
    featured: false,
    relatedService: {
      label: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    sections: [
      {
        heading: "Validate the “open daily” habit",
        paragraphs: [
          "Apps compete with everything already installed on someone’s phone. If your idea works as a responsive website for now, start there. Mobile apps win when people need push, offline access, camera, or a habit loop.",
        ],
      },
      {
        heading: "MVP checklist before development",
        paragraphs: [
          "Use this as a conversation guide with any mobile app development partner — including us.",
        ],
        bullets: [
          "One primary user and one primary job",
          "Platform choice: native, cross-platform, or PWA — with reasons",
          "Auth, empty states, and error handling planned",
          "Analytics events defined (install → activation → retention)",
          "App Store / Play listing assets and privacy policy ready",
          "Support path for the first 20 users",
        ],
      },
      {
        heading: "Ship something people can react to",
        paragraphs: [
          "Perfect is late. A clean MVP that solves one painful job will teach you more than a year of feature debates. ZEE Sol Tech helps founders scope lean mobile products that still feel polished enough to share with early customers.",
        ],
      },
    ],
  },
  {
    slug: "business-dashboards-that-drive-decisions",
    title: "Business Dashboards That Drive Decisions (Not Just Charts)",
    excerpt:
      "If your dashboard is full of pretty graphs nobody opens, you don’t have a data problem — you have a design and priorities problem.",
    description:
      "How to build business intelligence dashboards and KPI admin panels that teams actually use — practical dashboard development advice from ZEE Sol Tech.",
    category: "Dashboards",
    tags: ["dashboard development", "KPI", "analytics UI"],
    keywords: [
      "business dashboard development",
      "KPI dashboard software",
      "analytics dashboard design",
      "admin panel development",
      "business intelligence dashboards",
      "data visualization dashboards",
    ],
    image: "/blog/blog-business-dashboards.jpg",
    imageAlt: "Analytics KPI charts displayed on an ultrawide monitor in a modern office",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-15",
    readingMinutes: 7,
    featured: false,
    relatedService: {
      label: "Dashboard Development",
      href: "/services/dashboard-development",
    },
    sections: [
      {
        heading: "Start with the decision, then pick the metric",
        paragraphs: [
          "A useful dashboard answers questions like “Which leads need a call today?” or “Which products are about to stock out?” If a chart doesn’t change a decision this week, it’s decoration.",
        ],
      },
      {
        heading: "Design for scanning, not storytelling novels",
        paragraphs: [
          "Managers glance. They don’t read essays. Put the most important KPIs first, use consistent number formatting, and make filters obvious.",
        ],
        bullets: [
          "Default to the most common time range",
          "Highlight exceptions (red/amber) instead of everything equal",
          "Link from a KPI to the underlying list or record",
          "Keep mobile views honest — fewer charts, clearer numbers",
        ],
      },
      {
        heading: "Connect dashboards to real systems",
        paragraphs: [
          "The best dashboards pull from CRM, ecommerce, or ops tools automatically. Manual CSV uploads die in month two. When we build dashboards at ZEE Sol Tech, we wire them to the systems your team already lives in.",
        ],
      },
    ],
  },
  {
    slug: "when-you-need-custom-software-development",
    title: "When You Actually Need Custom Software Development",
    excerpt:
      "Not every workflow needs a custom build. But when spreadsheets and duct-taped tools start running your company, it’s time for a real system.",
    description:
      "Find out when custom software development is the right move for operations, automation, and internal tools — and when to stick with SaaS.",
    category: "Custom Software",
    tags: ["custom software", "automation", "internal tools"],
    keywords: [
      "custom software development",
      "when to build custom software",
      "business software solutions",
      "workflow automation software",
      "bespoke software development",
      "internal tools development",
    ],
    image: "/blog/blog-custom-software.jpg",
    imageAlt: "Software engineers collaborating around a laptop in a bright office",
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
    readingMinutes: 8,
    featured: false,
    relatedService: {
      label: "Custom Software",
      href: "/services/software-development",
    },
    sections: [
      {
        heading: "The spreadsheet tipping point",
        paragraphs: [
          "Spreadsheets are wonderful until three people edit the same file, formulas break, and nobody knows which version is true. That’s usually when custom software pays for itself — fewer errors, clearer ownership, faster ops.",
        ],
      },
      {
        heading: "Good candidates for a custom build",
        paragraphs: [
          "Custom software shines when your process is a competitive advantage or too specific for generic tools.",
        ],
        bullets: [
          "Industry workflows no SaaS covers well",
          "Heavy integrations between systems you already use",
          "Role-based approvals and audit trails",
          "Customer portals tied to your unique services",
        ],
      },
      {
        heading: "How we scope without overbuilding",
        paragraphs: [
          "We start with the painful workflow, map the users, and ship a focused first version. You shouldn’t fund a “platform” fantasy when a sharp internal tool would unlock the next year of growth.",
          "If you’re comparing rebuild vs keep-patching, book a consult with ZEE Sol Tech and we’ll be honest about whether custom development is the right move.",
        ],
      },
    ],
  },
  {
    slug: "seo-friendly-website-checklist",
    title: "SEO-Friendly Website Checklist for Businesses That Want to Rank",
    excerpt:
      "Ranking isn’t magic. It’s structure, speed, clear pages, and content that matches what buyers actually search. Use this checklist before your next launch.",
    description:
      "SEO-friendly website checklist covering technical basics, on-page structure, and content for businesses that want to rank on Google in 2026.",
    category: "SEO & Web",
    tags: ["SEO", "website checklist", "organic search"],
    keywords: [
      "SEO friendly website checklist",
      "how to rank on Google",
      "SEO website development",
      "on page SEO for business websites",
      "technical SEO checklist",
      "website SEO best practices 2026",
    ],
    image: "/blog/blog-seo-website.jpg",
    imageAlt: "Laptop showing an abstract rising search ranking graph on a clean desk",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingMinutes: 9,
    featured: true,
    relatedService: { label: "Web Development", href: "/services/web-development" },
    sections: [
      {
        heading: "Technical foundations Google expects",
        paragraphs: [
          "You can’t content-market your way out of a slow, broken site. Fix the base layer first.",
        ],
        bullets: [
          "HTTPS, fast Core Web Vitals, mobile-friendly layout",
          "Clean URLs and a working XML sitemap",
          "Canonical tags and unique title/meta per page",
          "Structured data for organization, services, FAQs, articles",
          "No orphan pages — everything linked from navigation or content",
        ],
      },
      {
        heading: "On-page structure that matches search intent",
        paragraphs: [
          "Each important service deserves its own page with a clear H1, supporting H2s, and copy that answers buyer questions. Stuffing keywords into one homepage doesn’t work anymore.",
          "Write like a human who knows the topic. Use the phrases people search, but explain the work in a way a client would trust on a sales call.",
        ],
      },
      {
        heading: "Content that compounds",
        paragraphs: [
          "Blog posts like this one support service pages when they’re specific and useful. Thin AI filler doesn’t help rankings or people.",
          "ZEE Sol Tech builds websites with SEO foundations included — not as an afterthought PDF. If you’re relaunching, bring this checklist to your first meeting.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-website-features-that-actually-sell",
    title: "E-Commerce Website Features That Actually Help You Sell",
    excerpt:
      "Shiny themes don’t fix a confusing checkout. These e-commerce features reduce abandonment and make buying feel easy on mobile and desktop.",
    description:
      "Essential e-commerce website features for higher conversion — product pages, checkout, trust, and performance — from ZEE Sol Tech’s web team.",
    category: "E-Commerce",
    tags: ["ecommerce", "online store", "conversion"],
    keywords: [
      "ecommerce website features",
      "ecommerce website development",
      "online store conversion tips",
      "e-commerce website design",
      "shopify alternative custom ecommerce",
      "mobile ecommerce checkout",
    ],
    image: "/blog/blog-ecommerce-features.jpg",
    imageAlt: "Laptop displaying an online store product grid beside shopping bags",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    readingMinutes: 8,
    featured: false,
    relatedService: { label: "Web Development", href: "/services/web-development" },
    sections: [
      {
        heading: "Product pages that answer objections",
        paragraphs: [
          "Great photos matter. So do shipping expectations, sizing clarity, return policy snippets, and reviews near the buy button. Shoppers abandon when they have to hunt for basic reassurance.",
        ],
      },
      {
        heading: "Checkout without friction",
        paragraphs: [
          "Every extra field is a chance to quit. Guest checkout, clear shipping costs early, and mobile-friendly payment options are table stakes in 2026.",
        ],
        bullets: [
          "Show cart totals and shipping before the last step",
          "Save carts / recover abandoned sessions when possible",
          "Trust badges near payment — not buried in the footer",
          "Fast image loading on category and product grids",
        ],
      },
      {
        heading: "Ops tools behind the storefront",
        paragraphs: [
          "Inventory sync, order alerts, and a simple admin view keep you from drowning after the first sales spike. An e-commerce site isn’t only a theme — it’s a small operations system.",
          "Whether you need a custom storefront or a high-converting business site that sells services, ZEE Sol Tech can design and build the experience around how you actually fulfill orders.",
        ],
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedBlogPosts() {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return getAllBlogPosts().slice(0, limit);
  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 2 : a.tags.some((t) => current.tags.includes(t)) ? 1 : 0;
      const bScore = b.category === current.category ? 2 : b.tags.some((t) => current.tags.includes(t)) ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function formatBlogDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
