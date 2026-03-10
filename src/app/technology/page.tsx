import Link from "next/link";
import Image from "next/image";

const architectureLayers = [
  {
    num: "01",
    title: "Tokenization Engine",
    sub: "Creates digital representations of mortgage securities",
  },
  {
    num: "02",
    title: "Trading Infrastructure",
    sub: "Regulated venues for compliant asset exchange",
  },
  {
    num: "03",
    title: "Network Layer",
    sub: "Distributed ownership and settlement records",
  },
  {
    num: "04",
    title: "Application Layer",
    sub: "Financial products and market access",
  },
];

export default function Technology() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-pill-dark mb-5">Technology</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.05]">
                Infrastructure for programmable mortgage markets
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                OWNR provides the infrastructure that allows mortgage-backed financial assets to move onto blockchain networks while maintaining their connection to traditional capital markets.
              </p>
            </div>

            {/* Right: Architecture stack */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {architectureLayers.map((layer, i, arr) => (
                <div key={layer.num} className="w-full max-w-sm animate-on-scroll">
                  <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-center gap-4 shadow-sm">
                    <span className="text-lg font-bold text-teal/30">{layer.num}</span>
                    <div>
                      <div className="font-bold text-sm text-navy">{layer.title}</div>
                      <div className="text-xs text-slate-400">{layer.sub}</div>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex flex-col items-center py-1.5">
                      <div className="w-px h-4 bg-gradient-to-b from-slate-300 to-teal/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: System Architecture */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              A layered infrastructure for{" "}
              <span className="text-gradient-teal">mortgage markets</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              OWNR is designed as a multi-layer financial infrastructure platform that connects traditional mortgage markets with modern digital financial networks. Each layer performs a distinct role in enabling programmable financial assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tokenization Engine", desc: "Creates digital representations of mortgage securities with embedded metadata and compliance.", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
              { title: "Trading Infrastructure", desc: "Regulated venues for compliant exchange with DTCC clearing and FINRA TRACE integration.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
              { title: "Network Layer", desc: "Distributed ledger maintaining ownership records, consensus, and transaction settlement.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Application Layer", desc: "Financial products and market access for institutional trading and retail investment.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
            ].map((layer) => (
              <div key={layer.title} className="card-hover gradient-border p-7 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="w-12 h-12 mb-5 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={layer.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{layer.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Tokenization Engine */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Layer 01</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Tokenization engine for mortgage-related assets
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR&apos;s tokenization engine creates compliant digital representations of existing mortgage-backed securities, mortgage-related ETFs, and mortgage funds.
                </p>
                <p>
                  Each token contains embedded metadata linking the asset to its underlying mortgage pool, allowing the economic exposure of traditional mortgage securities to be preserved while enabling onchain ownership and settlement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {["CUSIP identification", "Coupon rate", "Issuer data", "Maturity", "Pool factors", "Balance data"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    <span className="text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tokenization flow */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Mortgage Loans", sub: "Residential mortgages" },
                { label: "Mortgage Pool (MBS)", sub: "CUSIP-level security" },
                { label: "Tokenized Asset", sub: "Onchain with embedded metadata" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-slate-200 bg-white text-center">
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

      {/* SECTION 4: Trading Infrastructure */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Flow */}
            <div className="hidden lg:flex flex-col items-center gap-0 order-1 lg:order-none">
              {[
                { label: "Institutional Traders", sub: "Banks, funds, market makers" },
                { label: "ATS Matching Engine", sub: "Regulated order matching" },
                { label: "Clearing & Settlement", sub: "DTCC workflows, FINRA TRACE" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-slate-200 bg-white text-center shadow-sm">
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

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Layer 02</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Integration with regulated trading venues
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR tokenized assets are designed to be traded through regulated market infrastructure. The platform integrates with Alternative Trading Systems to enable compliant exchange of tokenized mortgage assets.
                </p>
                <p>
                  Executed trades integrate directly with existing financial infrastructure including DTCC clearing workflows and FINRA TRACE reporting.
                </p>
                <p className="text-navy font-medium border-l-2 border-teal pl-4">
                  This architecture allows tokenized mortgage assets to operate within the same market structure that supports traditional mortgage trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Sovereign Network */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Layer 03</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Sovereign network infrastructure
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR is developing a sovereign distributed network using a Block-DAG architecture. This structure allows multiple blocks to be processed simultaneously, enabling high throughput and parallel transaction validation.
                </p>
                <p>
                  Validator nodes operated by institutional partners maintain the network and confirm transactions through a supermajority consensus mechanism.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "High Throughput", desc: "Parallel block processing" },
                  { label: "Low Latency", desc: "Near-instant settlement" },
                  { label: "Fault Tolerant", desc: "Resilient validation" },
                  { label: "Scalable", desc: "Institutional-grade capacity" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <div className="text-sm font-bold text-navy">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Network visualization */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80 animate-on-scroll">
                {/* Network nodes */}
                {[
                  { x: "50%", y: "10%", label: "Validator" },
                  { x: "85%", y: "35%", label: "Validator" },
                  { x: "75%", y: "75%", label: "Validator" },
                  { x: "25%", y: "75%", label: "Validator" },
                  { x: "15%", y: "35%", label: "Validator" },
                  { x: "50%", y: "45%", label: "Consensus" },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold ${
                      i === 5
                        ? "bg-teal/15 border-2 border-teal/30 text-teal"
                        : "bg-slate-100 border border-slate-200 text-slate-500"
                    }`}>
                      {i === 5 ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`block text-center text-[10px] mt-1 ${i === 5 ? "text-teal font-bold" : "text-slate-400"}`}>
                      {node.label}
                    </span>
                  </div>
                ))}
                {/* Connection lines via SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  {[[160,32,160,144],[272,112,160,144],[240,240,160,144],[80,240,160,144],[48,112,160,144]].map(([x1,y1,x2,y2], i) => (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(52,125,135,0.15)" strokeWidth="1.5" />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Quantum-Resistant Security */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <div className="hidden lg:flex items-center justify-center order-1 lg:order-none">
              <div className="grid grid-cols-2 gap-4 max-w-xs animate-on-scroll">
                <div className="p-6 rounded-xl border border-teal/20 bg-teal/[0.03] text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-navy">CRYSTALS-Dilithium</div>
                  <div className="text-[10px] text-slate-400 mt-1">Digital Signatures</div>
                </div>
                <div className="p-6 rounded-xl border border-teal/20 bg-teal/[0.03] text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-navy">CRYSTALS-Kyber</div>
                  <div className="text-[10px] text-slate-400 mt-1">Key Exchange</div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Security</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Quantum-resistant cryptography
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  OWNR integrates post-quantum cryptographic security at the protocol level. The network incorporates advanced cryptographic standards designed to resist potential attacks from future quantum computing systems.
                </p>
                <p className="text-navy font-medium border-l-2 border-teal pl-4">
                  These cryptographic systems maintain compatibility with existing infrastructure while providing forward-looking security guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Application Layer */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">Layer 04</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
            Financial applications built on programmable assets
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            Once mortgage assets operate on OWNR infrastructure, new financial applications can be built on top of them, including both institutional trading systems and retail investment platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Institutional Trading", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { label: "Retail Investment", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { label: "Liquidity Infra", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].map((node) => (
              <div key={node.label} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm animate-on-scroll">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={node.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-navy">{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Closing CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80 z-[1]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Infrastructure for the next generation of mortgage markets
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            OWNR is building the technical foundation that allows mortgage-backed financial assets to operate on programmable financial infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
              Partner with OWNR
            </Link>
            <Link href="/why-ownr" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-lg inline-block">
              Explore the Platform
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
