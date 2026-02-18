"use client";

import Image from "next/image";
import Link from "next/link";
import MBSInvestmentDemo from "@/components/MBSInvestmentDemo";

export default function RetailPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal to-teal-dark text-white pt-28 pb-24 px-6 overflow-hidden">
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
          <p className="text-white/50 text-sm mb-8 max-w-2xl mx-auto">
            No brokerage account. No $250K minimum. No market-hours restrictions.
            Just steady, government-guaranteed returns — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/waitlist" className="px-8 py-3.5 bg-white text-teal-dark font-semibold rounded-lg hover:bg-slate-100 transition-colors text-center cta-glow">
              Join the Waitlist
            </Link>
            <a href="#how-it-works" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors text-center">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Interactive Demo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Try It. Right Now.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Experience how investing in tokenized MBS works — pick a region, review the pool, set your amount, and watch your token mint in real time.
            </p>
          </div>
          <MBSInvestmentDemo />
        </div>
      </section>

      {/* The Big Short Section */}
      <section className="section-padding bg-navy-dark text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">A New Asset Class</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The $15 Trillion Market<br />
              You&apos;ve Never Had Access To
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              Remember <span className="text-white font-semibold">The Big Short</span>? The entire movie was about mortgage-backed securities —
              a massive market that was completely invisible to everyday investors. Banks made billions.
              Retail got nothing. <span className="text-teal-light font-semibold">Until now.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="text-4xl font-bold text-teal-light mb-2">$15T</div>
              <p className="text-white/40 text-sm">The MBS market is the second-largest fixed-income asset class on Earth — bigger than corporate bonds.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="text-4xl font-bold text-teal-light mb-2">0</div>
              <p className="text-white/40 text-sm">The number of retail platforms that let you invest directly in MBS. MBSX is the first.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center animate-on-scroll">
              <div className="text-4xl font-bold text-teal-light mb-2">5-7%</div>
              <p className="text-white/40 text-sm">Government-backed yields that banks have kept to themselves for decades. Now accessible from $10.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-teal/10 border border-teal/20 text-center">
            <p className="text-teal-light font-semibold text-lg">
              MBSX gives you the instrument that hedge funds use — but fractional, 24/7, and starting at $10.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              },
              {
                step: "02",
                title: "Pick Your Region",
                desc: "Browse regions across the U.S. See yields, risk levels, and trends. Go long on markets you believe in — or short the ones you don\u2019t.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
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
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retail Cares */}
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
                desc: "Agency MBS carry guarantees from Ginnie Mae, Fannie Mae, and Freddie Mac. This isn\u2019t some speculative DeFi yield farm \u2014 it\u2019s backed by the U.S. government.",
              },
              {
                title: "Start from $10",
                desc: "Traditional MBS requires $250K+ minimum investment. With MBSX, you get the same exposure starting from just $10.",
              },
              {
                title: "24/7 Trading",
                desc: "Stocks close at 4pm. The housing market doesn\u2019t. Trade MBS tokens any time \u2014 nights, weekends, holidays.",
              },
              {
                title: "Pick Your Bet",
                desc: "Choose regions you think will outperform. Southeast booming? Go long. West Coast overheated? Reduce exposure. It\u2019s your call.",
              },
              {
                title: "Real Portfolio Diversification",
                desc: "Housing is uncorrelated with stocks. Add the $15T MBS market to your portfolio \u2014 the asset class that banks have kept to themselves.",
              },
              {
                title: "Full Transparency",
                desc: "Every token is backed by real, onchain MBS digital twins. See exactly what backs your investment. No black boxes.",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-white animate-on-scroll">
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
