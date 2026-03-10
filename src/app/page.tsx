import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* SECTION 2: The Opportunity */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="badge-pill mb-4">The Opportunity</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              The Largest Untokenized Market<br />
              <span className="text-gradient-teal">in the World</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Mortgage-backed securities are a <span className="text-navy font-semibold">$15 trillion market</span> — the
              second largest fixed-income asset class after U.S. Treasuries. Yet it still runs on legacy
              infrastructure: T+1-3 settlement, manual reconciliation, and zero retail access.{" "}
              <span className="text-navy font-semibold">Until now.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "$350B+",
                label: "TRADED EVERY SINGLE DAY",
                desc: "MBS is one of the most liquid markets on Earth — yet its infrastructure hasn't been modernized in decades.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: "from-blue-50 to-white",
              },
              {
                stat: "0%",
                label: "RETAIL ACCESS TODAY*",
                desc: "Everyday investors have never been able to directly invest in MBS pools. OWNR changes that with fractional tokens from $10.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                ),
                gradient: "from-red-50 to-white",
              },
              {
                stat: "T+3",
                label: "CURRENT SETTLEMENT TIME",
                desc: "Three days to settle a trade. Billions in capital locked up. OWNR delivers atomic settlement in ~12 seconds.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-teal-50 to-white",
              },
            ].map((item) => (
              <div key={item.stat} className={`card-hover gradient-border text-center p-8 rounded-xl border border-slate-200 bg-gradient-to-b ${item.gradient} animate-on-scroll`}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {item.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">{item.stat}</div>
                <div className="text-xs font-bold text-navy tracking-wider mb-3">{item.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Financial assets are becoming programmable */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Financial assets are becoming{" "}
                <span className="text-gradient-teal">programmable.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                The tokenization of real-world assets is not just about putting securities on a blockchain.
                It is about fundamentally changing what financial instruments can do.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { bold: "Settlement", text: "becomes instant" },
                  { bold: "Ownership", text: "becomes transparent" },
                  { bold: "Compliance", text: "becomes programmable" },
                  { bold: "Markets", text: "become globally accessible" },
                ].map((item) => (
                  <li key={item.bold} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-navy">
                      <strong>{item.bold}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed border-l-2 border-teal pl-4">
                Assets are no longer static financial instruments. They become{" "}
                <strong>programmable financial primitives.</strong>
              </p>
            </div>

            {/* Right: Vertical transformation diagram */}
            <div className="flex flex-col items-center gap-0">
              {[
                {
                  label: "Traditional Security",
                  sub: "Paper-based, T+3, manual processes",
                  color: "bg-slate-100 border-slate-200 text-navy",
                },
                {
                  label: "Tokenized Asset",
                  sub: "Digital twin, onchain ownership, instant transfer",
                  color: "bg-teal/10 border-teal/20 text-navy",
                },
                {
                  label: "Programmable Capital",
                  sub: "Automated compliance, composable liquidity, dynamic yield flows",
                  color: "bg-teal border-teal text-white",
                },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-sm animate-on-scroll">
                  <div className={`p-6 rounded-xl border ${step.color} text-center`}>
                    <div className="font-bold text-lg mb-1">{step.label}</div>
                    <div className={`text-sm ${i === arr.length - 1 ? "text-white/70" : "text-slate-500"}`}>
                      {step.sub}
                    </div>
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

              {/* Capability labels */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["Atomic Settlement", "Onchain Compliance", "Yield Streaming", "Composability"].map((cap) => (
                  <span key={cap} className="px-3 py-1 text-xs font-semibold rounded-full bg-teal/10 text-teal border border-teal/20">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Infrastructure Evolution */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Infrastructure Evolution
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Markets evolve when <span className="text-gradient-teal">infrastructure</span> evolves.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              Every generation of markets has been defined by the infrastructure beneath it.
              Floor exchanges gave way to electronic trading. APIs unlocked algorithmic strategies.
              Cloud infrastructure enabled global scale. Now, programmable blockchains are enabling the
              next transformation: markets that settle instantly, operate 24/7, and run on transparent, auditable code.
            </p>
          </div>

          {/* Horizontal timeline */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 max-w-5xl mx-auto">
            {[
              { label: "Floor Exchanges", era: "1792" },
              { label: "Electronic Trading", era: "1971" },
              { label: "APIs", era: "2000s" },
              { label: "Cloud Infrastructure", era: "2010s" },
              { label: "Programmable Markets", era: "Now", active: true },
            ].map((node, i, arr) => (
              <div key={node.label} className={`timeline-node animate-on-scroll${node.active ? " active" : ""}`}>
                {i < arr.length - 1 && (
                  <div className={`timeline-connector hidden md:block${node.active ? " flow-line-h" : ""}`} />
                )}
                <div className="node-dot mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{node.era}</span>
                <span className={`text-sm font-semibold ${node.active ? "text-teal" : "text-navy"}`}>
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 continued: Why OWNR — Built for the Next Era */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-pill-dark mb-4">Why OWNR</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for the Next Era
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              OWNR brings the largest untokenized market onchain, unlocking benefits that legacy infrastructure simply cannot deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                badgeStat: "~12s",
                badgeSub: "VS T+3 DAYS",
                title: "Near-Instant Settlement",
                desc: "Atomic DvP settlement in ~12 seconds. No more T+3 delays. Free up billions in locked capital overnight.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                badgeStat: "24/7",
                badgeSub: "ALWAYS ON",
                title: "24/7 Global Trading",
                desc: "Markets never close. Trade MBS tokens around the clock, across borders, without intermediaries.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                badgeStat: "$10",
                badgeSub: "MINIMUM INVESTMENT",
                title: "Fractional Access from $10",
                desc: "For the first time, everyday investors can access government-backed MBS yield without a brokerage account.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                badgeStat: "AAA",
                badgeSub: "AGENCY-BACKED",
                title: "Government-Backed Yield",
                desc: "MBS are backed by agencies like Ginnie Mae, Fannie Mae, and Freddie Mac, the safest yield in fixed income.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                badgeStat: "FIX",
                badgeSub: "PROTOCOL NATIVE",
                title: "Zero Workflow Disruption",
                desc: "Full FIX/DTCC integration for institutions. Existing systems plug right in, no rip-and-replace required.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                badgeStat: "100%",
                badgeSub: "ONCHAIN AUDIT TRAIL",
                title: "Transparent & Programmable",
                desc: "Smart contracts automate compliance, coupon payments, and reporting. Every transaction is onchain and auditable.",
              },
            ].map((card) => (
              <div key={card.title} className="feature-card animate-on-scroll">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-teal/15 border border-teal/25 flex items-center justify-center text-teal-light">
                    {card.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-light leading-none">{card.badgeStat}</div>
                    <div className="text-[9px] font-bold tracking-wider text-white/40 mt-0.5">{card.badgeSub}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Two Markets. One Platform. */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-pill mb-4">How OWNR Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-2">
              Two Markets.
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-teal">One Platform.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              OWNR serves two audiences on one platform: <span className="font-semibold text-navy">institutional infrastructure</span> for
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
                    "FIX/DTCC integration, zero workflow disruption",
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

            <Link href="/contact" className="group card-hover gradient-border block rounded-2xl overflow-hidden border border-slate-200">
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

      {/* SECTION 5 continued: Three Assets Currently Supported */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Three Assets Currently
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-gradient-teal">Supported</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                tag: "Institutions Only",
                title: "Tokenized Pools",
                desc: "Compliant onchain representations of existing MBS pools. The underlying securities remain unchanged while the tokenized version enables programmable ownership, transfer, and settlement.",
              },
              {
                num: "02",
                tag: null,
                title: "Tokenized ETFs",
                desc: "Existing MBS-related ETFs issued as tokenized versions that mirror the underlying fund exposure. Investors gain access to familiar mortgage products with onchain liquidity, fractional ownership, and direct yield distribution.",
              },
              {
                num: "03",
                tag: null,
                title: "Tokenized Funds",
                desc: "Tokenized mortgage funds designed for onchain investors. These funds package mortgage exposure into simple investment vehicles that are accessible with lower minimums and operate natively on blockchain infrastructure.",
              },
            ].map((asset) => (
              <div key={asset.num} className="feature-card animate-on-scroll">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-teal-light/30">{asset.num}</span>
                  {asset.tag && (
                    <span className="ml-3 text-[10px] font-bold uppercase tracking-wider text-teal-light bg-teal/15 px-2 py-0.5 rounded">
                      {asset.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{asset.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA — Get Started */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge-pill mb-6">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-2">
            The Future of MBS
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-teal">Starts Here</span>
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
            Whether you&apos;re an institution looking to modernize MBS infrastructure
            or an investor ready to access government-backed yield — OWNR has a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-lg">
              Join the Investor Waitlist
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-navy/30 hover:border-navy text-navy font-semibold rounded-lg transition-colors text-lg">
              Partner with OWNR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
