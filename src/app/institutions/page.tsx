import Image from "next/image";
import Link from "next/link";

const primaryTokenFeatures = [
  {
    title: "1:1 Mapping",
    desc: "Each token represents a par value in a specific MBS CUSIP with immutable static data.",
  },
  {
    title: "Dynamic Pool Data",
    desc: "Pool factor, principal balances, current CPR updated in real time onchain.",
  },
  {
    title: "TBA Mutation Logic",
    desc: 'TBA Token converts to Primary Token at "48-hour day" once settled.',
  },
  {
    title: "Permissioned Minting",
    desc: "Only KYC-cleared dealers can mint assets to the primary exchange.",
  },
  {
    title: "Fractional Access",
    desc: "Divisible up to 18 decimals while retaining CUSIP-level fidelity.",
  },
  {
    title: "Non-Custodial Wrapper",
    desc: "Legal title stays with legacy custodian; token reflects beneficial interest.",
  },
];

const exchangeFeatures = [
  {
    title: "Order-Book Model",
    desc: "Preserves market convention with price-time priority.",
  },
  {
    title: "Atomic DvP",
    desc: "Collapses T+1-3 to ~12-15 second settlement.",
  },
  {
    title: "Supported Trades",
    desc: "TBA, specified pools, dollar rolls, pair-offs, coupon swaps.",
  },
  {
    title: "Programmable Compliance",
    desc: "Contract-level KYC/AML, TRACE reporting enforced automatically.",
  },
  {
    title: "Legacy Integration",
    desc: "FIX / FpML middleware syncs with DTCC and FINRA TRACE.",
  },
  {
    title: "24/7 Availability",
    desc: "Continuous trading with after-hours redemption for institutional flexibility.",
  },
];

const whyInstitutions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Capital Efficiency",
    desc: "Tokenized collateral and atomic settlement reduce capital requirements and free up balance sheet capacity.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "T+0 Settlement",
    desc: "Near-instant atomic delivery-versus-payment eliminates settlement risk. Move from T+1-3 to ~12 seconds.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Reduced Counterparty Risk",
    desc: "Smart contract escrow and onchain transparency eliminate counterparty risk and reduce operational overhead.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Distribution",
    desc: "Tokenization enables access beyond usual banks, hedge funds, and asset managers — improving distribution globally.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Better Analytics",
    desc: "Loan-level analytics and onchain transparency provide unprecedented data access for risk management.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "New Liquidity Pool",
    desc: "Synthetic tokens bring retail and alternative capital to absorb risk that previously stayed on institutional balance sheets.",
  },
];

const competitors = [
  { name: "OWNR", highlight: true, positioning: "Dual-Market: Institutional MBS + retail synthetic derivatives", mbs: true, retail: true, settlement: true, synthetic: true, fix: true },
  { name: "Ondo Finance", highlight: false, positioning: "Tokenized Treasury products for DeFi integration", mbs: false, retail: true, settlement: true, synthetic: false, fix: false },
  { name: "Securitize", highlight: false, positioning: "Issuer-focused tokenization infrastructure", mbs: false, retail: false, settlement: true, synthetic: false, fix: false },
  { name: "Canton Network", highlight: false, positioning: "Privacy-preserving institutional infrastructure", mbs: false, retail: false, settlement: true, synthetic: false, fix: true },
  { name: "Tradeweb", highlight: false, positioning: "Incumbent electronic fixed-income trading", mbs: true, retail: false, settlement: false, synthetic: false, fix: true },
];

export default function InstitutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white pt-28 pb-20 px-6 overflow-hidden">
        <Image src="/deck-assets/image6.jpg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(52,125,135,0.2)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
            Primary Exchange
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Regulated Digital Twin of MBS
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            The Primary Token is a 1:1 digital twin of MBS CUSIPs — enabling
            atomic delivery-versus-payment settlement with full FIX protocol and
            DTCC integration. Institutional-grade matching for the onchain era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/data-room" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Request Access
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Token */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Primary Token</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Digital Twin of MBS CUSIP</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Each Primary Token represents par face-value units of a specific MBS pool held in regulated custody.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryTokenFeatures.map((f) => (
              <div key={f.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Exchange */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Primary Exchange</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Institutional-Grade Matching</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Preserves MBS economics with atomic settlement for institutions while unlocking continuous trading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {exchangeFeatures.map((f) => (
              <div key={f.title} className="card-hover p-6 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Institutions Care */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Institutions Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyInstitutions.map((item) => (
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

      {/* OWNR vs Legacy Products */}
      <section className="section-padding bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OWNR vs Legacy Products</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/50 font-medium">Trait</th>
                  <th className="text-center py-3 px-4 text-teal-light font-semibold">OWNR Primary</th>
                  <th className="text-center py-3 px-4 text-teal-light font-semibold">OWNR Synthetic</th>
                  <th className="text-center py-3 px-4 text-white/50 font-medium">Traditional TBA</th>
                  <th className="text-center py-3 px-4 text-white/50 font-medium">MBS ETF</th>
                  <th className="text-center py-3 px-4 text-white/50 font-medium">REIT</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  { trait: "Avg. Returns", vals: ["5-15%", "20-200+%", "5-15%", "1-2%", "10-15%"] },
                  { trait: "Take Rate", vals: ["0.3-1.0 bps", "20-30 bps", "0.3-1.0 bps", "4 bps/yr", "100-200 bps/yr"] },
                  { trait: "Settlement", vals: ["Near Instant", "Near Instant", "T+3", "T+2", "T+2"] },
                  { trait: "Availability", vals: ["Institutions", "Inst. & Retail", "Institutions", "All", "All"] },
                  { trait: "Trading Hours", vals: ["24/7", "24/7", "Market Hours", "Market Hours", "Market Hours"] },
                ].map((row) => (
                  <tr key={row.trait} className="border-b border-white/5">
                    <td className="py-3 px-4 font-medium text-white/60">{row.trait}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className={`py-3 px-4 text-center ${i < 2 ? "text-teal-light font-semibold" : ""}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Landscape</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Competitive Landscape</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium">Platform</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-medium">MBS Focus</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-medium">Retail Access</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-medium">T+0</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-medium">Synthetic</th>
                  <th className="text-center py-3 px-4 text-slate-500 font-medium">FIX/DTCC</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.name} className={`border-b border-slate-100 ${c.highlight ? "bg-teal/5" : ""}`}>
                    <td className={`py-3 px-4 font-semibold ${c.highlight ? "text-teal" : "text-navy"}`}>{c.name}</td>
                    {[c.mbs, c.retail, c.settlement, c.synthetic, c.fix].map((v, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {v ? <span className="text-teal font-bold">&#10003;</span> : <span className="text-slate-300">&mdash;</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Tokenize MBS?
          </h2>
          <p className="text-white/70 mb-8">
            Access our data room for the whitepaper, financial model, and technical architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-room" className="px-8 py-3.5 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Access Data Room
            </Link>
            <Link href="/liquidity" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Liquidity Providers &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
