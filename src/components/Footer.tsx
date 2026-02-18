import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/deck-assets/image5.png"
              alt="OWNR"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              The application layer for tokenized markets — starting with the
              $12 trillion mortgage-backed securities market. Where Ownership
              Meets Opportunity.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-teal-light mb-4 uppercase tracking-wider">
              Platform
            </h4>
            <div className="space-y-2.5">
              <Link href="/institutions" className="block text-sm text-white/60 hover:text-white transition-colors">
                Institutions
              </Link>
              <Link href="/retail" className="block text-sm text-white/60 hover:text-white transition-colors">
                Retail Investors
              </Link>
              <Link href="/data-room" className="block text-sm text-white/60 hover:text-white transition-colors">
                Data Room
              </Link>
              <Link href="/waitlist" className="block text-sm text-white/60 hover:text-white transition-colors">
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-teal-light mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/60 hover:text-white transition-colors">
                Twitter / X
              </a>
              <a href="mailto:info@ownr.com" className="block text-sm text-white/60 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            CONFIDENTIAL — This website and its contents are for informational
            purposes only and do not constitute an offer to sell or a
            solicitation of an offer to buy any securities. OWNR tokens are not
            registered under the Securities Act of 1933. Past performance is not
            indicative of future results. All investments involve risk.
            *Confidential materials shared at OWNR&apos;s discretion.
          </p>
          <p className="text-xs text-white/40 mt-4">
            &copy; {new Date().getFullYear()} OWNR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
