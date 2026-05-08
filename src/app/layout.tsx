import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import SiteLayout from "@/components/layout/SiteLayout";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3rd + Taylor | B2B Tech Marketing Agency",
    template: "%s | 3rd + Taylor",
  },
  description:
    "3rd + Taylor is a marketing agency built for B2B tech brands. We help CEOs, marketing leaders, and sales teams drive pipeline, launch products, and win target accounts.",
  keywords: [
    "B2B marketing agency",
    "B2B tech marketing",
    "pipeline growth",
    "ABM",
    "account based marketing",
    "SaaS marketing",
    "go-to-market strategy",
  ],
  metadataBase: new URL("https://3rdandtaylor.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "3rd + Taylor",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body className="antialiased font-body bg-brand-bg-dark text-white">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
