import type { Metadata } from "next";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LeadCaptureModal } from "@/components/layout/LeadCaptureModal";
import { Testimonials } from "@/components/sections/Testimonials";
import { GlobalInquirySection } from "@/components/sections/GlobalInquirySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata, pageKeywords } from "@/config/seo";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  keywords: pageKeywords.home,
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="font-body relative flex min-h-full flex-col bg-background text-foreground">
        <JsonLd />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          {children}
          <Testimonials />
        </main>
        <GlobalInquirySection />
        <Footer />
        <WhatsAppButton />
        <LeadCaptureModal />
      </body>
    </html>
  );
}
