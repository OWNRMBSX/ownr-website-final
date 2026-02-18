"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Animated counter ─── */
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 500;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(start + diff * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
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

/* ─── Animated bar ─── */
function Bar({ value, max, color, label }: { value: number; max: number; color: string; label: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-white/40 w-20 text-right shrink-0">{label}</span>
      <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2"
          style={{ width: `${Math.max(pct, 4)}%`, background: color }}
        >
          <span className="text-[10px] font-bold text-white whitespace-nowrap">
            ${formatCompact(value)}
          </span>
        </div>
      </div>
    </div>
  );
}

function formatCompact(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toFixed(0);
}

function formatCurrency(n: number): string {
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + (n / 1e3).toFixed(0) + "K";
  return "$" + n.toFixed(0);
}

/* ─── Main component ─── */
export default function CapitalEfficiencyCalculator() {
  const [tradeSize, setTradeSize] = useState(100_000_000); // $100M default
  const [holdingDays, setHoldingDays] = useState(2);

  const holdingOptions = [1, 2, 3, 5];

  // Traditional calculations
  const tradMarginRate = 0.02;
  const tradMarginRequired = tradeSize * tradMarginRate;
  const tradReconciliationCost = tradeSize * 0.00005; // 0.5bps
  const tradOpsOverhead = 15000 * holdingDays; // $15K/day
  const tradTotalCost = tradMarginRequired + tradReconciliationCost + tradOpsOverhead;

  // MBSX calculations
  const mbsxMarginRate = 0.005;
  const mbsxMarginRequired = tradeSize * mbsxMarginRate;
  const mbsxSettlementSeconds = 12;
  const mbsxReconciliationCost = 0;
  const mbsxOpsOverhead = 500; // minimal per-trade
  const mbsxTotalCost = mbsxMarginRequired + mbsxReconciliationCost + mbsxOpsOverhead;

  // Delta
  const totalSavings = tradTotalCost - mbsxTotalCost;
  const freedCapital = tradMarginRequired - mbsxMarginRequired;
  const freedCapitalEarnings = (freedCapital * 0.055 * holdingDays) / 365;

  const maxBar = Math.max(tradTotalCost, mbsxTotalCost);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">Configure Trade</h3>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-white/40 text-sm">Trade Size</label>
                <span className="text-teal-light font-bold text-lg">
                  {formatCurrency(tradeSize)}
                </span>
              </div>
              <input
                type="range"
                min={1_000_000}
                max={500_000_000}
                step={1_000_000}
                value={tradeSize}
                onChange={(e) => setTradeSize(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/30 mt-1">
                <span>$1M</span>
                <span>$500M</span>
              </div>
            </div>

            <div>
              <label className="text-white/40 text-sm block mb-3">Holding Period</label>
              <div className="grid grid-cols-4 gap-2">
                {holdingOptions.map((d) => (
                  <button
                    key={d}
                    onClick={() => setHoldingDays(d)}
                    className={`py-2.5 rounded-lg text-sm font-bold transition-all ${
                      holdingDays === d
                        ? "bg-teal text-white"
                        : "bg-white/5 border border-white/10 text-white/50 hover:border-teal/40"
                    }`}
                  >
                    {d} day{d > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">Cost Comparison</h3>

            {/* Comparison table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-white/40 font-medium text-xs">Metric</th>
                    <th className="text-right py-2 text-white/40 font-medium text-xs">Traditional</th>
                    <th className="text-right py-2 text-teal-light font-bold text-xs">MBSX</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white/60">Settlement</td>
                    <td className="py-2.5 text-right text-white/50">
                      {holdingDays} day{holdingDays > 1 ? "s" : ""}
                    </td>
                    <td className="py-2.5 text-right text-teal-light font-semibold">
                      {mbsxSettlementSeconds} seconds
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white/60">Margin Required</td>
                    <td className="py-2.5 text-right text-white/50">
                      {formatCurrency(tradMarginRequired)}{" "}
                      <span className="text-white/30 text-xs">({(tradMarginRate * 100).toFixed(1)}%)</span>
                    </td>
                    <td className="py-2.5 text-right text-teal-light font-semibold">
                      {formatCurrency(mbsxMarginRequired)}{" "}
                      <span className="text-teal-light/50 text-xs">({(mbsxMarginRate * 100).toFixed(1)}%)</span>
                    </td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white/60">Reconciliation</td>
                    <td className="py-2.5 text-right text-white/50">
                      {formatCurrency(tradReconciliationCost)}
                    </td>
                    <td className="py-2.5 text-right text-teal-light font-semibold">$0</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2.5 text-white/60">Ops Overhead</td>
                    <td className="py-2.5 text-right text-white/50">
                      {formatCurrency(tradOpsOverhead)}
                    </td>
                    <td className="py-2.5 text-right text-teal-light font-semibold">
                      {formatCurrency(mbsxOpsOverhead)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Animated bar chart */}
            <div className="space-y-3 mb-6">
              <Bar value={tradTotalCost} max={maxBar} color="rgba(255,255,255,0.2)" label="Traditional" />
              <Bar value={mbsxTotalCost} max={maxBar} color="#347D87" label="MBSX" />
            </div>

            {/* Delta summary */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-teal/10 border border-teal/20">
              <div>
                <p className="text-white/40 text-xs mb-1">Total Savings</p>
                <p className="text-teal-light font-bold text-xl">
                  <AnimatedCounter value={totalSavings} prefix="$" />
                </p>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Freed Capital Earnings</p>
                <p className="text-teal-light font-bold text-xl">
                  +<AnimatedCounter value={freedCapitalEarnings} prefix="$" />
                </p>
                <p className="text-white/30 text-[10px]">at 5.5% yield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
