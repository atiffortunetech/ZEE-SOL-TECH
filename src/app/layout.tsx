import type { Metadata } from "next";
import Script from "next/script";
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

const GTM_ID = "GTM-MM2MSBLN";

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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
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
