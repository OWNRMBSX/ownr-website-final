import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* The Problem / Opportunity */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              The Largest Untokenized Market in the World
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Mortgage-backed securities are a <span className="text-navy font-semibold">$15 trillion market</span> —
              the second largest fixed-income asset class after U.S. Treasuries.
              Yet it still runs on legacy infrastructure: T+1-3 settlement, manual reconciliation,
              and zero retail access. Until now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-teal mb-2">$311B</div>
              <div className="text-sm text-slate-500 mb-4">Traded every single day</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                MBS is one of the most liquid markets on Earth — yet its infrastructure
                hasn&apos;t been modernized in decades.
              </p>
            </div>
            <div className="text-center p-8 border-x border-slate-100">
              <div className="text-5xl font-bold text-teal mb-2">0%</div>
              <div className="text-sm text-slate-500 mb-4">Retail access today</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Everyday investors have never been able to invest directly in MBS.
                MBSX changes that with fractional tokens from $10.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-teal mb-2">T+3</div>
              <div className="text-sm text-slate-500 mb-4">Current settlement time</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Three days to settle a trade. Billions in capital locked up.
                MBSX delivers atomic settlement in ~12 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now — Regulatory Momentum */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Why Now
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Regulatory Window is Open
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              2025 saw a seismic shift in crypto regulation. For the first time,
              the infrastructure and the legal framework exist to bring real-world assets onchain at scale.
            </p>
          </div>

          {/* Timeline-style regulatory milestones */}
          <div className="relative mb-12">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal/0 via-teal/40 to-teal/0" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "GENIUS Act",
                  desc: "First federal crypto legislation signed into law — stablecoin framework established.",
                  tag: "July 2025",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "CLARITY Act",
                  desc: "Passed House 294-134 — digital commodities framework ends SEC-CFTC jurisdictional conflict.",
                  tag: "2025",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  title: "BlackRock BUIDL",
                  desc: "$2.5B+ tokenized treasury fund. 800%+ growth in 18 months proves institutional demand is real.",
                  tag: "Live Now",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
                {
                  title: "$18.9T by 2033",
                  desc: "BCG/Ripple forecast for tokenized assets. 100%+ CAGR — the fastest-growing financial segment.",
                  tag: "Projected",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6 rounded-xl animate-on-scroll text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center text-teal-light">
                    {item.icon}
                  </div>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-light bg-teal/10 rounded mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional market proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { value: "$4B+", label: "Securitize AUM", sub: "Tokenized assets" },
              { value: "$4T+", label: "Canton Network", sub: "Annual tokenized volume" },
              { value: "DTC", label: "No-Action Letter", sub: "Dec 2025 — tokenization services" },
              { value: "MBS", label: "Next Frontier", sub: "$15T untokenized market" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center animate-on-scroll">
                <div className="text-xl md:text-2xl font-bold text-teal-light mb-1">{s.value}</div>
                <div className="text-xs font-semibold text-white/60 mb-0.5">{s.label}</div>
                <div className="text-[10px] text-white/30">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-teal/10 border border-teal/20 text-center">
            <p className="text-teal-light font-semibold text-lg">
              MBS is the ideal next asset class: $15T+ market, operational complexity
              perfect for smart contracts, proven institutional infrastructure now operational.
            </p>
          </div>
        </div>
      </section>

      {/* Two Markets */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              How MBSX Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Two Markets. One Platform.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              MBSX serves two audiences on one platform: <span className="font-semibold text-navy">institutional infrastructure</span> for
              dealers and market makers, and <span className="font-semibold text-navy">retail access</span> to MBS yield for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/institutions" className="group card-hover gradient-border block rounded-2xl overflow-hidden border border-slate-200">
              <div className="relative h-48 bg-navy overflow-hidden">
                <Image src="/deck-assets/image16.jpg" alt="" fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-teal-light text-xs font-bold uppercase tracking-wider">Institutional</span>
                  <h3 className="text-2xl font-bold text-white mt-1">For Institutions</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-4">
                  {[
                    "1:1 digital twins of MBS CUSIPs",
                    "Atomic DvP settlement in ~12 seconds",
                    "FIX/DTCC integration — zero workflow disruption",
                    "Market making & LP yield opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-teal font-semibold text-sm group-hover:underline">
                  Explore Institutional Benefits &rarr;
                </span>
              </div>
            </Link>

            <Link href="/retail" className="group card-hover gradient-border block rounded-2xl overflow-hidden border border-slate-200">
              <div className="relative h-48 bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
                <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Retail</span>
                  <h3 className="text-2xl font-bold text-white mt-1">For Retail Investors</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-4">
                  {[
                    "Invest in the housing market from $10",
                    "Government-backed yield, 24/7 trading",
                    "Pick regions, sectors, and risk profiles",
                    "No brokerage account needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-teal font-semibold text-sm group-hover:underline">
                  See How It Works &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* CTA banner */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Future of MBS Starts Here
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re an institution looking to modernize MBS infrastructure
            or an investor ready to access government-backed yield —
            MBSX has a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/waitlist" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow">
              Join the Waitlist
            </Link>
            <Link href="/data-room" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Access Data Room
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
