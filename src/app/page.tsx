import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* The Opportunity */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/[0.08] border border-teal/20 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-xs font-semibold uppercase tracking-wider">The Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              The Largest Untokenized
              <br />
              <span className="text-gradient-teal">Market in the World</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Mortgage-backed securities are a <span className="text-navy font-semibold">$15 trillion market</span> —
              the second largest fixed-income asset class after U.S. Treasuries.
              Yet it still runs on legacy infrastructure: T+1-3 settlement, manual reconciliation,
              and zero retail access. <span className="text-navy font-semibold">Until now.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                stat: "$311B",
                label: "Traded every single day",
                desc: "MBS is one of the most liquid markets on Earth — yet its infrastructure hasn\u2019t been modernized in decades.",
                gradient: "from-teal/10 to-teal/[0.02]",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                stat: "0%",
                label: "Retail access today",
                desc: "Everyday investors have never been able to invest directly in MBS. MBSX changes that with fractional tokens from $10.",
                gradient: "from-red/10 to-red/[0.02]",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                ),
              },
              {
                stat: "T+3",
                label: "Current settlement time",
                desc: "Three days to settle a trade. Billions in capital locked up. MBSX delivers atomic settlement in ~12 seconds.",
                gradient: "from-navy/10 to-navy/[0.02]",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.stat} className={`card-hover gradient-border text-center p-8 lg:p-10 rounded-2xl border border-slate-200 bg-gradient-to-b ${item.gradient} animate-on-scroll`}>
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {item.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">{item.stat}</div>
                <div className="text-sm font-bold text-navy/80 mb-3 uppercase tracking-wide">{item.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-navy text-white grid-overlay relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-teal/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-teal/[0.07] rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/10 border border-teal/20 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
              <span className="text-teal-light text-xs font-semibold uppercase tracking-wider">Why MBSX</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built for the Next Era
              <br />
              <span className="text-teal-light">of Fixed Income</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              MBSX brings the largest untokenized market onchain — unlocking benefits
              that legacy infrastructure simply cannot deliver.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              {
                title: "Near-Instant Settlement",
                desc: "Atomic DvP settlement in ~12 seconds. No more T+3 delays. Free up billions in locked capital overnight.",
                metric: "~12s",
                metricLabel: "vs T+3 days",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "24/7 Global Trading",
                desc: "Markets never close. Trade MBS tokens around the clock, across borders, without intermediaries.",
                metric: "24/7",
                metricLabel: "Always on",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Fractional Access from $10",
                desc: "For the first time, everyday investors can access government-backed MBS yield without a brokerage account.",
                metric: "$10",
                metricLabel: "Minimum investment",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Government-Backed Yield",
                desc: "MBS are backed by agencies like Ginnie Mae, Fannie Mae, and Freddie Mac — the safest yield in fixed income.",
                metric: "AAA",
                metricLabel: "Agency-backed",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Zero Workflow Disruption",
                desc: "Full FIX/DTCC integration for institutions. Existing systems plug right in — no rip-and-replace required.",
                metric: "FIX",
                metricLabel: "Protocol native",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
              },
              {
                title: "Transparent & Programmable",
                desc: "Smart contracts automate compliance, coupon payments, and reporting. Every transaction is onchain and auditable.",
                metric: "100%",
                metricLabel: "Onchain audit trail",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
            ].map((benefit) => (
              <div key={benefit.title} className="benefit-card group p-6 lg:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-teal/30 transition-all duration-500 animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/25 flex items-center justify-center text-teal-light group-hover:bg-teal/25 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-light">{benefit.metric}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{benefit.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Market proof stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "$4B+", label: "Securitize AUM", sub: "Tokenized assets" },
              { value: "$4T+", label: "Canton Network", sub: "Annual tokenized volume" },
              { value: "DTC", label: "No-Action Letter", sub: "Dec 2025" },
              { value: "$18.9T", label: "by 2033", sub: "BCG/Ripple forecast" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-center animate-on-scroll hover:border-teal/20 transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-teal-light mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-white/60 mb-0.5">{s.label}</div>
                <div className="text-[10px] text-white/30">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-teal/10 to-teal/[0.04] border border-teal/20 text-center animate-on-scroll">
            <p className="text-teal-light font-semibold text-lg max-w-3xl mx-auto">
              MBS is the ideal next asset class: $15T+ market, operational complexity
              perfect for smart contracts, proven institutional infrastructure now operational.
            </p>
          </div>
        </div>
      </section>

      {/* How MBSX Works — Two Markets */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/[0.08] border border-teal/20 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-teal text-xs font-semibold uppercase tracking-wider">How MBSX Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Two Markets.
              <br />
              <span className="text-gradient-teal">One Platform.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              MBSX serves two audiences on one platform: <span className="font-semibold text-navy">institutional infrastructure</span> for
              dealers and market makers, and <span className="font-semibold text-navy">retail access</span> to MBS yield for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Institutional Card */}
            <Link href="/institutions" className="group market-card block rounded-2xl overflow-hidden border border-slate-200 hover:border-teal/40 transition-all duration-500 hover:shadow-2xl hover:shadow-navy/10">
              <div className="relative h-56 bg-navy overflow-hidden">
                <Image src="/deck-assets/image16.jpg" alt="" fill className="object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-teal-light text-xs font-bold uppercase tracking-wider">Institutional</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">For Institutions</h3>
                </div>
              </div>
              <div className="p-7 bg-gradient-to-b from-white to-slate-50/50">
                <ul className="space-y-3.5 mb-5">
                  {[
                    "1:1 digital twins of MBS CUSIPs",
                    "Atomic DvP settlement in ~12 seconds",
                    "FIX/DTCC integration — zero workflow disruption",
                    "Market making & LP yield opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Explore Institutional Benefits
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Retail Card */}
            <Link href="/retail" className="group market-card block rounded-2xl overflow-hidden border border-slate-200 hover:border-teal/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal/10">
              <div className="relative h-56 bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
                <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-20 mix-blend-overlay group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark via-teal-dark/80 to-teal/40" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Retail</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">For Retail Investors</h3>
                </div>
              </div>
              <div className="p-7 bg-gradient-to-b from-white to-slate-50/50">
                <ul className="space-y-3.5 mb-5">
                  {[
                    "Invest in the housing market from $10",
                    "Government-backed yield, 24/7 trading",
                    "Pick regions, sectors, and risk profiles",
                    "No brokerage account needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  See How It Works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Final CTA */}
      <section className="relative overflow-hidden section-padding">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(52,125,135,0.2)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(52,125,135,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 grid-overlay" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/10 border border-teal/20 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse" />
            <span className="text-teal-light text-xs font-semibold uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            The Future of MBS
            <br />
            <span className="text-teal-light">Starts Here</span>
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
            Whether you&apos;re an institution looking to modernize MBS infrastructure
            or an investor ready to access government-backed yield —
            MBSX has a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/waitlist" className="group relative px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all duration-300 cta-glow text-lg overflow-hidden">
              <span className="relative z-10">Join the Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-dark to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link href="/data-room" className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/[0.06] text-white font-semibold rounded-xl transition-all duration-300 text-lg">
              Access Data Room
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
