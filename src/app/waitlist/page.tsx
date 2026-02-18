"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type InvestorType = "retail" | "institution" | "lp" | "";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<InvestorType>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const existing = JSON.parse(localStorage.getItem("ownr_waitlist") || "[]");
      existing.push({ email, name, type, date: new Date().toISOString() });
      localStorage.setItem("ownr_waitlist", JSON.stringify(existing));
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <div>
            <Image
              src="/deck-assets/image2.png"
              alt="OWNR"
              width={140}
              height={36}
              className="h-8 w-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Get Early Access to{" "}
              <span className="text-gradient-teal">Tokenized MBS</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Be among the first to access the world&apos;s first dual-market
              tokenized mortgage-backed securities platform. Whether you&apos;re an
              institution, retail investor, or liquidity provider — there&apos;s a
              place for you.
            </p>

            <div className="space-y-4">
              {[
                "Institutional-grade MBS tokenization with T+0 settlement",
                "Fractional synthetic MBS tokens from $10",
                "24/7 trading with government-backed yield",
                "AMM yield engine for liquidity providers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-2">You&apos;re on the list!</h2>
                  <p className="text-slate-500 mb-6">
                    We&apos;ll notify you when early access is available. In the meantime,
                    explore our resources.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/institutions" className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg">
                      For Institutions
                    </Link>
                    <Link href="/retail" className="px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg">
                      For Retail
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-navy mb-2">Join the Waitlist</h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Sign up for early access to OWNR&apos;s tokenized MBS platform.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-teal transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">I am a...</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "institution" as InvestorType, label: "Institution" },
                          { value: "retail" as InvestorType, label: "Retail Investor" },
                          { value: "lp" as InvestorType, label: "LP / BD" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setType(opt.value)}
                            className={`py-2.5 px-3 text-sm font-medium rounded-lg border transition-colors ${
                              type === opt.value
                                ? "border-teal bg-teal/5 text-teal"
                                : "border-slate-200 text-slate-500 hover:border-slate-300"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors mt-2"
                    >
                      Get Early Access
                    </button>
                  </form>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
