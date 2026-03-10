"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  {
    title: "Mortgage Markets",
    desc: "Analysis of mortgage market structure, agency MBS mechanics, and the evolution of housing finance infrastructure.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Tokenization Infrastructure",
    desc: "How real-world assets are represented onchain, wrapper architectures, compliance frameworks, and settlement systems.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Capital Markets Technology",
    desc: "Emerging institutional use cases, DeFi protocol integrations, and the convergence of traditional and programmable finance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export default function Resources() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="badge-pill-dark mb-6">Research &amp; Insights</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.05]">
            Research and insights on{" "}
            <span className="text-gradient-teal">capital markets</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Analysis and perspectives on mortgage markets, tokenization infrastructure, and the evolving architecture of capital markets.
          </p>
          <p className="text-sm text-white/30 mt-8">
            New research and case studies will be published here.
          </p>
        </div>
      </section>

      {/* SECTION 2: Featured Case Study */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">Featured</p>

          <Link
            href="/resources/buidl-case-study"
            className="group block card-hover gradient-border rounded-2xl border border-slate-200 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left: Content */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/[0.06] border border-teal/15 px-2.5 py-1 rounded-full">
                    Case Study
                  </span>
                  <span className="text-xs text-slate-400">March 2026</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight group-hover:text-teal transition-colors">
                  Tokenized Assets and DeFi Liquidity: The BlackRock BUIDL Example
                </h2>

                <p className="text-slate-500 leading-relaxed mb-6">
                  How the world&apos;s largest asset manager launched the first institutional tokenized fund and transformed it into living DeFi infrastructure. An analysis of the composability patterns, protocol integrations, and capital markets implications.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Tokenization", "DeFi", "Institutional Adoption", "Real-World Assets"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-teal font-semibold text-sm group-hover:underline">
                  Read the Case Study &rarr;
                </span>
              </div>

              {/* Right: Visual */}
              <div className="lg:col-span-2 bg-navy relative min-h-[240px] lg:min-h-0">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/30" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="space-y-3 w-full max-w-[200px]">
                    {[
                      { label: "Launch", value: "Mar 2024" },
                      { label: "AUM", value: "$2.4B+" },
                      { label: "Dividends", value: "$100M+" },
                      { label: "Chains", value: "9" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between text-sm">
                        <span className="text-white/40">{stat.label}</span>
                        <span className="font-bold text-teal-light">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 3: What We Explore */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What we explore</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              OWNR research focuses on the intersection of traditional financial markets and programmable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <div key={topic.title} className="p-7 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="w-12 h-12 mb-5 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={topic.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{topic.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-sm mt-10">
            As the platform develops, additional research and technical publications will be added here.
          </p>
        </div>
      </section>

      {/* SECTION 4: Stay Updated */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Stay informed</h2>
          <p className="text-slate-500 mb-8">
            Receive updates when new research and case studies are published.
          </p>

          {!subscribed ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-sm shrink-0"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="py-6 px-8 rounded-xl border border-teal/20 bg-teal/[0.03]">
              <p className="text-navy font-semibold">You&apos;re subscribed.</p>
              <p className="text-slate-400 text-sm mt-1">We&apos;ll notify you when new research is published.</p>
            </div>
          )}

          {!subscribed && (
            <p className="text-xs text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
          )}
        </div>
      </section>

      {/* SECTION 5: Closing CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building the infrastructure for next-generation capital markets
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            OWNR is bringing the largest untokenized market onchain. Explore the platform or partner with us to build the future of mortgage finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/why-ownr" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
              Learn More About the Platform
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-lg inline-block">
              Partner with OWNR
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
