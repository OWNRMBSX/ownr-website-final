import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Research and insights on mortgage markets, tokenization infrastructure, and the evolving architecture of capital markets.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
