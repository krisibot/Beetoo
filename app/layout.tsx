import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beetoo.app"),
  title: "Stack in a Box — Creator Protection, Complete",
  description:
    "Sign your work. Prove it's yours. Earn royalties. One stack, total ownership. Everything creators need to protect their IP in the AI era.",
  keywords:
    "creator protection, IP protection, blockchain, file signing, royalties, creator tools, on-chain proof, digital ownership",
  authors: [{ name: "Stack in a Box" }],
  creator: "Stack in a Box",
  publisher: "Stack in a Box",
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
    title: "Stack in a Box — Creator Protection, Complete",
    description:
      "Sign your work. Prove it's yours. Earn royalties. One stack, total ownership.",
    siteName: "Stack in a Box",
    images: [
      {
        url: "https://beetoo.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stack in a Box - Creator Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack in a Box — Creator Protection, Complete",
    description:
      "Sign your work. Prove it's yours. Earn royalties. One stack, total ownership.",
    creator: "@stackinabox",
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
