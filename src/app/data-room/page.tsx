"use client";

import { useState } from "react";
import Image from "next/image";

const ACCESS_CODE = "OWNR2026";

const documents = [
  {
    title: "Investor Deck",
    description: "2026 pitch deck for institutional and strategic investors. Full overview of the MBSX opportunity.",
    type: "PPTX",
    category: "Overview",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Whitepaper",
    description: "Technical deep-dive into OWNR's dual-token architecture, market impact, and expansion roadmap.",
    type: "PDF",
    category: "Technical",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Financial Model",
    description: "Revenue projections, trading fees, data monetization, unit economics, and cost modeling.",
    type: "XLSX",
    category: "Financial",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Tech Proposal",
    description: "System architecture: tokenization engine, AMM, primary exchange, oracle integration, wallets, and compliance.",
    type: "PDF",
    category: "Technical",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    available: true,
  },
  {
    title: "MVP Demo Video",
    description: "Full lifecycle walkthrough: UMBS deposits → token minting → 24/7 swaps → redemption.",
    type: "VIDEO",
    category: "Demo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Primary Exchange Demo",
    description: "Video walkthrough of the institutional Primary Exchange interface and order-book matching.",
    type: "VIDEO",
    category: "Demo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Retail Exchange Demo",
    description: "Video walkthrough of the retail exchange — AMM pools, region selection, and yield dashboard.",
    type: "VIDEO",
    category: "Demo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    title: "Legal Proposal",
    description: "Regulatory pathway, licensing strategy, compliance policies, and custodial framework.",
    type: "PDF",
    category: "Legal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    available: false,
  },
  {
    title: "Fund Request",
    description: "Capital allocation strategy, use of funds, and investment terms.",
    type: "PDF",
    category: "Financial",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    available: false,
  },
];

const categories = ["All", "Overview", "Technical", "Financial", "Demo", "Legal"];

export default function DataRoomPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === ACCESS_CODE) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const filtered = filter === "All" ? documents : documents.filter((d) => d.category === filter);

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-slate-50">
        <div className="max-w-md w-full mx-4 text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-navy/5 flex items-center justify-center">
              <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-navy mb-2">Data Room</h1>
            <p className="text-slate-500 text-sm mb-8">
              Enter your access code to view confidential documents, demos, and resources.
            </p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="text"
                placeholder="Access Code"
                value={code}
                onChange={(e) => { setCode(e.target.value); setError(false); }}
                className={`w-full px-4 py-3 border rounded-lg text-center tracking-widest uppercase placeholder:tracking-normal placeholder:normal-case focus:outline-none transition-colors ${
                  error ? "border-red bg-red/5" : "border-slate-200 focus:border-teal"
                }`}
              />
              {error && <p className="text-red text-sm">Invalid access code. Please try again.</p>}
              <button type="submit" className="w-full py-3 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-colors">
                Enter Data Room
              </button>
            </form>
            <p className="text-slate-400 text-xs mt-6">
              Don&apos;t have an access code?{" "}
              <a href="mailto:info@ownr.com" className="text-teal hover:underline">Request access</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/deck-assets/image2.png" alt="OWNR" width={100} height={26} className="h-6 w-auto" />
            <span className="text-slate-400 text-sm">x S&P Global</span>
          </div>
          <p className="inline-block px-3 py-1 mb-4 border border-red/20 rounded-full bg-red/5 text-red text-xs font-semibold uppercase tracking-wider">
            Confidential
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-4">Data Room</h1>
          <p className="text-slate-500 max-w-lg mx-auto">
            Access OWNR&apos;s confidential investor documents, technical proposals, demo videos, and financial models.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                filter === cat
                  ? "border-teal bg-teal/5 text-teal"
                  : "border-slate-200 text-slate-500 hover:border-slate-300 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => (
            <div
              key={doc.title}
              className={`card-hover bg-white rounded-xl border border-slate-200 overflow-hidden ${
                !doc.available ? "opacity-50" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    {doc.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{doc.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{doc.description}</p>
                {doc.available ? (
                  <button className="text-sm text-teal hover:text-teal-dark font-semibold transition-colors flex items-center gap-1.5">
                    {doc.type === "VIDEO" ? (
                      <>
                        Watch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </>
                    ) : doc.type === "LINK" ? (
                      <>
                        Open
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Download
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-sm text-slate-400">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded-lg border border-slate-200 bg-white">
          <p className="text-xs text-slate-400 text-center">
            *Confidential materials shared at OWNR&apos;s discretion. All documents are subject to NDA.
            Contact <a href="mailto:info@ownr.com" className="text-teal hover:underline">info@ownr.com</a> for questions.
          </p>
        </div>
      </div>
    </div>
  );
}
