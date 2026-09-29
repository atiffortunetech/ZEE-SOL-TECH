export type PricingPackage = {
  id: string;
  name: string;
  idealFor?: string;
  /** Display price, e.g. "$299" or "$399/mo" */
  startingPrice: string;
  currency: string;
  billingType: "one-time" | "monthly" | "project" | "custom";
  billingNote?: string;
  popular?: boolean;
  deliveryTime?: string;
  supportPeriod?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  skipGuarantees?: boolean;
};

export type PricingGroup = {
  id: string;
  title: string;
  subtitle: string;
  packages: PricingPackage[];
};

const guarantees = [
  "100% satisfaction guarantee",
  "100% unique design guarantee",
  "100% ownership rights",
];

function withGuarantees(features: string[], skip = false) {
  return skip ? features : [...features, ...guarantees];
}

function pkg(
  group: string,
  id: string,
  name: string,
  price: string,
  features: string[],
  opts: Partial<PricingPackage> & { skipGuarantees?: boolean } = {},
): PricingPackage {
  const { skipGuarantees, ...rest } = opts;
  const monthly = price.includes("/mo");
  return {
    id,
    name,
    startingPrice: price,
    currency: "USD",
    billingType: monthly ? "monthly" : "one-time",
    billingNote: monthly ? "Monthly program" : "One-time engagement",
    features: withGuarantees(features, skipGuarantees),
    cta: "Get started",
    ctaHref: `/contact?package=${id}&type=${encodeURIComponent(group)}`,
    ...rest,
  };
}

/**
 * Packages catalog for ZEE Sol Tech
 * Every practice / every package.
 */
export const pricingGroups: PricingGroup[] = [
  {
    id: "logo",
    title: "Logo Design",
    subtitle:
      "From first marks to full visual systems — built for brands that need to be remembered.",
    packages: [
      pkg("Logo Design", "essential-identity", "Essential Identity", "$199", [
        "For emerging brands seeking a strong foundation",
        "2 initial logo concepts",
        "Refined primary mark",
        "Standard file formats (PNG, JPEG, SVG)",
        "Basic brand direction",
        "48-hour initial turnaround",
      ]),
      pkg(
        "Logo Design",
        "signature-identity",
        "Signature Identity",
        "$299",
        [
          "For brands ready to establish a stronger presence",
          "3 custom logo concepts",
          "Strategic design direction",
          "Advanced file formats (AI, EPS, SVG, PNG, JPEG)",
          "Typography and color system",
          "Multiple revisions",
          "Brand consistency guide",
        ],
        { popular: true },
      ),
      pkg("Logo Design", "elite-identity", "Elite Identity", "$399", [
        "For brands demanding a complete visual identity",
        "5–6 premium logo concepts",
        "Full brand identity system",
        "Stationery and digital branding assets",
        "Social media identity kit",
        "Advanced mockups and presentation",
        "Unlimited refinements within scope",
        "Full commercial ownership rights",
      ]),
      pkg("Logo Design", "luxury-identity", "Luxury Identity", "$999", [
        "For high-end brands requiring exclusivity",
        "Fully custom creative direction",
        "Handcrafted logo and symbol development",
        "Deep strategic brand positioning",
        "Complete visual ecosystem design",
        "Premium presentation and storytelling deck",
        "Priority delivery and dedicated design lead",
      ]),
    ],
  },
  {
    id: "web",
    title: "Website Design",
    subtitle:
      "Custom sites from launch pages to enterprise portals — mobile-first, conversion-ready, and built to perform.",
    packages: [
      pkg("Website Design", "foundation-experience", "Foundation Experience", "$799", [
        "Custom-designed 5-page website",
        "Clean, modern UI/UX design",
        "Mobile-first responsive development",
        "Basic SEO structure setup",
        "Contact form integration",
        "Performance optimization",
        "Standard CMS setup (if required)",
        "2 revision cycles",
        "Best for startups, personal brands, and small businesses",
      ]),
      pkg(
        "Website Design",
        "signature-experience",
        "Signature Experience",
        "$2,599",
        [
          "Fully custom website design (8–12 pages)",
          "Advanced UI/UX design system",
          "Conversion-focused page structure",
          "CMS integration",
          "On-page SEO foundation",
          "Speed optimization and technical refinement",
          "Basic animations and interactions",
          "Blog or content system setup",
          "Multiple revision phases",
        ],
        { popular: true },
      ),
      pkg(
        "Website Design",
        "elite-digital-experience",
        "Elite Digital Experience",
        "$4,499",
        [
          "Fully bespoke website architecture",
          "High-end UI/UX system design",
          "Strategic conversion-driven layout planning",
          "Advanced development and custom features",
          "E-commerce or booking integration",
          "Advanced SEO-ready technical structure",
          "Premium animations and micro-interactions",
          "API integrations and automation support",
          "Priority support and dedicated design lead",
        ],
      ),
      pkg(
        "Website Design",
        "bespoke-signature-build",
        "Bespoke Signature Build",
        "$4,499",
        [
          "Fully custom digital product",
          "Strategic brand-aligned UX architecture",
          "Complex web application or platform development",
          "Advanced CRM, automation, and API integrations",
          "High-performance engineering and scalability",
          "Multi-layer conversion optimization",
          "Premium motion design and storytelling",
          "Dedicated creative direction",
          "White-glove collaboration experience",
        ],
      ),
      pkg(
        "Website Design",
        "organizational-experience",
        "Organizational Experience",
        "$8,999",
        [
          "Custom portal (LMS, job portal, social network, restaurant platform, etc.)",
          "Unlimited pages",
          "Up to 2,000 products",
          "Dynamic UI/UX",
          "Advanced dashboards",
          "API integration",
          "24 months maintenance",
          "Scalable architecture",
          "Enterprise-level development",
        ],
      ),
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle:
      "Online stores with catalog, cart, checkout, and the operations your team can run day to day.",
    packages: [
      pkg("E-Commerce", "ecommerce-basic", "E-Commerce Basic", "$3,183", [
        "5 unique pages design",
        "Up to 25 products",
        "Mini shopping cart integration",
        "Payment module integration",
        "Complete W3C certified build",
        "5 stock photos included",
        "Google-friendly sitemap",
        "Dedicated designer and developer",
        "100% money-back guarantee",
      ]),
      pkg(
        "E-Commerce",
        "ecommerce-professional",
        "E-Commerce Professional",
        "$5,183",
        [
          "10-page website",
          "Up to 50 products",
          "Customer login area",
          "Full shopping cart integration",
          "Payment module integration",
          "Easy product search",
          "Product reviews",
          "Complete W3C certified build",
          "Basic logo design — 2 concepts",
          "1 dedicated logo designer",
          "Unlimited revisions",
        ],
        { popular: true },
      ),
      pkg("E-Commerce", "ecommerce-elite", "E-Commerce Elite", "$11,750", [
        "25 pages",
        "Unlimited logo design concepts by 6 award-winning designers",
        "Icon design and unlimited revisions",
        "E-commerce store and product detail page design",
        "Unique banner slider and featured products showcase",
        "Full shopping cart — unlimited products and categories",
        "Product rating, reviews, and search",
        "Customer login area",
        "Optional booking, payment, multilingual, and custom forms",
        "Mobile responsive with social plugins",
        "Print media: stationery, brochure, catalog, apparel design",
        "Dedicated account manager and all final file formats",
      ]),
      pkg(
        "E-Commerce",
        "ecommerce-super-elite",
        "E-Commerce Super Elite",
        "$18,417",
        [
          "Extensive admin panel — up to 50 pages",
          "Unique, interactive, high-end UI design",
          "Unlimited banners, hover effects, and stock images",
          "User signup and client dashboard area",
          "Custom coding and complete database creation",
          "Optional booking, payment, multilingual, and cart modules",
          "Web traffic analytics and 3rd-party API integrations",
          "Search bar and optional social network feeds",
          "Search engine submission and module-wise architecture",
          "Award-winning team, complete deployment, 1 year hosting",
          "Dedicated project manager — no monthly or hidden fees",
        ],
      ),
    ],
  },
  {
    id: "cms",
    title: "CMS Websites",
    subtitle:
      "Content-managed sites you can update yourself — without sacrificing design quality.",
    packages: [
      pkg("CMS Websites", "cms-basic", "CMS Basic", "$255", [
        "3 pages design",
        "Contact form",
        "Social media integration",
        "Free control panel access",
        "Free FTP access",
        "Manage your own content",
        "3 email accounts included",
      ]),
      pkg("CMS Websites", "cms-professional", "CMS Professional", "$855", [
        "5 pages design",
        "Contact form and social media integration",
        "Text editor module",
        "Photo gallery module",
        "Google Map module",
        "Free control panel and FTP access",
        "Manage your own content",
        "5 email accounts included",
      ]),
      pkg(
        "CMS Websites",
        "cms-premium",
        "CMS Premium",
        "$1,155",
        [
          "8 pages design",
          "Visual composer, gallery, map, and sitemap modules",
          "Free control panel, FTP, and 10 email accounts",
          "1 double-sided brochure (A4) or trifold",
          "5 promotional banners",
          "Free stationery set (letterhead, envelope, business card)",
          "15 stock photos and search engine submission",
          "Google-friendly sitemap",
          "Dedicated designers, developers, and brand experts",
        ],
        { popular: true },
      ),
      pkg(
        "CMS Websites",
        "corporate-web-package",
        "Corporate Web Package",
        "$11,658",
        [
          "Unlimited logo concepts, animated logo, email signature, and icon",
          "Print: stationery, 8-page executive brochure, door hanger",
          "20-page interactive website with custom development",
          "CMS or e-commerce ready",
          "8 stock photos and flash banner",
          "Desktop and mobile compatibility",
          "Free 24-month hosting and domain registration",
          "Complete deployment",
          "Social: Facebook cover, welcome tab, Twitter background, YouTube theme",
        ],
      ),
    ],
  },
  {
    id: "animation",
    title: "Animation",
    subtitle:
      "Explainer and brand videos with script, storyboard, voice-over, and polished delivery.",
    packages: [
      pkg("Animation", "video-teaser", "Video Teaser", "$199", [
        "15-second video — HD 1080",
        "Professional script and storyboard",
        "Animation with voice-over and sound effects",
        "Custom artwork and background music",
        "Sample theme included",
        "2 weeks delivery",
        "Unlimited storyboard revisions",
        "Dedicated support",
      ]),
      pkg("Animation", "video-startup", "Video Startup", "$299", [
        "30-second video",
        "Professional script and storyboard",
        "Animation with voice-over and sound effects",
        "4 weeks delivery",
        "Unlimited revisions",
      ]),
      pkg(
        "Animation",
        "video-classic",
        "Video Classic",
        "$699",
        [
          "60-second video",
          "Professional script and sample theme",
          "Storyboard and animation",
          "Voice-over and sound effects",
          "5 weeks delivery",
        ],
        { popular: true },
      ),
      pkg("Animation", "video-premium", "Video Premium", "$1,190", [
        "90-second video",
        "Professional script and sample theme",
        "Storyboard and animation",
        "Voice-over and sound effects",
        "6 weeks delivery",
      ]),
    ],
  },
  {
    id: "print",
    title: "Print Design",
    subtitle:
      "Stationery, flyers, brochures, and print-ready files — design and production in one place.",
    packages: [
      pkg("Print Design", "print-basic", "Print Basic", "$249", [
        "Print media design",
        "Stationery design (business card, letterhead, envelope)",
        "Flyer design or postcard (one)",
        "Printing service included",
        "500 business card prints OR 250 flyer prints",
      ]),
      pkg("Print Design", "print-plus", "Print Plus", "$499", [
        "Print media design",
        "Stationery design (business card, letterhead, envelope)",
        "Flyer, postcard, or menu card (one)",
        "Printing service included",
        "500 business cards, 500 letterheads, 500 envelopes, 100 flyers",
      ]),
      pkg(
        "Print Design",
        "print-classic",
        "Print Classic",
        "$1,299",
        [
          "Print media and full stationery design",
          "Flyer, postcard, or menu card (one)",
          "Brochure or product packaging design (one)",
          "Apparel design (T-shirt, cap, or bumper sticker)",
          "Printing service included",
          "1,000 prints each — cards, letterheads, envelopes",
          "250 flyer, brochure, or menu prints",
          "50 T-shirt prints",
        ],
        { popular: true },
      ),
    ],
  },
  {
    id: "seo",
    title: "SEO",
    subtitle:
      "Monthly search programs from technical setup to full-scale visibility and authority building.",
    packages: [
      pkg(
        "SEO",
        "foundation-growth",
        "Foundation Growth",
        "$399/mo",
        [
          "For new websites building initial visibility",
          "Basic technical SEO setup",
          "Core keyword research",
          "On-page optimization (key pages)",
          "Google Search Console setup",
          "Basic reporting dashboard",
          "Initial website audit",
        ],
        { billingNote: "Monthly + setup fee", skipGuarantees: true },
      ),
      pkg(
        "SEO",
        "growth-strategy",
        "Growth Strategy",
        "$599/mo",
        [
          "For businesses aiming for consistent ranking improvements",
          "Advanced keyword strategy",
          "Full on-page SEO optimization",
          "Technical SEO improvements",
          "Content optimization (blogs and pages)",
          "Local SEO setup (if applicable)",
          "Monthly performance reporting",
          "Competitor tracking",
        ],
        {
          billingNote: "Monthly + setup fee",
          popular: true,
          skipGuarantees: true,
        },
      ),
      pkg(
        "SEO",
        "authority-builder",
        "Authority Builder",
        "$999/mo",
        [
          "For brands targeting competitive visibility and stronger rankings",
          "Full SEO strategy development",
          "Advanced technical SEO fixes",
          "High-intent keyword targeting",
          "Content strategy and optimization plan",
          "Authority backlink building",
          "Local and national SEO optimization",
          "Conversion-focused SEO enhancements",
          "Detailed analytics reporting",
        ],
        { billingNote: "Monthly + setup fee", skipGuarantees: true },
      ),
      pkg(
        "SEO",
        "market-domination",
        "Market Domination",
        "$1,499/mo",
        [
          "For brands competing in high-value or saturated markets",
          "Full-scale SEO ecosystem management",
          "Advanced technical and structural optimization",
          "Aggressive authority link-building strategy",
          "Content cluster planning and execution",
          "Multi-location SEO (if required)",
          "Competitor suppression strategy",
          "Priority optimization and consulting access",
          "Enterprise-level reporting and insights",
        ],
        { billingNote: "Monthly + setup fee", skipGuarantees: true },
      ),
    ],
  },
  {
    id: "smm",
    title: "Social Media",
    subtitle:
      "Channel setup, content calendars, posting, and reporting — managed like a growth program.",
    packages: [
      pkg(
        "Social Media",
        "startup-plan",
        "Startup Plan",
        "$999/mo",
        [
          "3 social channels (Facebook, Twitter, Instagram, or Pinterest)",
          "Account setup and configuration",
          "2 posts per week",
          "Custom editorial calendar",
          "CTA integration",
          "End-of-term performance report",
          "Dedicated account manager",
          "Paid ads budget allocation",
          "Hashtag strategy and engagement optimization",
        ],
        { billingNote: "Monthly program", skipGuarantees: true },
      ),
      pkg(
        "Social Media",
        "growth-plan",
        "Growth Plan",
        "$1,400/mo",
        [
          "Same 3 social channels",
          "3 posts per week",
          "Full account audit and optimization",
          "Facebook Pixel integration",
          "CTA integration and performance reporting",
          "Paid ads budget allocation",
          "Hashtag optimization and targeting refinement",
        ],
        {
          billingNote: "Monthly program",
          popular: true,
          skipGuarantees: true,
        },
      ),
      pkg(
        "Social Media",
        "premium-plan",
        "Premium Plan",
        "$2,400/mo",
        [
          "4 social channels",
          "3 posts per week + 1 GIF per week per platform",
          "Full account setup and audit",
          "CTA integration",
          "End-of-term performance report",
          "Ads budget allocation",
          "Facebook and Instagram Shop creation",
          "Dedicated account manager",
        ],
        { billingNote: "Monthly program", skipGuarantees: true },
      ),
    ],
  },
  {
    id: "apps",
    title: "Applications",
    subtitle:
      "Custom web apps, portals, and digital products — scoped for scale and long-term use.",
    packages: [
      pkg("Applications", "app-foundation", "App Foundation", "$799", [
        "Custom 5-screen application foundation",
        "Clean UI/UX aligned to your brand",
        "Mobile-first responsive interface",
        "Basic API or backend integration",
        "Contact and onboarding flows",
        "2 revision cycles",
      ]),
      pkg(
        "Applications",
        "app-signature",
        "App Signature",
        "$2,599",
        [
          "Custom app design (8–12 screens)",
          "Advanced UI/UX design system",
          "Conversion-focused user flows",
          "CMS or content backend integration",
          "Basic animations and interactions",
          "Multiple revision phases",
        ],
        { popular: true },
      ),
      pkg("Applications", "app-bespoke", "App Bespoke Build", "$4,499", [
        "Fully custom digital product",
        "Strategic brand-aligned UX architecture",
        "Complex application or platform development",
        "Advanced CRM, automation, and API integrations",
        "High-performance engineering and scalability",
        "Dedicated creative direction",
      ]),
      pkg(
        "Applications",
        "app-organizational",
        "App Organizational",
        "$8,999",
        [
          "Custom portal or platform (LMS, job portal, social network, etc.)",
          "Unlimited screens within scope",
          "Advanced dashboards and user roles",
          "API integration and 24 months maintenance",
          "Scalable enterprise-level development",
        ],
      ),
    ],
  },
  {
    id: "combo",
    title: "Corporate Combo",
    subtitle:
      "Identity, print, web, and social assets in one coordinated engagement.",
    packages: [
      pkg(
        "Corporate Combo",
        "corporate-combo",
        "Corporate Combo Package",
        "$11,658",
        [
          "Unlimited logo concepts with animated logo, email signature, and icon",
          "Full print stationery and 8-page executive brochure",
          "20-page interactive website with CMS or e-commerce",
          "8 stock photos, flash banner, desktop and mobile build",
          "24-month hosting and domain registration",
          "Facebook, Twitter, and YouTube social theme package",
          "Complete deployment with dedicated team",
        ],
        { popular: true },
      ),
    ],
  },
];

export function getPricingGroup(id: string) {
  return pricingGroups.find((group) => group.id === id);
}
