import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "OWNR | Where Ownership Meets Opportunity",
    template: "%s | OWNR",
  },
  description:
    "OWNR is the application layer for tokenized markets — starting with the $15T mortgage-backed securities market. Institutional infrastructure meets retail access.",
  metadataBase: new URL("https://ownr.finance"),
  openGraph: {
    title: "OWNR | Where Ownership Meets Opportunity",
    description:
      "Tokenized mortgage-backed securities infrastructure for institutional and retail markets.",
    url: "https://ownr.finance",
    siteName: "OWNR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWNR | Where Ownership Meets Opportunity",
    description:
      "Tokenized mortgage-backed securities infrastructure for institutional and retail markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ownr.finance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
