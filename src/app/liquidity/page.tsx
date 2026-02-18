import Image from "next/image";
import Link from "next/link";

const lpBenefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Trading Fee Revenue",
    desc: "Earn a share of every swap between Synthetic Tokens and USDC in AMM pools. High-volume MBS trading means consistent fee generation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Funding-Rate Spreads",
    desc: "Capture funding-rate differentials from leveraged and perpetual Synthetic positions. Directional flow creates yield opportunities.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Arbitrage Gains",
    desc: "Capture spreads between Primary and Synthetic markets. The dual-market architecture creates persistent arbitrage opportunities.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Collateral-Backed Safety",
    desc: "Synthetic Tokens are always collateral-backed by Primary MBS tokens. Dynamic risk controls and liquidation mechanisms protect LP capital.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Yield Generation",
    desc: "Unlike traditional markets, AMM pools generate yield around the clock — including after-hours when TBA markets are closed.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Automated Yield Products",
    desc: "Structured vault strategies and yield notes built on AMM pools. Deploy capital and let smart contracts optimize returns.",
  },
];

const bdBenefits = [
  {
    title: "Listing & Custodian Revenue",
    items: [
      "Trading Fees: bps-based fee on every MBS trade (TBA, specified pools, dollar rolls, pair-offs)",
      "Mint / Redemption Fees: One-time charge for token issuance & burn",
      "Institutional Data Services: Premium real-time market data, analytics, and API feeds",
    ],
  },
  {
    title: "New Revenue Streams",
    items: [
      "Derivatives Execution: Fees on options, volatility products, CDS-style hedges",
      "Custom Baskets & Structured Notes: Origination fees for bespoke instruments",
      "Enterprise Licensing: Subscription fees for high-speed data/API packages",
    ],
  },
  {
    title: "Operational Advantages",
    items: [
      "Near-instant settlement reduces counterparty and warehouse exposure",
      "Programmable compliance automates KYC/AML and TRACE reporting",
      "FIX/FpML middleware means zero disruption to existing workflows",
    ],
  },
  {
    title: "Balance Sheet Benefits",
    items: [
      "Lock Primary holdings as collateral and redeploy freed cash",
      "Synthetic market absorbs risk previously on institutional balance sheets",
      "Continuous price discovery and secondary-market exits outside TBA hours",
    ],
  },
];

const ammMechanics = [
  {
    title: "USDC-Paired AMM Pools",
    desc: "Synthetic Tokens pair with USDC in constant-product pools for continuous liquidity. Deep pools tighten spreads and lower friction.",
  },
  {
    title: "LP Deposit & Withdraw",
    desc: "Supply USDC + sUMBS-1 liquidity to earn trading fees. Withdraw anytime with transparent pool depth and swap pricing.",
  },
  {
    title: "Yield Amplification",
    desc: "AMM + funding-rate dynamics create new return streams that attract yield-seeking capital and deepen liquidity in a virtuous cycle.",
  },
  {
    title: "Bid-Ask Efficiency",
    desc: "AMM pools tighten spreads and lower friction even during off-hours — providing continuous two-sided markets for MBS tokens.",
  },
];

export default function LiquidityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white pt-28 pb-20 px-6 overflow-hidden">
        <Image src="/deck-assets/image16.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
            Liquidity Providers & Broker-Dealers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            Earn Yield on the Future of MBS
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Provide liquidity to OWNR&apos;s AMM pools and earn continuous yield from
            trading fees, funding-rate spreads, and arbitrage. Broker-dealers
            gain new revenue streams with zero disruption to existing workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/data-room" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* LP Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">LP Rewards</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Provide Liquidity</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              LPs supply USDC + Primary tokens to pools and earn fees, funding
              differentials, and vault yields. Multiple return streams in a single position.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lpBenefits.map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMM Mechanics */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">AMM Architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">AMM Yield Engine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ammMechanics.map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broker-Dealer Benefits */}
      <section className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">Broker-Dealers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Broker-Dealers Should Join
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              New revenue streams with seamless integration into existing FIX-based workflows. No operational disruption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bdBenefits.map((section) => (
              <div key={section.title} className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-bold text-teal-light mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                      <span className="text-teal-light mt-1 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model Summary */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Monetization</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Revenue Streams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Trading Fees", desc: "bps-based fee on every MBS trade across both exchanges" },
              { title: "Mint / Redeem", desc: "One-time charges for token issuance and burn operations" },
              { title: "AMM Swap Fees", desc: "Protocol captures a share of each Synthetic-USDC swap" },
              { title: "Data Services", desc: "Premium real-time data, analytics, and API feeds" },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with OWNR
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re a liquidity provider seeking yield or a broker-dealer
            exploring onchain MBS — we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-room" className="px-8 py-3.5 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Request Partnership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
