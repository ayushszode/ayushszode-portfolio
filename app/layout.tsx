import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayushszode.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ayush Sanjay Zode | Data Analyst & Business Intelligence",
    template: "%s | Ayush Sanjay Zode",
  },
  description: "Portfolio of Ayush Sanjay Zode — Data Analyst focused on business intelligence, Power BI, SQL, Python and predictive analytics.",
  keywords: ["Ayush Sanjay Zode", "Data Analyst", "Business Intelligence", "Power BI", "SQL", "Python", "Liverpool", "UK"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ayush Sanjay Zode | Data Analyst & Business Intelligence",
    description: "Turning complex data into actionable business insights through analytics, dashboards and predictive modelling.",
    url: baseUrl,
    siteName: "Ayush Sanjay Zode Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
