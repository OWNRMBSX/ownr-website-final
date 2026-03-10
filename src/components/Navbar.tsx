"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import WaitlistModal from "./WaitlistModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-ownr", label: "Why OWNR" },
  { href: "/assets", label: "Tradeable Assets" },
  { href: "/technology", label: "Technology" },
  { href: "/resources", label: "Resources" },
];

const solutionsLinks = [
  { href: "/institutions", label: "For Institutions" },
  { href: "/retail", label: "For Retail Investors" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSolutionsActive = solutionsLinks.some((l) => pathname === l.href);

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

          {/* Solutions dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isSolutionsActive ? "text-teal" : "text-navy/70 hover:text-navy"
              }`}
            >
              Solutions
              <svg className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === link.href
                        ? "text-teal bg-teal/5"
                        : "text-navy/70 hover:text-navy hover:bg-slate-50"
                    }`}
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/team"
            className={`text-sm font-medium transition-colors ${
              pathname === "/team" ? "text-teal" : "text-navy/70 hover:text-navy"
            }`}
          >
            Team
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact" ? "text-teal" : "text-navy/70 hover:text-navy"
            }`}
          >
            Contact
          </Link>

          <WaitlistModal />
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

          <div className="pl-0">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 mt-2">Solutions</p>
            {solutionsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium py-1 pl-3 ${
                  pathname === link.href ? "text-teal" : "text-navy/70"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/team"
            className={`block text-sm font-medium py-1 ${
              pathname === "/team" ? "text-teal" : "text-navy/70"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Team
          </Link>

          <Link
            href="/contact"
            className={`block text-sm font-medium py-1 ${
              pathname === "/contact" ? "text-teal" : "text-navy/70"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <div onClick={() => setMobileOpen(false)}>
            <WaitlistModal />
          </div>
        </div>
      )}
    </nav>
  );
}
