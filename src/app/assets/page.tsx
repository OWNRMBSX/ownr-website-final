import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tradeable Assets",
  description: "Explore tokenized mortgage pools, ETFs, and funds on OWNR. Compliant digital representations of real mortgage-backed financial instruments.",
};

const assetOverview = [
  {
    num: "01",
    title: "Tokenized Pools",
    tag: "Institutions Only",
    desc: "Compliant digital representations of existing mortgage-backed securities with programmable ownership and settlement.",
    href: "#pools",
  },
  {
    num: "02",
    title: "Tokenized ETFs",
    tag: null,
    desc: "Tokenized versions of existing mortgage-related ETFs with fractional ownership and continuous trading.",
    href: "#etfs",
  },
  {
    num: "03",
    title: "Tokenized Funds",
    tag: null,
    desc: "Mortgage investment funds designed for onchain investors with diversified exposure and automated yield.",
    href: "#funds",
  },
];

export default function TradeableAssets() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-pill mb-5">Marketplace</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-8 leading-[1.05]">
              Tradeable Assets <span className="text-gradient-teal">on OWNR</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              OWNR tokenizes mortgage-backed financial assets, enabling compliant digital representations of real market instruments. These assets preserve their underlying economic exposure while gaining the capabilities of modern financial infrastructure.
            </p>

            {/* Capability pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Instant Settlement", "Transparent Ownership", "Programmable Flows", "Continuous Liquidity"].map((cap) => (
                <span key={cap} className="px-4 py-2 text-sm font-medium rounded-full bg-slate-50 border border-slate-200 text-navy">
                  {cap}
                </span>
              ))}
            </div>

            <Link href="/contact" className="px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-base inline-block">
              Join the Waitlist
            </Link>
          </div>

          {/* Transformation diagram */}
          <div className="flex items-center justify-center gap-4 mt-16 max-w-2xl mx-auto">
            {[
              { label: "Traditional Asset", color: "bg-slate-50 border-slate-200" },
              { label: "Tokenized", color: "bg-teal/10 border-teal/20" },
              { label: "Tradeable", color: "bg-navy border-navy text-white" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-4 animate-on-scroll">
                <div className={`px-5 py-3 rounded-xl border ${step.color} text-center`}>
                  <span className={`text-sm font-semibold ${step.color.includes("text-white") ? "" : "text-navy"}`}>{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <svg className="w-5 h-5 text-teal/40 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Asset Overview */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Three ways mortgage assets trade via OWNR
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              OWNR currently supports three primary asset structures designed to bring mortgage exposure onto modern infrastructure. Each structure preserves the underlying financial exposure while enabling the operational benefits of tokenization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assetOverview.map((asset) => (
              <a key={asset.num} href={asset.href} className="card-hover gradient-border p-7 rounded-xl border border-slate-200 bg-white animate-on-scroll block">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-teal/20">{asset.num}</span>
                  {asset.tag && (
                    <span className="ml-3 text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/[0.06] border border-teal/15 px-2 py-0.5 rounded">
                      {asset.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{asset.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{asset.desc}</p>
              </a>
            ))}
          </div>

          <p className="text-slate-400 text-sm mt-10">
            As the platform evolves, additional asset structures will be introduced to expand the range of tradeable instruments available onchain.
          </p>
        </div>
      </section>

      {/* SECTION 3: Tokenized Mortgage Pools */}
      <section id="pools" className="section-padding bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Asset Type 01</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3 leading-tight">
                Tokenized Mortgage Pools
              </h2>
              <p className="text-sm text-slate-400 mb-6">*For institutions only.</p>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR creates compliant digital representations of existing mortgage-backed securities. The underlying mortgage pools remain unchanged while the tokenized representation enables programmable ownership, transfer, and settlement.
                </p>
                <p>
                  Investors gain direct exposure to mortgage-backed cash flows while benefiting from modern financial infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  "Transparent ownership records",
                  "Atomic settlement",
                  "Onchain transferability",
                  "Automated distributions",
                ].map((cap) => (
                  <div key={cap} className="flex items-start gap-2 text-sm text-navy">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pool diagram */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Mortgage Loans", sub: "Individual residential mortgages", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: "MBS Pool", sub: "CUSIP-level mortgage security", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { label: "Tokenized Asset", sub: "Programmable onchain representation", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-sm animate-on-scroll">
                  <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">{step.label}</div>
                      <div className="text-xs text-slate-400">{step.sub}</div>
                    </div>
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
          </div>
        </div>
      </section>

      {/* SECTION 4: Tokenized Mortgage ETFs */}
      <section id="etfs" className="section-padding bg-navy text-white grid-overlay scroll-mt-20">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Diagram */}
            <div className="hidden lg:flex flex-col items-center gap-0 order-1 lg:order-none">
              {[
                { label: "Mortgage Bonds", sub: "Underlying fixed-income holdings" },
                { label: "ETF Portfolio", sub: "Diversified mortgage exposure" },
                { label: "Tokenized ETF Shares", sub: "Fractional, tradeable, 24/7" },
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

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-light mb-4">Asset Type 02</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Tokenized Mortgage ETFs
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  OWNR supports tokenized representations of existing mortgage-related exchange-traded funds. These assets mirror the exposure of the underlying ETF while enabling additional capabilities through programmable infrastructure.
                </p>
              </div>

              <ul className="space-y-3 mt-8">
                {[
                  "Fractional ownership",
                  "Continuous trading availability",
                  "Transparent ownership records",
                  "Automated yield distribution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Tokenized Mortgage Funds */}
      <section id="funds" className="section-padding bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Asset Type 03</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Tokenized Mortgage Funds
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR partners with mortgage investment funds that aggregate mortgage-backed exposure into diversified portfolios. This structure simplifies access to mortgage-backed yield while maintaining institutional-grade portfolio management.
                </p>
              </div>

              <ul className="space-y-3 mt-8">
                {[
                  "Diversified mortgage exposure",
                  "Onchain fund share ownership",
                  "Transparent portfolio accounting",
                  "Automated distribution of yield",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Fund diagram */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Multiple Mortgage Pools", sub: "Diversified underlying assets" },
                { label: "Fund Portfolio", sub: "Institutional-grade management" },
                { label: "Tokenized Fund Shares", sub: "Accessible, yield-bearing digital shares" },
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
          </div>
        </div>
      </section>

      {/* SECTION 6: DeFi Capabilities */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Tokenized assets unlock new{" "}
              <span className="text-gradient-teal">financial capabilities</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              When traditional financial assets move onchain, they can interact with a broader financial ecosystem. Tokenized mortgage assets are no longer limited to traditional trading venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Collateralization", desc: "Use tokenized assets as collateral in onchain lending markets.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Liquidity Pools", desc: "Participate in onchain liquidity for tokenized mortgage assets.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { title: "Market Making", desc: "Enable automated market making around mortgage-linked instruments.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
              { title: "Yield Strategies", desc: "Build layered yield on top of the base mortgage return.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((cap) => (
              <div key={cap.title} className="p-6 rounded-xl border border-slate-200 bg-white text-center animate-on-scroll">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">{cap.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/resources/buidl-case-study" className="text-teal font-semibold text-sm hover:underline">
              Explore the DeFi yield case study &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: Future Roadmap */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              The roadmap extends far beyond today&apos;s assets
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mortgage assets are the starting point. As digital financial infrastructure expands, OWNR plans to support additional structured credit and fixed-income instruments.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 max-w-4xl mx-auto">
            {[
              { stage: "Stage 1", label: "Current", items: ["Mortgage Pools", "Mortgage ETFs", "Mortgage Funds"], active: true },
              { stage: "Stage 2", label: "Next", items: ["Structured Products", "Mortgage Credit Funds"], active: false },
              { stage: "Stage 3", label: "Future", items: ["Fixed Income Index", "Expanded RWA"], active: false },
            ].map((node, i, arr) => (
              <div key={node.stage} className={`timeline-node animate-on-scroll${node.active ? " active" : ""}`}>
                {i < arr.length - 1 && (
                  <div className={`timeline-connector hidden md:block${node.active ? " flow-line-h" : ""}`} />
                )}
                <div className="node-dot mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{node.stage}</span>
                <span className={`text-sm font-semibold mb-2 ${node.active ? "text-teal" : "text-navy"}`}>{node.label}</span>
                <div className="space-y-1 mt-1">
                  {node.items.map((item) => (
                    <span key={item} className={`block text-xs ${node.active ? "text-slate-500" : "text-slate-400"}`}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Closing CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <Image src="/deck-assets/image16.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80 z-[1]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tradeable financial assets built for next-generation capital markets
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            OWNR is building infrastructure that allows real financial assets to operate on blockchain networks while preserving their underlying economic exposure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
              Partner with OWNR
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-lg inline-block">
              Join the Waitlist
            </Link>
          </div>
          <p className="text-white/30 text-sm font-medium tracking-wide mt-10">
            Where Ownership Meets Opportunity
          </p>
        </div>
      </section>
    </>
  );
}
