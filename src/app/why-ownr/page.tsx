import Link from "next/link";
import Image from "next/image";

export default function WhyOwnr() {
  return (
    <>
      {/* SECTION 1: Hero — image16.jpg as atmospheric background photo */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy text-white">
        {/* Background photo */}
        <Image
          src="/deck-assets/image16.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Why OWNR
            </h1>
            <div className="space-y-5 text-white/60 text-lg leading-relaxed max-w-xl">
              <p className="text-xl text-white/80 font-medium leading-relaxed">
                Financial infrastructure determines how opportunity moves through the economy.
              </p>
              <p>
                Behind every mortgage, every home purchase, and every housing market is a global financial system that moves trillions of dollars through capital markets.
              </p>
              <p>
                Yet the infrastructure supporting those markets has changed far less than the technology surrounding it.
              </p>
              <p className="text-white font-medium italic border-l-2 border-teal pl-4">
                OWNR was created with a simple belief: financial markets should be more transparent, more efficient, and more accessible than they are today.
              </p>
            </div>
            <div className="mt-10">
              <Link href="#" className="px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-base inline-block">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Key metrics floating over the photo */}
          <div className="hidden lg:flex flex-col gap-5">
            {[
              { stat: "$15T", label: "MBS Market Size", desc: "The second largest fixed-income asset class" },
              { stat: "$311B", label: "Traded Daily", desc: "One of the most liquid markets on Earth" },
              { stat: "0%", label: "Retail Access", desc: "Until now, closed to everyday investors" },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm animate-on-scroll">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-3xl font-bold text-teal-light">{item.stat}</span>
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">{item.label}</span>
                </div>
                <p className="text-sm text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Housing Finance — product screenshot on right */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Housing finance connects global capital to everyday life
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  Mortgage-backed securities are not just another financial asset.
                </p>
                <p>
                  They are the mechanism that connects global capital markets to the housing economy.
                </p>
                <p>
                  When investors purchase mortgage bonds, they provide the capital that allows lenders to issue new home loans.
                </p>
                <p>
                  This system supports millions of homeowners and represents one of the largest financial markets in the world.
                </p>
                <p>
                  The efficiency of this market directly influences the availability and cost of housing finance.
                </p>
                <p className="text-navy font-medium border-l-2 border-teal pl-4">
                  Better infrastructure does not only improve trading. It improves how capital reaches homeowners.
                </p>
              </div>
            </div>

            {/* Right: Product screenshot in device frame */}
            <div className="flex justify-center lg:pt-4">
              <div className="relative animate-on-scroll">
                {/* Glow behind device */}
                <div className="absolute -inset-8 bg-gradient-to-br from-teal/10 via-transparent to-teal/5 rounded-3xl blur-2xl" />
                {/* Device frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-navy/10 bg-[#0f1629]">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1f36] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/30 font-mono">app.ownr.com</div>
                    </div>
                  </div>
                  <Image
                    src="/deck-assets/image40.png"
                    alt="OWNR trading interface showing USDC to SUMBS1 swap with FINRA pricing"
                    width={480}
                    height={480}
                    className="w-full max-w-[480px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Liquidity — photo background with stat overlays */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        {/* Background photo */}
        <Image
          src="/deck-assets/image42.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Liquidity reduces friction in financial markets
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  Markets function best when capital can move freely between investors and borrowers.
                </p>
                <p className="text-white font-medium">
                  When liquidity is deep and transparent:
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    "Investors can trade efficiently",
                    "Price discovery improves",
                    "Capital flows more easily into the system",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Over time, deeper liquidity can help reduce the cost of capital throughout financial markets.
                </p>
                <p>
                  In mortgage markets, that can ultimately contribute to more efficient financing conditions for lenders and borrowers.
                </p>
                <p className="text-white font-medium border-l-2 border-teal pl-4">
                  Improving infrastructure is not only about speed. It is about strengthening the foundations of one of the most important financial systems in the world.
                </p>
              </div>
            </div>

            {/* Right: Stat cards overlaying the photo atmosphere */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "$311B", label: "Daily Volume", sub: "Among the most liquid markets globally" },
                { stat: "~12s", label: "Settlement", sub: "Atomic DvP on programmable rails" },
                { stat: "24/7", label: "Market Hours", sub: "Trade anytime, across borders" },
                { stat: "T+0", label: "Target", sub: "Instant finality replaces T+1-3" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm animate-on-scroll">
                  <div className="text-2xl md:text-3xl font-bold text-teal-light mb-1">{item.stat}</div>
                  <div className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">{item.label}</div>
                  <p className="text-xs text-white/35 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Legacy Infrastructure — left-aligned heading, full-width cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Mortgage markets still rely on infrastructure built decades ago
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  Despite being one of the largest bond markets in the world, mortgage securities still rely on systems designed long before modern digital infrastructure existed.
                </p>
                <p>
                  Settlement often takes days. Ownership records are fragmented across multiple intermediaries. Access to the underlying assets remains limited for many investors.
                </p>
                <p>
                  These systems were not designed for programmable financial networks.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex items-end">
              <div className="space-y-4">
                <p className="text-navy font-medium text-lg">
                  Modern infrastructure makes it possible to rethink how these markets operate.
                </p>
                <p className="text-slate-500 text-lg leading-relaxed">
                  OWNR was founded to explore how new infrastructure can improve one of the most important financial markets in the world.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison — full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Legacy System</p>
              <ul className="space-y-4">
                {[
                  { item: "T+1 settlement", detail: "Days of locked capital" },
                  { item: "Fragmented records", detail: "Multiple intermediaries" },
                  { item: "Limited access", detail: "Institutional gates" },
                ].map((row) => (
                  <li key={row.item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">{row.item}</span>
                      <span className="text-slate-400 text-sm ml-2">{row.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-teal/20 bg-teal/[0.03] animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-6">Modern Infrastructure</p>
              <ul className="space-y-4">
                {[
                  { item: "Atomic settlement", detail: "Seconds, not days" },
                  { item: "Transparent ownership", detail: "Onchain verification" },
                  { item: "Programmable compliance", detail: "Automated & auditable" },
                ].map((row) => (
                  <li key={row.item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-navy font-medium">{row.item}</span>
                      <span className="text-slate-500 text-sm ml-2">{row.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Expanding Access — photo background with stat blocks */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        {/* Background photo */}
        <Image
          src="/deck-assets/image49.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Financial markets should not be limited by outdated infrastructure
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  Many of the most stable income-producing financial assets have historically been accessible only through institutional channels.
                </p>
                <p>
                  Mortgage-backed securities are a clear example. While these assets underpin the housing finance system, direct access has largely been limited to banks, asset managers, and institutional investors.
                </p>
                <p>
                  Advances in financial infrastructure now make it possible to broaden participation in these markets.
                </p>
                <p className="text-white font-medium">
                  OWNR believes that expanding access responsibly can strengthen financial markets while opening new opportunities for investors.
                </p>
                <p>
                  More open infrastructure can create deeper liquidity and stronger markets over time.
                </p>
              </div>
            </div>

            {/* Right: Access evolution timeline */}
            <div className="space-y-5">
              {[
                {
                  era: "1970s",
                  label: "Banks Only",
                  desc: "MBS created — accessible exclusively to commercial and investment banks.",
                  active: false,
                },
                {
                  era: "2000s",
                  label: "Institutions",
                  desc: "Asset managers, pension funds, and insurance companies gain access through specialized channels.",
                  active: false,
                },
                {
                  era: "Now",
                  label: "Global Access",
                  desc: "Tokenized infrastructure opens MBS markets to global retail investors.",
                  active: true,
                },
              ].map((step) => (
                <div
                  key={step.era}
                  className={`p-6 rounded-xl border animate-on-scroll ${
                    step.active
                      ? "border-teal/30 bg-teal/10 backdrop-blur-sm"
                      : "border-white/10 bg-white/[0.03] backdrop-blur-sm"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      step.active
                        ? "bg-teal/20 text-teal-light"
                        : "bg-white/5 text-white/40"
                    }`}>
                      {step.era}
                    </span>
                    <span className={`text-lg font-bold ${step.active ? "text-white" : "text-white/60"}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${step.active ? "text-white/70" : "text-white/35"}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Now — left-aligned intro, grid below */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              A new era of financial infrastructure is emerging
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Several forces are converging to reshape how financial assets move through global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                title: "Programmable Networks",
                desc: "Smart contracts enable automated, transparent financial operations.",
                icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
              },
              {
                title: "Institutional Adoption",
                desc: "Major financial institutions are embracing digital asset infrastructure.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Digital Custody",
                desc: "Secure, regulated custody solutions for tokenized securities.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Regulatory Clarity",
                desc: "Evolving frameworks provide clearer paths for compliant innovation.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              },
            ].map((block) => (
              <div key={block.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm animate-on-scroll">
                <div className="w-12 h-12 mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={block.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">{block.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl">
            <p className="text-slate-500 text-lg leading-relaxed mb-3">
              Together, these developments are enabling the next evolution of capital markets.
            </p>
            <p className="text-navy font-medium text-lg">
              OWNR was built to help bring one of the world&apos;s most important financial markets into that future.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: Closing Mission — centered CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            Infrastructure shapes opportunity
          </h2>
          <div className="space-y-5 text-white/60 text-lg leading-relaxed mb-12">
            <p>
              Financial infrastructure quietly determines how capital flows through the global economy.
            </p>
            <p>
              It influences who can access markets. It shapes the cost of borrowing. It determines how efficiently investment reaches the real economy.
            </p>
            <p className="text-white font-medium">
              OWNR exists to help build infrastructure that makes these systems more transparent, more efficient, and more accessible.
            </p>
            <p className="text-teal-light font-semibold text-xl">
              Starting with mortgage markets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="#" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-lg">
              Partner with OWNR
            </Link>
            <Link href="#" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors text-lg">
              Join the Waitlist
            </Link>
          </div>

          <p className="text-white/30 text-sm font-medium tracking-wide">
            Where Ownership Meets Opportunity
          </p>
        </div>
      </section>
    </>
  );
}
