import Link from "next/link";
import Image from "next/image";

const architectureLayers = [
  {
    label: "Frontend",
    tech: "Next.js 14 / React 18 / TanStack Query / wagmi / ConnectKit",
    desc: "Institutional dashboard and retail investor portal with real-time portfolio tracking, compliance action queue, and wallet connection via EIP-4361 (Sign-In with Ethereum).",
    color: "bg-teal",
  },
  {
    label: "API Layer",
    tech: "Fastify v4 / TypeScript / Zod Validation / JWT Auth",
    desc: "Authenticated REST + WebSocket gateway handling wallet auth (SIWE), webhook ingestion, and schema-validated request routing.",
    color: "bg-teal-dark",
  },
  {
    label: "Domain Services",
    tech: "Tokenization Service / Custody Bridge / FINRA Client",
    desc: "Core business logic: EIP-1167 proxy deployment, HMAC-verified custody event processing, and three-tier FINRA price feed (OAuth API, Playwright scraper, mock fallback).",
    color: "bg-navy",
  },
  {
    label: "Persistence",
    tech: "PostgreSQL / Prisma ORM v5",
    desc: "Append-only audit logs, custody events with raw body preservation, pending action queue, price records, and investor KYC state.",
    color: "bg-navy-dark",
  },
  {
    label: "External Integration",
    tech: "Ethereum / BNY Mellon / DTCC MBSD / Circle USDC / Securitize",
    desc: "On-chain settlement, qualified custody, clearinghouse confirmation, stablecoin payments, and ATS-regulated secondary trading.",
    color: "bg-slate-800",
  },
];

const twoTokenModel = [
  {
    standard: "ERC-3525",
    name: "TBA Token",
    phase: "Forward",
    fungibility: "Fungible within same slot (agency + coupon + maturity month)",
    lifecycle: "Minted at trade confirmation, burned at settlement or pair-off/roll",
    settlement: "USDC (roll drop, pair-off, extension fee)",
    color: "teal",
  },
  {
    standard: "ERC-3643",
    name: "MBS Token",
    phase: "Delivered",
    fungibility: "Non-fungible by pool — each CUSIP has its own contract",
    lifecycle: "Minted at delivery, supply decreases with factor decay and redemptions",
    settlement: "USDC (subscriptions, redemptions, P&I distributions)",
    color: "navy",
  },
];

const complianceChecks = [
  {
    num: "01",
    name: "Identity Registry",
    desc: "Destination address must be registered as a verified investor in the on-chain IdentityRegistry contract.",
  },
  {
    num: "02",
    name: "Jurisdiction",
    desc: "Both sender and receiver must be in allowed jurisdictions. US investors satisfy Reg D or Rule 144A; non-US satisfy Reg S.",
  },
  {
    num: "03",
    name: "Freeze Status",
    desc: "Neither sender nor receiver wallet may be frozen. Freezes are applied by the Compliance Officer on regulatory order.",
  },
  {
    num: "04",
    name: "Investor Limit",
    desc: "Receiver's resulting position must not exceed maximum position limit (typically 25% of outstanding) to prevent concentration.",
  },
  {
    num: "05",
    name: "Lock-up Period",
    desc: "Any applicable lock-up period must have expired. New issuances may carry a 90-day lock-up per Reg D Rule 144 seasoning.",
  },
];

const lifecycleEvents = [
  {
    name: "Outright TBA Trade",
    desc: "Standard path: TBA forward contract fulfilled by specific pool delivery. Burns ERC-3525 token, deploys ERC-3643 MBS token via proxy.",
    trigger: "DELIVERY_CONFIRMED",
  },
  {
    name: "Dollar Roll",
    desc: "Simultaneous sell front-month / buy back-month TBA. Burns old slot token, mints new slot token, transfers roll drop USDC. Synthetic repo financing.",
    trigger: "ROLL_CONFIRMED",
  },
  {
    name: "Pair-Off",
    desc: "Cash settlement of offsetting TBA positions at current market price when seller cannot deliver conforming pools. Token burned, USDC settled.",
    trigger: "PAIR_OFF_CONFIRMED",
  },
  {
    name: "Extension",
    desc: "Defers settlement to the following month, typically for a fee of 1/32 point. Common during tight collateral supply periods.",
    trigger: "EXTENSION_CONFIRMED",
  },
  {
    name: "Stipulated Trade",
    desc: "TBA with delivery constraints (max loan size, min seasoning, geo exclusion, loan purpose). Stip params encoded on-chain and verified at mutation.",
    trigger: "ASSET_RECEIVED + stip verification",
  },
  {
    name: "Specified Pool",
    desc: "Direct designation of a specific CUSIP, bypassing TBA mechanism entirely. ERC-3643 MBS token minted directly — no forward phase.",
    trigger: "ASSET_RECEIVED (specific CUSIP)",
  },
  {
    name: "DTCC Pool Netting",
    desc: "DTCC compresses multiple bilateral obligations into net deliveries. Batch settlement is atomic — all succeed or all revert, mirroring DTCC semantics.",
    trigger: "DELIVERY_CONFIRMED (batch)",
  },
];

const partners = [
  {
    name: "BNY Mellon",
    role: "Qualified Custodian",
    desc: "Holds underlying MBS pools under SEC Rule 206(4)-2. Fires HMAC-signed custody webhooks that trigger every on-chain state transition.",
  },
  {
    name: "Securitize Markets",
    role: "SEC-Registered ATS (CRD #298066)",
    desc: "Operates the order-matching engine for secondary trading. OWNR writes the compliance hook; Securitize calls it before every trade.",
  },
  {
    name: "Securitize Inc.",
    role: "SEC-Registered Transfer Agent",
    desc: "Maintains the authoritative beneficial ownership register and handles KYC/AML identity verification for all investors.",
  },
  {
    name: "DTCC MBSD",
    role: "Clearinghouse",
    desc: "Clears TBA trades, manages margin (ECP), and executes pool netting. Settlement confirmations anchor on-chain token mutations.",
  },
  {
    name: "Circle",
    role: "USDC Infrastructure",
    desc: "Provides the stablecoin settlement layer. All subscriptions, redemptions, and P&I distributions denominated in USDC at 1:1 with USD.",
  },
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
            <span className="text-teal-light text-xs font-bold tracking-wider">TECHNICAL OVERVIEW</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How OWNR Works
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            A compliant tokenization engine purpose-built for agency mortgage-backed securities.
            From TBA forward contracts to delivered pool tokens — every on-chain state transition
            is anchored to real-world custody and settlement events.
          </p>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            Modeled on the BlackRock BUIDL architecture and extended to handle
            the full SIFMA/DTCC TBA lifecycle.
          </p>
        </div>
      </section>

      {/* High-Level Flow */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">The Big Picture</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              From MBS to Token in Four Steps
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every token is a 1:1 digital twin of a real MBS CUSIP. Legal title stays with the custodian.
              The token reflects beneficial ownership, enforced by smart contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Custody Confirmation",
                desc: "BNY Mellon confirms MBS position in custodial vault and fires an HMAC-SHA256 signed webhook to OWNR.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Compliance Review",
                desc: "Dual-control protocol: a named compliance officer must explicitly approve every pending action before any on-chain transaction executes.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Token Minting",
                desc: "EIP-1167 minimal proxy deployed via CREATE2 (96% gas savings). ERC-3643 security token initialized with pool params and compliance module.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "ATS Listing",
                desc: "Token submitted to Securitize Markets ATS for secondary trading. Every transfer enforced by five-check ERC-3643 compliance module.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={s.step} className="relative animate-on-scroll">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-teal/30 to-transparent" />
                )}
                <div className="w-16 h-16 mb-4 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
                  {s.icon}
                </div>
                <div className="text-xs text-teal font-mono font-bold mb-2">{s.step}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Token Model */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">Token Architecture</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Two Tokens. Two Phases.
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              OWNR uses a dual-token model that maps to the two phases of an agency MBS instrument&apos;s life:
              the forward (TBA) phase and the delivered pool phase. Different ERC standards because different economic properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {twoTokenModel.map((token) => (
              <div key={token.standard} className="glass-card rounded-2xl p-8 animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    token.color === "teal" ? "bg-teal/20 text-teal-light" : "bg-white/10 text-white"
                  }`}>
                    {token.standard}
                  </span>
                  <h3 className="text-xl font-bold">{token.name}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Phase", value: token.phase },
                    { label: "Fungibility", value: token.fungibility },
                    { label: "Lifecycle", value: token.lifecycle },
                    { label: "Settlement", value: token.settlement },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{row.label}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block p-5 rounded-xl bg-teal/10 border border-teal/20">
              <p className="text-teal-light text-sm font-medium">
                TBA slot = <code className="bg-white/10 px-2 py-0.5 rounded text-xs">keccak256(agency, couponRate, maturityMonth)</code> — all tokens in the same slot are fungible and can be merged or split via ERC-3525 value transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">System Architecture</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Five Clean Layers
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Clear separation between presentation, application logic, domain services,
              persistence, and external integration. Data flows top-down from frontend to blockchain.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {architectureLayers.map((layer, i) => (
              <div key={layer.label} className="card-hover gradient-border rounded-xl border border-slate-200 overflow-hidden animate-on-scroll">
                <div className="flex items-stretch">
                  <div className={`${layer.color} w-2 shrink-0`} />
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-navy">{layer.label}</h3>
                      <span className="text-[10px] text-slate-400 font-mono">Layer {i + 1}</span>
                    </div>
                    <p className="text-xs text-teal font-medium mb-2">{layer.tech}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custody Bridge */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">The Custody Bridge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Every Token Anchored to Reality
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                BNY Mellon delivers custody events via HTTPS POST with three required headers:
                HMAC-SHA256 signature, UUID event ID for idempotency, and JSON content type.
                The raw body is read as a buffer before JSON parsing — re-serialization would
                break the HMAC computation.
              </p>
              <div className="space-y-4">
                {[
                  { label: "HMAC Verification", desc: "SHA-256 signature with timingSafeEqual comparison prevents timing oracle attacks." },
                  { label: "Idempotent Processing", desc: "Unique event ID constraint with SELECT FOR UPDATE prevents duplicate actions from webhook retries." },
                  { label: "Dual-Control Gate", desc: "No on-chain transaction executes automatically. Every event requires explicit compliance officer approval." },
                  { label: "Append-Only Audit", desc: "Raw webhook body stored verbatim. Every state transition logged with actor, timestamp, and tx hash." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy text-sm">{item.label}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Webhook flow diagram */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold text-teal-light mb-6">Webhook Event Flow</h3>
              <div className="space-y-4 font-mono text-xs">
                {[
                  { actor: "BNY Mellon", action: "HTTPS POST /api/webhooks/custody", note: "HMAC-SHA256 signed" },
                  { actor: "OWNR API", action: "Verify signature + idempotency check", note: "timingSafeEqual" },
                  { actor: "Database", action: "Persist CustodyEvent (raw body)", note: "Append-only" },
                  { actor: "System", action: "Create PendingAction (status: PENDING)", note: "4-hour SLA clock starts" },
                  { actor: "Compliance", action: "Review and approve/reject", note: "Dual-control gate" },
                  { actor: "Relayer", action: "Submit on-chain tx (EIP-1559)", note: "5s poll interval" },
                  { actor: "Blockchain", action: "Execute token operation", note: "Atomic settlement" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center text-teal-light text-[9px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-teal-light font-semibold">{step.actor}</span>
                        <span className="text-white/20">—</span>
                        <span className="text-white/60">{step.note}</span>
                      </div>
                      <p className="text-white/40 mt-0.5">{step.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TBA Lifecycle */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">TBA Instrument Lifecycle</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Seven Lifecycle Events. All On-Chain.
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              TBA lifecycle events are deterministic consequences of contract terms and SIFMA/DTCC conventions —
              not discretionary trades. Each is triggered by a BNY Mellon webhook and requires dual-control approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {lifecycleEvents.map((event, i) => (
              <div key={event.name} className={`glass-card rounded-xl p-6 animate-on-scroll ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white text-sm">{event.name}</h3>
                  <span className="text-[9px] font-mono text-teal-light bg-teal/10 px-2 py-0.5 rounded shrink-0 ml-2">
                    {event.trigger}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Engine */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">ERC-3643 Compliance</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Five Checks. Every Transfer.
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              The ModularCompliance contract enforces five sequential checks before every ERC-3643 token transfer.
              If any check fails, the transfer reverts with a specific error code logged to the audit trail.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {complianceChecks.map((check) => (
              <div key={check.num} className="card-hover gradient-border flex items-start gap-5 p-6 rounded-xl border border-slate-200 animate-on-scroll">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal font-mono font-bold text-sm shrink-0">
                  {check.num}
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{check.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{check.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-xs max-w-2xl mx-auto">
              The compliance hook is the precise boundary: OWNR writes the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">canTransfer(from, to, amount)</code> implementation,
              and the ATS calls it before executing every trade through the standard ERC-3643 transfer mechanism.
            </p>
          </div>
        </div>
      </section>

      {/* Partners & Roles */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Institutional Partners</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Who Does What
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              OWNR is the tokenization engine — not the trading venue, not the custodian, not the transfer agent.
              Each function is performed by a regulated counterparty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-white animate-on-scroll">
                <div className="mb-3">
                  <h3 className="font-bold text-navy text-lg">{p.name}</h3>
                  <p className="text-teal text-xs font-semibold">{p.role}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUIDL Precedent */}
      <section className="section-padding bg-navy text-white grid-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal-light text-sm font-semibold uppercase tracking-wider mb-3">Institutional Precedent</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Extending BlackRock BUIDL
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              BlackRock&apos;s BUIDL fund ($2.5B+) established the institutional precedent for tokenized regulated funds.
              OWNR extends the same BNY Mellon + Securitize architecture along four critical dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "TBA Lifecycle Mechanics",
                desc: "Dollar rolls, pair-offs, extensions, stipulated trades, specified pool trades, and DTCC batch netting — none of which apply to a continuously-offered fund.",
                tag: "BUIDL: N/A",
              },
              {
                title: "DTCC MBSD Integration",
                desc: "Settlement confirmations from DTCC's clearinghouse serve as authoritative triggers for on-chain token state mutations, anchoring every lifecycle event to institutional clearing.",
                tag: "BUIDL: No DTCC",
              },
              {
                title: "Pool Factor Decay",
                desc: "Monthly scheduled factor updates reflecting actual mortgage prepayments and amortization update on-chain NAV in real time — requiring an Oracle architecture BUIDL's constant $1.00 NAV doesn't need.",
                tag: "BUIDL: Constant NAV",
              },
              {
                title: "P&I Distributions",
                desc: "Monthly principal and interest payments flow from BNY Mellon through Circle USDC to on-chain DistributionContract, claimable pro-rata — a continuous yield mechanism absent in BUIDL.",
                tag: "BUIDL: No P&I flow",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6 animate-on-scroll">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <span className="text-[9px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded shrink-0 ml-2">
                    {item.tag}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Governance */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">Security & Governance</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Institutional-Grade Controls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Gnosis Safe 3-of-5 Multisig",
                desc: "All critical contract operations require 3 of 5 authorized signers. OpenZeppelin TimelockController enforces a 72-hour delay on governance changes.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
              {
                title: "2-of-3 Oracle Signing",
                desc: "No single oracle key can corrupt on-chain NAV. FINRA prices require independent signatures from 2 of 3 oracle signers before the contract stores the price.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Hardware Key Management",
                desc: "AWS CloudHSM and GCP Cloud KMS for production relayer and oracle keys. No private key material ever exists in plaintext outside hardware security modules.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="card-hover gradient-border p-6 rounded-xl border border-slate-200 bg-slate-50 animate-on-scroll">
                <div className="w-12 h-12 mb-4 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                  {item.icon}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-white section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See the Full Technical Architecture
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Access the complete whitepaper, smart contract specifications, and integration documentation
            in the data room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/data-room" className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors cta-glow">
              Access Data Room
            </Link>
            <Link href="/waitlist" className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-6 text-white/20 text-[10px] leading-relaxed max-w-2xl mx-auto">
            This page summarizes technical details from the OWNR Whitepaper v4.0 (February 2026).
            Nothing herein constitutes an offer to sell or solicitation to buy any security.
            OWNR is a tokenization engine — not a trading venue. Secondary trading is handled by
            Securitize Markets, an SEC-registered ATS.
          </p>
        </div>
      </section>
    </>
  );
}
