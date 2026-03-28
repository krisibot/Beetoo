import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beetoo.app"),
  title: "BEETOO — Brand Manager in a Box",
  description:
    "Cryptographic proof of ownership. AI-powered brand management. Zero setup. Your assets, your proof, your rules.",
  keywords:
    "digital asset management, IP protection, blockchain, creative tools, brand management, on-chain",
  authors: [{ name: "BEETOO" }],
  creator: "BEETOO",
  publisher: "BEETOO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beetoo.app",
    title: "BEETOO — Brand Manager in a Box",
    description:
      "Cryptographic proof of ownership. AI-powered brand management. Zero setup.",
    siteName: "BEETOO",
    images: [
      {
        url: "https://beetoo.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "BEETOO - Brand Manager in a Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEETOO — Brand Manager in a Box",
    description:
      "Cryptographic proof of ownership. AI-powered brand management.",
    creator: "@beetoo_official",
    images: ["https://beetoo.app/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://beetoo.app" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐝</text></svg>"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
