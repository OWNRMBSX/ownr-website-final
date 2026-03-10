import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Solutions",
  description: "OWNR enables financial institutions to bring mortgage assets onto programmable infrastructure for issuance, distribution, liquidity, and capital efficiency.",
};

export default function Institutions() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge-pill mb-5">Institutional Solutions</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-8 leading-[1.05]">
              The Next Generation of Mortgage Markets
            </h1>
            <div className="space-y-5 text-slate-500 text-lg leading-relaxed max-w-xl">
              <p>
                OWNR enables financial institutions to bring mortgage assets onto programmable infrastructure for issuance, distribution, liquidity, and capital efficiency.
              </p>
              <p>
                Mortgage pools, ETFs, and structured mortgage funds can be represented onchain while preserving their underlying exposure and regulatory structure.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-base inline-block">
                Contact Our Institutional Team
              </Link>
            </div>
          </div>

          {/* Right: Architecture diagram */}
          <div className="hidden lg:flex flex-col items-center gap-0">
            {[
              { label: "Institutions", sub: "Banks, REITs, Asset Managers", color: "bg-slate-50 border-slate-200 text-navy" },
              { label: "OWNR Infrastructure", sub: "Tokenization, Compliance, Settlement", color: "bg-teal/10 border-teal/20 text-navy" },
              { label: "Onchain Markets", sub: "Liquidity, Trading, Distribution", color: "bg-navy border-navy text-white" },
            ].map((step, i, arr) => (
              <div key={step.label} className="w-full max-w-sm animate-on-scroll">
                <div className={`p-6 rounded-xl border ${step.color} text-center`}>
                  <div className="font-bold text-lg mb-1">{step.label}</div>
                  <div className={`text-sm ${step.color.includes("text-white") ? "text-white/60" : "text-slate-500"}`}>{step.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center py-3">
                    <div className="w-px h-6 bg-gradient-to-b from-slate-300 to-teal/50" />
                    <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Ecosystem participants */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              A shared infrastructure for institutional participants
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mortgage markets involve a wide range of institutional actors. OWNR provides a common infrastructure layer that allows each of them to participate in tokenized capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Banks & Mortgage Institutions",
                desc: "Originate and hold mortgage assets, extending exposure into programmable markets.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "REITs & ETF Issuers",
                desc: "Issue tokenized versions of existing mortgage products for expanded distribution.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Liquidity Providers",
                desc: "Provide professional liquidity across tokenized mortgage markets and instruments.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                title: "Institutional Investors",
                desc: "Allocate capital to mortgage exposure through tokenized formats with new capabilities.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
            ].map((card) => (
              <div key={card.title} className="card-hover gradient-border p-7 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="w-12 h-12 mb-5 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Why Move MBS Onchain */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Every Advantage. <span className="text-gradient-teal">Zero Disruption.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              FIX/FpML middleware means OWNR plugs into your existing systems. No rip-and-replace. Just better infrastructure underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                stat: "~12s",
                statSub: "VS T+3 DAYS",
                title: "T+0 Atomic Settlement",
                desc: "Collapse T+1-3 into ~12 seconds. Atomic delivery-versus-payment means settlement and delivery happen simultaneously — no more settlement risk, no more failed trades.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                stat: "60-80%",
                statSub: "CAPITAL SAVINGS",
                title: "Capital Efficiency",
                desc: "Free up billions in trapped capital. Tokenized collateral and instant settlement mean dramatically lower margin requirements, reduced warehouse exposure, and freed balance sheet capacity.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                stat: "0",
                statSub: "COUNTERPARTY RISK",
                title: "Zero Counterparty Risk",
                desc: "Smart contract escrow replaces trust-based settlement. Every trade is transparent, immutable, and automatically compliant — KYC/AML and TRACE reporting enforced at the contract level.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                stat: "24/7",
                statSub: "GLOBAL ACCESS",
                title: "Global Distribution",
                desc: "Tokenization breaks MBS out of the closed dealer network. Institutional and qualified investors worldwide can access your products, deepening your order book.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                stat: "Real-time",
                statSub: "POOL ANALYTICS",
                title: "Onchain Transparency",
                desc: "Real-time loan-level analytics: pool factors, principal balances, CPR, prepayment speeds — all onchain and accessible to every market participant.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                stat: "90%+",
                statSub: "OPS COST REDUCTION",
                title: "Programmable Infrastructure",
                desc: "Smart contracts automate what humans currently do — coupon payments, compliance checks, reporting, and reconciliation. Reduce ops costs by orders of magnitude.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
            ].map((card) => (
              <div key={card.title} className="feature-card animate-on-scroll">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/25 flex items-center justify-center text-teal-light">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-light leading-none">{card.stat}</div>
                    <div className="text-[9px] font-bold tracking-wider text-white/40 mt-0.5">{card.statSub}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Infrastructure principles */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Built for Efficiency
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mortgage markets operate within highly structured regulatory, custody, and operational frameworks. OWNR infrastructure is designed to integrate with these systems rather than replace them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Custody Alignment",
                desc: "Aligns with existing custody and settlement frameworks used by institutional participants.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Asset Mapping",
                desc: "Clear mapping between tokenized representations and underlying mortgage securities.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
              {
                title: "Compliance Controls",
                desc: "Compliance-gated environments built for regulated institutional participation.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              },
              {
                title: "Institutional Scale",
                desc: "Infrastructure capable of supporting institutional-scale liquidity and throughput.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="w-11 h-11 mb-4 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="text-teal font-semibold text-sm hover:underline">
            Request access to the OWNR data room &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 4: For Banks */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-light mb-4">For Banks & Mortgage Institutions</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Bring mortgage assets onto blockchain infrastructure
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <ul className="space-y-3">
                  {[
                    "Mortgage exposure becomes more portable across markets and counterparties",
                    "Ownership and transfer records become transparent and programmable",
                    "Assets can be packaged and distributed through new investor channels",
                    "Balance sheet assets gain new financing and liquidity pathways",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-light shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="text-teal-light font-semibold text-sm hover:underline">
                  Discuss tokenizing mortgage pools &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Tokenization flow */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Mortgage Pool", sub: "Existing CUSIP-level assets" },
                { label: "OWNR Tokenization", sub: "1:1 digital representations" },
                { label: "Programmable Markets", sub: "Trading, liquidity, distribution" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.04] text-center">
                    <div className="font-bold text-white mb-1">{step.label}</div>
                    <div className="text-sm text-white/40">{step.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-5 bg-gradient-to-b from-white/10 to-teal/30" />
                      <svg className="w-3 h-3 text-teal/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: For REITs & ETF Issuers */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="hidden lg:flex flex-col items-center gap-0 order-1 lg:order-none">
              {[
                { label: "Existing ETF", sub: "Traditional fund structure" },
                { label: "Tokenized Version", sub: "Onchain mirror with same exposure" },
                { label: "Global Distribution", sub: "Expanded investor access" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 text-center">
                    <div className="font-bold text-navy mb-1">{step.label}</div>
                    <div className="text-sm text-slate-500">{step.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-5 bg-gradient-to-b from-slate-200 to-teal/40" />
                      <svg className="w-3 h-3 text-teal/50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Copy */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">For REITs & ETF Issuers</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Extend existing products into tokenized markets
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <ul className="space-y-3">
                  {[
                    "Mortgage ETFs can trade in continuous markets with expanded global accessibility",
                    "Fractional ownership lowers minimum investment thresholds",
                    "Yield distributions delivered directly through programmable infrastructure",
                    "Existing funds gain a new digital distribution channel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="text-teal font-semibold text-sm hover:underline">
                  Request access to the OWNR data room &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: For Liquidity Providers */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-light mb-4">For Liquidity Providers & Trading Firms</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Provide liquidity across tokenized mortgage markets
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  Continuous markets create new environments for spread capture, inventory management, and market making around mortgage-linked assets.
                </p>
                <p className="text-white font-medium border-l-2 border-teal pl-4">
                  Professional liquidity is critical to building deep and efficient markets around tokenized financial assets.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="text-teal-light font-semibold text-sm hover:underline">
                  Request access to the OWNR data room &rarr;
                </Link>
              </div>
            </div>

            {/* Right: Trading flow */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Liquidity Provider", sub: "Market makers, trading desks" },
                { label: "Onchain Market", sub: "Continuous 24/7 trading" },
                { label: "Investors", sub: "Institutional and retail participants" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.04] text-center">
                    <div className="font-bold text-white mb-1">{step.label}</div>
                    <div className="text-sm text-white/40">{step.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-5 bg-gradient-to-b from-white/10 to-teal/30" />
                      <svg className="w-3 h-3 text-teal/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: For Institutional Investors */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">For Institutional Investors</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
            A more flexible way to access mortgage exposure
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mx-auto mb-14">
            Pension funds, insurers, endowments, and other institutional allocators already maintain mortgage exposure as part of fixed income portfolios. OWNR enables these institutions to interact with mortgage assets through tokenized formats that introduce new capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Transparency",
                desc: "Onchain ownership records provide real-time visibility into holdings and transfers.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Liquidity",
                desc: "Access continuous markets with programmable settlement and global reach.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              {
                title: "Mobility",
                desc: "Move mortgage exposure across venues, collateral frameworks, and lending markets.",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
              },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/contact" className="text-teal font-semibold text-sm hover:underline">
              Request access to the OWNR data room &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: Programmable capabilities */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Unlocking programmable mortgage markets
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              When mortgage assets exist onchain, they gain capabilities traditional infrastructure cannot support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Instant Settlement", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { label: "Transparent Ownership", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
              { label: "Programmable Compliance", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { label: "Continuous Liquidity", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { label: "Global Distribution", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((cap) => (
              <div key={cap.label} className="p-5 rounded-xl border border-slate-200 bg-white text-center animate-on-scroll">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-navy">{cap.label}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-lg leading-relaxed mt-10 max-w-2xl">
            Mortgage exposure becomes a programmable asset within a broader financial ecosystem.
          </p>
        </div>
      </section>

      {/* FINAL SECTION: CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <Image
          src="/deck-assets/image16.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80 z-[1]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build the next generation of mortgage markets
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are exploring tokenization for mortgage pools, expanding ETF distribution, or evaluating tokenized real-world asset markets, OWNR provides the infrastructure to participate.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
