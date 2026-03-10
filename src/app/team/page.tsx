import Link from "next/link";
import Image from "next/image";

const leadership = [
  {
    name: "Christina Cartagena",
    title: "Chief Executive Officer",
    photo: "/deck-assets/headshot-christina.jpg",
    bio: "Christina Cartagena is a technology and product strategist operating at the intersection of traditional finance and decentralized infrastructure. She previously served as Commercial Strategy Lead for Visible Alpha at S\u0026P Global Market Intelligence, where she helped drive commercial strategy for institutional financial data and analytics products used by global investors. Christina has worked across blockchain infrastructure, fintech innovation, and capital markets data platforms.",
    contribution: "Christina leads OWNR\u2019s strategic roadmap, capital markets partnerships, and investor strategy. She designed the platform\u2019s tokenized mortgage infrastructure, including the dual token model for tokenizing TBA mortgage contracts and structuring pooled mortgage-backed investment products.",
    education: "B.A. from Florida International University with a focus on computer science and marketing.",
    tags: ["Capital Markets Strategy", "Financial Data Infrastructure", "Blockchain Product Strategy"],
  },
  {
    name: "Daniel Pason",
    title: "Chief Innovation Officer",
    photo: "/deck-assets/headshot-daniel.jpg",
    bio: "Daniel Pason brings deep expertise in capital markets and securitized products. He has worked across the agency mortgage-backed securities market and securitized products sector, including roles focused on agency MBS pricing strategies, securitized products research, and institutional investor engagement. His experience spans the mortgage market ecosystem as well as broader capital markets including leveraged finance and long-short investing.",
    contribution: "Daniel provides the institutional capital markets expertise that grounds OWNR\u2019s infrastructure in real world mortgage market mechanics. His experience across agency MBS trading, pricing, and securitized products ensures that OWNR\u2019s tokenized assets faithfully replicate traditional mortgage securities.",
    tags: ["Agency MBS", "Securitized Products", "Mortgage Market Structure"],
  },
  {
    name: "Matthew Moll",
    title: "Chief Operating Officer",
    photo: "/deck-assets/headshot-matthew.jpg",
    bio: "Matthew Moll is a cross-functional operations leader with extensive experience scaling complex operational systems and financial services organizations. He previously advised private equity transactions and held senior operational roles across industries including aerospace, defense, and financial services. Matthew also founded a boutique consulting firm that worked with Fortune 500 companies and private equity-backed businesses.",
    contribution: "Matthew oversees operations, financial strategy, and execution across the company. His experience translating complex technical systems into scalable operational infrastructure ensures OWNR\u2019s platform can grow into institutional-grade market infrastructure.",
    education: "B.S. in Mechanical Engineering from the University of Connecticut. Lean Six Sigma Black Belt certification from Villanova University.",
    tags: ["Operational Infrastructure", "Enterprise Systems", "Scaling Financial Platforms"],
  },
];

const engineering = {
  name: "Sergii Grybniak, PhD",
  title: "Head of Engineering",
  photo: "/deck-assets/headshot-sergii.jpg",
  bio: "Dr. Sergii Grybniak is a distributed ledger researcher and blockchain infrastructure engineer specializing in consensus protocols and decentralized systems. He serves as Head of Research at Waterfall Network and previously worked as a Web3 Institute researcher contributing to blockchain architecture and distributed consensus systems. Dr. Grybniak is a co-chair of the IEEE working group on distributed ledger technologies and has authored numerous academic publications on blockchain protocols, smart contracts, and decentralized architectures. His previous company Carvoy was acquired by Capital One.",
  contribution: "Sergii architects the tokenization engine and blockchain infrastructure that powers OWNR\u2019s mortgage-backed securities platform. His work ensures the platform is built on secure, scalable distributed systems capable of supporting institutional financial markets.",
  tags: ["Distributed Ledger Systems", "Consensus Protocols", "Blockchain Architecture"],
};

const advisors = [
  {
    name: "Hamza Khan",
    role: "Former Head of European Data at NASDAQ",
    desc: "Advises OWNR on institutional data strategy, analytics infrastructure, and financial data monetization.",
    domain: "Finance & Data",
    photo: "/deck-assets/headshot-hamza.jpg",
  },
  {
    name: "Ling Xu",
    role: "Former Vice President, Multifamily Investments \u2014 Freddie Mac",
    desc: "Advises OWNR on mortgage market structure and securitization mechanics.",
    domain: "Mortgage Markets",
    photo: "/deck-assets/headshot-ling.jpg",
  },
  {
    name: "Zackary An",
    role: "Corporate Associate \u2014 Paul Weiss",
    desc: "Advises OWNR on securities law and regulatory architecture for tokenized mortgage assets.",
    domain: "Securities Law",
    photo: "/deck-assets/headshot-zack.jpg",
  },
];

const credibilityLogos = ["S&P Global", "Freddie Mac", "NASDAQ", "Paul Weiss", "IEEE DLT Working Group"];

export default function Team() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.05]">
            Built at the intersection of blockchain and capital markets.
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            The team behind OWNR combines experience across capital markets, mortgage finance, distributed systems engineering, and regulatory law. Together, we are building the infrastructure layer that can support the next generation of mortgage capital markets.
          </p>
          <div className="mt-10 flex justify-center">
            <svg className="w-5 h-5 text-white/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why This Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Experience across the systems that power global capital markets.
              </h2>
            </div>
            <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
              <p>
                OWNR&apos;s team combines experience from some of the institutions that operate the modern mortgage market and the technologies that will power its future.
              </p>
              <p>
                Across capital markets trading, mortgage securitization, financial data infrastructure, distributed systems engineering, and securities law, the team brings together the disciplines required to rebuild market infrastructure.
              </p>
              <p>
                From agency mortgage markets and securitized products to blockchain protocol architecture and regulatory frameworks, OWNR&apos;s leadership reflects the intersection of traditional financial markets and next-generation financial infrastructure.
              </p>
            </div>
          </div>

          {/* Credibility strip */}
          <div className="border-t border-slate-200 pt-10">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">Experience across</p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              {credibilityLogos.map((name) => (
                <span key={name} className="text-sm font-semibold text-navy/40 hover:text-navy/70 transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-6">
              Leadership experience across global financial institutions and blockchain infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-14">Leadership</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="card-hover bg-white rounded-xl border border-slate-200 overflow-hidden animate-on-scroll">
                <div className="aspect-square relative bg-gradient-to-br from-navy/5 to-teal/5">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy">{person.name}</h3>
                  <p className="text-teal font-medium text-sm mb-4">{person.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{person.bio}</p>

                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Contribution to OWNR</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{person.contribution}</p>
                  </div>

                  {person.education && (
                    <p className="text-xs text-slate-400 mb-4">{person.education}</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-teal/[0.06] border border-teal/15 text-xs font-medium text-teal">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Engineering */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Engineering</h2>

          <div className="card-hover bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden animate-on-scroll md:flex md:flex-row">
            <div className="aspect-square md:w-72 md:shrink-0 relative bg-gradient-to-br from-teal/10 to-navy/50">
              <Image
                src={engineering.photo}
                alt={engineering.name}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-white">{engineering.name}</h3>
              <p className="text-teal-light font-medium text-sm mb-5">{engineering.title}</p>
              <p className="text-white/60 leading-relaxed mb-5">{engineering.bio}</p>

              <div className="border-t border-white/10 pt-5 mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2">Contribution to OWNR</p>
                <p className="text-white/60 leading-relaxed">{engineering.contribution}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {engineering.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-xs font-medium text-teal-light">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Advisors */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Advisors</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Advisors provide expertise across mortgage markets, financial data infrastructure, and securities regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="card-hover rounded-xl border border-slate-200 bg-slate-50 overflow-hidden animate-on-scroll">
                <div className="aspect-square relative bg-gradient-to-br from-navy/5 to-teal/5">
                  <Image
                    src={advisor.photo}
                    alt={advisor.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal mb-3">{advisor.domain}</p>
                  <h3 className="text-lg font-bold text-navy mb-1">{advisor.name}</h3>
                  <p className="text-sm text-slate-400 font-medium mb-4">{advisor.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{advisor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Closing CTA */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Building the infrastructure for the next generation of mortgage capital markets.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            OWNR sits at the intersection of institutional finance and blockchain infrastructure. Our team combines decades of experience across mortgage markets, capital markets trading, distributed systems engineering, and financial regulation. Together we are building the platform that will bring the mortgage market onchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal hover:bg-teal-dark text-white font-semibold rounded-xl transition-all cta-glow text-lg inline-block">
              Partner with OWNR
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-lg inline-block">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
