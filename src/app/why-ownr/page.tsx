import Link from "next/link";

export default function WhyOwnr() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy text-white grid-overlay">

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
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

          {/* Right: Capital flow diagram */}
          <div className="hidden lg:flex flex-col items-center gap-0">
            {[
              { label: "Investors", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Capital Markets", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { label: "Mortgage Finance", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { label: "Homeowners", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            ].map((step, i, arr) => (
              <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                <div className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 border border-teal/25 flex items-center justify-center text-teal-light shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="w-px h-5 bg-gradient-to-b from-white/10 to-teal/30" />
                    <svg className="w-3 h-3 text-teal/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Housing Finance Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
            Housing finance connects global capital to everyday life
          </h2>
          <div className="space-y-5 text-slate-500 text-lg leading-relaxed text-left max-w-2xl mx-auto">
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
            <p className="text-navy font-medium">
              Better infrastructure does not only improve trading.
            </p>
            <p className="text-navy font-medium">
              It improves how capital reaches homeowners.
            </p>
          </div>
        </div>

        {/* Capital flow diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { label: "Institutional Investors", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { label: "MBS Market", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { label: "Lenders", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Homeowners", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-3 animate-on-scroll">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-navy mt-2 max-w-[100px]">{step.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block w-12 h-px bg-gradient-to-r from-slate-300 to-teal/40 mb-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Liquidity and Mortgage Costs */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
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

            {/* Right: Liquidity visualization */}
            <div className="flex flex-col items-center gap-3">
              {[
                { width: "w-[30%]", label: "Limited liquidity", opacity: "opacity-30" },
                { width: "w-[50%]", label: "Growing depth", opacity: "opacity-50" },
                { width: "w-[70%]", label: "Efficient markets", opacity: "opacity-70" },
                { width: "w-[90%]", label: "Deep, transparent liquidity", opacity: "opacity-100" },
              ].map((bar) => (
                <div key={bar.label} className="w-full flex items-center gap-4 animate-on-scroll">
                  <div className={`h-12 ${bar.width} rounded-lg bg-gradient-to-r from-teal/20 to-teal ${bar.opacity} transition-all duration-1000`} />
                  <span className="text-xs font-medium text-white/40 whitespace-nowrap">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Legacy Infrastructure */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              Mortgage markets still rely on infrastructure built decades ago
            </h2>
            <div className="space-y-5 text-slate-500 text-lg leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                Despite being one of the largest bond markets in the world, mortgage securities still rely on systems designed long before modern digital infrastructure existed.
              </p>
              <p>Settlement often takes days.</p>
              <p>Ownership records are fragmented across multiple intermediaries.</p>
              <p>Access to the underlying assets remains limited for many investors.</p>
              <p>These systems were not designed for programmable financial networks.</p>
              <p className="text-navy font-medium">
                Modern infrastructure makes it possible to rethink how these markets operate.
              </p>
              <p>
                OWNR was founded to explore how new infrastructure can improve one of the most important financial markets in the world.
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Legacy System</p>
              <ul className="space-y-4">
                {[
                  "T+1 settlement",
                  "Fragmented records",
                  "Limited access",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                    <span className="text-slate-500 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl border border-teal/20 bg-teal/[0.03] animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-6">Modern Infrastructure</p>
              <ul className="space-y-4">
                {[
                  "Atomic settlement",
                  "Transparent ownership",
                  "Programmable compliance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Expanding Access */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center">
            Financial markets should not be limited by outdated infrastructure
          </h2>
          <div className="space-y-5 text-white/60 text-lg leading-relaxed mb-16">
            <p>
              Many of the most stable income-producing financial assets have historically been accessible only through institutional channels.
            </p>
            <p>
              Mortgage-backed securities are a clear example.
            </p>
            <p>
              While these assets underpin the housing finance system, direct access has largely been limited to banks, asset managers, and institutional investors.
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

          {/* Access expansion visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-white/10 bg-white/5 text-center animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">Today</p>
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white/50 text-center leading-tight">Institutional<br />access</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-teal/25 bg-teal/10 text-center animate-on-scroll">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-light mb-6">Future</p>
              <div className="flex justify-center gap-3">
                {[
                  "Institutional",
                  "Advisors",
                  "Individual investors",
                ].map((label, i) => (
                  <div key={label} className={`rounded-full border flex items-center justify-center ${i === 0 ? "w-20 h-20 bg-teal/15 border-teal/25" : i === 1 ? "w-16 h-16 bg-teal/15 border-teal/20" : "w-14 h-14 bg-teal/15 border-teal/15"}`}>
                    <span className="text-[10px] font-semibold text-teal-light text-center leading-tight px-1">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Why Now */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
              A new era of financial infrastructure is emerging
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Several forces are converging to reshape how financial assets move through global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Programmable Networks",
                icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
              },
              {
                title: "Institutional Adoption",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Digital Custody",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Regulatory Clarity",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              },
            ].map((block) => (
              <div key={block.title} className="p-6 text-center rounded-xl border border-slate-200 bg-white shadow-sm animate-on-scroll">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={block.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-navy">{block.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mt-12">
            Together, these developments are enabling the next evolution of capital markets.
          </p>
          <p className="text-center text-navy font-medium text-lg mt-4">
            OWNR was built to help bring one of the world&apos;s most important financial markets into that future.
          </p>
        </div>
      </section>

      {/* SECTION 7: Closing Mission */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        {/* Subtle grid overlay */}
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
              It influences who can access markets.
            </p>
            <p>
              It shapes the cost of borrowing.
            </p>
            <p>
              It determines how efficiently investment reaches the real economy.
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
