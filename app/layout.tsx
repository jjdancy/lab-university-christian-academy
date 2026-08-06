import type { Metadata } from "next";
import {Analytics} from "@vercel/analytics/next";
import "./globals.css";
import PageAnimation from "@/components/PageAnimation";
import HiringPromoModal from "@/components/HiringPromoModal";
import {ScheduleTourModalProvider} from "@/components/ScheduleTourModalProvider";

export const metadata: Metadata = {
  title: "LAB University Christian Academy",
  description:
    "Christ-centered K–12 private academy in Charlotte, NC—academic excellence, optional elite basketball, and college prep for scholars, leaders, and athletes."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <ScheduleTourModalProvider>
          <PageAnimation>{children}</PageAnimation>
          <HiringPromoModal />
        </ScheduleTourModalProvider>
        <Analytics />
      </body>
    </html>
  );
}

