import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src="/deck-assets/image2.png"
              alt="OWNR"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Modernizing mortgage-backed securities infrastructure for institutional and retail markets.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                Platform
              </h4>
              <div className="space-y-2.5">
                <Link href="/why-ownr" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Why OWNR
                </Link>
                <Link href="/assets" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Tradeable Assets
                </Link>
                <Link href="/technology" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Technology
                </Link>
                <Link href="/resources" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Resources
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                Solutions
              </h4>
              <div className="space-y-2.5">
                <Link href="/institutions" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  For Institutions
                </Link>
                <Link href="/retail" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  For Retail Investors
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
                Company
              </h4>
              <div className="space-y-2.5">
                <Link href="/team" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Team
                </Link>
                <Link href="/contact" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Contact
                </Link>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-400 hover:text-navy transition-colors duration-300">
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
            CONFIDENTIAL — This website and its contents are for informational
            purposes only and do not constitute an offer to sell or a
            solicitation of an offer to buy any securities. OWNR tokens are not
            registered under the Securities Act of 1933. Past performance is not
            indicative of future results. All investments involve risk.
            *Confidential materials shared at OWNR&apos;s discretion.
          </p>
          <p className="text-xs text-slate-400 mt-4">
            &copy; {new Date().getFullYear()} OWNR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
