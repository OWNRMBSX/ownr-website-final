import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Now section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Regulatory Clarity Meets Market Momentum
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Why the Time is Now
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              MBS is the largest unclaimed RWA tokenization opportunity. With
              new federal legislation, institutional infrastructure going
              onchain, and $18.9T projected by 2033 — the moment is here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "GENIUS Act",
                desc: "First federal crypto legislation signed into law — stablecoin framework established.",
              },
              {
                title: "CLARITY Act",
                desc: "Passed House 294-134 — digital commodities framework ends SEC-CFTC conflict.",
              },
              {
                title: "BlackRock BUIDL",
                desc: "$2.5B+ tokenized treasury fund with 800%+ growth in 18 months.",
              },
              {
                title: "$18.9T by 2033",
                desc: "BCG/Ripple forecast for tokenized assets — 100%+ CAGR, fastest-growing financial segment.",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Dual market CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/institutions" className="group card-hover block p-8 bg-navy rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-teal-light text-xs font-semibold uppercase tracking-wider mb-2">Primary Exchange</p>
              <h3 className="text-2xl font-bold mb-3">For Institutions</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                1:1 digital twins of MBS CUSIPs with atomic DvP settlement,
                FIX/DTCC integration, and programmable compliance.
              </p>
              <span className="text-teal-light text-sm font-semibold group-hover:underline">
                Learn More &rarr;
              </span>
            </Link>

            <Link href="/retail" className="group card-hover block p-8 bg-gradient-to-br from-teal to-teal-dark rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">Synthetic Exchange</p>
              <h3 className="text-2xl font-bold mb-3">For Retail Investors</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Fractional, 24/7 access to mortgage-backed securities.
                Government-backed yield from $10. No brokerage required.
              </p>
              <span className="text-white text-sm font-semibold group-hover:underline">
                Learn More &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* CTA banner */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re an institution looking to tokenize MBS or a retail
            investor seeking access to government-backed yield — OWNR has a
            path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/data-room"
              className="px-8 py-3.5 bg-white text-navy font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Access Data Room
            </Link>
            <Link
              href="/waitlist"
              className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
