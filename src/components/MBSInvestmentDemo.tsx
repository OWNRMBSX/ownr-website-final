"use client";

import { useState, useCallback, useEffect, useRef } from "react";

/* ─── region data ─── */
const regionData: Record<
  string,
  { name: string; yield: number; risk: string; cities: string[]; color: string; sparkline: number[] }
> = {
  northeast: {
    name: "Northeast",
    yield: 5.8,
    risk: "Low",
    cities: ["Boston", "New York", "Philadelphia"],
    color: "#3e919c",
    sparkline: [5.2, 5.4, 5.3, 5.6, 5.5, 5.7, 5.8],
  },
  southeast: {
    name: "Southeast",
    yield: 6.2,
    risk: "Low",
    cities: ["Miami", "Atlanta", "Charlotte"],
    color: "#2a9d5c",
    sparkline: [5.7, 5.8, 5.9, 6.0, 6.1, 6.0, 6.2],
  },
  midwest: {
    name: "Midwest",
    yield: 5.4,
    risk: "Low",
    cities: ["Chicago", "Detroit", "Minneapolis"],
    color: "#4ba5b1",
    sparkline: [5.1, 5.2, 5.1, 5.3, 5.2, 5.3, 5.4],
  },
  southwest: {
    name: "Southwest",
    yield: 6.8,
    risk: "Medium",
    cities: ["Phoenix", "Dallas", "Houston"],
    color: "#d4a030",
    sparkline: [6.0, 6.1, 6.3, 6.5, 6.4, 6.6, 6.8],
  },
  west: {
    name: "West Coast",
    yield: 7.1,
    risk: "Medium",
    cities: ["Los Angeles", "San Francisco", "Seattle"],
    color: "#e07c4f",
    sparkline: [7.3, 7.2, 7.4, 7.2, 7.0, 7.1, 7.1],
  },
  mountain: {
    name: "Mountain",
    yield: 5.9,
    risk: "Low",
    cities: ["Denver", "Salt Lake City", "Boise"],
    color: "#7c6fb0",
    sparkline: [5.4, 5.5, 5.6, 5.5, 5.7, 5.8, 5.9],
  },
};

/* ─── SVG US Map paths (simplified) ─── */
const regionPaths: Record<string, string> = {
  northeast:
    "M730 80 L780 70 L800 100 L810 130 L790 170 L760 190 L730 180 L710 150 L700 120 Z",
  southeast:
    "M620 240 L700 220 L760 190 L790 170 L800 220 L790 280 L760 320 L720 340 L670 330 L630 310 L610 280 Z",
  midwest:
    "M480 100 L580 90 L630 100 L700 120 L710 150 L730 180 L700 220 L620 240 L560 230 L500 210 L470 180 L460 140 Z",
  southwest:
    "M350 280 L450 260 L530 270 L610 280 L630 310 L620 360 L580 390 L500 400 L420 390 L350 360 L330 320 Z",
  west:
    "M120 100 L200 80 L250 110 L280 160 L300 220 L280 280 L250 320 L200 340 L150 320 L110 280 L100 220 L100 160 Z",
  mountain:
    "M250 110 L350 100 L460 140 L470 180 L500 210 L560 230 L530 270 L450 260 L350 280 L330 320 L250 320 L280 280 L300 220 L280 160 Z",
};

const regionLabelPositions: Record<string, { x: number; y: number }> = {
  northeast: { x: 750, y: 130 },
  southeast: { x: 700, y: 270 },
  midwest: { x: 570, y: 160 },
  southwest: { x: 480, y: 330 },
  west: { x: 160, y: 210 },
  mountain: { x: 370, y: 200 },
};

/* ─── Sparkline component ─── */
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 200;
  const h = 50;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12">
      <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
      <polyline
        fill={`${color}20`}
        stroke="none"
        points={`0,${h} ${points} ${w},${h}`}
      />
    </svg>
  );
}

/* ─── Step indicator ─── */
function StepIndicator({ current, steps }: { current: number; steps: string[] }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              i === current
                ? "bg-teal text-white"
                : i < current
                  ? "bg-teal/20 text-teal-light"
                  : "bg-white/10 text-white/30"
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                i < current ? "bg-teal-light text-navy" : ""
              }`}
            >
              {i < current ? "✓" : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-6 h-px transition-colors duration-300 ${
                i < current ? "bg-teal-light" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Animated counter ─── */
function AnimatedValue({ value, prefix = "", suffix = "", decimals = 2 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>();

  useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + diff * eased);
      if (progress < 1) ref.current = requestAnimationFrame(tick);
    };

    ref.current = requestAnimationFrame(tick);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ─── Main component ─── */
export default function MBSInvestmentDemo() {
  const [step, setStep] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [amount, setAmount] = useState(100);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [mintPhase, setMintPhase] = useState(0); // 0=idle, 1=processing, 2=minted, 3=settled

  const region = selectedRegion ? regionData[selectedRegion] : null;

  const handleRegionClick = useCallback((id: string) => {
    setSelectedRegion(id);
    setTimeout(() => setStep(1), 300);
  }, []);

  const handleInvest = useCallback(() => {
    setStep(2);
  }, []);

  const handleConfirm = useCallback(() => {
    setStep(3);
    setMintPhase(1);
    // Simulate minting sequence
    setTimeout(() => setMintPhase(2), 3000);
    setTimeout(() => setMintPhase(3), 7000);
  }, []);

  const handleReset = useCallback(() => {
    setStep(0);
    setSelectedRegion(null);
    setAmount(100);
    setMintPhase(0);
  }, []);

  const presets = [
    { label: "$10", value: 10 },
    { label: "$100", value: 100 },
    { label: "$1,000", value: 1000 },
  ];

  const monthlyReturn = region ? (amount * (region.yield / 100)) / 12 : 0;
  const annualReturn = region ? amount * (region.yield / 100) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <StepIndicator
        current={step}
        steps={["Choose Region", "Review Pool", "Set Amount", "Confirmation"]}
      />

      <div className="relative bg-navy-dark rounded-2xl border border-white/10 overflow-hidden min-h-[420px]">
        {/* Step 0: Choose Region — US Map */}
        {step === 0 && (
          <div className="p-6 md:p-8 animate-fade-in">
            <h3 className="text-white font-bold text-lg mb-1 text-center">
              Choose a Region to Invest
            </h3>
            <p className="text-white/40 text-sm mb-6 text-center">
              Click a region to see MBS pools in that area
            </p>
            <div className="relative mx-auto" style={{ maxWidth: 500 }}>
              <svg viewBox="60 50 780 380" className="w-full">
                {Object.entries(regionPaths).map(([id, path]) => {
                  const isHovered = hoveredRegion === id;
                  const data = regionData[id];
                  const pos = regionLabelPositions[id];
                  return (
                    <g key={id}>
                      <path
                        d={path}
                        fill={isHovered ? `${data.color}40` : `${data.color}15`}
                        stroke={isHovered ? data.color : `${data.color}60`}
                        strokeWidth={isHovered ? 2.5 : 1.5}
                        className="cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setHoveredRegion(id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => handleRegionClick(id)}
                      />
                      <text
                        x={pos.x}
                        y={pos.y - 10}
                        textAnchor="middle"
                        className="pointer-events-none select-none"
                        fill={isHovered ? "#fff" : "rgba(255,255,255,0.6)"}
                        fontSize="13"
                        fontWeight="700"
                      >
                        {data.name}
                      </text>
                      <text
                        x={pos.x}
                        y={pos.y + 8}
                        textAnchor="middle"
                        className="pointer-events-none select-none"
                        fill={data.color}
                        fontSize="12"
                        fontWeight="600"
                      >
                        {data.yield}% APY
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        )}

        {/* Step 1: Review Pool */}
        {step === 1 && region && (
          <div className="p-6 md:p-8 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-bold text-xl">{region.name} MBS Pool</h3>
                <p className="text-white/40 text-sm">30yr Fixed Mortgage-Backed Securities</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  region.risk === "Low"
                    ? "bg-[#2a9d5c]/20 text-[#2a9d5c]"
                    : "bg-[#d4a030]/20 text-[#d4a030]"
                }`}
              >
                {region.risk} Risk
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/40 text-xs mb-1">Current Yield</p>
                <p className="text-teal-light font-bold text-2xl">{region.yield}%</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/40 text-xs mb-1">Min. Investment</p>
                <p className="text-white font-bold text-2xl">$10</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/40 text-xs mb-1">Settlement</p>
                <p className="text-white font-bold text-2xl">~12s</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-white/40 text-xs mb-2">Cities in Pool</p>
              <div className="flex gap-2">
                {region.cities.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-white/40 text-xs mb-2">7-Day Yield Trend</p>
              <Sparkline data={region.sparkline} color={regionData[selectedRegion!].color} />
            </div>

            <button
              onClick={handleInvest}
              className="w-full py-3 bg-teal hover:bg-teal-dark text-white font-bold rounded-lg transition-colors cta-glow"
            >
              Invest in {region.name}
            </button>
          </div>
        )}

        {/* Step 2: Set Amount */}
        {step === 2 && region && (
          <div className="p-6 md:p-8 animate-slide-up">
            <h3 className="text-white font-bold text-xl mb-1">Set Your Investment</h3>
            <p className="text-white/40 text-sm mb-6">
              Choose an amount for your {region.name} MBS position
            </p>

            <div className="flex gap-3 mb-6">
              {presets.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setAmount(p.value)}
                  className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${
                    amount === p.value
                      ? "bg-teal text-white"
                      : "bg-white/5 border border-white/10 text-white/60 hover:border-teal/50"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">Custom Amount</span>
                <span className="text-white font-bold">
                  ${amount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={5000}
                step={10}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/30 mt-1">
                <span>$10</span>
                <span>$5,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-teal/10 border border-teal/20">
              <div>
                <p className="text-white/40 text-xs mb-1">Projected Monthly</p>
                <p className="text-teal-light font-bold text-xl">
                  <AnimatedValue value={monthlyReturn} prefix="$" />
                </p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Projected Annual</p>
                <p className="text-teal-light font-bold text-xl">
                  <AnimatedValue value={annualReturn} prefix="$" />
                </p>
              </div>
            </div>

            <p className="text-white/30 text-[10px] text-center mb-4">
              *Projected returns based on current {region.yield}% APY. Past performance does not guarantee future results.
            </p>

            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-teal hover:bg-teal-dark text-white font-bold rounded-lg transition-colors cta-glow"
            >
              Confirm Investment — ${amount.toLocaleString()}
            </button>
          </div>
        )}

        {/* Step 3: Confirmation — Token Minting */}
        {step === 3 && region && (
          <div className="p-6 md:p-8 animate-fade-in flex flex-col items-center justify-center min-h-[420px] text-center">
            {/* Pulse ring animation */}
            <div className="relative mb-8">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 ${
                  mintPhase >= 3
                    ? "bg-[#2a9d5c]/20"
                    : mintPhase >= 2
                      ? "bg-teal/20"
                      : "bg-white/5"
                }`}
              >
                {mintPhase < 2 && (
                  <div className="absolute inset-0 rounded-full border-2 border-teal/40 animate-ping" />
                )}
                {mintPhase < 2 && (
                  <svg className="w-10 h-10 text-teal-light animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {mintPhase === 2 && (
                  <svg className="w-10 h-10 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  </svg>
                )}
                {mintPhase >= 3 && (
                  <svg className="w-10 h-10 text-[#2a9d5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>

            <h3 className="text-white font-bold text-xl mb-2">
              {mintPhase === 0 && "Initiating..."}
              {mintPhase === 1 && "Minting MBS Token..."}
              {mintPhase === 2 && "Token Minted!"}
              {mintPhase >= 3 && "Settlement Complete"}
            </h3>

            <p className="text-white/40 text-sm mb-6 max-w-sm">
              {mintPhase < 2 &&
                "Creating your tokenized MBS position on the blockchain..."}
              {mintPhase === 2 &&
                "Finalizing atomic settlement on Solana..."}
              {mintPhase >= 3 && (
                <>
                  Your <span className="text-teal-light font-semibold">${amount.toLocaleString()}</span>{" "}
                  {region.name} MBS token is live and earning{" "}
                  <span className="text-teal-light font-semibold">{region.yield}% APY</span>.
                </>
              )}
            </p>

            {mintPhase >= 3 && (
              <div className="grid grid-cols-3 gap-4 w-full max-w-md mb-8 animate-slide-up">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-white/40 text-[10px] mb-1">Position</p>
                  <p className="text-white font-bold">${amount.toLocaleString()}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-white/40 text-[10px] mb-1">APY</p>
                  <p className="text-teal-light font-bold">{region.yield}%</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-white/40 text-[10px] mb-1">Settlement</p>
                  <p className="text-white font-bold">~12s</p>
                </div>
              </div>
            )}

            {mintPhase >= 3 && (
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-white/20 hover:border-white/40 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
