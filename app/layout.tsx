import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://spaceai.design"
  ),
  title: {
    default: "SpaceAI — AI + AR Interior Design Platform",
    template: "%s | SpaceAI",
  },
  description:
    "Design your dream space with AI & AR. Upload a photo, get AI-generated designs, and preview them in augmented reality instantly.",
  keywords: [
    "interior design",
    "AI design",
    "AR preview",
    "room design",
    "home decor",
    "3D furniture",
    "SpaceAI",
  ],
  authors: [{ name: "SpaceAI" }],
  creator: "SpaceAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spaceai.design",
    siteName: "SpaceAI",
    title: "SpaceAI — AI + AR Interior Design Platform",
    description:
      "Design your dream space with AI & AR. Upload a photo, get AI-generated designs, and preview them in augmented reality instantly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpaceAI — AI + AR Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceAI — AI + AR Interior Design Platform",
    description:
      "Design your dream space with AI & AR. Upload a photo, get AI-generated designs, and preview them in augmented reality instantly.",
    images: ["/og-image.png"],
    creator: "@spaceai",
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  );
}
