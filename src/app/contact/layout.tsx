import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the OWNR team. We welcome inquiries from institutions, partners, and investors.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
