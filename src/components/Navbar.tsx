"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/institutions", label: "Institutions" },
  { href: "/retail", label: "Retail Investors" },
  { href: "/data-room", label: "Data Room" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/deck-assets/image2.png"
            alt="OWNR"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-teal"
                  : "text-navy/70 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className="ml-2 px-5 py-2 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-sm font-medium py-1 ${
                pathname === link.href ? "text-teal" : "text-navy/70"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className="block w-full text-center px-5 py-2.5 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-lg transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
