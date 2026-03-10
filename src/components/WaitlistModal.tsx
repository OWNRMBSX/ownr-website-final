"use client";

import { useState, useRef, useEffect } from "react";

const investorTypes = [
  { value: "institutional", label: "Institutional Investor" },
  { value: "partner", label: "Potential Partner" },
  { value: "retail", label: "Retail Investor" },
];

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleClose();
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setType("");
      setEmail("");
      setSubmitted(false);
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Waitlist Signup",
          email,
          inquiryType: type,
          message: `Waitlist signup — ${investorTypes.find((t) => t.value === type)?.label}`,
        }),
      });
      setSubmitted(true);
    } catch {
      // still show success to not block UX
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="ml-2 px-5 py-2 bg-teal hover:bg-teal-dark text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Join Waitlist
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            ref={ref}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-navy transition-colors z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy mb-1">Join the Waitlist</h3>
                <p className="text-sm text-slate-400 mb-6">
                  {step === 1
                    ? "How would you describe yourself?"
                    : "Enter your email to get early access."}
                </p>

                {step === 1 ? (
                  <div className="space-y-3">
                    {investorTypes.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => {
                          setType(t.value);
                          setStep(2);
                        }}
                        className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-teal hover:bg-teal/[0.03] transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-navy group-hover:text-teal transition-colors">
                            {t.label}
                          </span>
                          <svg className="w-4 h-4 text-slate-300 group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-slate-400 hover:text-navy transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="px-3 py-1 rounded-full bg-teal/[0.06] border border-teal/15 text-xs font-medium text-teal">
                        {investorTypes.find((t) => t.value === type)?.label}
                      </span>
                    </div>

                    <input
                      type="email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-all cta-glow disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Get Early Access"}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="p-8 text-center py-12">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">You&apos;re on the list</h3>
                <p className="text-slate-400 text-sm mb-6">
                  We&apos;ll reach out with early access details.
                </p>
                <button
                  onClick={handleClose}
                  className="text-teal font-semibold text-sm hover:underline"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
