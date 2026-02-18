"use client";

import Image from "next/image";
import Link from "next/link";
import MBSInvestmentDemo from "@/components/MBSInvestmentDemo";

export default function RetailPage() {
  return (
    <>
      {/* Hero — concise, drives straight into the map */}
      <section className="relative bg-gradient-to-br from-teal to-teal-dark text-white pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-10 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/10">
            <span className="text-white text-xs font-bold tracking-wider">MBSX RETAIL</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Big Short.
            <br />
            <span className="text-white/90">On Your Phone.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            For the first time ever, <span className="font-semibold text-white">anyone</span> can
            take a position on the housing market. Pick a region.
            Choose your exposure. Earn government-backed yield — starting from just $10.
          </p>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            No brokerage account. No $250K minimum. No market-hours restrictions.
            Just steady, government-guaranteed returns — 24/7.
          </p>
        </div>
      </section>

      {/* Interactive Demo — immediately after hero, US map first */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Interactive Demo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Try It. Right Now.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Click a region on the map to explore MBS pools, set your investment, and watch your token mint in real time.
            </p>
          </div>
          <MBSInvestmentDemo />
        </div>
      </section>

      {/* The Big Short Section — tightened spacing */}
      <section className="section-padding bg-navy-dark text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">A New Asset Class</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The $15 Trillion Market<br />
              You&apos;ve Never Had Access To
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              Remember <span className="text-white font-semibold">The Big Short</span>? The entire movie was about mortgage-backed securities —
              a massive market that was completely invisible to everyday investors. Banks made billions.
              Retail got nothing. <span className="text-teal-light font-semibold">Until now.</span>
            </p>
            <div className="inline-block p-5 rounded-xl bg-teal/10 border border-teal/20 mb-10">
              <p className="text-teal-light font-semibold text-lg">
                MBSX gives you the instrument that hedge funds use — but fractional, 24/7, and starting at $10.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-teal-light mb-2">$15T</div>
              <p className="text-white/40 text-sm">The MBS market is the second-largest fixed-income asset class on Earth — bigger than corporate bonds.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-teal-light mb-2">0</div>
              <p className="text-white/40 text-sm">The number of retail platforms that let you invest directly in MBS. MBSX is the first.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-teal-light mb-2">5-7%</div>
              <p className="text-white/40 text-sm">Government-backed yields that banks have kept to themselves for decades. Now accessible from $10.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — with visual illustrations */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Three Steps. That&apos;s It.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Connect Your Wallet",
                desc: "Link your crypto wallet or create one in seconds. Your assets, your keys — fully non-custodial.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                detail: "MetaMask, Phantom, Coinbase Wallet, or create a new one in-app",
              },
              {
                step: "02",
                title: "Pick Your Region",
                desc: "Browse regions across the U.S. See yields, risk levels, and trends. Go long on markets you believe in.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                detail: "Northeast, Southeast, Midwest, Southwest, West Coast, Mountain",
              },
              {
                step: "03",
                title: "Earn Yield 24/7",
                desc: "Your MBS tokens earn government-backed yield around the clock. Trade anytime. Withdraw anytime. No lockups.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                detail: "Agency MBS yield backed by Ginnie Mae, Fannie Mae, Freddie Mac",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative text-center animate-on-scroll">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-teal/30 to-transparent" />
                )}
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {s.icon}
                </div>
                <div className="text-xs text-teal font-mono font-bold mb-2">{s.step}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto mb-3">{s.desc}</p>
                <div className="inline-block px-3 py-1.5 bg-teal/5 border border-teal/10 rounded-lg">
                  <p className="text-teal text-xs font-medium">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retail Cares — with icons and visual detail */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Benefits</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Why This Changes Everything
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Government-Backed Yield",
                desc: "Agency MBS carry guarantees from Ginnie Mae, Fannie Mae, and Freddie Mac. This isn\u2019t some speculative DeFi yield farm \u2014 it\u2019s backed by the full faith and credit of the U.S. government.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                stat: "5-7%",
                statLabel: "APY",
              },
              {
                title: "Start from $10",
                desc: "Traditional MBS requires $250K+ minimum investment. With MBSX, you get the same exposure starting from just $10. Fractional tokens make MBS accessible to everyone.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                stat: "$10",
                statLabel: "minimum",
              },
              {
                title: "24/7 Trading",
                desc: "Stocks close at 4pm. The housing market doesn\u2019t. Trade MBS tokens any time \u2014 nights, weekends, holidays. Your portfolio works even when you\u2019re not.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                stat: "24/7",
                statLabel: "always on",
              },
              {
                title: "Pick Your Region",
                desc: "Choose regions you think will outperform. Southeast booming? Go long. West Coast overheated? Reduce exposure. Regional MBS tokens let you express a view on the housing market.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                stat: "6",
                statLabel: "regions",
              },
              {
                title: "Real Portfolio Diversification",
                desc: "Housing is uncorrelated with stocks and crypto. Add the $15T MBS market to your portfolio \u2014 the asset class that banks and hedge funds have kept to themselves for decades.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
                stat: "$15T",
                statLabel: "market",
              },
              {
                title: "Full Transparency",
                desc: "Every token is a 1:1 digital twin of a real MBS CUSIP, custodied at BNY Mellon. See exactly what backs your investment \u2014 pool factors, coupon rates, prepayment speeds. No black boxes.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                stat: "1:1",
                statLabel: "backed",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal">{item.stat}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold text-navy mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal to-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Housing Market.<br />Now Open to Everyone.
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed text-lg">
            Be among the first to invest in tokenized MBS.
            Join the waitlist for early access.
          </p>
          <Link href="/waitlist" className="inline-block px-10 py-4 bg-white text-navy font-bold rounded-lg hover:bg-slate-100 transition-colors text-lg cta-glow">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
