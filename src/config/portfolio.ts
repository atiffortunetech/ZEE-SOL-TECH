import portfolioData from "./portfolio-data.json";

export type PortfolioTabId =
  | "all"
  | "brand"
  | "website"
  | "app"
  | "banner"
  | "seo"
  | "logo";

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<PortfolioTabId, "all">;
  categoryLabel: string;
  image: string;
  tile: "light" | "dark" | "accent" | "media";
};

export const portfolioTabs: { id: PortfolioTabId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "brand", label: "Brand Design" },
  { id: "website", label: "Website Design" },
  { id: "app", label: "Mobile App Design" },
  { id: "banner", label: "Banner Design" },
  { id: "seo", label: "SEO/SMO" },
  { id: "logo", label: "Logo Design" },
];

export const portfolioItems = portfolioData as PortfolioItem[];

/** Featured / case-study style entries for deep pages */
export type PortfolioCategory =
  | "All"
  | "Websites"
  | "Branding"
  | "Logos"
  | "Apps"
  | "UI/UX"
  | "Illustration";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  summary: string;
  challenge: string;
  solution: string;
  objectives: string[];
  research: string;
  designProcess: string;
  development: string;
  features: string[];
  technologies: string[];
  results: string;
  image: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  placeholder?: boolean;
  accent: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Websites",
  "Branding",
  "Logos",
  "Apps",
  "UI/UX",
  "Illustration",
];

const categoryMap: Record<
  Exclude<PortfolioTabId, "all">,
  Exclude<PortfolioCategory, "All">
> = {
  brand: "Branding",
  website: "Websites",
  app: "Apps",
  banner: "Illustration",
  seo: "UI/UX",
  logo: "Logos",
};

/** Case-study pages built from gallery items (lightweight). */
export const portfolioProjects: PortfolioProject[] = portfolioItems.map(
  (item) => ({
    slug: item.slug,
    title: item.title,
    category: categoryMap[item.category],
    summary: `${item.categoryLabel} work from the ZEE Sol Tech portfolio.`,
    challenge: `Create a standout ${item.categoryLabel.toLowerCase()} piece that feels premium and on-brand.`,
    solution:
      "Crafted a polished presentation-ready deliverable with clear visual hierarchy and commercial versatility.",
    objectives: [
      "Deliver distinctive creative",
      "Support brand goals",
      "Present work cleanly",
    ],
    research: "Reviewed brand context, audience cues, and competitive visuals.",
    designProcess: "Concept exploration, refinement, and final presentation.",
    development: "Production-ready assets prepared for digital and client use.",
    features: [item.categoryLabel, "Portfolio presentation", "Client-ready asset"],
    technologies: [item.categoryLabel, "Creative Design"],
    results: "Completed and added to the ZEE Sol Tech work wall.",
    image: item.image,
    accent: "#2563eb",
  }),
);

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getItemsByTab(tab: PortfolioTabId) {
  if (tab === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === tab);
}
