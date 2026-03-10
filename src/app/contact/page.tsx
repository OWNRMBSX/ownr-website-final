"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("");

  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-16 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1]">
            Get in touch
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            We welcome inquiries from institutions, partners, and investors interested in learning more about our platform.
          </p>
        </div>
      </section>

      {/* SECTION 2: Contact Form */}
      <section className="section-padding bg-white">
        <div className="max-w-xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Contact the OWNR team
            </h2>
            <p className="text-slate-500">
              Submit the form below and our team will follow up shortly.
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="org" className="block text-sm font-medium text-navy mb-1.5">
                  Organization <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="org"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                  placeholder="Company or fund name"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-navy mb-1.5">
                  Inquiry Type
                </label>
                <div className="relative">
                  <select
                    id="inquiry"
                    required
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors appearance-none ${!inquiryType ? "text-slate-300" : ""}`}
                  >
                    <option value="" disabled>Select inquiry type</option>
                    <option value="institutional">Institutional Investor</option>
                    <option value="partner">Strategic Partner</option>
                    <option value="individual">Individual Investor</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                  placeholder="Tell us about your interest in OWNR."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg transition-all cta-glow text-base"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-16 px-8 rounded-xl border border-teal/20 bg-teal/[0.03]">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">Message Sent</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                Thank you for contacting OWNR. Our team will review your message and follow up soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: Who This Is For */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12 text-center">
            Who typically reaches out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <Image src="/deck-assets/image48.png" alt="" width={40} height={40} className="w-10 h-10" />
                ),
                title: "Institutional Investors",
                desc: "Asset managers, banks, funds, and other institutions exploring tokenized financial infrastructure or mortgage market exposure.",
              },
              {
                icon: (
                  <Image src="/deck-assets/image25.png" alt="" width={40} height={40} className="w-10 h-10" />
                ),
                title: "Strategic Partners",
                desc: "Financial institutions, technology providers, and infrastructure partners interested in collaborating with OWNR.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Individual Investors",
                desc: "Investors interested in learning more about future access to tokenized mortgage investment products.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl bg-white border border-slate-200 animate-on-scroll">
                <div className="w-14 h-14 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Additional Inquiries */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-px bg-slate-200 mx-auto mb-8" />
          <h3 className="text-lg font-bold text-navy mb-3">Additional inquiries</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            For media, research collaboration, or general inquiries, please reach out using the form above.
            Our team reviews all messages and will respond to relevant inquiries.
          </p>
        </div>
      </section>

      {/* SECTION 5: Closing Statement */}
      <section className="relative section-padding bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            The Future of Finance
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We look forward to connecting with institutions and investors interested in the evolution of capital markets infrastructure.
          </p>
        </div>
      </section>
    </>
  );
}
