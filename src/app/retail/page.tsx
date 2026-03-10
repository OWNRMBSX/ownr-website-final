import Link from "next/link";
import Image from "next/image";

export default function Retail() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge-pill mb-5">Retail Investors</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-8 leading-[1.05]">
              Access mortgage markets in a new way
            </h1>
            <div className="space-y-5 text-slate-500 text-lg leading-relaxed max-w-xl">
              <p>
                For decades, mortgage-backed securities have been one of the most important fixed-income markets in the world. These assets generate income from millions of homeowners making monthly mortgage payments and have long been a core holding in institutional portfolios.
              </p>
              <p>
                Yet direct access to this market has historically been limited to large financial institutions.{" "}
                <span className="text-navy font-semibold">OWNR is changing that.</span>
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow text-base inline-block">
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* Right: Income flow diagram */}
          <div className="hidden lg:flex flex-col items-center gap-0">
            {[
              {
                label: "Homeowners",
                sub: "Monthly mortgage payments",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                color: "bg-slate-50 border-slate-200 text-navy",
              },
              {
                label: "Mortgage Pools",
                sub: "Aggregated mortgage assets",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                color: "bg-teal/10 border-teal/20 text-navy",
              },
              {
                label: "You Earn Income",
                sub: "Yield from real mortgage payments",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "bg-navy border-navy text-white",
              },
            ].map((step, i, arr) => (
              <div key={step.label} className="w-full max-w-sm animate-on-scroll">
                <div className={`p-6 rounded-xl border ${step.color} flex items-center gap-4`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    step.color.includes("text-white")
                      ? "bg-white/10 border border-white/20 text-white"
                      : "bg-teal/10 border border-teal/20 text-teal"
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-0.5">{step.label}</div>
                    <div className={`text-sm ${step.color.includes("text-white") ? "text-white/60" : "text-slate-500"}`}>{step.sub}</div>
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
          </div>
        </div>
      </section>

      {/* SECTION 2: Why mortgage markets */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Why investors are paying attention to{" "}
              <span className="text-gradient-teal">mortgage markets</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mortgage-backed securities represent one of the largest bond markets in the world and play a central role in global finance. They offer investors exposure to residential housing markets while generating income from underlying mortgage payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "$15T",
                title: "Market Size",
                desc: "One of the largest bond markets in the world, second only to U.S. Treasuries.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                stat: "Real",
                title: "Income Stream",
                desc: "Income generated from real mortgage payments made by millions of homeowners.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                stat: "Deep",
                title: "Institutional Participation",
                desc: "Widely used by pension funds, banks, and asset managers for decades.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                stat: "Active",
                title: "Market Liquidity",
                desc: "Deep and active secondary markets with over $350B+ traded every single day.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover gradient-border p-7 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="w-12 h-12 mb-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-teal mb-1">{item.stat}</div>
                <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-lg mt-10 max-w-2xl mx-auto">
            For decades, these assets have been widely used by institutional investors.{" "}
            <span className="text-navy font-semibold">OWNR makes it possible for individual investors to participate as well.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3: How investors earn income */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              How investors <span className="text-gradient-teal">earn income</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mortgage investments generate income from homeowners making monthly mortgage payments. Each payment includes both principal and interest. The interest portion becomes income for investors holding mortgage-backed securities.
            </p>
          </div>

          {/* Three-step flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Mortgage Payments",
                desc: "Millions of homeowners make monthly mortgage payments that include principal and interest.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                step: "02",
                title: "Mortgage Pool Income",
                desc: "Payments are aggregated across mortgage pools, generating income from the underlying assets.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
              {
                step: "03",
                title: "Investor Distributions",
                desc: "Income generated by underlying mortgages is distributed to investors through OWNR investment products.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex flex-col items-center text-center animate-on-scroll">
                <div className="w-16 h-16 mb-5 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-xs font-bold text-teal uppercase tracking-wider mb-2">Step {item.step}</span>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{item.desc}</p>
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <svg className="w-5 h-5 text-teal/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-lg mt-12 max-w-2xl mx-auto">
            For investors, this means exposure to income generated by{" "}
            <span className="text-navy font-semibold">real housing markets</span>.
          </p>
        </div>
      </section>

      {/* SECTION 4: Built on real financial assets */}
      <section className="relative section-padding bg-navy text-white overflow-hidden grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-light mb-4">Real Assets</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Built on real financial assets
              </h2>
              <div className="space-y-5 text-white/60 text-lg leading-relaxed">
                <p>
                  OWNR investment products are backed by real mortgage market exposure. Tokenized ETFs and mortgage funds represent positions in underlying financial assets while maintaining their original structure and regulatory framework.
                </p>
                <p>
                  Rather than creating speculative digital assets, OWNR provides access to established investment products that already exist within global financial markets.
                </p>
                <p className="text-white font-medium border-l-2 border-teal pl-4">
                  This allows investors to participate in mortgage markets through a platform designed for modern investing.
                </p>
              </div>
            </div>

            {/* Right: Asset mapping diagram */}
            <div className="hidden lg:flex flex-col items-center gap-0">
              {[
                { label: "Traditional Financial Asset", sub: "Existing MBS, ETFs, mortgage funds" },
                { label: "Digital Representation", sub: "Tokenized 1:1 on secure infrastructure" },
                { label: "Investor Access", sub: "Fractional ownership from $10" },
              ].map((step, i, arr) => (
                <div key={step.label} className="w-full max-w-xs animate-on-scroll">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.04] text-center">
                    <div className="font-bold text-white mb-1">{step.label}</div>
                    <div className="text-sm text-white/40">{step.sub}</div>
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
        </div>
      </section>

      {/* SECTION 5: Why onchain markets matter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Why onchain markets matter{" "}
              <span className="text-gradient-teal">for investors</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Bringing financial assets onto blockchain infrastructure introduces several advantages for individual investors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fractional Investing",
                desc: "Invest with smaller minimums. Access markets that historically required institutional-scale capital.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
              {
                title: "Continuous Markets",
                desc: "Markets can operate around the clock rather than only during traditional exchange hours.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Transparent Ownership",
                desc: "Ownership records are onchain, transparent, and verifiable at any time.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Direct Distributions",
                desc: "Income distributions can be delivered directly to investors through programmable infrastructure.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="w-11 h-11 mb-4 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-lg mt-10 max-w-2xl mx-auto">
            For retail investors, this means easier access to markets that historically required{" "}
            <span className="text-navy font-semibold">institutional-scale capital</span>.
          </p>
        </div>
      </section>

      {/* SECTION 6: Two ways to participate */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-2">
              Two ways to
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-teal">participate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-hover gradient-border rounded-2xl overflow-hidden border border-slate-200 bg-white animate-on-scroll">
              <div className="relative h-44 bg-navy overflow-hidden">
                <Image src="/deck-assets/image16.jpg" alt="" fill className="object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-3xl font-bold text-teal-light/30">01</span>
                  <h3 className="text-xl font-bold text-white mt-1">Tokenized ETFs</h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-slate-500 leading-relaxed mb-4">
                  Access tokenized versions of existing mortgage-related ETFs. These tokens mirror the exposure of the underlying ETF while allowing investors to access the product through digital markets.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Familiar investment structures",
                    "Established track records",
                    "Fractional ownership available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-hover gradient-border rounded-2xl overflow-hidden border border-slate-200 bg-white animate-on-scroll">
              <div className="relative h-44 bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
                <Image src="/deck-assets/image42.jpg" alt="" fill className="object-cover opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-3xl font-bold text-white/20">02</span>
                  <h3 className="text-xl font-bold text-white mt-1">Tokenized Mortgage Funds</h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-slate-500 leading-relaxed mb-4">
                  Mortgage funds designed specifically for onchain investors. These funds aggregate mortgage market exposure and distribute income generated by the underlying assets.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Diversified mortgage exposure",
                    "Yield distributions over time",
                    "Built for digital markets",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Early access */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal mb-4">The Future</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                Early access to a new market
              </h2>
              <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
                <p>
                  Tokenized real-world assets are rapidly emerging as one of the most important developments in modern finance. Mortgage markets are only the beginning.
                </p>
                <p>
                  OWNR is building infrastructure designed to bring large-scale financial markets into a new generation of digital investment platforms.
                </p>
                <p className="text-navy font-medium border-l-2 border-teal pl-4">
                  Investors joining early will be among the first to access mortgage-backed yield through these new market structures.
                </p>
              </div>
            </div>

            {/* Right: Vision timeline */}
            <div className="space-y-4">
              {[
                { label: "Mortgage Markets", active: true, desc: "Tokenized MBS, ETFs, and mortgage funds" },
                { label: "Fixed Income", active: false, desc: "Treasuries, corporate bonds, and credit" },
                { label: "Broader Markets", active: false, desc: "Equities, funds, and alternative assets" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`p-5 rounded-xl border animate-on-scroll ${
                    item.active
                      ? "border-teal/30 bg-teal/[0.06]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.active ? "bg-teal" : "bg-slate-300"}`} />
                    <span className={`text-lg font-bold ${item.active ? "text-navy" : "text-slate-400"}`}>
                      {item.label}
                    </span>
                    {item.active && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-0.5 rounded">
                        Now
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ml-[22px] ${item.active ? "text-slate-500" : "text-slate-400"}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <Image
          src="/deck-assets/image49.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/95 to-navy/80 z-[1]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Get early access
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We are currently onboarding early users as the platform prepares to launch. Join the waitlist to receive updates and early access opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
              Join the Waitlist
            </Link>
            <Link href="/why-ownr" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-lg inline-block">
              Learn How OWNR Works
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
