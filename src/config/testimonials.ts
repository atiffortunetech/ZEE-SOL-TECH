export type Testimonial = {
  id: string;
  name: string;
  company: string;
  position: string;
  quote: string;
  projectType: string;
  avatarInitials: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    company: "Northline Commerce",
    position: "Founder",
    quote:
      "ZEE Sol Tech rebuilt our website and brand presence with clarity. Traffic quality improved, and the new site finally feels like a real growth channel.",
    projectType: "Website Development",
    avatarInitials: "SM",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
  },
  {
    id: "t2",
    name: "Daniel Okoro",
    company: "PulseOps",
    position: "COO",
    quote:
      "They mapped our messy workflows into a custom CRM that the sales team actually uses. Pipeline visibility went from guesswork to daily control.",
    projectType: "CRM Development",
    avatarInitials: "DO",
    avatar: "/avatars/avatar-2.jpg",
    rating: 5,
  },
  {
    id: "t3",
    name: "Amina Rahman",
    company: "Lumen Studio",
    position: "Creative Director",
    quote:
      "The identity system was sharp and usable. Guidelines were clear enough for our designers and agency partners to stay consistent everywhere.",
    projectType: "Brand Identity",
    avatarInitials: "AR",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
  },
  {
    id: "t4",
    name: "Marcus Chen",
    company: "Stackbridge",
    position: "Product Lead",
    quote:
      "From MVP scope to launch, their SaaS build was structured and calm. Auth, billing hooks, and admin tools landed without endless rework.",
    projectType: "SaaS Development",
    avatarInitials: "MC",
    avatar: "/avatars/avatar-4.jpg",
    rating: 5,
  },
  {
    id: "t5",
    name: "Elena Vargas",
    company: "Harbor Retail",
    position: "Marketing Manager",
    quote:
      "Communication stayed clear, timelines stayed honest, and the UI looked premium. Our storefront conversion improved within the first month.",
    projectType: "E-commerce",
    avatarInitials: "EV",
    avatar: "/avatars/avatar-5.jpg",
    rating: 5,
  },
  {
    id: "t6",
    name: "James Porter",
    company: "FieldSync",
    position: "CEO",
    quote:
      "We needed a mobile app our field teams would trust. ZEE Sol Tech delivered polished UX, reliable sync, and a backend that scales with us.",
    projectType: "Mobile App",
    avatarInitials: "JP",
    avatar: "/avatars/avatar-6.jpg",
    rating: 5,
  },
  {
    id: "t7",
    name: "Priya Nair",
    company: "Atlas Finance",
    position: "Head of Operations",
    quote:
      "Their dashboard work turned scattered reports into one decision surface. Leadership finally sees KPIs without chasing five spreadsheets.",
    projectType: "Dashboard Development",
    avatarInitials: "PN",
    avatar: "/avatars/avatar-7.jpg",
    rating: 5,
  },
  {
    id: "t8",
    name: "Noah Barrett",
    company: "Brightpath Agency",
    position: "Managing Partner",
    quote:
      "As an agency partner, we care about craft and reliability. ZEE Sol Tech delivered both — strong design systems and clean engineering handoff.",
    projectType: "UI/UX Design",
    avatarInitials: "NB",
    avatar: "/avatars/avatar-8.jpg",
    rating: 5,
  },
];
