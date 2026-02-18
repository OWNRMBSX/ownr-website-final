import Image from "next/image";
import Link from "next/link";

const architectureLayers = [
  {
    num: "01",
    name: "Frontend Layer",
    tech: "Next.js 14 + React 18",
    desc: "Institutional dashboard, tokenization wizard, securities registry, and admin panel. Sign-In With Ethereum (EIP-4361) authentication — no passwords, no custodial risk.",
    color: "teal",
  },
  {
    num: "02",
    name: "API Layer",
    tech: "Fastify + TypeScript",
    desc: "RESTful gateway with JWT middleware, Zod request validation, and webhook receivers for BNY Mellon custody events and DTCC settlement confirmations.",
    color: "teal",
  },
  {
    num: "03",
    name: "Service Layer",
    tech: "Tokenization + Custody + Pricing",
    desc: "Core business logic: EIP-1167 token deployment, custody bridge event processing (HMAC-SHA256 verified), and FINRA TRACE pricing with 3-tier fallback.",
    color: "teal",
  },
  {
    num: "04",
    name: "Persistence Layer",
    tech: "PostgreSQL + Prisma ORM",
    desc: "Append-only audit logs, custody events, pending actions, price records, and investor registry. Full SEC Rule 17a-4 books-and-records compliance.",
    color: "teal",
  },
  {
    num: "05",
    name: "External Integration",
    tech: "Ethereum + BNY + DTCC + Circle",
    desc: "Blockchain settlement, institutional custody, DTCC clearing, USDC stablecoin payments, Securitize Markets ATS, and Gnosis Safe multisig governance.",
    color: "teal",
  },
];

const lifecycleSteps = [
  {
    phase: "Trade",
    title: "TBA Trade Agreed",
    desc: "A dealer agrees to buy or sell a forward MBS contract (TBA) through standard channels. DTCC margin (~2% face value) is posted. The trade follows the same conventions institutions use today.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    phase: "Custody",
    title: "BNY Mellon Confirms Receipt",
    desc: "BNY Mellon, the qualified custodian, sends an HMAC-SHA256 signed webhook confirming the asset is in custody. This creates a PendingAction requiring compliance officer approval before any on-chain action.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    phase: "Tokenize",
    title: "ERC-3525 TBA Token Minted",
    desc: "After dual-control approval, OWNR mints a semi-fungible ERC-3525 token. Tokens are fungible within the same slot (same agency, coupon, maturity month) — exactly mirroring how TBAs work in traditional markets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    phase: "Deliver",
    title: "DTCC Pool Delivery (48-Hour Rule)",
    desc: "DTCC confirms which specific MBS pool will deliver against the TBA. BNY Mellon sends a DELIVERY_CONFIRMED webhook. This triggers the mutation from forward contract to delivered security.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    phase: "Mutate",
    title: "Atomic Settlement — TBA to MBS",
    desc: "The TBASettlementEngine atomically: verifies the DTCC confirmation hash on-chain, burns the ERC-3525 TBA token, deploys a new ERC-3643 security token proxy, and mints the delivered MBS token to the buyer. All in one transaction.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    phase: "Trade",
    title: "Secondary Trading on Securitize ATS",
    desc: "The ERC-3643 MBS token is listed on Securitize Markets (SEC-registered ATS). Every transfer runs 5 compliance checks: KYC identity, jurisdiction, freeze status, concentration limit, and lock-up period. Atomic DvP in USDC.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const complianceChecks = [
  { name: "Identity Registry", desc: "Recipient must be KYC-verified and registered on-chain", icon: "01" },
  { name: "Jurisdiction", desc: "Reg D / Rule 144A / Reg S eligibility verified", icon: "02" },
  { name: "Freeze Status", desc: "Neither party can be frozen (OFAC, legal hold)", icon: "03" },
  { name: "Concentration Limit", desc: "Max 25% of pool outstanding per investor", icon: "04" },
  { name: "Lock-Up Period", desc: "90-day Reg D Rule 144 seasoning enforced", icon: "05" },
];

const partners = [
  {
    name: "BNY Mellon",
    role: "Qualified Custodian",
    desc: "Holds legal title to underlying MBS pools under SEC Rule 206(4)-2. No token is minted or burned without a signed custody confirmation.",
  },
  {
    name: "Securitize Markets",
    role: "SEC-Registered ATS",
    desc: "Order matching, trade execution, and broker-dealer intermediation for secondary trading. The only ATS with native ERC-3643 support and BNY Mellon integration.",
  },
  {
    name: "Securitize Inc.",
    role: "Transfer Agent",
    desc: "SEC-registered transfer agent handling KYC/AML identity verification, investor onboarding, and accredited/QIB certification.",
  },
  {
    name: "DTCC MBSD",
    role: "Clearing & Settlement",
    desc: "Standard TBA clearing and pool delivery. DTCC confirmation numbers are stored on-chain for full auditability.",
  },
  {
    name: "Circle (USDC)",
    role: "Settlement Currency",
    desc: "All on-chain settlement in USDC — subscriptions, secondary trades, P&I distributions, dollar roll drops, and redemptions. T+0 finality.",
  },
];

const specs = [
  { label: "TBA Token", value: "ERC-3525", detail: "Semi-fungible, slot-based" },
  { label: "MBS Token", value: "ERC-3643", detail: "T-REX security token" },
  { label: "Proxy Deploy", value: "EIP-1167", detail: "96% gas reduction" },
  { label: "Settlement", value: "T+0", detail: "Atomic DvP in USDC" },
  { label: "Blockchain", value: "Ethereum", detail: "Mainnet (chainId 1)" },
  { label: "Governance", value: "3-of-5", detail: "Gnosis Safe multisig" },
  { label: "Oracle", value: "2-of-3", detail: "Threshold signing" },
  { label: "Timelock", value: "72 hours", detail: "OpenZeppelin controller" },
  { label: "Auth", value: "SIWE", detail: "EIP-4361, no passwords" },
  { label: "Custody Webhook", value: "HMAC-SHA256", detail: "timingSafeEqual" },
  { label: "Depeg Threshold", value: "50 bps", detail: "Auto-pause redemptions" },
  { label: "Price Staleness", value: "2 hours", detail: "Pauses redemptions" },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white pt-28 pb-24 px-6 overflow-hidden grid-overlay">
        <Image src="/deck-assets/image6.jpg" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(52,125,135,0.25)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-teal/30 rounded-full bg-teal/10">
            <span className="text-teal-light text-xs font-bold tracking-wider">TECHNICAL ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How OWNR Works
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            A compliant tokenization engine for agency mortgage-backed securities.
            Not a trading venue. Not a broker-dealer. OWNR maintains the on-chain representation
            of securities that already exist in the real world — writing compliance state, enforcing
            transfer restrictions, and executing lifecycle events on behalf of regulated counterparties.
          </p>
          <p className="text-white/40 text-sm max-w-2xl mx-auto">
            Built on the BlackRock BUIDL fund model, extended to the $15T agency MBS market.
          </p>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Partner Ecosystem
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Institutional Infrastructure. Not a Black Box.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              OWNR is the tokenization layer. Everything else — custody, trading, clearing,
              identity, and settlement — is handled by best-in-class regulated partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{p.name}</h3>
                    <span className="text-xs font-semibold text-teal">{p.role}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five-Layer Architecture */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              System Architecture
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Five Layers. Zero Gaps.
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Every layer is purpose-built for regulatory compliance and institutional-grade reliability.
              Append-only audit logs, HMAC-verified webhooks, and dual-control approval at every step.
            </p>
          </div>
          <div className="space-y-4">
            {architectureLayers.map((layer, i) => (
              <div key={layer.num} className="glass-card rounded-xl p-6 animate-on-scroll flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <span className="text-teal-light font-mono font-bold text-2xl">{layer.num}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{layer.name}</h3>
                    <span className="text-xs text-teal-light font-semibold">{layer.tech}</span>
                  </div>
                </div>
                {i < architectureLayers.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-teal/20 absolute -bottom-4 left-10" />
                )}
                <p className="text-white/50 text-sm leading-relaxed flex-1">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Token Model */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Token Architecture
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Two Tokens. Two Phases.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              MBS instruments have two distinct phases — forward contract and delivered pool.
              OWNR uses two different ERC standards because the two phases have fundamentally different properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TBA Token */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-navy p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-teal/20 text-teal-light text-xs font-bold rounded-full">PHASE 1</span>
                  <span className="text-white/40 text-xs">Forward Contract</span>
                </div>
                <h3 className="text-2xl font-bold text-white">ERC-3525 TBA Token</h3>
                <p className="text-white/50 text-sm mt-2">Semi-Fungible Token Standard</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">Fungible within the same slot</span> — same agency, coupon rate, and maturity month. Mirrors exactly how TBAs work in traditional markets.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">Slot = keccak256(agency, couponRate, maturityMonth)</span> — deterministic grouping ensures fungibility of economically equivalent positions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">Value field = face value in WAD</span> (1e18 = $1.00 face). Supports dollar rolls, pair-offs, and extensions.</p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-400 font-mono">Lifecycle: Mint at trade &rarr; Dollar rolls / Pair-offs &rarr; Burn at settlement</p>
                </div>
              </div>
            </div>

            {/* MBS Token */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-teal to-teal-dark p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">PHASE 2</span>
                  <span className="text-white/60 text-xs">Delivered Security</span>
                </div>
                <h3 className="text-2xl font-bold text-white">ERC-3643 MBS Token</h3>
                <p className="text-white/70 text-sm mt-2">T-REX Security Token Standard</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">Non-fungible by pool</span> — each CUSIP gets its own proxy contract. Deployed via EIP-1167 minimal proxy (96% gas reduction, ~$5-15 per pool).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">Mandatory compliance hook</span> — every transfer calls ModularCompliance.canTransfer() enforcing 5 sequential checks before execution.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600"><span className="font-semibold text-navy">CREATE2 with keccak256(cusip)</span> — deterministic, pre-computable token addresses. Any party can verify the address before deployment.</p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-400 font-mono">Lifecycle: Mint at delivery &rarr; ATS secondary trades &rarr; P&I distributions &rarr; Redemption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mutation arrow */}
          <div className="flex items-center justify-center my-10 animate-on-scroll">
            <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-navy text-white">
              <span className="text-sm font-semibold">ERC-3525</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-teal-light" />
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-teal-light text-xs font-bold">TBASettlementEngine.settle()</p>
                <p className="text-white/30 text-[10px]">Atomic: verify &rarr; burn &rarr; deploy &rarr; mint</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-teal-light" />
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <span className="text-sm font-semibold">ERC-3643</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Flow */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Instrument Lifecycle
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              From Trade to Token
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              Every step mirrors the existing TBA lifecycle — same counterparties, same conventions,
              same clearing. The settlement layer underneath just becomes atomic and programmable.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-teal/0 via-teal/30 to-teal/0" />

            <div className="space-y-8">
              {lifecycleSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 animate-on-scroll ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block p-6 rounded-xl bg-white border border-slate-200 card-hover max-w-lg ${
                      i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}>
                      <span className="text-xs font-bold text-teal uppercase tracking-wider">{step.phase}</span>
                      <h3 className="text-lg font-bold text-navy mt-1 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-teal/10 border-2 border-teal/30 flex items-center justify-center text-teal shrink-0">
                    {step.icon}
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Engine */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Compliance Engine
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Five Checks. Every Transfer.
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Every ERC-3643 token transfer runs through a ModularCompliance contract.
              All five checks must pass sequentially — if any fails, the entire transfer reverts.
              Compliance is enforced at the smart contract level, not by policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {complianceChecks.map((check, i) => (
              <div key={check.name} className="glass-card rounded-xl p-5 text-center animate-on-scroll relative">
                {i < complianceChecks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-teal/30" />
                )}
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center">
                  <span className="text-teal-light font-mono font-bold text-sm">{check.icon}</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{check.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{check.desc}</p>
              </div>
            ))}
          </div>

          {/* Dual Control */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 animate-on-scroll">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Dual-Control Principle
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                No on-chain action executes without two independent approvals. BNY Mellon creates
                the PendingAction via webhook; a compliance officer must approve before any token
                is minted, burned, or transferred. Neither party can act alone.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 animate-on-scroll">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                KYC/AML Flow
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Full investor verification: government ID, proof of address, entity docs,
                accredited/QIB certification, source of funds, and wallet address. OFAC SDN screening
                at onboarding and monthly re-screening. Positive match triggers immediate wallet freeze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USDC Settlement */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Settlement
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              T+0. Every Time.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              All on-chain settlement in USDC — T+0 finality for every event type.
              Escrow funds are never invested, lent, or rehypothecated.
              Automatic depeg protection pauses redemptions if USDC deviates more than 50 basis points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { event: "Subscription / Mint", flow: "Investor deposits USDC into USDCEscrow", time: "T+0" },
              { event: "ATS Secondary Trade", flow: "Buyer USDC swapped to Seller USDC atomically", time: "T+0" },
              { event: "P&I Distribution", flow: "BNY Mellon converts USD to USDC, distributed pro-rata", time: "Monthly" },
              { event: "Dollar Roll Drop", flow: "Buyer pays seller the roll drop in USDC", time: "T+0" },
              { event: "Pair-Off", flow: "Losing party pays winning party the price difference", time: "T+0" },
              { event: "Redemption", flow: "USDCEscrow releases to investor; BNY settles USD at T+2", time: "T+0 on-chain" },
            ].map((item) => (
              <div key={item.event} className="card-hover gradient-border p-5 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-navy text-sm">{item.event}</h3>
                  <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded">{item.time}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding bg-navy-dark text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">
              Technical Specifications
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Under the Hood
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specs.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 text-center animate-on-scroll">
                <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-xl font-bold text-teal-light mb-1">{s.value}</p>
                <p className="text-white/30 text-xs">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
              Regulatory Framework
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Built for Compliance. Not Bolted On.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              Agency MBS tokens benefit from Securities Act Section 3(a)(2) exemption — securities
              guaranteed by GSEs (Ginnie Mae, Fannie Mae, Freddie Mac) are exempt from registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { reg: "SEC Rule 206(4)-2", title: "Custody Rule", desc: "No token minted or burned without BNY Mellon custody confirmation plus dual-control compliance officer approval." },
              { reg: "SEC Rule 17a-4", title: "Books & Records", desc: "Append-only CustodyEvent and AuditLog tables. Raw webhook bodies stored verbatim with immutable timestamps." },
              { reg: "FinCEN BSA", title: "Anti-Money Laundering", desc: "Dual-control with two structurally separated actors. AML screening at KYC plus quarterly re-screening." },
              { reg: "FINRA Rule 4370", title: "Business Continuity", desc: "Three-tier FINRA TRACE pricing fallback. 99.9% uptime SLA for webhook processing." },
              { reg: "Regulation ATS", title: "Alternative Trading System", desc: "Secondary trading exclusively through Securitize Markets — SEC/FINRA-registered ATS (CRD #298066)." },
              { reg: "DTCC MBSD Rule 4", title: "Good Delivery", desc: "48-hour pool notification modeled in flow. DTCC confirmation numbers stored on-chain for auditability." },
            ].map((item) => (
              <div key={item.reg} className="card-hover p-5 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal">{item.reg}</span>
                    <h3 className="font-bold text-navy mt-0.5">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want the Full Technical Details?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Access the complete whitepaper, smart contract interfaces, API documentation,
            and financial model in the data room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-room" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow">
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
