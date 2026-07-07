import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

  const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
  });

  const montserratAlternates = Montserrat_Alternates({
    variable: "--font-montserrat-alternates",
    weight: ["900"],
    subsets: ["latin"],
  });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tcmedia.org"),
  title: {
    default: "TC Media",
    template: "%s | TC Media",
  },
  description: "TC Media website for classes, events, services, facilities, and volunteer opportunities.",
  applicationName: "TC Media",
  keywords: [
    "TC Media",
    "media classes",
    "events",
    "facilities",
    "services",
    "volunteer",
  ],
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "TC Media",
    title: "TC Media",
    description: "TC Media website for classes, events, services, facilities, and volunteer opportunities.",
    url: "https://tcmedia.ca",
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Media",
    description: "TC Media website for classes, events, services, facilities, and volunteer opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} ${montserratAlternates.variable} antialiased`}
    >
      <body className="flex flex-col gradient-background">
        <Header />
        {children}
      </body>
    </html>
  );
}
