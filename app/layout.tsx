import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAB University Christian Academy",
  description:
    "Christ-centered K–12 private academy in Charlotte, NC uniting academic excellence with elite basketball development."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}

