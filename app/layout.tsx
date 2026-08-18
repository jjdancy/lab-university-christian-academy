import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/next";
import "./globals.css";
import PageAnimation from "@/components/PageAnimation";
import HiringPromoModal from "@/components/HiringPromoModal";
import {ScheduleTourModalProvider} from "@/components/ScheduleTourModalProvider";

const SITE_URL = "https://labuniversityprep.com";
const SITE_NAME = "LAB University Christian Academy";
const SITE_DESCRIPTION =
  "Christ-centered K–12 private academy in Charlotte, NC—academic excellence, optional elite basketball, and college prep for scholars, leaders, and athletes.";
const DEFAULT_OG_IMAGE = "/images/all%20teams.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Christ-Centered K–12 Academy in Charlotte, NC`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  }
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "LAB U",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: SITE_DESCRIPTION,
  telephone: "+1-704-315-1035",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8016 Tower Point Dr",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28227",
    addressCountry: "US"
  },
  sameAs: []
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
        <ScheduleTourModalProvider>
          <PageAnimation>{children}</PageAnimation>
          <HiringPromoModal />
        </ScheduleTourModalProvider>
        <Analytics />
      </body>
    </html>
  );
}

