import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Sanjay Zode | Data Analyst",
  description: "Data Analyst portfolio: Power BI, SQL, Python, Excel, business intelligence, financial analytics, forecasting and applied analytics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
