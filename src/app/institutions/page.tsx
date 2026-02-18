import Image from "next/image";
import Link from "next/link";
import CapitalEfficiencyCalculator from "@/components/CapitalEfficiencyCalculator";

const onchainBenefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "T+0 Atomic Settlement",
    desc: "Collapse T+1-3 into ~12 seconds. Atomic delivery-versus-payment means settlement and delivery happen simultaneously — no more settlement risk, no more failed trades.",
    stat: "~12 sec",
    statLabel: "vs. 3 days today",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Capital Efficiency",
    desc: "Free up billions in trapped capital. Tokenized collateral and instant settlement mean dramatically lower margin requirements, reduced warehouse exposure, and freed balance sheet capacity.",
    stat: "60-80%",
    statLabel: "capital savings",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Zero Counterparty Risk",
    desc: "Smart contract escrow replaces trust-based settlement. Every trade is transparent, immutable, and automatically compliant — KYC/AML and TRACE reporting enforced at the contract level.",
    stat: "0",
    statLabel: "counterparty risk",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Distribution",
    desc: "Tokenization breaks MBS out of the closed dealer network. For the first time, global capital — retail, DeFi, sovereign wealth — can flow into MBS, deepening your order book.",
    stat: "24/7",
    statLabel: "global access",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Onchain Transparency",
    desc: "Real-time loan-level analytics: pool factors, principal balances, CPR, prepayment speeds — all onchain. Better data means better pricing, better risk management, and better decisions.",
    stat: "Real-time",
    statLabel: "pool analytics",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Programmable Infrastructure",
    desc: "Smart contracts automate what humans currently do: compliance checks, TRACE reporting, coupon payments, pool factor updates. Reduce ops costs by orders of magnitude.",
    stat: "90%+",
    statLabel: "ops cost reduction",
  },
];

const tradeTypes = [
  "TBA (To-Be-Announced)",
  "Specified Pools",
  "Dollar Rolls",
  "Pair-offs",
  "Coupon Swaps",
  "Structured Tranches",
];

const marketMakerBenefits = [
  {
    title: "Trading Fee Revenue",
    desc: "Earn bps-based fees on every MBS trade. The $311B daily MBS volume means consistent, high-throughput fee generation from day one.",
  },
  {
    title: "Funding-Rate Capture",
    desc: "Capture funding-rate spreads from leveraged positions and directional retail flow. Persistent yield opportunities that don't exist in legacy MBS.",
  },
  {
    title: "Continuous Liquidity Provision",
    desc: "Provide two-sided liquidity to MBSX pools and earn yield from every swap. Multiple return streams in a single position — fees, spreads, and vault yields.",
  },
  {
    title: "24/7 Yield Generation",
    desc: "Unlike traditional markets closed on weekends, MBSX pools generate yield around the clock — including after-hours when TBA markets are dark.",
  },
  {
    title: "Institutional Data Services",
    desc: "Premium real-time market data, analytics, and API feeds. Sell high-speed data packages to other dealers, quants, and asset managers as an additional revenue stream.",
  },
  {
    title: "New Retail Demand",
    desc: "For the first time, retail capital flows into MBS. Market makers benefit from an entirely new source of order flow and liquidity that deepens the book.",
  },
];

export default function InstitutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white pt-28 pb-24 px-6 overflow-hidden grid-overlay">
        <Image src="/deck-assets/image6.jpg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(52,125,135,0.2)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-teal/30 rounded-full bg-teal/10">
            <span className="text-teal-light text-xs font-bold tracking-wider">FOR INSTITUTIONS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            MBS Infrastructure,
            <br />
            <span className="text-teal-light">Rebuilt for the Onchain Era</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            1:1 regulated digital twins of every MBS CUSIP.
            Atomic settlement. Programmable compliance. Full FIX/DTCC integration.
            All the trades you run today — TBA, specified pools, dollar rolls —
            now settling in seconds instead of days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/data-room" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Request Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Why Move Onchain */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Why Move MBS Onchain</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Every Advantage. Zero Disruption.
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              FIX/FpML middleware means MBSX plugs into your existing systems.
              No rip-and-replace. Just better infrastructure underneath.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onchainBenefits.map((item) => (
              <div key={item.title} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-slate-50 group animate-on-scroll">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-teal">{item.stat}</div>
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

      {/* Digital Twins */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Digital Twins</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Every Trade Type. Now Atomic.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Each digital twin maps 1:1 to a specific MBS CUSIP — including TBA tokens
                that convert to settled MBS tokens at the 48-hour day. Immutable
                static data (issuer, coupon, maturity) and dynamic pool data (pool factor,
                CPR, principal balances) are updated in real time onchain. Permissioned minting ensures
                only KYC-cleared dealers can issue tokens — while fractional divisibility
                preserves CUSIP-level fidelity.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {tradeTypes.map((t) => (
                  <div key={t} className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200">
                    <svg className="w-4 h-4 text-teal shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-navy">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold text-teal-light mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Tokenize", desc: "MBS CUSIPs become digital twins onchain. Legal title stays with custodian; token reflects beneficial interest." },
                  { step: "02", title: "Trade", desc: "Order-book matching with price-time priority. Same conventions, ~12 second settlement." },
                  { step: "03", title: "Settle", desc: "Atomic delivery-versus-payment. No clearing delays, no failed trades, no counterparty risk." },
                  { step: "04", title: "Report", desc: "Programmable compliance auto-generates TRACE reports, KYC/AML checks, and audit trails." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="text-teal-light font-mono font-bold text-sm mt-0.5">{s.step}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{s.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Efficiency Calculator */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Capital Efficiency
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              See How Much You Save
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Adjust the trade size and holding period to see how tokenized MBS settlement
              dramatically reduces costs and frees capital.
            </p>
          </div>
          <CapitalEfficiencyCalculator />
        </div>
      </section>

      {/* Yield Comparison */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Yield Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Dramatically Better Returns
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              See how MBSX digital twins stack up against legacy products.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 text-slate-500 font-medium">Metric</th>
                  <th className="text-center py-4 px-4 font-bold text-teal bg-teal/5 rounded-t-lg">MBSX</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">Traditional TBA</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">MBS ETF (VMBS)</th>
                  <th className="text-center py-4 px-4 text-slate-400 font-medium">REIT (AGNC)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Avg. Returns", vals: ["5-15%", "5-15%", "1-2%", "10-15%"], highlight: true },
                  { metric: "Take Rate", vals: ["0.3-1.0 bps", "0.3-1.0 bps", "4 bps/yr", "100-200 bps/yr"], highlight: true },
                  { metric: "Settlement", vals: ["~12 seconds", "T+3", "T+2", "T+2"], highlight: true },
                  { metric: "Trading Hours", vals: ["24/7", "Market Hours", "Market Hours", "Market Hours"], highlight: true },
                  { metric: "Direct MBS Exposure", vals: ["Yes (1:1 digital twin)", "Yes", "No (fund)", "No (REIT)"], highlight: true },
                  { metric: "Counterparty Risk", vals: ["None (atomic DvP)", "Bilateral", "Fund-level", "Corporate"], highlight: true },
                ].map((row) => (
                  <tr key={row.metric} className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-navy">{row.metric}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className={`py-3 px-4 text-center ${
                        i === 0 ? "bg-teal/5 font-bold text-teal" : "text-slate-500"
                      }`}>
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

      {/* Market Makers & LPs */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Market Makers & Liquidity Providers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              New Revenue Streams. Continuous Yield.
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              MBSX opens revenue opportunities that don&apos;t exist in traditional MBS —
              continuous liquidity provision, funding-rate capture, and an entirely
              new source of retail order flow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketMakerBenefits.map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-xl animate-on-scroll">
                <h3 className="font-bold text-teal-light mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Revenue summary */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { label: "Trading Fees", desc: "bps on every trade" },
              { label: "Mint/Redeem", desc: "Token issuance & burn" },
              { label: "Data Licensing", desc: "Premium APIs & feeds" },
            ].map((r) => (
              <div key={r.label} className="p-4 rounded-xl bg-teal/10 border border-teal/20 text-center">
                <div className="font-bold text-white text-sm mb-1">{r.label}</div>
                <div className="text-[11px] text-white/40">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Integration</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Plug In. Don&apos;t Rip Out.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            MBSX uses FIX / FpML middleware that syncs directly with DTCC and
            FINRA TRACE. Your existing workflows, reporting, and compliance
            processes stay exactly the same — the settlement layer underneath
            just gets dramatically better.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["FIX Protocol", "FpML", "DTCC", "FINRA TRACE", "KYC/AML", "CUSIP Mapping"].map((tag) => (
              <div key={tag} className="px-5 py-2.5 bg-slate-100 rounded-lg text-sm font-medium text-navy border border-slate-200">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move MBS Onchain?
          </h2>
          <p className="text-white/70 mb-8">
            Access our whitepaper, financial model, and technical architecture in the data room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-room" className="px-8 py-3.5 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
