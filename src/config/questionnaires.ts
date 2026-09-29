export const industries = [
  "Technology",
  "Healthcare",
  "Real Estate",
  "Finance",
  "E-commerce",
  "Restaurant / Food",
  "Construction",
  "Education",
  "Marketing / Advertising",
  "Professional Services",
  "Other",
] as const;

export const audiences = [
  "Consumer",
  "Student",
  "Business",
  "Professionals",
  "Other",
] as const;

export const websiteFeelings = [
  "Corporate",
  "Trendy",
  "Hi-Tech",
  "Fun & Friendly",
  "Luxury",
  "Minimal",
  "Bold",
  "Creative",
] as const;

export const logoFeelings = [
  "Professional",
  "Corporate",
  "Unique",
  "Modern",
  "Minimal",
  "Luxury",
  "Playful",
  "Vintage",
] as const;

export const websitePages = [
  "Home",
  "About Us",
  "Services",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Contact Us",
  "FAQ",
  "Pricing",
  "Other",
] as const;

export const logoUsages = [
  "Website",
  "Application",
  "Social Media",
  "Merchandising",
  "Print & Stationery",
  "Packaging",
  "Signage",
  "Other",
] as const;

export function toggleValue(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export type WebsiteBrief = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  business: string;
  audience: string[];
  competitors: string;
  colorLike: string;
  colorDislike: string;
  feelings: string[];
  domain: string;
  pages: string[];
  notes: string;
  example: string;
  contentFileName: string;
  logoFileName: string;
  contentFile: File | null;
  logoFile: File | null;
};

export type LogoBrief = {
  name: string;
  email: string;
  phone: string;
  logoName: string;
  slogan: string;
  industry: string;
  business: string;
  feelings: string[];
  audience: string[];
  colorLike: string;
  colorDislike: string;
  uses: string[];
  ideas: string;
  referenceFileName: string;
  referenceFile: File | null;
  message: string;
};

export const emptyWebsiteBrief: WebsiteBrief = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  business: "",
  audience: [],
  competitors: "",
  colorLike: "",
  colorDislike: "",
  feelings: [],
  domain: "",
  pages: [],
  notes: "",
  example: "",
  contentFileName: "",
  logoFileName: "",
  contentFile: null,
  logoFile: null,
};

export const emptyLogoBrief: LogoBrief = {
  name: "",
  email: "",
  phone: "",
  logoName: "",
  slogan: "",
  industry: "",
  business: "",
  feelings: [],
  audience: [],
  colorLike: "",
  colorDislike: "",
  uses: [],
  ideas: "",
  referenceFileName: "",
  referenceFile: null,
  message: "",
};
