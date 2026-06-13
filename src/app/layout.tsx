import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://academy.genesisconnectstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genesis Academy | Premium Training Platform",
    template: "%s | Genesis Academy",
  },
  description:
    "Genesis Academy is a premium training platform focused on business clarity, positioning, digital structure and concrete growth for entrepreneurs and brands.",
  keywords: [
    "Genesis Academy",
    "premium training",
    "business training",
    "digital strategy course",
    "entrepreneur training",
    "SEO training",
  ],
  openGraph: {
    type: "website",
    siteName: "Genesis Academy",
    url: siteUrl,
    title: "Genesis Academy | Premium Training Platform",
    description:
      "A focused training website designed for premium positioning, structured learning, strong SEO foundations and a high-conversion educational experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Academy | Premium Training Platform",
    description:
      "Premium training for entrepreneurs, founders and ambitious brands seeking clarity, structure and digital performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
