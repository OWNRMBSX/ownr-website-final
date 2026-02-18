import Image from "next/image";
import Link from "next/link";

const howItWorks = [
  {
    step: "01",
    title: "Connect Wallet",
    desc: "Link your crypto wallet or create a new one in seconds. Fully non-custodial — you always control your assets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Choose Exposure",
    desc: "Select from MBS-linked synthetic tokens. Start with as little as $10 — fractional access to institutional-grade fixed income.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Trade 24/7",
    desc: "Buy and sell synthetic MBS tokens around the clock. Real yield backed by government-guaranteed mortgages.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const syntheticFeatures = [
  {
    title: "Collateral-Backed Issuance",
    desc: "Primary MBS tokens are deposited into a vault smart contract. The vault mints Synthetic Tokens tied to the collateral value.",
  },
  {
    title: "Peg & Arbitrage Link",
    desc: "Onchain oracles plus arbitrage between Synthetic pools and the Primary Exchange keep prices aligned with real MBS.",
  },
  {
    title: "Dynamic Risk Controls",
    desc: "Collateralization ratio increases during volatility to protect solvency and maintain the peg.",
  },
  {
    title: "Spot Synthetic Exposure",
    desc: "Fractional, 24/7 MBS-linked spot exposure. Trade any time, anywhere in the world.",
  },
  {
    title: "Options & Structured Products",
    desc: "Onchain call/put options, spreads, and volatility strategies reference the Synthetic Token's market price.",
  },
  {
    title: "Leverage & Perpetuals",
    desc: "Margin-based directional positions with funding-rate dynamics for amplified returns.",
  },
];

const whyRetail = [
  {
    title: "Government-Backed Yield",
    desc: "Agency MBS carry guarantees from Ginnie Mae, Fannie Mae, and Freddie Mac — significantly reducing credit risk. Tokenization overlays trustless settlement on top of already-trusted collateral.",
  },
  {
    title: "Fractional Access",
    desc: "No more $25K minimums. Start with as little as $10 and build exposure to institutional-grade fixed income previously unavailable to retail investors.",
  },
  {
    title: "Portfolio Diversification",
    desc: "Add a new asset class uncorrelated with equities. Housing has been the bedrock of American wealth for decades. The U.S. MBS market is ~$12T — the second largest fixed-income asset after Treasuries.",
  },
  {
    title: "Enhanced Transparency",
    desc: "Onchain data provides unprecedented transparency into loan-level analytics. Know exactly what backs your investment in real time.",
  },
  {
    title: "Lower Transaction Costs",
    desc: "Smart contracts eliminate middlemen. Settlement costs drop by orders of magnitude compared to traditional brokerage.",
  },
  {
    title: "Hedge Against Rates",
    desc: "MBS exposure provides a hedge against interest rate movements and a way to profit from the housing market without owning property.",
  },
];

export default function RetailPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal to-teal-dark text-white pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-15 mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-3">
            Synthetic Exchange
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Invest in the Housing Market
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">
            Synthetic Tokens give you fractional, 24/7 access to
            mortgage-backed securities — no brokerage account required.
            Government-backed yield, starting from $10.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/waitlist" className="px-8 py-3.5 bg-white text-teal-dark font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Join the Waitlist
            </Link>
            <Link href="/data-room" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative text-center">
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-teal/30 to-transparent" />
                )}
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {step.icon}
                </div>
                <div className="text-xs text-teal font-mono font-bold mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthetic Token */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Synthetic Token</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Trading Paths & Derivatives</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Collateral-anchored Synthetic Tokens channel new retail liquidity into MBS and use AMM mechanics to unlock continuous yield.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {syntheticFeatures.map((f) => (
              <div key={f.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retail Cares */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Retail Investors Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRetail.map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal to-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Early Access
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Be among the first retail investors to access tokenized mortgage-backed
            securities. Join the waitlist and we&apos;ll notify you when the Synthetic Exchange goes live.
          </p>
          <Link href="/waitlist" className="inline-block px-10 py-4 bg-white text-navy font-bold rounded-lg hover:bg-slate-100 transition-colors text-lg">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
